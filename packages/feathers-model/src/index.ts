import {Conflict, NotFound} from '@feathersjs/errors'
import {callMethod, safeCallMethod} from '@snickbit/feathers-helpers'
import {Model as BaseModel, ModelOptions as BaseModelOptions} from '@snickbit/model'
import {Service} from 'feathers-memory'
import {InternalServiceMethods} from '@feathersjs/adapter-commons'

export interface ModelOptions extends BaseModelOptions {
	service?: Service | any
	disableCommit?: boolean
	soft_delete?: boolean
}

export interface ModelService extends InternalServiceMethods {
	asModel: boolean | Model;
}

export interface Model extends BaseModel {
	_save(): Promise<any[] | any>;

	save(): Promise<any[] | any>;

	_destroy(): Promise<any>;

	destroy(): Promise<any>;

	_fresh(): Promise<Model>;

	fresh(): Promise<any>;
}

export class Model extends BaseModel {
	service: Service | any
	options: ModelOptions = {}

	constructor(data, options) {
		options = {
			soft_delete: false,
			autoId: true,
			...options
		}
		super(data, options)

		this.service = this.options.service || new Service()
	}

	#commitSaved(data) {
		this.is_new = false
		if (!this.service?.asModel) {
			data = this.set('.', data)
		}
		this.resetOut()
		return data
	}

	/**
	 * @return {Promise<*[]|*>}
	 */
	async _save(attempts = 0) {
		const payload = await this.prepareData()
		let data
		if (this.options.disableCommit) {
			data = payload
		} else {
			if (this.is_new) {
				try {
					data = await this.service._create(payload)
				} catch (e) {
					if (e.code === 11000 && !attempts) {
						this.is_new = false
						return this._save(1)
					} else {
						return Promise.reject(e)
					}
				}
			} else {
				try {
					data = await this.service._update(this.id, payload)
				} catch (e) {
					if (e instanceof NotFound || e?.name === 'NotFound' && !attempts) {
						this.is_new = true
						return this._save(1)
					} else {
						return Promise.reject(e)
					}
				}
			}
		}
		return this.#commitSaved(data)
	}

	/**
	 * @return {Promise<*[]|*>}
	 */
	async save() {
		await safeCallMethod(this, 'beforeSave')
		const results = await callMethod(this, '_save')
		await safeCallMethod(this, 'afterSave')
		return results
	}

	/**
	 * @return {Promise<*>}
	 */
	async _destroy() {
		if (!this.id) {
			throw new Conflict('No data to remove')
		}

		if (this.options.soft_delete) {
			this.set('_deleted', new Date())
		} else {
			return !this.options.disableCommit && this.service._remove(this.id)
		}
	}

	/**
	 * @return {Promise<*>}
	 */
	async destroy() {
		return callMethod(this, '_destroy')
	}

	async _fresh() {
		if (!this.id) {
			throw new Conflict('No data to get')
		}
		const data = await this.service._get(this.id)
		return this.set(data)
	}

	async fresh() {
		return callMethod(this, '_fresh')
	}

	toString() {
		return this.data.toString()
	}

	toJSON() {
		return this.get()
	}
}