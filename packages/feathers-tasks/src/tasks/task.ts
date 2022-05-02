import {Unprocessable} from '@feathersjs/errors'
import {Model} from '@snickbit/feathers-model'
import {out} from '@snickbit/out'
import {objectOnly} from '@snickbit/utilities'
import {Job} from 'bullmq'
import {makeTaskItem} from '../utilities/helpers'
import {getApp, useQueue, useTask, useTasks} from '../utilities/state'

/** @class {TaskInstance} Task */
export class Task extends Model {
	public _job: any
	public set: any
	public is_new: any
	public id: any
	public resetOut: any
	public options: any
	public get: any
	public service: any
	public out: any
	public coalesce: any
	public _save: any
	public push: any
	public data: any
	looping = false

	constructor(job, options = {}) {
		const task = useTask(job?.name)
		if (!task) {
			return out.throw(`Error finding task '${job?.name}'. Available tasks: `, Object.keys(useTasks()).join(', '))
		}

		options.queue = options.queue || 'default'
		const service = useQueue(options.queue)
		if (!service) {
			return out.throw(`Error finding queue '${options.queue}'. It may not have been initialized.`)
		}

		const schema = {
			title: {
				type: 'string'
			},
			payload: {
				type: ['object', 'array'],
				default: {}
			},
			results: {
				type: ['object', 'array'],
				default: {}
			},
			items: {
				type: 'array',
				default: []
			},
			stage: {
				type: 'string'
			},
			status: {
				type: 'string'
			},
			_user: {
				type: 'string'
			},
			_created: {
				type: 'date',
				default: new Date()
			},
			_updated: {
				type: 'date',
				default: new Date()
			}
		}

		options = {
			name: 'Task',
			id: 'id',
			root: 'data',
			logs: false,
			strict: true,
			schema,
			service,
			...(options || {})
		}

		options.disableCommit = !!options?.synchronous

		if (!job.data && job.payload) {
			job.data = objectOnly(job, Object.keys(schema))
		}

		super(job.data, options)

		if (job instanceof Job) {
			this._job = job
		}

		this.set('.id', job.id)
		this.set('.name', job.name)
		this.is_new = !this.id
		this.resetOut()
	}

	get name() {
		return this.options.name
	}

	get payload() {
		return this.get('payload')
	}

	get task() {
		return useTask(this.get('.name'))
	}

	async job() {
		if (!this._job) {
			this._job = await this.service._get(this.id, {asTask: false})
		}
		return this._job
	}

	log(...args) {
		this.out.log(...args)
		if (this.options.logs) {
			this.job().then(job => {
				if (job) job.log(...args)
			}).catch(e => this.out.error('Error logging to job', e))
		}
	}

	progress(progress) {
		if (progress === undefined) {
			return this.get('.progress')
		}
		return this.set('.progress', progress)
	}

	total(total) {
		if (total === undefined) {
			return this.coalesce('.progress.total', 0)
		}
		return this.set('.progress.total', total)
	}

	current(current) {
		if (current === undefined) {
			return this.coalesce('.progress.current', 0)
		}
		this.set('.progress.current', current)
	}

	async tick(amount = 1) {
		let progress = this.get('.progress')
		let current = (progress.current || 0) + amount
		let timestamp = Date.now()

		if (progress.lastTick && progress.current) {
			const deltaProgress = current - progress.current
			const deltaTimestamp = 0.001 * (timestamp - progress.lastTick)
			const currentRate = deltaProgress / deltaTimestamp

			progress.rate = !progress.rate ? currentRate : progress.rate + (deltaTimestamp / (deltaTimestamp + 2.5)) * (currentRate - progress.rate)
		}

		if (progress.current >= progress.total) {
			progress.eta = 0
		} else if (!progress.current || !progress.rate || !progress.total) {
			progress.eta = Infinity
		} else {
			progress.eta = Math.max(0, (progress.total - progress.current) / progress.rate)
		}

		progress.lastTick = timestamp
		progress.current = current
		this.set('.progress', progress)

		return this._save()
	}

	item(id, options = {}) {
		return makeTaskItem(this.get('items').find(item => item.id === id), this, options)
	}

	items(items?, options = {}) {
		if (items === undefined) {
			return this.get('items').map(item => makeTaskItem(item, this, options))
		}
		this.push('items', ...items)
		return this
	}

	loop() {
		this.looping = true
		const items = this.items()
		this.total(items.length)
		return items
	}

	async start(stage, total = null) {
		return this.set('stage', stage).set('.progress.total', total).save()
	}

	async stop(stage = 'finished', message = null) {
		const progress = this.get('.progress')
		if (progress) {
			progress.current = progress.total
			progress.eta = 0
			delete progress.rate
			delete progress.lastTick
		}
		if (message) {
			this.set('.message', message)
		}
		return this.set('.progress', progress).set('stage', stage).save()
	}

	async finish(returnValue) {
		await this.stop('finished', returnValue)
		return this
	}

	async fail(errorInfo = {message: 'Task failed'}) {
		await this.stop('failed', errorInfo)
		return this
	}

	/**
	 * Run the task
	 * @returns {Promise<*>}
	 */
	async run() {
		if (!this.task) {
			throw new Unprocessable(`Task ${this.get('.name')} does not exist`)
		}
		return await this.task.handler(this, getApp())
	}

	toJSON() {
		return this.data.get()
	}
}
