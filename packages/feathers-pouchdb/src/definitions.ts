import {AdapterServiceOptions} from '@feathersjs/adapter-commons'
import PouchDB from 'pouchdb'

export type ExistingDocument<T> = PouchDB.Core.ExistingDocument<T>
export type NewDocument<T> = PouchDB.Core.NewDocument<T>
export type Document<T> = PouchDB.Core.Document<T>
export type PutDocument<T> = PouchDB.Core.PutDocument<T>
export type PostDocument<T> = PouchDB.Core.PostDocument<T>
export type RemoveDocument = PouchDB.Core.RemoveDocument

export type Matcher<T = any> = (query: T) => T
export type Sorter<T = any> = (sort: T) => T

export type PouchEndpointType = 'local' | 'remote'

export type DatabaseConfig = PouchDB.Configuration.LocalDatabaseConfiguration & PouchDB.Configuration.RemoteDatabaseConfiguration

export interface PouchOptions {
	connection?: DatabaseConfig
	replicate?: DatabaseConfig
	encrypt?: PouchEndpointType | boolean
	encryptionKey?: string
	encryptionProperty?: string
	prefix?: string
}

export interface PouchServiceOptions extends AdapterServiceOptions, PouchOptions {}

export type PouchRecord<T> = T & {
	_id: string
	_rev: string
}

export interface AllDocsRequest {
	include_docs: boolean
	startkey?: string
	endkey?: string
	page?: number
	limit?: number
	skip?: number
	descending?: boolean
	keys?: string[]
	query?: string
}

export interface FindRequest {
	query: PouchDB.Find.Selector
	page?: number
	sort?: string[]
	limit?: number
}

export interface PouchResults<T = any> {
	query?: any
	total?: number
	page?: number
	limit?: number
	sortBy?: string
	descending?: boolean
	rows: PouchRecord<T>[]
}
