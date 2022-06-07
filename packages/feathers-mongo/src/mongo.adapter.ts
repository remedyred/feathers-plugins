import {filterQuery, FILTERS} from '@feathersjs/adapter-commons'
import {BadRequest, MethodNotAllowed, NotFound, Unavailable, Unprocessable} from '@feathersjs/errors'
import {Application, NullableId, Query} from '@feathersjs/feathers'
import {MongoDBAdapterOptions, MongoDBService} from '@feathersjs/mongodb'
import {Model} from '@snickbit/feathers-model'
import {Out} from '@snickbit/out'
import {isArray, isObject, objectHasMethod, objectOnly} from '@snickbit/utilities'
import {AggregateOptions, Collection, Db, IndexSpecification, ObjectId} from 'mongodb'
import {transformSearchFieldsInQuery} from './fuzzy'
import client from './client'

export interface IndexDefinition {
	keys: IndexSpecification
	options?: any
}

export interface MongoServiceOptions extends MongoDBAdapterOptions {
	collection: string
	asModel?: Model | boolean
	search?: SearchOptions
	indexes?: IndexDefinition[]
	cache?: boolean
	disableObjectify?: boolean
	softDelete?: boolean
	timestamps?: TimestampsOptions | boolean
}

export type ServiceOptions = Partial<MongoServiceOptions>

export interface AdapterParams extends Params {
	timestamps?: TimestampsOptions | boolean
	cache?: boolean
}

export interface TimestampsOptions {
	created?: boolean | string
	updated?: boolean | string
	deleted?: boolean | string
}

export type SearchOptions = {
	escape?: boolean
	fieldsNotEscaped?: string[]
	fields?: string[]
	excludedFields?: string[]
}

export default class MongoAdapter extends MongoDBService {
	declare options: MongoServiceOptions

	client: any

	asModel: any

	Cache: any

	out: Out

	constructor(options: ServiceOptions, app: Application) {
		if (!options.collection) {
			throw new Error('MongoService: options.collection is required')
		}

		const configOptions = app.get('mongodb')?.options || {}
		options = {
			id: '_id',
			disableObjectify: true,
			multi: true,
			cache: false,
			softDelete: false,
			timestamps: false,
			allow: [
				'$text',
				'$search',
				'$aggregate',
				'$group',
				'$match',
				'$project',
				'$cache',
				'$exists',
				'$withDeleted',
				'$onlyDeleted',
				'$language',
				'$caseSensitive',
				'$diacriticSensitive',
				'$regex'
			],
			filters: {...FILTERS},
			indexes: [],
			search: {
				escape: true,
				fieldsNotEscaped: [],
				fields: [],
				excludedFields: []
			},
			...configOptions,
			...options
		}

		const mongodbOptions = objectOnly(options, [
			'events',
			'multi',
			'id',
			'paginate',
			'allow',
			'filters',
			'Model',
			'disableObjectify'
		])
		super(mongodbOptions as MongoDBAdapterOptions)

		this.options = options as MongoServiceOptions

		this.out = new Out('mongo')

		if (isArray(this.options.search.fields)) {
			this.options.search.excludedFields = []
		} else if (isArray(this.options.search.excludedFields)) {
			this.options.search.fields = []
		}

		this.client = client(app)
		this.asModel = this.options.asModel === true ? Model : this.options.asModel

		this.client.then((db: Db) => {
			this.options.Model = db.collection(options.collection) as Collection
			if (this.options.cache) {
				this.Cache = db.collection(`query_cache`)
			}

			if (this.options.indexes && this.options.indexes.length) {
				for (const index of this.options.indexes) {
					this.Model.createIndex(index.keys, index.options)
				}
			}
		}).catch((err: Error) => {
			this.out.error(err)
		})
	}

	get Model(): Collection {
		return this.options.Model as Collection
	}

	get timestamps(): TimestampsOptions {
		return this.parseTimestamp(this.options.timestamps)
	}

	private parseTimestamp(timestampOptions: TimestampsOptions | boolean): TimestampsOptions {
		if (timestampOptions === true) {
			const timestamps: TimestampsOptions = {
				created: '_created',
				updated: '_updated',
				deleted: null
			}

			if (this.options.softDelete) {
				timestamps.deleted = '_deleted'
			}

			return timestamps
		} else if (timestampOptions) {
			return this.options.timestamps as TimestampsOptions
		}
		return {
			created: null,
			updated: null,
			deleted: null
		}
	}

	prepareData(data: any, params: AdapterParams = {}): any {
		data = objectHasMethod(data, 'toJSON') ? data.toJSON() : data

		if (data && !data._id && data.id) {
			data._id = data.id
		}

		if (params.timestamps !== false && this.timestamps) {
			const timestamps = this.parseTimestamp(params.timestamps || true)

			if (this.timestamps.created && timestamps.created) {
				data[this.timestamps.created as string] = data[this.timestamps.created as string] || new Date()
			}
			if (this.timestamps.updated && timestamps.updated) {
				data[this.timestamps.updated as string] = new Date()
			}
		}
		return data
	}

	parseParams(params: AdapterParams = {}) {
		params.query = params.query || {}

		// don't cache global searches
		if (params.query.$search) {
			params.cache = false
		}
		params.query = transformSearchFieldsInQuery(params.query, this.options.search)
		// double check that $search isn't left in the query
		if (params.query && '$search' in params.query) {
			delete params.query.$search
		}

		if (this.options.softDelete) {
			let withDeleted
			if (params.query?.$withDeleted) {
				withDeleted = params.query.$withDeleted
				delete params.query.$withDeleted
			}

			let onlyDeleted
			if (params.query?.$onlyDeleted) {
				onlyDeleted = params.query.$onlyDeleted
				delete params.query.$onlyDeleted
			}

			if (this.timestamps) {
				if (onlyDeleted) {
					params.query[this.timestamps.deleted as string] = {$exists: true}
				} else if (!withDeleted) {
					params.query[this.timestamps.deleted as string] = {$exists: false}
				}
			}
		}
		return params
	}

	async sanitizeQuery(params: AdapterParams = {} as AdapterParams): Promise<Query> {
		const options = this.getOptions(params)
		const {query, filters} = filterQuery(params.query, options)

		return {
			...filters,
			...query
		}
	}

	async connected(): Promise<void> {
		const connected = this.Model || await this.client
		if (!connected) {
			throw new Unavailable('MongoService: failed to connect to MongoDB failed')
		}
	}

	async getCached(params: AdapterParams, skipParamParse = false): Promise<any> {
		const parsed = skipParamParse ? params : this.parseParams(params)
		if (this.options.cache && parsed.cache !== false) {
			try {
				const cache = await this.Cache.findOne({query: parsed, _created: {$gt: new Date(Date.now() - 1000 * 60 * 60)}})
				if (cache) {
					return cache.result
				}
				this.clearCached(params, skipParamParse).catch(err => this.out.error(err))
			} catch (e) {
				this.out.warn('MongoService: failed to get cache for query', parsed)
			}
		}
		return false
	}

	async clearCached(params: AdapterParams, skipParamParse = false): Promise<any> {
		const parsed = skipParamParse ? params : this.parseParams(params)
		return this.Cache.deleteMany({query: parsed})
	}

	async setCached(params: AdapterParams, results, skipParamParse = false): Promise<any> {
		const parsed = skipParamParse ? params : this.parseParams(params)
		if (this.options.cache) {
			await this.Cache.insertOne({query: parsed, result: results, _created: new Date()})
		}
	}

	async destroy(id: NullableId, params: AdapterParams = {}): Promise<any> {
		if (id === null && !this.allowsMulti('destroy')) {
			return Promise.reject(new MethodNotAllowed(`Can not destroy multiple entries`))
		}
		return this.$destroy(id, params)
	}

	async restore(id: NullableId, params: AdapterParams = {}): Promise<any> {
		if (id === null && !this.allowsMulti('restore')) {
			return Promise.reject(new MethodNotAllowed(`Can not restore multiple entries`))
		}
		return this.$restore(id, params)
	}

	async getOrCreate(id: NullableId, data, params: AdapterParams = {}): Promise<any> {
		if (id === null && !this.allowsMulti('patch')) {
			return Promise.reject(new MethodNotAllowed(`Can not getOrCreate multiple entries`))
		}
		return this.$getOrCreate(id, data, params)
	}

	async touch(id: NullableId, params: AdapterParams = {}): Promise<any> {
		if (id === null && !this.allowsMulti('touch')) {
			return Promise.reject(new MethodNotAllowed(`Can not touch multiple entries`))
		}
		return this.$touch(id, params)
	}

	async $find(params: AdapterParams = {}): Promise<any> {
		await this.connected()
		const parsed = this.parseParams(params)

		if (parsed.cache !== false) {
			const cache = await this.getCached(params, true)
			if (cache) {
				return cache.result
			}
		}

		this.out.silly('MongoService: _find', parsed)
		const results = await super.$find(parsed)
		if (params.cache !== false) {
			await this.setCached(params, results, true)
		}
		if (this.asModel) {
			if (Array.isArray(results)) {
				return results.map(result => new this.asModel(result, {service: this}))
			} else if (isObject(results) && isArray(results?.data)) {
				results.data = results.data.map(result => new this.asModel(result, {service: this}))
			}
		}
		return results
	}

	async $create(data, params: AdapterParams = {}) {
		if (!data) {
			throw new Unprocessable('No data provided')
		}
		data = await this.prepareData(data, params)
		params = this.parseParams(params)
		return this.__save('$create', data, params)
	}

	async $update(id: NullableId, data, params: AdapterParams = {}) {
		data = await this.prepareData(data, params)
		params = this.parseParams(params)
		return this.__save('$update', id, data, params)
	}

	async $patch(id: NullableId, data, params: AdapterParams = {}) {
		data = await this.prepareData(data, params)
		params = this.parseParams(params)
		return this.__save('$patch', id, data, params)
	}

	async $remove(id: NullableId, params: AdapterParams = {}) {
		await this.connected()
		params = this.parseParams(params)
		if (this.options.softDelete && !params.query?.force && this.timestamps) {
			return await this.$patch(id, {[this.timestamps.deleted as string]: new Date()}, params)
		}
		if (params.query?.force) {
			delete params.query.force
		}
		return await super.$remove(id, params)
	}

	async $upsert(data, params: AdapterParams = {}): Promise<any> {
		if (isArray(data)) {
			if (!this.allowsMulti('patch')) {
				return Promise.reject(new MethodNotAllowed(`Can not patch multiple entries`))
			}
			return Promise.all(data.map(async item => await this.$upsert(item, params)))
		}
		data = await this.prepareData(data, params)
		params = this.parseParams(params)
		const payload = objectHasMethod(data, 'toJSON') ? data.toJSON() : data
		return this.$get(data[this.id], params).then(result => {
			if (result) {
				return this.$update(result[this.id], payload, params)
			}
			return this.$create(payload, params)
		})
		           .catch(err => {
			           if (err instanceof NotFound || err?.name === 'NotFound') {
				           return this.$create(payload, params)
			           }
			           this.out.verbose('MongoService: _upsert error is not an instance of NotFound', err)
			           throw err
		           })
	}

	async $destroy(id: NullableId, params: AdapterParams = {}): Promise<any> {
		params.query = {...params.query || {}, force: true, $withDeleted: true}
		return this.$remove(id, params)
	}

	async $restore(id: NullableId, params: AdapterParams = {}): Promise<any> {
		params.query = {...params.query || {}, $withDeleted: true}
		if (this.timestamps) {
			const data = {$unset: {[this.timestamps.deleted as string]: 1}}
			return this.$patch(id, data, params)
		}
		throw new Unprocessable(`Can not restore without timestamps`)
	}

	async $aggregate(pipeline: any[], params: AggregateOptions = {}): Promise<any> {
		await this.connected()
		const cursor = await this.Model.aggregate(pipeline, params)
		let records = []
		for await (const doc of cursor) {
			if (this.asModel) {
				records.push(new this.asModel(doc, {service: this}))
			} else {
				records.push(doc)
			}
		}
		return records
	}

	async $touch(id: NullableId, params: AdapterParams = {}): Promise<any> {
		return this.$patch(id, params)
	}

	async $get(id: NullableId, params: AdapterParams = {}) {
		await this.connected()
		const parsed = this.parseParams(params)
		let result
		if (id === null || isObject(id)) {
			let items = await this.$find((id || params) as AdapterParams)
			if (isArray(items)) {
				result = items.shift()
			} else if (isObject(items) && isArray(items?.data)) {
				result = items.data.shift()
			}
		} else {
			result = await super.$get(id, parsed)
		}
		if (this.asModel) {
			result = new this.asModel(result, {service: this})
		}
		return result
	}

	async $getOrCreate(id: NullableId, data: any, params: AdapterParams = {}): Promise<any> {
		try {
			return await this.$get(id)
		} catch (e) {
			if (e.code === 404) {
				return await this.$create(data, params)
			}
			this.out.error({error: e.message, code: e.code})
			throw e
		}
	}

	async _destroy(id: NullableId, params?: AdapterParams): Promise<any> {
		if (id === null) {
			throw new BadRequest('You can not destroy multiple instances.')
		}

		const query = await this.sanitizeQuery(params)

		return this.$destroy(id, {
			...params,
			query
		})
	}

	async _restore(id: NullableId, params?: AdapterParams): Promise<any> {
		if (id === null) {
			throw new BadRequest('You can not restore multiple instances.')
		}

		const query = await this.sanitizeQuery(params)

		return this.$restore(id, {
			...params,
			query
		})
	}

	async _aggregate(pipeline: any[], params: AggregateOptions = {}): Promise<any> {
		return this.$aggregate(pipeline, params)
	}

	async _touch(id: NullableId, params?: AdapterParams): Promise<any> {
		return this._patch(id, params)
	}

	async _getOrCreate(id: NullableId, data: any, params?: AdapterParams): Promise<any> {
		if (id === null || Array.isArray(data)) {
			throw new BadRequest('You can not replace multiple instances. Did you mean \'patch\'?')
		}

		const payload = await this.sanitizeData(data, params)
		const query = await this.sanitizeQuery(params)

		return this.$getOrCreate(id, payload, {
			...params,
			query
		})
	}

	async __save(method: any, ...args: any[]): Promise<any> {
		await this.connected()
		if (!this.asModel) {
			return super[method](...args)
		}

		let model
		for (let [i, arg] of args.entries()) {
			if (objectHasMethod(arg, 'toJSON') && !(arg instanceof ObjectId)) {
				model = arg
				args[i] = arg.toJSON()
				break
			}
		}

		const results = await super[method](...args)
		if (model) {
			model.set(results)
		} else {
			model = new this.asModel(results, {service: this})
		}
		return model
	}
}
