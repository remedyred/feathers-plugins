import {beforeExit} from '@snickbit/node-utilities'
import {Out} from '@snickbit/out'
import {QueueEvents, QueueEventsListener, QueueScheduler} from 'bullmq'
import {all_events, WatcherConfig} from '../utilities/config'
import {getWatcherConfig, useConnection, useQueue} from '../utilities/helpers'
import {jobToPayload} from './helpers'
import {FeathersQueueService} from './queue.adapter'

export type BullQueueEvent = keyof QueueEventsListener

export type QueueEvent = BullQueueEvent | 'all'

export interface WatcherOptions extends WatcherConfig {
	name: string
}

export interface JobEventData {
	jobId?: string
	failedReason?: string
	prev?: string
	delay?: number
	returnvalue?: string
	count?: string
	name?: string
	opts?: string
	data?: number | object | string
	attemptsMade?: string
}

export class QueueWatcher {
	scheduler: QueueScheduler

	listener: QueueEvents

	queue: FeathersQueueService

	options: WatcherOptions

	out: Out

	constructor(options: WatcherOptions) {
		const {events, suppress, enabled} = getWatcherConfig()

		this.queue = useQueue(options.name)
		if (!this.queue) {
			throw new Error(`Queue ${options.name} not found`)
		}

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

		this.out.debug(`Listening for queue events: ${events.join(', ')}`)

		if (events.includes('all')) {
			events = events.filter(event => event !== 'all')
		}

		for (const event of events as BullQueueEvent[]) {
			this.listener.on(event, this.handleEvent.bind(this, event))
		}

		this.out.verbose('Watcher Started')

		beforeExit(() => this.stop())

		return this.scheduler
	}

	private async handleEvent(event: 'active', args: {jobId: string; prev?: string}, id: string): Promise<void>
	private async handleEvent(event: 'added', args: {jobId: string; name: string; data: string; opts: string}, id: string): Promise<void>
	private async handleEvent(event: 'cleaned', args: {count: string}, id: string): Promise<void>
	private async handleEvent(event: 'completed', args: {jobId: string; returnvalue: string; prev?: string}, id: string): Promise<void>
	private async handleEvent(event: 'delayed', args: {jobId: string; delay: number}, id: string): Promise<void>
	private async handleEvent(event: 'drained', id: string): Promise<void>
	private async handleEvent(event: 'error', args: Error): Promise<void>
	private async handleEvent(event: 'failed', args: {jobId: string; failedReason: string; prev?: string}): Promise<void>
	private async handleEvent(event: 'paused', args: Record<string, never>, id: string): Promise<void>
	private async handleEvent(event: 'progress', args: {jobId: string; data: number | object}, id: string): Promise<void>
	private async handleEvent(event: 'removed', args: {jobId: string}, id: string): Promise<void>
	private async handleEvent(event: 'resumed', args: Record<string, never>, id: string): Promise<void>
	private async handleEvent(event: 'retries-exhausted', args: {jobId: string; attemptsMade: string}, id: string): Promise<void>
	private async handleEvent(event: 'stalled', args: {jobId: string}, id: string): Promise<void>
	private async handleEvent(event: 'waiting', args: {jobId: string}, id: string): Promise<void>
	private async handleEvent(event: 'waiting-children', args: {jobId: string}, id: string): Promise<void>
	private async handleEvent(event: BullQueueEvent, argsOrIdOrError?: Error | JobEventData | string, optionalId?: string): Promise<void> {
		let data: any = {}
		let id: string

		if (typeof argsOrIdOrError === 'string') {
			id = argsOrIdOrError
		} else if (argsOrIdOrError instanceof Error) {
			data = {error: argsOrIdOrError}
		} else {
			id = optionalId
			data = argsOrIdOrError
		}

		if (id) {
			const job = await this.queue.$get(id, {asTask: false})
			data = jobToPayload(job)
		}

		this.out.label(event).verbose(data)
		this.queue.emit(event, data)
		this.queue.emit('all', {event, ...data})
	}

	async stop() {
		this.out.warn('Stopping Queue Listener')
		await this.listener.close()
		this.out.warn('Stopping Queue Scheduler')
		await this.scheduler.close()
	}
}
