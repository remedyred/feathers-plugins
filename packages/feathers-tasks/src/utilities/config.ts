import {Application as FeathersApplication} from '@feathersjs/feathers'
import {FeathersService} from '@feathersjs/feathers/src/declarations'
import {ParsedImportRecords} from '@snickbit/node-utilities'
import {Out} from '@snickbit/out'
import {ConnectionOptions} from 'bullmq/dist/esm/interfaces/redis-options'
import {FeathersQueueService} from '../queue/queue.adapter'
import {QueueEvent} from '../queue/queue.watcher'

export const _out = new Out('feathers-tasks')

export type EventArgs = {
	[key in QueueEvent]?: ['args', 'id'] | ['args'] | ['id']
}

export const event_args: EventArgs = {
	active: ['args', 'id'],
	added: ['args', 'id'],
	cleaned: ['args', 'id'],
	completed: ['args', 'id'],
	delayed: ['args', 'id'],
	drained: ['id'],
	error: ['args'],
	failed: ['args', 'id'],
	paused: ['args', 'id'],
	progress: ['args', 'id'],
	removed: ['args', 'id'],
	resumed: ['args', 'id'],
	'retries-exhausted': ['args', 'id'],
	stalled: ['args', 'id'],
	waiting: ['args', 'id'],
	'waiting-children': ['args', 'id']
}

/**
 * @type {QueueEvent[]}
 */
export const all_events: QueueEvent[] = [...Object.keys(event_args), 'all'] as QueueEvent[]

export interface TasksConfig {
	connection: ConnectionOptions
	defaultJobOptions: JobConfig
	watcher: WatcherConfig | boolean
	worker: WorkerConfig | boolean
	tasks: string
}

export interface JobConfig {
	attempts: number
	backoff: BackoffConfig
}

export interface BackoffConfig {
	type: string
	delay: number
	max: number
}

export interface WatcherConfig {
	enabled: boolean
	events: QueueEvent[] | boolean
	suppress: string[]
}

export interface WorkerConfig {
	enabled: boolean
	concurrency: number
	limiter: LimiterConfig
}

export interface LimiterConfig {
	max: number
	duration: number
}

export const defaultJobConfig: JobConfig = {
	attempts: 4,
	backoff: {
		type: 'exponential',
		delay: 1000,
		max: 600_000
	}
}

export const defaultWatcherConfig: WatcherConfig = {
	enabled: false,
	events: [...all_events],
	suppress: ['drained']
}

export const defaultWorkerConfig: WorkerConfig = {
	enabled: false,
	concurrency: 10,
	limiter: {
		max: 10,
		duration: 1000
	}
}

export const defaultConfig: TasksConfig = {
	connection: null,
	tasks: 'tasks',
	defaultJobOptions: {...defaultJobConfig},
	watcher: {...defaultWatcherConfig},
	worker: {...defaultWorkerConfig}
}

export interface TasksState {
	app: Application
	tasks: ParsedImportRecords
	service: FeathersService
	queues: Record<string, FeathersQueueService>
	connection: ConnectionOptions
	config: TasksConfig
}

export interface Application extends FeathersApplication {
	out: Out
}

export const state: TasksState = {
	app: null,
	tasks: null,
	service: null,
	queues: {},
	connection: null,
	config: {...defaultConfig}
}
