import {Params, Query} from '@feathersjs/feathers'
import {AdapterParams, AdapterServiceOptions, filterQuery, PaginationParams, select, sorter} from '@feathersjs/adapter-commons'
import {objectCopy} from '@snickbit/utilities'
import {_} from '@feathersjs/commons'
import sift from 'sift'

export interface Sort {
	[key: string]: any
}

export interface Sorter {
	(sort: Sort): (a: any, b: any) => number
}

export interface Results {
	total: number
	limit: number
	skip: number
	data: any[]
}

export interface QueryOptions extends Partial<AdapterServiceOptions> {
	operators?: string[]
	sorter?: Sorter
	matcher?(value: any): any
}

export interface FilteredQuery {
	query: Query
	filters: {[key: string]: any}
	paginate: PaginationParams
}

export function _select(data: any, params: Params, ...args: any[]): any {
	const base = select(params, ...args)
	return base(objectCopy(data))
}

export function filterParams(params: AdapterParams = {}, options: QueryOptions = {}): FilteredQuery {
	const paginate = typeof params.paginate !== 'undefined' ? params.paginate : options.paginate
	const {query = {}} = params
	options = {
		operators: options.allow || [],
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

	let values = _.values(data).filter(matcher(query))
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

function getMatcherSorter(options: QueryOptions) {
	return {
		matcher: options.matcher || sift,
		sorter: options.sorter || sorter
	}
}
