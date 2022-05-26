import {AdapterParams} from '@feathersjs/adapter-commons'
import {Conflict, NotFound} from '@feathersjs/errors'
import {Params} from '@feathersjs/feathers'
import {fileExists} from '@snickbit/node-utilities'
import {Out} from '@snickbit/out'
import {FileData, FileId, FileService, FileServiceOptions, ParsedParams} from './file.service'
import fg, {Options} from 'fast-glob'
import fse from 'fs-extra'

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
		const opts = {cwd: this.cwd(options)}

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
		const parsed = this.parseParams(params)
		const {query} = this.filterQuery(params)
		if (!fileExists(parsed.path)) {
			return []
		}
		if (!parsed.path.includes('*')) {
			if (!parsed.path.endsWith('/')) {
				parsed.path += '/'
			}
			parsed.path += query.recursive ? '**' : '*'
		}

		const files = await fg(parsed.path, this.parseGlobOptions(parsed))

		return this.filterFiles(files, params)
	}

	async _create(data: FileData, params?: Params): Promise<string> {
		const parsed = this.parseParams(params)
		this.out.info('Creating file', {data, parsed})
		if (await this.exists(parsed.path)) {
			throw new Conflict(`File already exists: ${parsed.path}`)
		}

		this.out.info('Actually Creating file!!', parsed.path)
		await fse.outputFile(parsed.path, this._getContent(data))
		return this.makeUrl(parsed.path)
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
