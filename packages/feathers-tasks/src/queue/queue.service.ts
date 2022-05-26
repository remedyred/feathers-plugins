import {PaginationOptions} from '@feathersjs/adapter-commons'
import {Paginated, ServiceMethods} from '@feathersjs/feathers'
import {JobId, NullableJobId, QueueAdapter, QueueParams} from './queue.adapter'

export default class QueueService<T = any, D = Partial<T>, P extends QueueParams = QueueParams> extends QueueAdapter implements ServiceMethods<Paginated<T> | T, D, P> {
	async find(params?: P & {paginate?: PaginationOptions}): Promise<Paginated<T>>
	async find(params?: P & {paginate: false}): Promise<T[]>
	async find(params?: P): Promise<Paginated<T> | T[]>
	async find(params?: P): Promise<Paginated<T> | T[]> {
		return this._find(params)
	}

	async get(id: JobId, params?: P): Promise<T> {
		return this._get(id, params)
	}

	async create(data: Partial<D>, params?: P): Promise<T>
	async create(data: Partial<D>[], params?: P): Promise<T[]>
	async create(data: Partial<D> | Partial<D>[], params?: P): Promise<T | T[]> {
		return this._create(data, params)
	}

	async update(id: JobId, data: D, params?: P): Promise<T> {
		return this._update(id, data, params)
	}

	async patch(id: JobId, data: Partial<D>, params?: P): Promise<T>
	async patch(id: null, data: Partial<D>, params?: P): Promise<T[]>
	async patch(id: NullableJobId, data: Partial<D>, params?: P): Promise<T | T[]> {
		return this._patch(id, data, params)
	}

	async remove(id: JobId, params?: P): Promise<T>
	async remove(id: null, params?: P): Promise<T[]>
	async remove(id: NullableJobId, params?: P): Promise<T | T[]> {
		return this._remove(id, params)
	}
}
