import {PaginationOptions} from '@feathersjs/adapter-commons'
import {Id, NullableId, Paginated, Params, ServiceMethods} from '@feathersjs/feathers'
import {PouchAttachment, PutDocument} from './definitions'
import PouchAdapter from './PouchAdapter'
import PouchDB from 'pouchdb'

export default class PouchService<T = any, D = Partial<T>, P extends Params = Params> extends PouchAdapter implements ServiceMethods<Paginated<T> | T, D, P> {
	async attach(id: string, attachment: PouchAttachment): Promise<PouchDB.Core.Response>
	async attach(id: null, attachments: PouchAttachment[]): Promise<PouchDB.Core.Response[]>
	async attach(id: string | null, attachmentOrAttachments: PouchAttachment | PouchAttachment[]): Promise<PouchDB.Core.Response | PouchDB.Core.Response[]> {
		return this.attach(id, attachmentOrAttachments as any)
	}

	async find(params?: P & {paginate?: PaginationOptions}): Promise<Paginated<T>>
	async find(params?: P & {paginate: false}): Promise<T[]>
	async find(params?: P): Promise<Paginated<T> | T[]>
	async find(params?: P): Promise<Paginated<T> | T[]> {
		return this._find(params)
	}

	async get(id: Id, params?: P): Promise<T> {
		return this._get(id, params)
	}

	async put(data: PutDocument<Document>, params?: P): Promise<T>
	async put(data: PutDocument<Document>[], params?: P): Promise<T[]>
	async put(data: PutDocument<Document> | PutDocument<Document>[], params?: P): Promise<T | T[]> {
		return this._put(data, params)
	}

	async create(data: Partial<D>, params?: P): Promise<T>
	async create(data: Partial<D>[], params?: P): Promise<T[]>
	async create(data: Partial<D> | Partial<D>[], params?: P): Promise<T | T[]> {
		return this._create(data, params)
	}

	async update(id: Id, data: D, params?: P): Promise<T> {
		return this._update(id, data, params)
	}

	async patch(id: Id, data: Partial<D>, params?: P): Promise<T>
	async patch(id: null, data: Partial<D>, params?: P): Promise<T[]>
	async patch(id: NullableId, data: Partial<D>, params?: P): Promise<T | T[]> {
		return this._patch(id, data, params)
	}

	async remove(id: Id, params?: P): Promise<T>
	async remove(id: null, params?: P): Promise<T[]>
	async remove(id: NullableId, params?: P): Promise<T | T[]> {
		return this._remove(id, params)
	}

	/**
	 * Put a new resource for this service, skipping any service-level hooks, sanitize the data
	 * and check if multiple updates are allowed.
	 *
	 * @param data - Data to insert into this service.
	 * @param params - Service call parameters
	 * @see {@link HookLessServiceMethods}
	 * @see {@link https://docs.feathersjs.com/api/services.html#put-data-params|Feathers API Documentation: .put(data, params)}
	 */
	async _put(data: PutDocument<Document>, params?: P): Promise<ExistingDocument<T>>
	async _put(data: PutDocument<Document>[], params?: P): Promise<ExistingDocument<T>[]>
	async _put(data: PutDocument<Document> | PutDocument<Document>[], params?: P): Promise<ExistingDocument<T> | ExistingDocument<T>[]>
	async _put(data: PutDocument<Document> | PutDocument<Document>[], params?: P): Promise<ExistingDocument<T> | ExistingDocument<T>[]> {
		if (Array.isArray(data) && !this.allowsMulti('put', params)) {
			throw new MethodNotAllowed('Can not put multiple entries')
		}

		const payload = Array.isArray(data)
			? await Promise.all(data.map(current => this.sanitizeData(current, params)))
			: await this.sanitizeData(data, params)

		return this.$put(payload, params)
	}
}
