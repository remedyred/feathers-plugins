import {AdapterBase, AdapterParams as Params, AdapterServiceOptions, filterQuery, PaginationOptions} from '@feathersjs/adapter-commons'
import {Unprocessable} from '@feathersjs/errors'
import {FeathersService, Paginated} from '@feathersjs/feathers'
import {filterResults} from '@snickbit/feathers-helpers'
import {Out} from '@snickbit/out'
import {arrayWrap, objectOnly} from '@snickbit/utilities'
import {Job as JobBase, Queue} from 'bullmq'
import {ObliterateOpts} from 'bullmq/dist/esm/classes/queue'
import {ConnectionOptions} from 'bullmq/dist/esm/interfaces/redis-options'
import {FinishedStatus} from 'bullmq/dist/esm/types'
import {Task} from '../tasks/task'
import {defaultWatcherConfig, defaultWorkerConfig, WatcherConfig, WorkerConfig} from '../utilities/config'
import {booleanConfig, getConfig, useConnection} from '../utilities/helpers'
import {jobToPayload} from './helpers'
import {QueueWatcher, WatcherOptions} from './queue.watcher'
import {QueueWorker, WorkerOptions} from './queue.worker'
import QueueService from './queue.service'

export interface QueueParams extends Params {
	asTask?: boolean
}

export interface QueueServiceOptions extends AdapterServiceOptions {
	name: string
	defaultJobOptions?: JobOptions
	watcher?: WatcherOptions | boolean
	worker?: WorkerOptions | boolean
	Model?: any
	connection?: any
}

export interface QueueServiceConfig extends AdapterServiceOptions {
	name: string
	defaultJobOptions?: JobOptions
	watcher?: WatcherConfig
	worker?: WorkerConfig
	Model?: any
	connection?: any
}

export type JobId = string
export type NullableJobId = string

export interface JobOptions {
	attempts?: number
	backoff?: BackoffOptions
}

export interface BackoffOptions {
	type?: string
	delay?: number
	max?: number
}

export interface BullJob extends JobBase {
	status?: string
}

export interface TaskRequestBase {
	name?: string
	job?: string
	payload?: any
	data?: any
	progress?: TaskProgress
	options?: any
	toJSON?(): TaskRequest
}

export interface TaskProgress {
	total?: number
	current?: number
}

export interface TaskRequestModel {
	toJSON(): TaskRequest
}

export interface TaskPayload {
	data: any
	name: string
	progress: TaskProgress
}

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
	{
	[K in Keys]-?: Partial<Pick<T, Exclude<Keys, K>>> & Required<Pick<T, K>>
}[Keys] & Pick<T, Exclude<keyof T, Keys>>

export type TaskRequest = RequireAtLeastOne<TaskRequestBase, 'job' | 'name'>

export type FeathersQueueService = FeathersService & QueueService

export class QueueAdapter extends AdapterBase {
	declare options: QueueServiceConfig

	queueOptions: any

	out: Out

	queue: Queue

	worker: QueueWorker

	watcher: QueueWatcher

	connection: ConnectionOptions

	constructor(options: QueueServiceOptions) {
		if (typeof options === 'string') {
			options = {name: options}
		}
		if (!options.name) {
			options.name = 'default'
		}

		super(options)
		this.out = new Out(`queue:${options.name}`)

		const {defaultJobOptions, watcher, worker} = getConfig()

		const _options = {
			id: 'id',
			events: [
				'created',
				'updated',
				'patched',
				'removed'
			],
			paginate: {},
			multi: true,
			filters: ['$asPayload'],
			operators: [],
			Model: Task,
			defaultJobOptions,
			watcher,
			worker,
			...options
		}

		_options.watcher = booleanConfig(_options.watcher, defaultWatcherConfig) as WatcherConfig
		_options.worker = booleanConfig(_options.watcher, defaultWorkerConfig) as WorkerConfig

		this.queueOptions = objectOnly(_options, ['defaultJobOptions', 'limiter', 'streams'])
		this.queueOptions.connection = this.connection = _options?.connection || useConnection()

		this.out = new Out(`queue:${_options.name}`)

		this.out.extra(objectOnly(_options, ['defaultJobOptions', 'name'])).ev(5)
			.verbose('Setting up BullMQ Redis connection')
		this.queue = new Queue(_options.name, this.queueOptions)

		this.options = _options as QueueServiceConfig

		this.queue.waitUntilReady().then(() => {
			if (this.options.watcher.enabled) {
				this.out.warn('Setting up queue watcher')
				this.startWatcher().catch(this.out.error)
			}

			if (this.options.worker.enabled) {
				this.out.warn('Setting up queue worker')
				this.startWorker().catch(this.out.error)
			}
		})
	}

	get id() {
		return this.options.id
	}

	get Model() {
		return this.options.Model
	}

	get name() {
		return this.options.name
	}

	asModel(job, options?) {
		return new this.Model(job, options)
	}

	prepParams(data: Partial<BullJob> | TaskRequest | TaskRequestModel, context, id?) {
		const payload: Partial<TaskPayload> = {}
		let options = {}

		const request: TaskRequest = 'toJSON' in data ? data.toJSON() : data as TaskRequest

		if (request.payload) {
			request.data = {payload: request.payload}
			delete request.payload
		}

		payload.data = request.data || {}

		if (!id) {
			const job_name = request?.job || request?.name || payload.data?.name
			if (!job_name) {
				throw new Unprocessable('Missing required job name', request)
			}

			payload.name = job_name
		}

		if (request.progress) {
			payload.progress = request.progress
		}
		if (request.options) {
			options = request.options
		}

		if (context?.user?._id) {
			payload.data._user = context.user._id
		}

		return {
			payload,
			options
		}
	}

	async startWorker() {
		if (!this.worker && this.options.worker) {
			this.worker = new QueueWorker({
				name: this.name,
				...this.options.worker
			})
		}

		if (!this.worker) {
			return this.out.throw('Error creating worker', this.options)
		}

		return this.worker.start()
	}

	async startWatcher() {
		if (!this.watcher && this.options.watcher && this.options.watcher.enabled) {
			this.watcher = new QueueWatcher({
				name: this.name,
				...this.options.watcher
			})
		}
		return this.watcher.start()
	}

	async pause(): Promise<void> {
		return this.queue.pause()
	}

	async resume(): Promise<void> {
		return this.queue.resume()
	}

	async isPaused(): Promise<boolean> {
		return this.queue.isPaused()
	}

	async drain(delayed?: boolean): Promise<void> {
		return this.queue.drain(delayed)
	}

	async clean(grace: number, limit: number, type?: 'active' | 'completed' | 'delayed' | 'failed' | 'paused' | 'wait'): Promise<string[]> {
		return this.queue.clean(grace, limit, type)
	}

	async obliterate(opts?: ObliterateOpts): Promise<void> {
		return this.queue.obliterate(opts)
	}

	async retryJobs(opts?: {count?: number; state?: FinishedStatus; timestamp?: number}): Promise<void> {
		return this.queue.retryJobs(opts)
	}

	async trimEvents(maxLength: number): Promise<number> {
		return this.queue.trimEvents(maxLength)
	}

	async getEntries(params: Partial<QueueParams>): Promise<BullJob[]> {
		const {query} = filterQuery(params)
		return await this.$find({
			...params,
			query,
			paginate: false
		}) as unknown as any[]
	}

	async $create(data: Partial<BullJob>, params?: QueueParams): Promise<any>
	async $create(data: Partial<BullJob>[], params?: QueueParams): Promise<any[]>
	async $create(data: Partial<BullJob> | Partial<BullJob>[], params?: QueueParams): Promise<any>
	async $create(data: Partial<BullJob> | Partial<BullJob>[], params?: QueueParams): Promise<any[] | any> {
		if (Array.isArray(data)) {
			return Promise.all(data.map(current => this.$create(current, params)))
		}
		const {payload, options} = this.prepParams(data, params)
		const job = await this.queue.add(payload.name, payload.data, options)
		return this.asModel(job)
	}

	async $find(params?: QueueParams & {paginate?: PaginationOptions}): Promise<Paginated<any>>
	async $find(params?: QueueParams & {paginate: false}): Promise<any[]>
	async $find(params: QueueParams = {} as QueueParams): Promise<any[] | Paginated<any>> {
		let types = []
		if (params?.query?.status) {
			types = arrayWrap(params.query.status)
			delete params.query.status
		}
		if (types.includes('waiting')) {
			types.push('paused')
		}
		let start = params?.query?.$skip || 0
		const end = params?.query?.$limit || -1
		const asc = String(params?.query?.$sort).toLowerCase() === 'asc'

		let job_ids = []
		let jobs = []
		// eslint-disable-next-line no-constant-condition
		while (true) {
			// get all jobs in range
			let fetched_job_ids = await this.queue.getRanges(types, start, end, asc)

			// if no jobs, break
			if (fetched_job_ids.length === 0) {
				break
			}

			// filter out jobs that have already been fetched
			fetched_job_ids = fetched_job_ids.filter(job_id => !job_ids.includes(job_id))

			// add filtered job_ids to list of fetched job_ids
			job_ids = [...job_ids, ...fetched_job_ids]
			const fetched_jobs = await Promise.all(fetched_job_ids.map(job_id => this.$get(job_id, params)))

			// filter jobs
			const filtered_jobs = filterResults(fetched_jobs, {...params}, this.options) as any[]

			// add filtered jobs to jobs array
			jobs = [...jobs, ...filtered_jobs]

			// increment start by fetched_job_ids.length
			start += fetched_job_ids.length

			// if end is reached, break
			if (end === -1 || jobs.length >= end) {
				break
			}
		}

		return filterResults(jobs, params, this.options)
	}

	async $get(id: JobId, params?: QueueParams): Promise<BullJob | any> {
		const job: BullJob = await this.queue.getJob(id as string)
		if (job) {
			job.status = await job.getState()
			if (job.data) {
				job.data.status = job.status
			}
		}
		if (params?.query?.$asPayload) {
			return jobToPayload(job)
		} else if (params.asTask === false) {
			return job
		}
		return this.asModel(job)
	}

	async $update(id: JobId, data: Partial<BullJob>, params: QueueParams = {} as QueueParams): Promise<any> {
		const {payload, options} = this.prepParams(data, params, id)
		const job = await this.queue.getJob(id)
		if (!job) {
			throw new Unprocessable(`Job not found`, {id})
		}

		if (payload.data) {
			await job.update(payload.data)
		}
		if (payload.progress) {
			await job.updateProgress(payload.progress)
		}

		return this.asModel(job, options)
	}

	async $patch(id: null, data: Partial<BullJob>, params?: QueueParams): Promise<any[]>
	async $patch(id: JobId, data: Partial<BullJob>, params?: QueueParams): Promise<any>
	async $patch(id: NullableJobId, data: Partial<BullJob>, params?: QueueParams): Promise<any>
	async $patch(id: NullableJobId, data: Partial<BullJob>, params?: QueueParams): Promise<any[] | any> {
		const patchEntry = async entry => this.$update(entry[this.id], entry, params)

		if (id === null) {
			const entries = await this.getEntries(params)
			return Promise.all(entries.map(entry => patchEntry(entry)))
		}
		return patchEntry(data)
	}

	async $remove(id: null, params?: QueueParams): Promise<BullJob[]>
	async $remove(id: JobId, params?: QueueParams): Promise<BullJob>
	async $remove(id: NullableJobId, params?: QueueParams): Promise<BullJob>
	async $remove(id: NullableJobId, params?: QueueParams): Promise<BullJob | BullJob[]> {
		if (id === null) {
			const entries = await this.getEntries(params)
			return Promise.all(entries.map(current => this.$remove(current[this.id] as JobId)))
		}

		const entry = this.$get(id, params)
		await this.queue.remove(id as string)
		return entry
	}
}
