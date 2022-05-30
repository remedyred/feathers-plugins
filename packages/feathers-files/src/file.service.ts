import {AdapterParams, AdapterServiceOptions, filterQuery, PaginationParams} from '@feathersjs/adapter-commons'
import {BadRequest, MethodNotAllowed} from '@feathersjs/errors'
import {Params, Query} from '@feathersjs/feathers'
import {_select, callMethod} from '@snickbit/feathers-helpers'
import {Out} from '@snickbit/out'
import {isArray, isString} from '@snickbit/utilities'
import path from 'path'
import sift from 'sift'

const alwaysMulti = {
	find: true,
	get: false,
	update: false
}

/**
 * The path or key of the file
 */
export type FileId = string

export interface FileRecord {
	fieldname?: string
	originalname?: string
	encoding?: string
	mimetype?: string
	buffer?: Buffer
	content?: string
	size?: number
	path?: string
}

export type FileData = Buffer | File | FileRecord

export interface ParsedParams extends Params {
	path?: string
}

export interface FileServiceOptions extends Partial<AdapterServiceOptions> {
	root?: string
	url?: string
	matcher?(value: any): any
}

export interface FilteredQuery {
	query: Query
	filters: {[key: string]: any}
	paginate: PaginationParams
}

export class FileService {
	protected options: FileServiceOptions

	protected out: Out

	constructor(options) {
		this.options = {
			events: [],
			paginate: {},
			multi: false,
			filters: [],
			whitelist: [],
			matcher: sift,
			root: process.cwd(),
			...options
		}

		this.out = new Out(`files`)
	}

	get events() {
		return this.options.events
	}

	/**
	 * Parse the params
	 */
	protected parseParams(filePath?: string, data?: FileData): ParsedParams
	protected parseParams(params?: AdapterParams, data?: FileData): ParsedParams
	protected parseParams(pathOrParams?: AdapterParams | string, data?: FileData): ParsedParams {
		if (!pathOrParams) {
			pathOrParams = {}
		}

		let params

		if (isString(pathOrParams)) {
			params = {query: {id: pathOrParams as string}} as AdapterParams
		} else {
			params = pathOrParams as AdapterParams
		}

		if (params?.query?.path && !params?.query?.id) {
			params.query.id = params.query.path
			delete params.query.path
		}

		if (!params.path) {
			data = data as FileRecord
			if (data && data?.path) {
				params.path = data.path
			} else if (params.query?.id) {
				params.path = params.query.id
			} else if (data && data?.fieldname) {
				params.path = data.fieldname
			} else if (data && data?.originalname) {
				params.path = data.originalname
			}
		}

		if (!params.path && !isArray(data)) {
			this.out.error('No path found', {params, data})
			throw new BadRequest(`No file path or name provided`)
		}

		if (this.options.root && !params.path.startsWith(this.options.root)) {
			params.path = path.join(this.options.root, params.path)
		}

		return params
	}

	protected stripUrl(id: FileId): string {
		if (this.options.url && id.startsWith(this.options.url)) {
			id = id.replace(this.options.url, '')
		}
		return id.replace(/\\/g, '/').replace(/^\/+/, '')
	}

	protected path(id: FileId) {
		return path.join(this.options.root, id)
	}

	protected allowsMulti(method) {
		const always = alwaysMulti[method]

		if (typeof always !== 'undefined') {
			return always
		}

		const option = this.options.multi

		if (option === true || option === false) {
			return option
		}
		return option.includes(method)
	}

	protected filterQuery(params: any = {}, opts: any = {}): FilteredQuery {
		const paginate = params.paginate ?? opts.paginate ?? this.options.paginate
		const {query = {}} = params
		const options = {
			operators: this.options.whitelist || [],
			filters: this.options.filters,
			paginate,
			...opts
		}
		const result = filterQuery(query, options)

		return {...result, paginate}
	}

	protected filterFiles(files = [], params) {
		const {query, filters, paginate} = this.filterQuery(params)
		files = files.filter(this.options.matcher(query))
		const total = files.length

		if (filters.$skip !== undefined) {
			files = files.slice(filters.$skip)
		}

		if (filters.$limit !== undefined) {
			files = files.slice(0, filters.$limit)
		}

		const result = {
			total,
			limit: filters.$limit,
			skip: filters.$skip || 0,
			data: files.map(value => _select(value, params))
		}

		if (!(paginate && paginate.default)) {
			return result.data
		}

		return result
	}

	makeUrl(id: FileId): string {
		return this.options.url ? `${this.options.url}/${this.stripUrl(id)}` : id
	}

	cwd(params?: Params): string {
		return callMethod(this, '_cwd', params)
	}

	async find(params: AdapterParams): Promise<any> {
		return callMethod(this, '_find', params)
	}

	async get(id: FileId | FileId[], params?: Params): Promise<any> {
		return callMethod(this, '_get', id, params)
	}

	async create(data: FileData | FileData[], params?: Params): Promise<any> {
		if (isArray(data)) {
			data = data as FileData[]
			if (!this.allowsMulti('create')) {
				return Promise.reject(new MethodNotAllowed(`Can not create multiple entries`))
			}
			return Promise.all(data.map(async file => await callMethod(this, '_create', file, params)))
		}

		return callMethod(this, '_create', data, params)
	}

	async update(id: FileId | FileId[], data?: FileData, params?: Params): Promise<any> {
		if (id === null || Array.isArray(id)) {
			return Promise.reject(new BadRequest(`You can not replace multiple instances. Did you mean 'patch'?`))
		}

		return callMethod(this, '_update', id, data, params)
	}

	async patch(id?: FileId, data?: FileData | FileData[], params?: Params): Promise<any> {
		if (!id && isArray(data)) {
			data = data as FileData[]
			if (!this.allowsMulti('patch')) {
				return Promise.reject(new MethodNotAllowed(`Can not patch multiple entries`))
			}
			return Promise.all(data.map(async file => await callMethod(this, '_patch', id, file, params)))
		}

		return callMethod(this, '_patch', id, data, params)
	}

	async remove(id: FileId | FileId[], params?: Params): Promise<any> {
		if (isArray(id)) {
			id = id as FileId[]
			if (!this.allowsMulti('remove')) {
				return Promise.reject(new MethodNotAllowed(`Can not remove multiple entries`))
			}
			return Promise.all(id.map(async file => await callMethod(this, '_remove', file, params)))
		}

		return callMethod(this, '_remove', id, params)
	}

	async exists(id: FileId, params?: Params): Promise<any> {
		return callMethod(this, '_exists', id, params)
	}

	_getContent(data) {
		return data?.content || data?.buffer || data?.stream || data?.file || data?.url || data?.path || data?.uri || data?.filename || data
	}
}
