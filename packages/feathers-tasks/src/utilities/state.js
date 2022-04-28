import {fileExists, importsToTasks} from '@snickbit/node-utilities'
import {out} from '@snickbit/out'
import {objectExcept, typeOf} from '@snickbit/utilities'
import path from 'path'

export const _out = out.app('feathers-tasks')

export const event_args = {
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
export const all_events = Object.keys(event_args).concat(['all'])

export const defaultConfig = {
	connection: null,
	tasks: 'tasks',
	defaultJobOptions: {
		attempts: 4,
		backoff: {
			type: 'exponential',
			delay: 1000,
			max: 600000
		}
	},
	watcher: {
		enabled: false,
		events: all_events.slice(),
		suppress: ['drained']
	},
	worker: {
		enabled: false,
		concurrency: 10,
		limiter: {
			max: 10,
			duration: 1000
		},
		sandbox: false
	}
}

export let state = {
	app: null,
	tasks: null,
	service: null,
	queues: {},
	connection: null,
	config: {...defaultConfig}
}

export function setConnection(connection) {
	state.connection = connection
}

export function useConnection() {
	return state.connection
}

export function setConfig(newConfig) {
	state.config = {...state.config, ...objectExcept(newConfig, ['connection'])}
}

export function getConfig() {
	return {...state.config}
}

export function setApp(app) {
	state.app = app
}

export function getApp() {
	return state.app
}

export function getTasksDir(tasks) {
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
			const tasks = importsToTasks(t.default || t)
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
		_out.alert('No tasks found')
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
