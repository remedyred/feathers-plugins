import {Unprocessable} from '@feathersjs/errors'
import {Model, ModelOptions, ModelSchema} from '@snickbit/feathers-model'
import {ParsedImport} from '@snickbit/node-utilities'
import {out} from '@snickbit/out'
import {objectOnly} from '@snickbit/utilities'
import {Job} from 'bullmq'
import {getApp, makeTaskItem, useQueue, useTask, useTasks} from '../utilities/helpers'

export interface TaskOptions extends ModelOptions {
	queue?: string
	logs?: boolean
	synchronous?: boolean
}

export interface TaskProgress {
	current?: number
	lastTick: number
	rate: number
	eta: number
	total: number
}

export class Task extends Model {
	looping = false

	queue: string

	declare options: TaskOptions

	private _job?: Job

	constructor(job, options: TaskOptions = {}) {
		const task = useTask(job?.name)
		if (!task) {
			out.throw(`Error finding task '${job?.name}'. Available tasks: `, Object.keys(useTasks()).join(', '))
		}

		options.queue ||= 'default'
		const service = useQueue(options.queue)
		if (!service) {
			out.throw(`Error finding queue '${options.queue}'. It may not have been initialized.`)
		}

		const schema: ModelSchema = {
			title: {type: 'string'},
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
			stage: {type: 'string'},
			status: {type: 'string'},
			_user: {type: 'string'},
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
			...options
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
		return this.get('.data.payload')
	}

	get task(): ParsedImport {
		return useTask(this.get('.name'))
	}

	private getProgress(): TaskProgress {
		const progress = this.get('.progress')
		if (progress) {
			return progress
		}

		return {
			current: 0,
			lastTick: 0,
			rate: 0,
			eta: 0,
			total: 0
		}
	}

	setTaskOut() {
		this.resetOut()
	}

	log(...args: any[]) {
		this.out.log(...args)
		if (this.options.logs) {
			this.job().then(job => {
				if (job) {
					job.log(JSON.stringify(args)).catch(error => out.error(error))
				}
			})
				.catch(error => this.out.error('Error logging to job', error))
		}
	}

	progress(progress?: TaskProgress) {
		if (progress === undefined) {
			return this.get('.progress')
		}
		return this.set('.progress', progress)
	}

	total(total?: number) {
		if (total === undefined) {
			return this.coalesce('.progress.total', 0)
		}
		return this.set('.progress.total', total)
	}

	current(current?: number) {
		if (current === undefined) {
			return this.coalesce('.progress.current', 0)
		}
		this.set('.progress.current', current)
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

	async job() {
		this._job ||= await this.service._get(this.id, {asTask: false})
		return this._job
	}

	async tick(amount = 1) {
		const progress = this.getProgress()
		const current = (progress.current || 0) + amount
		const timestamp = Date.now()

		if (progress.lastTick && progress.current) {
			const deltaProgress = current - progress.current
			const deltaTimestamp = 0.001 * (timestamp - progress.lastTick)
			const currentRate = deltaProgress / deltaTimestamp

			progress.rate = progress.rate
				? progress.rate + deltaTimestamp / (deltaTimestamp + 2.5) * (currentRate - progress.rate)
				: currentRate
		}

		if (progress.current >= progress.total) {
			progress.eta = 0
		} else if (!progress.current || !progress.rate || !progress.total) {
			progress.eta = Number.POSITIVE_INFINITY
		} else {
			progress.eta = Math.max(0, (progress.total - progress.current) / progress.rate)
		}

		progress.lastTick = timestamp
		progress.current = current
		this.set('.progress', progress)

		return this._save()
	}

	async start(stage, total = null) {
		return this.set('stage', stage).set('.progress.total', total)
			.save()
	}

	async stop(stage = 'finished', message?: any) {
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
		return this.set('.progress', progress).set('stage', stage)
			.save()
	}

	async finish(returnValue?: any) {
		await this.stop('finished', returnValue)
		return this
	}

	async fail(errorInfo: Error | {message: string}) {
		await this.stop('failed', {message: 'Task failed', ...errorInfo})
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
}
