import {AdapterService} from '@feathersjs/adapter-commons'
import {parseResponse, parseResponseError} from '@snickbit/feathers-helpers'
import {out} from '@snickbit/out'
import axios from 'axios'

/**
 * @typedef {Object} RestServiceOptions
 * @augments import("@feathersjs/adapter-commons").ServiceOptions
 * @augments import("axios").AxiosRequestConfig
 * @property {string} [baseURL]
 * @property {import('axios').AxiosRequestHeaders} [headers]
 * @property {import('axios').Method} [method]
 * @property {string} [path]
 */

/**
 * @typedef {Object} RestServiceRequestConfig
 * @augments import("axios").AxiosRequestConfig
 * @property {import('axios').AxiosRequestHeaders} [headers]
 */

/** @type RestService */
export default class RestService extends AdapterService {
	/**
	 * @param {RestServiceOptions} options
	 * @param {Application} app
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	constructor(options, app) {
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

	/**
	 * @param {import('axios').AxiosRequestHeaders} headers
	 * @return {RestService}
	 */
	headers(headers) {
		this.client.defaults.headers = {
			...this.client.defaults.headers,
			...headers
		}
		return this
	}

	/**
	 * @return {string}
	 */
	pullPath() {
		const url_path = this.url_path
		this.url_path = '/'
		return url_path
	}

	/**
	 * @param {string} url_path
	 * @return {string}
	 */
	path(url_path = '/') {
		this.url_path = url_path
		return this
	}

	/**
	 * @param {Method} method
	 * @param {object} [data]
	 * @return {object}
	 */
	async request(method, data) {
		const response = await this.client({
			...this.options,
			method,
			url: this.pullPath(),
			data
		})
		return response.data
	}

	/**
	 * @param {Partial<Params>} params
	 * @return {Promise<any>}
	 */
	async _find(params) {
		const {query} = this.filterQuery(params)
		const {data} = await this.client.get(this.pullPath(), {params: query})
		return data
	}

	/**
	 * @param {Id} id
	 * @param {Partial<Params>} params
	 * @return {Promise<any>}
	 */
	async _get(id, params) {
		const {query} = this.filterQuery(params)
		const {data} = await this.client.get(`${this.pullPath()}/${id}`, {params: query})
		return data
	}

	/**
	 * @param {any} data
	 * @param {Partial<Params>} params
	 * @return {Promise<any>}
	 */
	async _create(data, params) {
		const {query} = this.filterQuery(params)
		const {data: response} = await this.client.post(this.pullPath(), data, {params: query})
		return response
	}

	/**
	 * @param {Id} id
	 * @param {any} data
	 * @param {Partial<Params>} params
	 * @return {Promise<any>}
	 */
	async _update(id, data, params) {
		const {query} = this.filterQuery(params)
		const {data: response} = await this.client.put(`${this.pullPath()}/${id}`, data, {params: query})
		return response
	}

	/**
	 * @param {NullableId} id
	 * @param {any} data
	 * @param {Partial<Params>} params
	 * @return {Promise<any>}
	 */
	async _patch(id, data, params) {
		const {query} = this.filterQuery(params)
		const {data: response} = await this.client.patch(`${this.pullPath()}/${id}`, data, {params: query})
		return response
	}

	/**
	 * @param {NullableId} id
	 * @param {Partial<Params>} params
	 * @return {Promise<any>}
	 */
	async _remove(id, params) {
		const {query} = this.filterQuery(params)
		const {data} = await this.client.delete(`${this.pullPath()}/${id}`, {params: query})
		return data
	}

	/**
	 * @param {string} url
	 * @param {RestServiceRequestConfig} config
	 * @return {any}
	 */
	async __get(url, config) {
		return this.client.get(url, config)
	}

	/**
	 * @param {string} url
	 * @param {any} data
	 * @param {RestServiceRequestConfig} config
	 * @return {any}
	 */
	async __post(url, data, config) {
		return this.client.post(url, data, config)
	}

	/**
	 * @param {string} url
	 * @param {any} data
	 * @param {RestServiceRequestConfig} config
	 * @return {any}
	 */
	async __put(url, data, config) {
		return this.client.put(url, data, config)
	}

	/**
	 * @param {string} url
	 * @param {any} data
	 * @param {RestServiceRequestConfig} config
	 * @return {any}
	 */
	async __patch(url, data, config) {
		return this.client.patch(url, data, config)
	}

	/**
	 * @param {string} url
	 * @param {RestServiceRequestConfig} config
	 * @return {any}
	 */
	async __delete(url, config) {
		return this.client.delete(url, config)
	}
}
