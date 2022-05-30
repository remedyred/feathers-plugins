import {AdapterParams, filterQuery, select, sorter} from '@feathersjs/adapter-commons'
import {_} from '@feathersjs/commons'
import {NotImplemented} from '@feathersjs/errors'
import {Params} from '@feathersjs/feathers'
import {out} from '@snickbit/out'
import {isJSONString, JSONParse, objectCopy} from '@snickbit/utilities'
import {FilteredQuery, QueryOptions, TimestampOptions, Timestamps} from './definitions'
import sift from 'sift'

export function parseResponseError(e: any): any {
	const data: any = {message: 'Unknown error'}

	if (e.message) {
		data.message = e.message
	}

	if (e.response) {
		data.response = {
			status: e.response?.status,
			statusText: e.response?.statusText,
			url: e.response.config?.url,
			details: e.response?.data
		}
	}

	if (out.isVerbose(2) && e.config) {
		data.request = {
			method: e.config?.method,
			baseURL: e.config?.baseURL,
			url: e.config?.url,
			data: e.config?.data,
			retry: e.config['axios-retry']
		}

		if (out.isVerbose(3)) {
			data.request.headers = e.config?.headers
			data.request.params = e.config?.params
		}
	}

	return data
}

export function parseResponse(response: any): any {
	if (!response) {
		return response
	}
	if (!response.data) {
		return response
	}
	response.data = isJSONString(response.data) ? JSONParse(response.data) : response.data
	if (Array.isArray(response.data) && response.data.length === 1) {
		response.data = response.data.pop()
	}
	return response
}

export function _select(data: any, params: Params, ...args: any[]): any {
	const base = select(params, ...args)
	return base(objectCopy(data))
}

export function callMethod(self, name: string, ...args: any[]): any {
	if (typeof self[name] !== 'function') {
		return Promise.reject(new NotImplemented(`Method ${name} not available`))
	}
	return self[name](...args)
}

export function safeCallMethod(self, name, ...args) {
	if (typeof self[name] !== 'function') {
		return Promise.resolve()
	}
	return self[name](...args)
}

export function filterParams(params: AdapterParams = {}, options: QueryOptions = {}): FilteredQuery {
	const paginate = typeof params.paginate !== 'undefined' ? params.paginate : options.paginate
	const {query = {}} = params
	options = {
		operators: options.whitelist || [],
		filters: options.filters,
		paginate,
		...options
	}

	const result = filterQuery(query, options)

	return {
		...result,
		paginate
	}
}

function getMatcherSorter(options: QueryOptions) {
	return {
		matcher: options.matcher || sift,
		sorter: options.sorter || sorter
	}
}

export interface Results {
	total: number
	limit: number
	skip: number
	data: any[]
}

export function filterResults(data: any, params?: Params, options?: QueryOptions): any[] | Results {
	const {
		query,
		filters,
		paginate
	} = filterParams(params, options)
	const {
		matcher,
		sorter
	} = getMatcherSorter(options)

	let values = _.values(data)
		.filter(matcher(query))
	const total = values.length

	if (filters.$sort !== undefined) {
		values.sort(sorter(filters.$sort))
	}

	if (filters.$skip !== undefined) {
		values = values.slice(filters.$skip)
	}

	if (filters.$limit !== undefined) {
		values = values.slice(0, filters.$limit)
	}

	const result: Results = {
		total,
		limit: filters.$limit,
		skip: filters.$skip || 0,
		data: values.map((value: any) => _select(value, params))
	}

	if (!paginate) {
		return result.data
	}

	return result
}
