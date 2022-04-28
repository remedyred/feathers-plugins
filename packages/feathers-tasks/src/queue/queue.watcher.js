import {cleanup} from '@snickbit/node-utilities'
import {out} from '@snickbit/out'
import {isObject, objectOnly, parse} from '@snickbit/utilities'
import {QueueEvents, QueueScheduler} from 'bullmq'
import {all_events, event_args, getConfig, useConnection, useQueue} from '../utilities/state'
import {jobToPayload, parseQueueChildOptions} from './helpers'

export class QueueWatcher {
	/** @type {QueueScheduler} */
	scheduler

	/** @type {QueueEvents} */
	listener

	/** @type {QueueWatcherOptions} */
	options

	/**
	 * @param {QueueWatcherOptions} options
	 */
	constructor(options) {
		options = parseQueueChildOptions(options)

		this.options = {
			...objectOnly(getConfig(), ['events', 'suppress']),
			...options,
			connection: options.connection || useConnection()
		}

		if (this.options.events === true) {
			this.options.events = all_events.slice()
		}

		this.options.events = this.options.events || []
		this.options.suppress = this.options.suppress || []

		this.out = out.app(`watcher:${this.options.name}`)
	}

	start() {
		const connection = this.options?.connection || useConnection()

		const queue = this.options.queue || useQueue(this.options.name)
		if (!queue) throw new Error(`Queue ${this.options.name} not found`)

		this.out.info('Setting up queue scheduler')
		this.scheduler = new QueueScheduler(queue.name, {connection})

		this.out.info('Setting up queue listener')
		this.listener = new QueueEvents(queue.name, {connection})

		let events = this.options.events.slice()
		events = events.filter(event => !this.options.suppress.includes(event))

		this.out.debug('Listening for queue events: ' + events.join(', '))

		let all = events.includes('all')
		if (all) events.splice(events.indexOf('all'), 1)

		for (let event of events) {
			this.listener.on(event, async (...args) => {
				let data = {}
				for (let event_arg of event_args[event]) {
					const value = parse(args.shift())
					if (isObject(value)) {
						data = {...data, ...value}
					} else {
						data[event_arg] = value
					}
				}

				const jobId = data.jobId || data.id

				if (jobId) {
					const job = await queue._get(jobId, {asTask: false})
					data = jobToPayload(job)
				}

				this.out.label(event).verbose(data)
				queue.emit(event, data)
				if (all) {
					queue.emit('all', {event, ...data})
				}
			})
		}

		this.out.verbose('Watcher Started')

		cleanup(() => this.stop())

		return this.scheduler
	}

	async stop() {
		this.out.warn('Stopping Queue Listener')
		await this.listener.close()
		this.out.warn('Stopping Queue Scheduler')
		await this.scheduler.close()
	}
}
