import {hash as naclHash} from 'tweetnacl'
import {decodeUTF8, encodeBase64} from 'tweetnacl-util'
import {stringMd5} from 'pouchdb-md5'
import {uuid} from '@snickbit/utilities'
import {DatabaseConfig} from './definitions'
import Crypt from 'garbados-crypt'
import transform from 'transform-pouch'
import PouchDB from 'pouchdb'

const PASSWORD_REQUIRED = 'You must provide a password.'
const PASSWORD_NOT_STRING = 'Password must be a string.'
const EXPORT_STRING_REQUIRED = 'You must provide an export string.'
const EXPORT_STRING_NOT_STRING = 'Your export string must be a string.'
const LOCAL_ID = '_local/encrypt'

async function hash(payload) {
	const bytes = decodeUTF8(payload)
	const hashed = naclHash(bytes)
	return encodeBase64(hashed)
}

export interface PouchCryptOptions {
	encrypt?: boolean
}

export interface PouchCryptDestroyOptions {
	onlyUnencrypted?: boolean
	onlyEncrypted?: boolean
}

export interface PouchCrypt<Content extends object = any> extends PouchDB.Database<Content> {
	_crypt?: Crypt
	_encrypted?: PouchCrypt
}

export class PouchCrypt<Content extends object = any> implements PouchDB.Database<Content> {
	_crypt?: Crypt
	_encrypted?: PouchCrypt

	loadDecrypted(opts: PouchDB.Core.ChangesOptions = {}) {
		const changes = this.changes({
			...opts,
			include_docs: true,
			return_docs: false
		})
		const promises: Promise<any>[] = []
		let docs: any[] = []
		changes.on('change', ({doc}) => {
			docs.push(doc)
			if (docs.length >= 100) {
				promises.push(this._encrypted.bulkDocs(docs))
				docs = []
			}
		})
		if (opts.live) {
			return changes
		}
		const closed = new Promise((resolve, reject) => {
			changes.on('complete', () => {
				if (docs.length) {
					promises.push(this._encrypted.bulkDocs(docs))
				}
				resolve(true)
			})
			changes.on('error', reject)
		})
		return closed.then(() => {
			return Promise.all(promises)
		})
	}

	private setupEncrypted(name: string, opts: DatabaseConfig) {
		const db = new PouchDB(name, opts)

		db.transform({
			// encrypt docs as they go in
			incoming: async (doc: PouchDB.Core.Document<any>) => {
				if (doc.isEncrypted) {
					// feed already-encrypted docs back to the decrypted db
					await this.bulkDocs([doc], {new_edits: false})
					return doc
				}
				if (!this._crypt) {
					return Promise.reject(new Error('Crypt not initialized'))
				}

				// encrypt the doc
				const json = JSON.stringify(doc)
				const payload = await this._crypt.encrypt(json)
				// get a deterministic ID
				const id = await hash(json)
				const encrypted = {_id: id, payload, isEncrypted: true}
				// maybe feed back to decrypted db
				if (doc._rev && doc._deleted) {
					await this.bulkDocs([encrypted as PouchDB.Core.PutDocument<any>])
				}
				return encrypted as unknown as PouchCrypt<Document>
			}
		})

		return db as unknown as PouchCrypt<Content>
	}

	private setupDecrypted() {
		this.transform({
			incoming: async doc => {
				if (doc.isEncrypted) {
					if (!this._crypt) {
						return Promise.reject(new Error('Crypt not initialized'))
					}

					// decrypt encrypted payloads being fed back from the encrypted db
					const json = await this._crypt.decrypt(doc.payload).catch(e => {
						throw e
					})
					const decrypted = JSON.parse(json)
					if (!('_rev' in decrypted)) {
						// construct an artificial rev, predicting what it will be
						decrypted._rev = `1-${stringMd5(JSON.stringify(decrypted))}`
					}
					return decrypted
				}
				if (!doc._id) {
					doc._id = uuid()
				}
				await this._encrypted.bulkDocs([doc]).catch(e => {
					throw e
				})
				return doc
			}
		})
	}

	private parseEncryptedOpts(opts: DatabaseConfig): [string, DatabaseConfig] {
		return [opts.name || `${this.name}-encrypted`, opts.opts || {}]
	}

	private setupEncrypt(opts: DatabaseConfig) {
		const [encryptedName, encryptedOpts] = this.parseEncryptedOpts(opts)
		this._encrypted = this.setupEncrypted(encryptedName, encryptedOpts)
		this.setupDecrypted()
	}

	async destroy(opts: PouchCryptDestroyOptions & PouchDB.Core.Options = {}) {
		if (!this._encrypted || opts.onlyUnencrypted) {
			return !this._destroyed ? this.destroy(opts) : true
		} else if (opts.onlyEncrypted) {
			return !this._encrypted._destroyed ? this._encrypted.destroy(opts) : true
		}

		const promises = []

		if (!this._destroyed) {
			promises.push(this.destroy(opts))
		}

		if (!this._encrypted._destroyed) {
			promises.push(this._encrypted.destroy(opts))
		}
		return Promise.all(promises)
	}

	private async setupCrypt(password) {
		// try saving credentials to a local doc
		try {
			// first we try to get saved creds from the local doc
			const {exportString} = await this._encrypted.get(LOCAL_ID)
			this._crypt = await Crypt.import(password, exportString)
		} catch (err) {
			if (err.status === 404) {
				// but if the doc doesn't exist, we do first-time setup
				this._crypt = new Crypt(password)
				const exportString = await this._crypt.export()
				try {
					await this._encrypted.put({_id: LOCAL_ID, exportString})
				} catch (err2) {
					if (err2.status === 409) {
						// if the doc was created while we were setting up,
						// try setting up again to retrieve the saved credentials.
						await this.setupCrypt(password)
					} else {
						throw err2
					}
				}
			} else {
				throw err
			}
		}
	}

	async exportEncrypt() {
		const {exportString} = await this._encrypted.get(LOCAL_ID)
		return exportString
	}

	// setup function; must call before anything works

	async setPassword(password: string, opts: DatabaseConfig = {}) {
		if (!password) {
			throw new Error(PASSWORD_REQUIRED)
		}
		if (typeof password !== 'string') {
			throw new Error(PASSWORD_NOT_STRING)
		}
		this.setupEncrypt(opts)
		await this.setupCrypt(password)
	}

	async importEncrypt(password: string, exportString: string, opts: DatabaseConfig = {}) {
		if (!password) {
			throw new Error(PASSWORD_REQUIRED)
		}
		if (typeof password !== 'string') {
			throw new Error(PASSWORD_NOT_STRING)
		}
		if (!exportString) {
			throw new Error(EXPORT_STRING_REQUIRED)
		}
		if (typeof exportString !== 'string') {
			throw new Error(EXPORT_STRING_NOT_STRING)
		}
		this.setupEncrypt(opts)
		await this.importCrypt(password, exportString)
	}

	// load from encrypted db, to catch up to offline writes
	async importCrypt(password: string, exportString: string) {
		this._crypt = await Crypt.import(password, exportString)
		try {
			await this._encrypted.put({_id: LOCAL_ID, exportString})
		} catch (err) {
			if (err.status !== 409) {
				throw err
			}
		}
	}

	async loadEncrypted(opts: PouchDB.Core.ChangesOptions = {}) {
		return this._encrypted.replicate.to(this, {...opts, encrypt: false})
	}
}

export default function(PouchDB) {
	// apply plugins
	PouchDB.plugin(transform)

	// apply class method wrappers
	const PouchDB_replicate = PouchDB.replicate
	PouchDB.replicate = function(source: PouchCrypt, target: PouchCrypt, opts: PouchCryptOptions & PouchDB.Replication.ReplicateOptions = {}) {
		if (opts.encrypt !== false) {
			if (source._encrypted) {
				source = source._encrypted
			}
			if (target._encrypted) {
				target = target._encrypted
			}
		}
		return PouchDB_replicate.call(this, source, target, opts)
	}

	// mixin helper
	function applyMixins(derivedCtor: any, baseCtors: any[]) {
		baseCtors.forEach(baseCtor => {
			Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
				if (name !== 'constructor') {
					derivedCtor.prototype[name] = baseCtor.prototype[name]
				}
			})
		})
	}

	// apply class as mixin
	applyMixins(PouchDB, [PouchCrypt])
}
