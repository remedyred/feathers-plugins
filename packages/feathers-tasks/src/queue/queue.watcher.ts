import {beforeExit} from '@snickbit/node-utilities'
import {Out} from '@snickbit/out'
import {isObject, parse} from '@snickbit/utilities'
import {QueueEvents, QueueEventsListener, QueueScheduler} from 'bullmq'
import {all_events, event_args, getWatcherConfig, useConnection, useQueue, WatcherConfig} from '../utilities/state'
import {jobToPayload} from './helpers'
import {QueueFeathersService} from './queue.service'

export type QueueEvent = keyof QueueEventsListener | 'all'

export interface WatcherOptions extends WatcherConfig {
	name: string
}

export class QueueWatcher {
	scheduler: QueueScheduler
	listener: QueueEvents
	queue: QueueFeathersService
	options: WatcherOptions
	out: Out

	constructor(options: WatcherOptions) {
		const {events, suppress, enabled} = getWatcherConfig()

		this.queue = useQueue(options.name)
		if (!this.queue) throw new Error(`Queue ${options.name} not found`)

		options = {
			enabled,
			events,
			suppress,
			...options
		}

		if (options.events === true) {
			options.events = all_events.slice()
		} else if (options.events === false) {
			options.events = []
		}

		options.events = (options.events || []) as QueueEvent[]
		options.suppress = options.suppress || []

		this.out = new Out(`watcher:${options.name}`)

		this.options = options
	}

	get name() {
		return this.options.name
	}

	start() {
		const connection = this.queue.connection || useConnection()

		this.out.info('Setting up queue scheduler')
		this.scheduler = new QueueScheduler(this.name, {connection})

		this.out.info('Setting up queue listener')
		this.listener = new QueueEvents(this.name, {connection})

		let events = Array.isArray(this.options.events) ? this.options.events.slice() : []
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

		beforeExit(() => this.stop())

		return this.scheduler
	}

	async stop() {
		this.out.warn('Stopping Queue Listener')
		await this.listener.close()
		this.out.warn('Stopping Queue Scheduler')
		await this.scheduler.close()
	}
}
