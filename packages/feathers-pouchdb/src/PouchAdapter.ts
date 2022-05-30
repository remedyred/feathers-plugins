import {AdapterBase, filterQuery, PaginationOptions} from '@feathersjs/adapter-commons'
import {GeneralError, NotFound} from '@feathersjs/errors'
import {Application, Id, NullableId, Paginated, Params, Query} from '@feathersjs/feathers'
import {filterParams} from '@snickbit/feathers-helpers'
import {Out} from '@snickbit/out'
import {merge} from '@snickbit/utilities'
import {ExistingDocument, PostDocument, PouchServiceOptions, PutDocument} from './definitions'
import comdb from 'comdb'
import crypto_pouch from 'crypto-pouch'
import PouchDB from 'pouchdb'
import pouchdb_find from 'pouchdb-find'
import pouchdb_adapter_memory from 'pouchdb-adapter-memory'

PouchDB.plugin(pouchdb_find)
PouchDB.plugin(comdb)
PouchDB.plugin(crypto_pouch)
PouchDB.plugin(pouchdb_adapter_memory)

const possibleOptionKeys = [
	'pouch',
	'pouchdb',
	'couch',
	'couchdb'
]

function checkAppForOptions(app: Application) {
	for (const key of possibleOptionKeys) {
		if (app.get(key)) {
			return app.get(key)
		}
	}
	return {}
}

export interface PouchAdapter extends AdapterBase, EventEmitter {}

export class PouchAdapter<T = any, P extends Params = Params, O extends PouchServiceOptions = PouchServiceOptions> extends AdapterBase {
	declare options: O

	protected client: PouchDB.Database<Document>

	protected remote?: PouchDB.Database<Document>

	protected out: Out

	constructor(options: O) {
		options = {
			id: '_id',
			events: [],
			paginate: {},
			multi: false,
			filters: [],
			whitelist: [],
			...options
		} as O

		super(options)
	}

	private encryptionProperty(app: Application): string | undefined {
		if (this.options.encryptionProperty) {
			return this.options.encryptionProperty
		}
		return app.get('authentication')?.local?.passwordField
	}

	protected isMulti(id: Id, params?: Params): Query | false {
		const {query} = filterQuery(params || {})
		return !id && query && Object.keys(query).length ? query : false
	}

	getQuery(params: P) {
		const {
			$skip,
			$sort,
			$limit,
			$select,
			...query
		} = params.query || {}

		return {
			query,
			filters: {
				$skip,
				$sort,
				$limit,
				$select
			}
		}
	}

	protected filterDocs(docs: any) {
		return docs.filter(doc => !doc._id.startsWith('_'))
	}

	async setup(app: Application, servicePath: string) {
		this.out = new Out(`pouchdb:${servicePath}`)

		this.options = {...checkAppForOptions(app), ...this.options}

		const connection = this.options.connection || {}
		connection.adapter = this.options.encrypt && !this.options.encryptionKey ? 'memory' : connection?.adapter
		connection.prefix = this.options.prefix || ''

		this.client = new PouchDB(servicePath, connection)

		this.client.changes({
			since: 'now',
			live: true,
			include_docs: true
		})
			.on('change', change => {
				this.emit('changes.change', change)
			})
			.on('complete', info => {
				this.emit('changes.complete', info)
			})
			.on('error', error => {
				this.emit('changes.error', error)
			})

		this.client.createIndex({index: {fields: [this.options.id]}})

		this.out.debug('Created PouchDB instance')

		if (this.options.replicate) {
			const replication = {...connection, ...this.options.replicate}
			this.out.debug('Starting replication', {replication})
			this.remote = new PouchDB(servicePath, replication)

			let encryptionKey: string | false
			this.encryptionReady(app)
				.then(async () => {
					if (this.options.encrypt && encryptionKey) {
						this.out.debug('Encrypting data')
						if (this.options.encrypt === true || this.options.encrypt === 'remote') {
							await this.client.setPassword(encryptionKey)

							// We only need to load the encrypted data if we are using e2e encryption
							if (this.options.encrypt === true) {
								await this.client.loadEncrypted()
							}
						}

						if (this.options.encrypt === 'local') {
							await this.client.crypto(encryptionKey)
						}
					}
				})
				.catch(err => {
					this.out.error('Failed to initialize encryption', err)
					throw new GeneralError(err.message)
				})
				.finally(() => {
					this.client.sync(this.remote, {
						live: true,
						retry: true
					})
						.on('change', info => {
							this.emit('sync.change', info)
						})
						.on('paused', error => {
							this.emit('sync.paused', error)
						})
						.on('active', () => {
							this.emit('sync.active')
						})
						.on('denied', error => {
							this.emit('sync.denied', error)
						})
						.on('complete', info => {
							this.emit('sync.complete', info)
						})
						.on('error', error => {
							this.emit('sync.error', error)
						})
				})
		}
	}

	private async encryptionReady(app: Application): Promise<string | false> {
		if (!this.options.encrypt) {
			return false
		} else if (this.options.encryptionKey) {
			return this.options.encryptionKey
		}

		return new Promise((resolve, reject) => {
			if (this.options.decryptOn === 'decrypt') {
				app.on('decrypt', encryptionKey => {
					this.out.info(`decrypt event called, attempting to decrypt`)
					if (encryptionKey) {
						resolve(encryptionKey)
					} else {
						reject(`Encryption key is invalid`)
					}
				})
			} else {
				app.on('login', (user: any) => {
					const encryptionKey = user[this.encryptionProperty(app) || 'password']
					if (encryptionKey) {
						resolve(encryptionKey)
					} else {
						reject('No encryption key found, Unable to decrypt data.')
					}
				})
			}
		})
	}

	async $find(params?: P & {paginate?: PaginationOptions}): Promise<Paginated<T>>
	async $find(params?: P & {paginate: false}): Promise<T[]>
	async $find(params: P = {} as P): Promise<Paginated<T> | T[]> {
		await this.$ready()
		const {filters, query, paginate} = filterParams(params)

		let options: PouchDB.Find.FindRequest<any> = {selector: query}

		if (paginate) {
			options.limit = filters?.$limit || paginate.default
			if (options.limit > paginate.max) {
				options.limit = paginate.max
			}
		}

		if (filters.$skip) {
			options.skip = filters.$skip
		}

		const results: Paginated<T> = {
			total: 0,
			limit: filters.$limit,
			skip: filters.$skip || 0,
			data: []
		}

		try {
			const res = await this.client.find(options)
			results.data = this.filterDocs(res.docs)
		} catch (e) {
			throw new GeneralError('Failed to find documents', e)
		}

		if (!paginate) {
			return results.data
		}

		return results
	}

	async $ready() {
		if (!this.client) {
			throw new GeneralError('PouchDB client is not initialized! If you are overriding the setup() method, make sure to call super.setup()')
		}
	}

	async $get(id: Id, params: P = {} as P): Promise<ExistingDocument<T>> {
		await this.$ready()
		const {query} = this.getQuery(params)
		const doc = await this.client.get(String(id))
		if (doc) {
			return doc as unknown as ExistingDocument<T>
		}
		this.out.error('Document does not match query', query)
		throw new NotFound(`No record found for id '${id}'`)
	}

	async $create(data: PostDocument<Document>, params?: P): Promise<ExistingDocument<T>>
	async $create(data: PostDocument<Document>[], params?: P): Promise<ExistingDocument<T>[]>
	async $create(data: PostDocument<Document> | PostDocument<Document>[], _params?: P): Promise<ExistingDocument<T> | ExistingDocument<T>[]>
	async $create(data: PostDocument<Document> | PostDocument<Document>[], params: P = {} as P): Promise<ExistingDocument<T> | ExistingDocument<T>[]> {
		await this.$ready()
		if (Array.isArray(data) && this.allowsMulti('create')) {
			return Promise.all(data.map(current => this.$create(current, params)))
		}

		try {
			const result = await this.client.post(data as PostDocument<Document>)
			return this.$get(result.id, params)
		} catch (e) {
			throw new GeneralError('Failed to create document', e)
		}
	}

	async $update(id: Id, data: PutDocument<Document>, params: P = {} as P): Promise<ExistingDocument<T>> {
		await this.$ready()
		if (!id) {
			throw new NotFound('No id provided')
		}
		const current = await this.$get(id) as ExistingDocument<T>
		data._rev = current._rev
		await this.client.put(data)
		return this.$get(data._id, params)
	}

	async $patch(id: null, data: PostDocument<Document>, params?: P): Promise<ExistingDocument<T>[]>
	async $patch(id: Id, data: PostDocument<Document>, params?: P): Promise<ExistingDocument<T>>
	async $patch(id: NullableId, data: PostDocument<Document>, _params?: P): Promise<ExistingDocument<T>[] | T>
	async $patch(id: NullableId, data: PostDocument<Document>, params: P = {} as P): Promise<ExistingDocument<T>[] | T> {
		await this.$ready()
		if (this.isMulti(id, params)) {
			return this.$multi('$patch', params)
		}
		const old_data = this.$get(id, params)
		const new_data = merge(old_data, data) as PutDocument<Document>
		return this.$update(id, new_data, params)
	}

	async $remove(id: null, params?: P): Promise<ExistingDocument<T>[]>
	async $remove(id: Id, params?: P): Promise<T>
	async $remove(id: NullableId, _params?: P): Promise<ExistingDocument<T>[] | T>
	async $remove(id: NullableId, params: P = {} as P): Promise<ExistingDocument<T>[] | T> {
		await this.$ready()
		if (!id && this.allowsMulti('remove')) {
			return this.$multi('$remove', params)
		}

		const doc = await this.$get(id, params)
		await this.client.remove(doc)
		return doc
	}

	async $multi(method: string, params?: P): Promise<ExistingDocument<T>[]> {
		const items = await this.$find({
			...params,
			paginate: false
		}) as unknown as ExistingDocument<T>[]
		return Promise.all(items.map(item => this[method](item[this.id])))
	}
}

export default PouchAdapter
