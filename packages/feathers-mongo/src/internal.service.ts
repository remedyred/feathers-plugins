import {NotImplemented} from '@feathersjs/errors'
import {Id, NullableId, Paginated, ServiceMethods} from '@feathersjs/feathers'
import MongoAdapter, {MongoServiceOptions} from './mongo.adapter'
import {PaginationOptions} from '@feathersjs/adapter-commons'

export class InternalService<T = any, D = Partial<T>, P extends MongoServiceOptions = MongoServiceOptions> extends MongoAdapter implements ServiceMethods<T | Paginated<T>, D, P> {
	protected allowedMethods: string[] = []

	constructor(options, app) {
		const allowedMethods = []

		if (options.allowedMethods) {
			allowedMethods.push(...options.allowedMethods)
			delete options.allowedMethods
		}

		super(options, app)

		this.allowedMethods = allowedMethods
	}

	async find(params?: P & { paginate?: PaginationOptions }): Promise<Paginated<T>>;
	async find(params?: P & { paginate: false }): Promise<T[]>;
	async find(params?: P): Promise<Paginated<T> | T[]>;
	async find(params?: P): Promise<Paginated<T> | T[]> {
		if (!this.allowedMethods.includes('find')) throw new NotImplemented('Method `find` not implemented')
		return super.find(params)
	}

	async get(id: Id, params?: P): Promise<T> {
		if (!this.allowedMethods.includes('get')) throw new NotImplemented('Method `get` not implemented')
		return super.get(id, params)
	}

	async create(data: Partial<D>, params?: P): Promise<T>;
	async create(data: Partial<D>[], params?: P): Promise<T[]>;
	async create(data: Partial<D> | Partial<D>[], params?: P): Promise<T | T[]> {
		if (!this.allowedMethods.includes('create')) throw new NotImplemented('Method `create` not implemented')
		return super.create(data, params)
	}

	async update(id: Id, data: D, params?: P): Promise<T> {
		if (!this.allowedMethods.includes('update')) throw new NotImplemented('Method `update` not implemented')
		return super.update(id, data, params)
	}

	async patch(id: Id, data: Partial<D>, params?: P): Promise<T>;
	async patch(id: null, data: Partial<D>, params?: P): Promise<T[]>;
	async patch(id: NullableId, data: Partial<D>, params?: P): Promise<T | T[]> {
		if (!this.allowedMethods.includes('patch')) throw new NotImplemented('Method `patch` not implemented')
		return super.patch(id, data, params)
	}

	async remove(id: Id, params?: P): Promise<T>;
	async remove(id: null, params?: P): Promise<T[]>;
	async remove(id: NullableId, params?: P): Promise<T | T[]> {
		if (!this.allowedMethods.includes('remove')) throw new NotImplemented('Method `remove` not implemented')
		return super.remove(id, params)
	}
}
