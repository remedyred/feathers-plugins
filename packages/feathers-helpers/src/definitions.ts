import {AdapterServiceOptions, PaginationParams} from '@feathersjs/adapter-commons'
import {Query} from '@feathersjs/feathers'

export interface Sort {
	[key: string]: any
}

export interface Sorter {
	(sort: Sort): (a: any, b: any) => number
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
