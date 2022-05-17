import {AdapterService, ServiceOptions} from '@feathersjs/adapter-commons'
import {parseResponse, parseResponseError} from '@snickbit/feathers-helpers'
import {out} from '@snickbit/out'
import axios, {AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, Method} from 'axios'
import {Application, Id, NullableId, Params} from '@feathersjs/feathers'

export interface RestServiceOptions extends ServiceOptions, AxiosRequestConfig {
	baseURL?: string
	headers?: AxiosRequestHeaders
	method?: Method
	path?: string
}

export interface RestServiceRequestConfig extends AxiosRequestConfig {
	headers?: AxiosRequestHeaders
}

export default class RestService extends AdapterService {
	url_path: string
	client: AxiosInstance
	declare options: RestServiceOptions

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	constructor(options: RestServiceOptions, app: Application) {
		options = {
			headers: {
				'Accept': 'application/json',
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

	headers(headers: AxiosRequestHeaders): RestService {
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

	path(url_path = '/'): RestService {
		this.url_path = url_path
		return this
	}

	async request(method: Method, data: any): Promise<any> {
		const response = await this.client({
			...this.options,
			method,
			url: this.pullPath(),
			data
		})
		return response.data
	}

	async _find(params: Params): Promise<any> {
		const {query} = this.filterQuery(params)
		const {data} = await this.client.get(this.pullPath(), {params: query})
		return data
	}

	async _get(id: Id, params?: Params): Promise<any> {
		const {query} = this.filterQuery(params)
		const {data} = await this.client.get(`${this.pullPath()}/${id}`, {params: query})
		return data
	}

	async _create(data: any, params?: Params): Promise<any> {
		const {query} = this.filterQuery(params)
		const {data: response} = await this.client.post(this.pullPath(), data, {params: query})
		return response
	}


	async _update(id: Id, data: any, params?: Params): Promise<any> {
		const {query} = this.filterQuery(params)
		const {data: response} = await this.client.put(`${this.pullPath()}/${id}`, data, {params: query})
		return response
	}

	async _patch(id: NullableId, data: any, params?: Params): Promise<any> {
		const {query} = this.filterQuery(params)
		const {data: response} = await this.client.patch(`${this.pullPath()}/${id}`, data, {params: query})
		return response
	}

	async _remove(id: NullableId, params?: Params): Promise<any> {
		const {query} = this.filterQuery(params)
		const {data} = await this.client.delete(`${this.pullPath()}/${id}`, {params: query})
		return data
	}

	async __get(url: string, config?: RestServiceRequestConfig): Promise<any> {
		return this.client.get(url, config)
	}

	async __post(url: string, data: any, config?: RestServiceRequestConfig): Promise<any> {
		return this.client.post(url, data, config)
	}

	async __put(url: string, data: any, config?: RestServiceRequestConfig): Promise<any> {
		return this.client.put(url, data, config)
	}

	async __patch(url: string, data: any, config?: RestServiceRequestConfig): Promise<any> {
		return this.client.patch(url, data, config)
	}

	async __delete(url: string, config?: RestServiceRequestConfig): Promise<any> {
		return this.client.delete(url, config)
	}
}
