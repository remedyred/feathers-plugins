import {TaskItem} from '../tasks/task.item'
import {objectExcept} from '@snickbit/utilities'
import path from 'path'
import {fileExists, ImportRecords, parseImports, RecordOfImportRecords} from '@snickbit/node-utilities'
import {_out, Application, defaultWatcherConfig, defaultWorkerConfig, state, TasksConfig, WatcherConfig, WorkerConfig} from './config'
import {FeathersQueueService} from '../queue/queue.service'
import {ConnectionOptions} from 'bullmq/dist/esm/interfaces/redis-options'

export function makeTaskItem(value, self, options = {}) {
	return value instanceof TaskItem ? value : new TaskItem(value, self, options)
}

export function booleanConfig(value: boolean | any, defaultValue: any): any {
	if (value === false) {
		return {
			...defaultValue,
			enabled: false
		}
	} else if (value === true) {
		return {
			...defaultValue,
			enabled: true
		}
	} else {
		return {...value}
	}
}

export function setConnection(connection: ConnectionOptions) {
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
		dir = path.join(base, 'dist', tasks)
	}
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

export async function setTaskStore(tasks: ImportRecords): Promise<void>;
export async function setTaskStore(tasks: RecordOfImportRecords): Promise<void>;
export async function setTaskStore(directory: string): Promise<void>;
export async function setTaskStore(tasksOrDirectory: ImportRecords | RecordOfImportRecords | string): Promise<void> {
	let tasks: ImportRecords | RecordOfImportRecords

	if (typeof tasksOrDirectory === 'string') {
		const task_dir = getTasksDir(tasksOrDirectory)
		_out.verbose(`Importing tasks from:: ${task_dir}`)
		try {
			/* eslint @typescript-eslint/no-var-requires: off */
			tasks = require(tasksOrDirectory)
		} catch (e) {
			_out.error('Error loading task store', e)
		}
	} else {
		tasks = tasksOrDirectory
	}

	if (!tasks) {
		_out.error('No tasks found')
		return
	}

	state.tasks = parseImports(tasks)
}

export function useQueue(name: string) {
	return state.queues[name] as FeathersQueueService
}

export function useTasks() {
	return state.tasks || {}
}

export function useTask(name: string) {
	return state?.tasks && state.tasks[name]
}
