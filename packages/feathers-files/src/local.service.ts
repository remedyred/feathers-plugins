import {Out} from '@snickbit/out'
import fse from 'fs-extra'
import fg, {Options} from 'fast-glob'
import {Conflict, NotFound} from '@feathersjs/errors'
import {fileExists} from '@snickbit/node-utilities'
import {FileData, FileId, FileService, FileServiceOptions, ParsedParams} from './file.service'
import {Params} from '@feathersjs/feathers'
import {AdapterParams} from '@feathersjs/adapter-commons'

export interface LocalFileServiceOptions extends FileServiceOptions {
	cwd?: string
}

export class LocalService extends FileService {
	declare options: LocalFileServiceOptions

	constructor(options: LocalFileServiceOptions) {
		super(options)
		this.out = new Out(`files:local`)
	}

	protected parseGlobOptions(options: any): Options {
		const fg_options = [
			'concurrency',
			'deep',
			'followSymbolicLinks',
			'dot',
			'ignore',
			'suppressErrors',
			'throwErrorOnBrokenSymbolicLink',
			'absolute',
			'markDirectories',
			'objectMode',
			'onlyDirectories',
			'onlyFiles',
			'stats',
			'unique',
			'braceExpansion',
			'caseSensitiveMatch',
			'extglob',
			'globstar',
			'baseNameMatch'
		]
		const opts = {
			cwd: this.cwd(options)
		}

		for (const fg_opt of fg_options) {
			if (options[fg_opt]) {
				opts[fg_opt] = options[fg_opt]
			}
		}

		return opts
	}

	_cwd(options: any = {}): any {
		return options?.cwd || this.options.cwd || this.options.root || process.cwd()
	}

	_exists(id: FileId): boolean {
		return fileExists(this.path(id))
	}

	async _get(id: FileId): Promise<any> {
		return fse.readFile(this.path(id))
	}

	async _find(params: AdapterParams | ParsedParams): Promise<any> {
		params = this.parseParams(params)
		const {query} = this.filterQuery(params)
		if (!fileExists(params.path)) {
			return []
		}
		if (!params.path.includes('*')) {
			if (!params.path.endsWith('/')) {
				params.path += '/'
			}
			params.path += query.recursive ? '**' : '*'
		}

		const files = await fg(params.path, this.parseGlobOptions(params))

		return this.filterFiles(files, params)
	}

	async _create(data: FileData, params?: Params): Promise<string> {
		params = this.parseParams(params, data)
		this.out.info('Creating file', {data, params})
		if (await this.exists(params.path)) {
			throw new Conflict(`File already exists: ${params.path}`)
		}

		this.out.info('Actually Creating file!!', params.path)
		await fse.outputFile(params.path, this._getContent(data))
		return this.makeUrl(params.path)
	}

	async _update(id: FileId, data?: FileData): Promise<string> {
		id = this.path(id)
		if (!await this.exists(id)) {
			throw new NotFound(`File does not exist: ${id}`)
		}
		await fse.outputFile(id, this._getContent(data))
		return this.makeUrl(id)
	}

	async _patch(id: FileId, data?: FileData): Promise<string> {
		id = this.path(id)
		fse.outputFile(id, this._getContent(data))
		return this.makeUrl(id)
	}

	async _remove(id: FileId): Promise<any> {
		return fse.remove(this.path(id))
	}
}
