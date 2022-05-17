import {DeleteObjectCommand, GetObjectCommand, HeadObjectCommand, ListObjectsCommand, PutObjectCommand, S3} from '@aws-sdk/client-s3'
import {Out} from '@snickbit/out'
import {bufferStream, getFile, makeBuffer, saveFile} from '@snickbit/node-utilities'
import {FileData, FileId, FileService, FileServiceOptions, ParsedParams} from './file.service'
import {objectPull} from '@snickbit/utilities'
import mime from 'mime/lite'
import {Readable} from 'stream'
import {AdapterParams} from '@feathersjs/adapter-commons'

export interface S3ServiceOptions extends FileServiceOptions {
	Bucket?: string
	ACL?: string
	endpoint?: string
}

export interface S3Options {
	endpoint: string
	Bucket: string
	credentials: {
		accessKeyId: string
		secretAccessKey: string
	},
	region?: string
	ACL?: string
}

export interface S3RequestParams {
	Bucket?: string
	key?: string
	ACL?: string
	content?: string
}

export interface S3Payload {
	Key: string
	ACL?: string
	ContentType?: string
	Body?: Buffer | Readable | string
}

export interface S3Request {
	Bucket: string
	Key: string
	ACL?: 'private' | 'public-read'
	Prefix?: string
	ContentType?: string
	Body?: Buffer | Readable
	Marker?: string
	MaxKeys?: number
}

export interface S3File {
	Key: string
	LastModified: string | Date
	ETag: string
	ChecksumAlgorithm?: string
	Size: number
	StorageClass: string
	Owner: {
		DisplayName: string
		ID: string
	}
}

export class S3Service extends FileService {
	client: S3
	declare options: S3ServiceOptions

	constructor(options: S3ServiceOptions) {
		options = {
			ACL: 'private',
			root: '/',
			...options
		}
		super(options)
		this.client = new S3(options)

		if (!this.options.url) {
			this.options.url = `${this.options.endpoint}/${this.options.Bucket}`
		}

		this.out = new Out(`s3:${this.options.Bucket}`)
	}

	get bucket() {
		return this.options.Bucket
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	private buildRequest(payload: S3Payload, _params?: AdapterParams): S3Request {
		if (payload.Body) {
			if (!payload.ContentType) {
				payload.ContentType = mime.getType(payload.Key) || undefined
			}
			try {
				payload.Body = makeBuffer(payload.Body as string) as Buffer
			} catch (e) {
				throw new Error(`Invalid content!`)
			}
		}

		return {
			Bucket: this.bucket,
			...payload
		} as S3Request
	}

	_cwd(options: any = {}): any {
		return options?.bucket || this.options.Bucket
	}

	bucketParams(payload: S3RequestParams = {}, params) {
		params = {
			Bucket: this.options.Bucket,
			Key: payload.key,
			ACL: this.options.ACL,
			...params
		}
		if (payload.content) {
			if (!params.ContentType) {
				// @ts-ignore
				params.ContentType = mime.getType(params.Key, 'application/octet-stream')
			}
			try {
				params.Body = makeBuffer(payload.content)
			} catch (e) {
				this.out.error(payload.content)
				throw new Error(`Invalid content!`)
			}
		}
		return params
	}

	async _uploadContent(Key: string, Body: Buffer | Readable | string, params) {
		const buildRequest = this.buildRequest({Key, Body, ...params})
		await this.client.send(new PutObjectCommand(buildRequest))
		return this.makeUrl(Key)
	}

	async _uploadFile(key, file_path, params) {
		const content = getFile(file_path)
		return this._uploadContent(key, content, params)
	}

	async _readContent(Key?: FileId, params?: AdapterParams) {
		Key = this.stripUrl(Key)
		const buffer = objectPull(params as object, 'buffer')
		const response = await this.client.send(new GetObjectCommand(this.buildRequest({Key}, params)))
		const buffered_stream = await bufferStream(response.Body as Readable)
		return buffer ? buffered_stream : buffered_stream.toString('utf8')
	}

	async _download(key?: FileId, file_path?: string, params?: AdapterParams) {
		const content = await this._readContent(key, params)
		return saveFile(file_path, content)
	}

	async _get(id: FileId, params?: AdapterParams) {
		return typeof params === 'string' ? this._download(id, params as string) : this._readContent(id, params)
	}

	async _exists(id: FileId, params?: AdapterParams) {
		try {
			await this.client.send(new HeadObjectCommand(this.buildRequest({Key: id}, params)))
			return this.makeUrl(id)
		} catch (e) {
			// Head command does not throw any kind of detailed error, use _get to get the error
			return false
		}
	}

	async* _list(params: AdapterParams, options = {}) {
		const {filters} = this.filterQuery(params, options)
		let query_limit = filters.$limit || this.options?.paginate?.default || 1000
		const commandParams = this.bucketParams({}, params)

		if (params?.query?.Prefix) {
			commandParams.Prefix = objectPull(params.query, 'Prefix')
		}

		let last_key
		let total_results = 0
		while (true) {
			if (last_key) commandParams.Marker = last_key
			if (query_limit) {
				if (query_limit > 1000) {
					commandParams.MaxKeys = 1000
					query_limit -= 1000
				} else {
					commandParams.MaxKeys = query_limit
				}
			}
			const results = await this.client.send(new ListObjectsCommand(commandParams))
			if (!results?.Contents?.length) break
			total_results += results.Contents.length
			for (const file of results.Contents) {
				yield {file, total_results}
			}
			if (filters.$limit && total_results >= filters.$limit) break
			last_key = results.Contents[results.Contents.length - 1].Key
		}
	}

	async _find(params: AdapterParams, options = {}) {
		const files = []
		for await (const result of this._list(params, options)) {
			files.push(result.file)
		}
		return this.filterFiles(files, params)
	}

	async _create(data: FileData, params?: AdapterParams) {
		params = this.parseParams(params, data)
		return this._uploadContent(params.path, this._getContent(data), params)
	}

	async _update(id: FileId, data: FileData, params?: AdapterParams) {
		params = this.parseParams(params, data)
		return this._uploadContent(params.path, this._getContent(data), params)
	}

	async _patch(id: FileId, data: FileData, params?: AdapterParams) {
		params = this.parseParams(params, data)
		return this._uploadContent(params.path, this._getContent(data), params)
	}

	async _remove(id: FileId, params?: AdapterParams) {
		return this.client.send(new DeleteObjectCommand(this.buildRequest({Key: id}, params)))
	}

	protected parseParams(params: AdapterParams | string, data?: FileData): ParsedParams {
		params = super.parseParams(params as unknown, data)
		params.path = this.stripUrl(params.path)
		return params
	}
}
