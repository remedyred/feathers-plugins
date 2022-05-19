import {AdapterParams, PaginationOptions} from '@feathersjs/adapter-commons'
import {Id, NullableId, Paginated, ServiceMethods} from '@feathersjs/feathers'
import RestAdapter from './rest.adapter'

export default class RestService<T = any, D = Partial<T>, P extends AdapterParams = AdapterParams> extends RestAdapter implements ServiceMethods<T | Paginated<T>, D, P> {
	async find(params?: P & { paginate?: PaginationOptions }): Promise<Paginated<T>>;
	async find(params?: P & { paginate: false }): Promise<T[]>;
	async find(params?: P): Promise<Paginated<T> | T[]>;
	async find(params?: P): Promise<Paginated<T> | T[]> {
		return this._find(params)
	}

	async get(id: Id, params?: P): Promise<T> {
		return this._get(id, params)
	}

	async create(data: Partial<D>, params?: P): Promise<T>;
	async create(data: Partial<D>[], params?: P): Promise<T[]>;
	async create(data: Partial<D> | Partial<D>[], params?: P): Promise<T | T[]> {
		return this._create(data, params)
	}

	async update(id: Id, data: D, params?: P): Promise<T> {
		return this._update(id, data, params)
	}

	async patch(id: Id, data: Partial<D>, params?: P): Promise<T>;
	async patch(id: null, data: Partial<D>, params?: P): Promise<T[]>;
	async patch(id: NullableId, data: Partial<D>, params?: P): Promise<T | T[]> {
		return this._patch(id, data, params)
	}

	async remove(id: Id, params?: P): Promise<T>;
	async remove(id: null, params?: P): Promise<T[]>;
	async remove(id: NullableId, params?: P): Promise<T | T[]> {
		return this._remove(id, params)
	}
}
