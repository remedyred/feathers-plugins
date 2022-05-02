import {AdapterService, ServiceOptions, sorter} from '@feathersjs/adapter-commons'
import {Conflict, Unprocessable} from '@feathersjs/errors'
import {filterResults} from '@snickbit/feathers-helpers'
import {isObject, isPrimitive, merge, parse, uuid} from '@snickbit/utilities'
import sift from 'sift'
import Redis, {RedisKey, RedisOptions} from 'ioredis'
import {Application, Paginated, Params} from '@feathersjs/feathers'

export interface RedisServiceOptions extends ServiceOptions {
	connection: RedisOptions
	matcher?: (query: any) => any;
	sorter?: (sort: any) => any;
}

export type RedisId = string
export type NullableRedisId = string | null

export class RedisService extends AdapterService {
	public query: any
	declare options: RedisServiceOptions
	public filterQuery: any
	client: Redis

	constructor(options: RedisOptions, app: Application) {
		super({})
		this.options = Object.assign({
			id: 'id',
			events: [],
			paginate: {},
			multi: false,
			filters: [],
			whitelist: [],
			matcher: sift,
			sorter
		}, options) as RedisServiceOptions

		const connection = this.options.connection || (app && app.get('redis')) || {}
		if (connection.keyPrefix && !connection.keyPrefix.endsWith('_')) connection.keyPrefix += '_'
		this.client = new Redis(connection)
	}

	get keyPrefix() {
		return this.options?.connection?.keyPrefix || ''
	}

	protected parseId(id: RedisId) {
		if (id && this.keyPrefix) return id.replace(new RegExp('^' + this.keyPrefix), '')
		return id
	}

	protected isMulti(id: RedisId, params?: Params) {
		const {query} = this.filterQuery(params)
		return !id && query && Object.keys(query).length ? query : false
	}

	protected prepareResults(id: RedisId, value: any) {
		const data = {
			key: id,
			value: parse(value)
		}
		return parse(data)
	}

	async _find(params: Params): Promise<any | any[] | Paginated<any>> {
		return new Promise(resolve => {
			const stream = this.client.scanStream()
			const results = []
			let get_promises = []
			stream.on('data', (resultKeys) => {
				if (this.keyPrefix) resultKeys = resultKeys.filter(key => key.startsWith(this.keyPrefix))
				for (let key of resultKeys) {
					if (!results.includes(key)) {
						get_promises.push(this._get(key))
						results.push(key)
					}
				}
			})
			stream.on('end', () => Promise.all(get_promises).then(data => resolve(filterResults(data, params, this.options))))
		})
	}

	async _multi(method: string, params?: Params) {
		const items = await this._find(params)
		return Promise.all(items.map(item => this[method](item[this.id])))
	}

	async _get(id: RedisId, params?: Params): Promise<any> {
		const {query} = this.filterQuery(params)
		id = this.parseId(id)
		if (query && Object.keys(query).length) {
			if (id) params.query[this.id] = id
			params.query.$limit = 1
			return this._find({query: {[this.id]: id}, paginate: false}).then(data => this.prepareResults(id, data.pop()))
		} else {
			const value = await this.client.get(id as RedisKey)
			return this.prepareResults(id, value)
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async _set(key, data: any, _params?: Params): Promise<any> {
		if (!key) throw new Unprocessable('id is required')
		const value = stringifyValue(data)
		return this.client.set(key, value)
	}

	async _create(data, params?: Params): Promise<any | any[]> {
		const key = (isObject(data) && data[this.id] ? data[this.id] : undefined)
		if (key && await this._get(key, params)) throw new Conflict(`Redis value with key ${key} already exists`)
		return this._set(uuid(), data, params)
	}

	async _update(id: RedisId, data: any, params?: Params): Promise<any> {
		id = this.parseId(id)
		return this._set(id, data, params)
	}

	async _patch(id: NullableRedisId, data: any, params?: Params): Promise<any | any[]> {
		if (this.isMulti(id, params)) return this._multi('_patch', params)
		id = this.parseId(id)
		const old_data = this._get(id, params)
		const new_data = merge(old_data, data)
		return this._set(id, new_data, params)
	}

	async _remove(id: NullableRedisId, params?: Params): Promise<any | any[]> {
		if (this.isMulti(id, params)) return this._multi('_remove', params)
		id = this.parseId(id)
		return this.client.del(id)
	}
}

function stringifyValue(value) {
	try {
		return JSON.stringify(value)
	} catch (e) {
		return isPrimitive(value) ? value : String(value)
	}
}
