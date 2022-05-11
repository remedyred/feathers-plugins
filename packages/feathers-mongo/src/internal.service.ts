import {NotFound} from '@feathersjs/errors'
import {NullableId, Params} from '@feathersjs/feathers'
import MongoService from './mongo.service'

export class InternalService extends MongoService {
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

	find(params?: Params): Promise<any> {
		if(!this.allowedMethods.includes('find')) return Promise.reject(new NotFound())
		return super.find(params)
	}

	get(id?: NullableId, params?: Params): Promise<any> {
		if(!this.allowedMethods.includes('get')) return Promise.reject(new NotFound())
		return super.get(id, params)
	}

	create(data?: any, params?: Params): Promise<any> {
		if(!this.allowedMethods.includes('create')) return Promise.reject(new NotFound())
		return super.create(data, params)
	}

	update(id?: NullableId, data?: any, params?: Params): Promise<any> {
		if(!this.allowedMethods.includes('update')) return Promise.reject(new NotFound())
		return super.update(id, data, params)
	}

	patch(id?: NullableId, data?: any, params?: Params): Promise<any> {
		if(!this.allowedMethods.includes('patch')) return Promise.reject(new NotFound())
		return super.patch(id, data, params)
	}

	remove(id?: NullableId, params?: Params): Promise<any> {
		if(!this.allowedMethods.includes('remove')) return Promise.reject(new NotFound())
		return super.remove(id, params)
	}
}
