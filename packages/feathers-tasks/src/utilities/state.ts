import {fileExists, ImportRecord, parseImports} from '@snickbit/node-utilities'
import {Out} from '@snickbit/out'
import {objectExcept, typeOf} from '@snickbit/utilities'
import path from 'path'
import {Application as FeathersApplication} from '@feathersjs/feathers'
import {RedisConnection} from 'bullmq'
import {QueueEvent} from '../queue/queue.watcher'
import Redis from 'ioredis'
import {FeathersService} from '@feathersjs/feathers/src/declarations'
import {booleanConfig} from './helpers'
import {QueueFeathersService} from '../queue/queue.service'

export const _out = new Out('feathers-tasks')

export type EventArgs = {
	[key in QueueEvent]?: ['args', 'id'] | ['id'] | ['args']
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
export const all_events: QueueEvent[] = Object.keys(event_args).concat(['all']) as QueueEvent[]

export type ConnectionConfig = Redis | RedisConnection | string

export interface TasksConfig {
	connection: ConnectionConfig
	defaultJobOptions: JobConfig
	watcher: WatcherConfig | boolean
	worker: WorkerConfig | boolean
	tasks: ImportRecord | string
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
	events: string[] | boolean
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
		max: 600000
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
	defaultJobOptions: {
		...defaultJobConfig
	},
	watcher: {
		...defaultWatcherConfig
	},
	worker: {
		...defaultWorkerConfig
	}
}

export interface TasksState {
	app: Application
	tasks: ImportRecord
	service: FeathersService
	queues: Record<string, QueueFeathersService>
	connection: ConnectionConfig
	config: TasksConfig
}

export interface Application extends FeathersApplication {
	out: Out;
}

export let state: TasksState = {
	app: null,
	tasks: null,
	service: null,
	queues: {},
	connection: null,
	config: {...defaultConfig}
}

export function setConnection(connection: ConnectionConfig) {
	state.connection = connection
}

export function useConnection() {
	return state.connection
}

export function setConfig(newConfig: TasksConfig) {
	state.config = {...state.config, ...objectExcept(newConfig, ['connection'])}
}

export function getConfig(): TasksConfig {
	return {...state.config}
}

export function getWatcherConfig(): WatcherConfig {
	return booleanConfig(state.config.watcher, defaultWatcherConfig)
}

export function getWorkerConfig(): WorkerConfig {
	return booleanConfig(state.config.worker, defaultWorkerConfig)
}

export function setApp(app: Application) {
	state.app = app
}

export function getApp(): Application {
	return state.app
}

export function getTasksDir(tasks: string): string {
	if (!tasks) return null
	let base = path.dirname(tasks)
	if (base === '.') base = process.cwd()
	let dir = path.isAbsolute(tasks) ? tasks : path.join(base, tasks)
	tasks = path.basename(tasks)
	if (!fileExists(dir)) {
		dir = path.join(base, 'lib', tasks)
	}
	if (!fileExists(dir)) {
		dir = path.join(base, 'src', tasks)
	}
	if (!fileExists(dir)) {
		return null
	} else {
		return dir
	}
}

export function setTaskStore(tasks) {
	if (typeOf(tasks) === 'string') {
		const task_dir = getTasksDir(tasks)
		_out.verbose(`Importing tasks from:: ${task_dir}`)
		try {
			/* eslint @typescript-eslint/no-var-requires: off */
			const t = require(task_dir)
			const tasks = parseImports(t.default || t)
			_out.verbose(`Loaded ${Object.keys(tasks).length} tasks`)
			return storeTasks(tasks)
		} catch (e) {
			_out.error('Error loading task store', e)
		}
	} else {
		return storeTasks(tasks)
	}
}

function storeTasks(tasks) {
	if (!tasks) {
		_out.error('No tasks found')
		return
	}

	state.tasks = tasks
}

export function useQueue(name) {
	return state.queues[name]
}

export function useTasks() {
	return state.tasks || {}
}

export function useTask(name) {
	return state?.tasks && state.tasks[name]
}
