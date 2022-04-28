import {AdapterService} from '@feathersjs/adapter-commons'
import {Unprocessable} from '@feathersjs/errors'
import {filterResults} from '@snickbit/feathers-helpers'
import {out} from '@snickbit/out'
import {arrayWrap, isObject, objectHasMethod, objectOnly} from '@snickbit/utilities'
import {Queue} from 'bullmq'
import {Task} from '../tasks/task'
import {getConfig, useConnection} from '../utilities/state'
import {jobToPayload} from './helpers'
import {QueueWatcher} from './queue.watcher'
import {QueueWorker} from './queue.worker'

/**
 * @type QueueService
 */
export class QueueService extends AdapterService {

	/**
	 * @type {Partial<QueueServiceOptions>}
	 */
	options

	/**
	 * @param {Partial<QueueServiceOptions>} options
	 */
	constructor(options) {
		if (typeof options === 'string') options = {name: /** @type {string} */ options}
		if (!options.name) options.name = 'default'

		super(options)
		this.out = out.app(`queue:${options.name}`)

		this.options = {
			...objectOnly(getConfig(), ['defaultJobOptions', 'limiter', 'streams', 'watcher', 'worker']),
			id: 'id',
			events: ['created', 'updated', 'patched', 'removed'],
			paginate: {},
			multi: true,
			filters: ['$asPayload'],
			whitelist: [],
			Model: Task,
			...options
		}

		if (!isObject(this.options.watcher)) {
			this.options.watcher = {enabled: this.options.watcher}
		}

		if (!isObject(this.options.worker)) {
			this.options.worker = {enabled: this.options.worker}
		}

		if (this.options.watcher?.events) {
			this.options.events = this.options.watcher.events
		}

		this.queueOptions = objectOnly(this.options, ['defaultJobOptions', 'limiter', 'streams'])
		this.queueOptions.connection = this.options?.connection || useConnection()

		this.out = out.app(`queue:${this.options.name}`)

		this.out.extra(objectOnly(this.options, ['defaultJobOptions', 'name'])).ev(5).verbose('Setting up BullMQ Redis connection')
		this.queue = new Queue(this.name, this.queueOptions)

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

	get Model() {
		return this.options.Model
	}

	get name() {
		return this.options.name
	}

	asModel(job, options) {
		return new this.Model(job, options)
	}

	async startWorker() {
		if (!this.worker && this.options.worker) {
			this.worker = new QueueWorker({
				name: this.name,
				...(isObject(this.options.worker) ? this.options.worker : getConfig().worker)
			})
		}

		if (!this.worker) {
			return this.out.throw('Error creating worker', this.options)
		}

		return this.worker.start()
	}

	async startWatcher() {
		if (!this.watcher && this.options.watcher) {
			this.watcher = new QueueWatcher({
				name: this.name,
				...(isObject(this.options.watcher) ? this.options.watcher : getConfig().watcher)
			})
		}
		return this.watcher.start()
	}

	async pause() {
		return this.queue.pause()
	}

	async resume() {
		return this.queue.resume()
	}

	async isPaused() {
		return this.queue.isPaused()
	}

	async drain() {
		return this.queue.drain()
	}

	async clean(grace, limit, type) {
		return this.queue.clean(grace, limit, type)
	}

	async obliterate() {
		return this.queue.obliterate()
	}

	async retryJobs() {
		return this.queue.retryJobs()
	}

	async trimEvents(maxLength) {
		return this.queue.trimEvents(maxLength)
	}

	async getEntries(params = {}) {
		const {query} = this.filterQuery(params)

		return this._find(Object.assign({}, params, {
			paginate: false,
			query
		}))
	}

	async _find(params) {
		let types = []
		if (params?.query?.status) {
			types = arrayWrap(params.query.status)
			delete params.query.status
		}
		if (types.includes('waiting')) types.push('paused')
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
			if (fetched_job_ids.length === 0) break

			// filter out jobs that have already been fetched
			fetched_job_ids = fetched_job_ids.filter(job_id => !job_ids.includes(job_id))

			// add filtered job_ids to list of fetched job_ids
			job_ids = job_ids.concat(fetched_job_ids)
			const fetched_jobs = await Promise.all(fetched_job_ids.map(job_id => this._get(job_id, params)))

			// filter jobs
			const filtered_jobs = filterResults(fetched_jobs, {...params, paginate: false}, this.options)

			// add filtered jobs to jobs array
			jobs = jobs.concat(filtered_jobs)

			// increment start by fetched_job_ids.length
			start += fetched_job_ids.length

			// if end is reached, break
			if (end === -1 || jobs.length >= end) break
		}

		return filterResults(jobs, params, this.options)
	}

	async _get(id, params = {}) {
		if (!this.queue) this.setup()
		const job = await this.queue.getJob(id)
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
		} else {
			return this.asModel(job)
		}
	}

	async _create(data, params) {
		const {payload, options} = this.prepParams(data, params)
		const job = await this.queue.add(payload.name, payload.data, options)
		return this.asModel(job)
	}

	async _update(id, data, params) {
		const {payload, options} = this.prepParams(data, params, id)

		/** @type {Job} */
		const job = await this.queue.getJob(id)
		if (!job) throw new Unprocessable(`Job not found`, {id})

		if (payload.data) {
			await job.update(payload.data)
		}
		if (payload.progress) {
			await job.updateProgress(payload.progress)
		}

		return this.asModel(job, options)
	}

	async _patch(id, data, params) {
		const patchEntry = async entry => this._update(entry[this.id], entry, params)

		if (id === null) {
			const entries = await this.getEntries(data)
			return entries.map(patchEntry)
		}
		return patchEntry(data)
	}

	async _remove(id, params) {
		if (id === null) {
			const entries = await this.getEntries(params)
			return Promise.all(entries.map(current => this.queue.remove(current[this.id])))
		}
		return this.queue.remove(id)
	}

	prepParams(request, context, id) {
		let payload = {}
		let options = {}

		if (objectHasMethod(request, 'toJSON')) request = request.toJSON()

		if (request.payload) {
			request.data = {
				payload: request.payload
			}
			delete request.payload
		}

		payload.data = request.data || {}

		if (!id) {
			let job_name = request.job || request.name || payload.data?.name
			if (!job_name) throw new Unprocessable('Missing required job name', request)

			payload.name = job_name
		}

		if (request.progress) payload.progress = request.progress
		if (request.options) options = request.options

		if (context?.user?._id) {
			payload.data._user = context.user._id
		}

		return {
			payload,
			options
		}
	}
}
