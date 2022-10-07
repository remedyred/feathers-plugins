import {AdapterBase, AdapterServiceOptions, filterQuery, sorter} from '@feathersjs/adapter-commons'
import {AdapterParams, PaginationOptions} from '@feathersjs/adapter-commons/src/declarations'
import {Conflict, Unprocessable} from '@feathersjs/errors'
import {Application, Paginated, Params, Query} from '@feathersjs/feathers'
import {filterResults} from '@snickbit/feathers-helpers'
import {isObject, isPrimitive, merge, parse, uuid} from '@snickbit/utilities'
import Redis, {RedisKey, RedisOptions} from 'ioredis'
import sift from 'sift'

export interface RedisServiceOptions<T = any> extends AdapterServiceOptions {
	connection: RedisOptions
	matcher?(query: T): T
	sorter?(sort: T): T
}

export type RedisId = string
export type NullableRedisId = RedisId | null

export default class RedisAdapter<T = any, D = Partial<T>, O extends RedisServiceOptions = RedisServiceOptions> extends AdapterBase {
	declare options: O

	client: Redis

	constructor(options: O, app: Application) {
		options = {
			id: 'id',
			events: [],
			paginate: {},
			multi: false,
			filters: [],
			operators: [],
			matcher: sift,
			sorter, ...options
		}

		super(options)

		const connection = this.options.connection || app && app.get('redis') || {}
		if (connection.keyPrefix && !connection.keyPrefix.endsWith('_')) {
			connection.keyPrefix += '_'
		}
		this.client = new Redis(connection)
	}

	get keyPrefix(): string {
		return this.options?.connection?.keyPrefix || ''
	}

	protected parseId(id: RedisId): string {
		if (id && this.keyPrefix) {
			return String(id).replace(new RegExp(`^${this.keyPrefix}`), '')
		}
		return id
	}

	protected isMulti(id: RedisId, params?: Params): Query | false {
		const {query} = filterQuery(params)
		return !id && query && Object.keys(query).length ? query : false
	}

	protected prepareResults(id: RedisId, value: T | string) {
		const data = {
			key: id,
			value: parse(value)
		}
		return parse(data)
	}

	async $find(params?: AdapterParams & {paginate?: PaginationOptions}): Promise<Paginated<T>>
	async $find(params?: AdapterParams & {paginate: false}): Promise<T[]>
	async $find(params: AdapterParams = {} as AdapterParams): Promise<Paginated<T> | T[]> {
		return new Promise(resolve => {
			const stream = this.client.scanStream()
			const results = []
			const get_promises = []
			stream.on('data', resultKeys => {
				if (this.keyPrefix) {
					resultKeys = resultKeys.filter(key => key.startsWith(this.keyPrefix))
				}
				for (const key of resultKeys) {
					if (!results.includes(key)) {
						get_promises.push(this.$get(key))
						results.push(key)
					}
				}
			})
			stream.on('end', () => Promise.all(get_promises).then(data => resolve(filterResults(data, params, this.options))))
		})
	}

	async $get(id: RedisId, params?: AdapterParams): Promise<T> {
		const {query} = filterQuery(params)
		id = this.parseId(id)
		if (query && Object.keys(query).length) {
			if (id) {
				params.query[this.id] = id
			}
			params.query.$limit = 1
			return this.$find({
				query: {[this.id]: id},
				paginate: false
			}).then(data => this.prepareResults(id, data.pop()))
		}
		const value = await this.client.get(id as RedisKey)
		return this.prepareResults(id, value)
	}

	async $create(data: D, params?: AdapterParams): Promise<T>
	async $create(data: D[], params?: AdapterParams): Promise<T[]>
	async $create(data: D | D[], _params?: AdapterParams): Promise<T | T[]>
	async $create(data: D | D[], params: AdapterParams = {} as AdapterParams): Promise<T | T[]> {
		let key = isObject(data) && data[this.id] ? data[this.id] : undefined
		if (key && await this.$get(key, params)) {
			throw new Conflict(`Redis value with key ${key} already exists`)
		}
		if (!key) {
			key = uuid()
		}
		await this.$set(key, data, params)
		return this.$get(key, params)
	}

	async $update(id: RedisId, data: D, params: AdapterParams = {} as AdapterParams): Promise<T> {
		id = this.parseId(id)
		await this.$set(id, data, params)
		return this.$get(id, params)
	}

	async $patch(id: null, data: D, params?: AdapterParams): Promise<T[]>
	async $patch(id: RedisId, data: D, params?: AdapterParams): Promise<T>
	async $patch(id: NullableRedisId, data: D, _params?: AdapterParams): Promise<T | T[]>
	async $patch(id: NullableRedisId, data: D, params: AdapterParams = {} as AdapterParams): Promise<T | T[]> {
		if (this.isMulti(id, params)) {
			return this.$multi('$patch', params)
		}
		id = this.parseId(id)
		const old_data = this.$get(id, params)
		const new_data = merge(old_data, data) as D
		await this.$set(id, new_data, params)
		return this.$get(id, params)
	}

	async $remove(id: null, params?: AdapterParams): Promise<T[]>
	async $remove(id: RedisId, params?: AdapterParams): Promise<T>
	async $remove(id: NullableRedisId, _params?: AdapterParams): Promise<T | T[]>
	async $remove(id: NullableRedisId, params: AdapterParams = {} as AdapterParams): Promise<T | T[]> {
		id = this.parseId(id)

		if (this.isMulti(id, params)) {
			return this.$multi('$remove', params)
		}

		const entry = await this.$get(id, params)

		await this.client.del(id)

		return entry
	}

	async $multi(method: string, params?: Params): Promise<T[]> {
		const items = await this.$find({...params, paginate: false}) as unknown as T[]
		return Promise.all(items.map(item => this[method](item[this.id])))
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async $set(key, data: D | D[], _params?: Params): Promise<string> {
		if (!key) {
			throw new Unprocessable('id is required')
		}
		const value = stringifyValue(data)
		return this.client.set(key, value)
	}
}

function stringifyValue(value) {
	try {
		return JSON.stringify(value)
	} catch {
		return isPrimitive(value) ? value : String(value)
	}
}
