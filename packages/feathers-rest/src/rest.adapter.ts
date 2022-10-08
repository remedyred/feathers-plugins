import {AdapterBase, AdapterParams, AdapterServiceOptions, filterQuery, PaginationOptions} from '@feathersjs/adapter-commons'
import {Id, NullableId, Paginated} from '@feathersjs/feathers'
import {parseResponse, parseResponseError} from '@snickbit/feathers-helpers'
import {out} from '@snickbit/out'
import axios, {AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, Method} from 'axios'

export interface RestServiceOptions extends AdapterServiceOptions, AxiosRequestConfig {
	baseURL?: string
	headers?: AxiosRequestHeaders
	method?: Method
	path?: string
}

export interface RestServiceRequestConfig extends AxiosRequestConfig {
	headers?: AxiosRequestHeaders
}

export default class RestAdapter<T = any, D = Partial<T>, O extends RestServiceOptions = RestServiceOptions> extends AdapterBase {
	url_path: string

	client: AxiosInstance

	declare options: O

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	constructor(options: O) {
		options = {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			multi: true,
			...options
		}
		super(options)

		this.url_path = options.path || '/'
		this.client = axios.create(this.options)

		// Add a request interceptor
		this.client.interceptors.request.use(r => {
			out.verbose(`Sending request to ${r.url}`)
			return r
		}, e => Promise.reject(parseResponseError(e)))

		// Add a response interceptor
		this.client.interceptors.response.use(response => parseResponse(response), error => Promise.reject(parseResponseError(error)))
	}

	headers(headers: AxiosRequestHeaders): RestAdapter {
		this.client.defaults.headers = {
			...this.client.defaults.headers,
			...headers
		}
		return this
	}

	pullPath(): string {
		const url_path = this.url_path
		this.url_path = '/'
		return url_path
	}

	path(url_path = '/'): RestAdapter {
		this.url_path = url_path
		return this
	}

	async request(method: Method, data: T): Promise<T> {
		const response = await this.client({
			...this.options,
			method,
			url: this.pullPath(),
			data
		})
		return response.data
	}

	async $create(data: D, params?: AdapterParams): Promise<T>
	async $create(data: D[], params?: AdapterParams): Promise<T[]>
	async $create(data: D | D[], params?: AdapterParams): Promise<T>
	async $create(data: D | D[], params?: AdapterParams): Promise<T | T[]> {
		const {query} = filterQuery(params)
		const {data: response} = await this.client.post(this.pullPath(), data, {params: query})
		return response
	}

	async $find(params?: AdapterParams & {paginate?: PaginationOptions}): Promise<Paginated<T>>
	async $find(params?: AdapterParams & {paginate: false}): Promise<T[]>
	async $find(params: AdapterParams = {} as AdapterParams): Promise<Paginated<T> | T[]> {
		const {query} = filterQuery(params)
		const {data} = await this.client.get(this.pullPath(), {params: query})
		return data
	}

	async $get(id: Id, params?: AdapterParams): Promise<T> {
		const {query} = filterQuery(params)
		const {data} = await this.client.get(`${this.pullPath()}/${id}`, {params: query})
		return data
	}

	async $patch(id: null, data: D, params?: AdapterParams): Promise<T[]>
	async $patch(id: Id, data: D, params?: AdapterParams): Promise<T>
	async $patch(id: NullableId, data: D, params?: AdapterParams): Promise<T>
	async $patch(id: NullableId, data: D, params?: AdapterParams): Promise<T | T[]> {
		const {query} = filterQuery(params)
		const {data: response} = await this.client.patch(`${this.pullPath()}/${id}`, data, {params: query})
		return response
	}

	async $remove(id: null, params?: AdapterParams): Promise<T[]>
	async $remove(id: Id, params?: AdapterParams): Promise<T>
	async $remove(id: NullableId, params?: AdapterParams): Promise<T>
	async $remove(id: NullableId, params?: AdapterParams): Promise<T | T[]> {
		const {query} = filterQuery(params)
		const {data} = await this.client.delete(`${this.pullPath()}/${id}`, {params: query})
		return data
	}

	async $update(id: Id, data: D, params?: AdapterParams): Promise<T> {
		const {query} = filterQuery(params)
		const {data: response} = await this.client.put(`${this.pullPath()}/${id}`, data, {params: query})
		return response
	}

	async __get(url: string, config?: RestServiceRequestConfig): Promise<T> {
		return this.client.get(url, config)
	}

	async __post(url: string, data: T, config?: RestServiceRequestConfig): Promise<T> {
		return this.client.post(url, data, config)
	}

	async __put(url: string, data: T, config?: RestServiceRequestConfig): Promise<T> {
		return this.client.put(url, data, config)
	}

	async __patch(url: string, data: T, config?: RestServiceRequestConfig): Promise<T> {
		return this.client.patch(url, data, config)
	}

	async __delete(url: string, config?: RestServiceRequestConfig): Promise<T> {
		return this.client.delete(url, config)
	}
}
