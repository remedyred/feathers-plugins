import {DeleteObjectCommand, GetObjectCommand, HeadObjectCommand, ListObjectsCommand, PutObjectCommand, S3} from '@aws-sdk/client-s3'
import {Out} from '@snickbit/out'
import {getFile, saveFile} from '@snickbit/node-utilities'
import {FileData, FileId, FileParams, FileService, FileServiceOptions, ParsedParams} from './file.service'
import {bufferStream, makeBuffer, objectPull} from '@snickbit/utilities'
import mime from 'mime/lite'
import {Readable} from 'stream'

export interface S3ServiceOptions extends FileServiceOptions {
	bucket?: string
	ACL?: string
	endpoint?: string
}

export interface S3RequestParams {
	bucket?: string
	key?: string
	ACL?: string
	content?: string
}

export class S3Service extends FileService {
	client: S3
	options: S3ServiceOptions = {}

	constructor(options: S3ServiceOptions) {
		options = {
			ACL: 'private',
			root: '/',
			...options
		}
		super(options)
		delete options.bucket
		this.client = new S3(options)

		if (!this.options.url) {
			this.options.url = `${this.options.endpoint}/${this.options.bucket}`
		}

		this.out = new Out(`s3:${this.options.bucket}`)
	}

	_cwd(options: any = {}): any {
		return options?.bucket || this.options.bucket
	}

	bucketParams(payload: S3RequestParams = {}, params) {
		params = {
			Bucket: this.options.bucket,
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

	async _uploadContent(key, content, params) {
		const bucketParams = this.bucketParams({key, content}, params)
		await this.client.send(new PutObjectCommand(bucketParams))
		return this.makeUrl(key)
	}

	async _uploadFile(key, file_path, params) {
		const content = getFile(file_path)
		return this._uploadContent(key, content, params)
	}

	async _readContent(key?: FileId, params?: FileParams) {
		key = this.stripUrl(key)
		const buffer = objectPull(params as object, 'buffer')
		const response = await this.client.send(new GetObjectCommand(this.bucketParams({key}, params)))
		const buffered_stream = await bufferStream(response.Body as Readable)
		return buffer ? buffered_stream : buffered_stream.toString('utf8')
	}

	async _download(key?: FileId, file_path?: string, params?: FileParams) {
		const content = await this._readContent(key, params)
		return saveFile(file_path, content)
	}

	async _get(id: FileId, params?: FileParams) {
		return typeof params === 'string' ? this._download(id, params as string) : this._readContent(id, params)
	}

	async _exists(id: FileId, params?: FileParams) {
		try {
			await this.client.send(new HeadObjectCommand(this.bucketParams({key: id}, params)))
			return this.makeUrl(id)
		} catch (e) {
			// Head command does not throw any kind of detailed error, use _get to get the error
			return false
		}
	}

	async* _list(params, options = {}) {
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

	async _find(params, options = {}) {
		const files = []
		for await (const result of this._list(params, options)) {
			files.push(result.file)
		}
		return this.filterFiles(files, params)
	}

	protected parseParams(params: FileParams, data?: FileData): ParsedParams {
		params = super.parseParams(params, data)
		params.path = this.stripUrl(params.path)
		return params
	}

	async _create(data, params) {
		params = this.parseParams(params, data)
		return this._uploadContent(params.path, this._getContent(data), params)
	}

	async _update(id, data, params) {
		params = this.parseParams(params, data)
		return this._uploadContent(params.path, this._getContent(data), params)
	}

	async _patch(id, data, params) {
		params = this.parseParams(params, data)
		return this._uploadContent(params.path, this._getContent(data), params)
	}

	async _remove(id, params) {
		return this.client.send(new DeleteObjectCommand(this.bucketParams({key: id}, params)))
	}


}
