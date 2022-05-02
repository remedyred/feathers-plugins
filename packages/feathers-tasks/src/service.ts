import {objectMergeDeep} from '@snickbit/utilities'
import Redis from 'ioredis'
import {QueueService} from './queue/queue.service'
import {_out, defaultConfig, getConfig, setApp, setConfig, setConnection, setTaskStore, state, WatcherConfig, WorkerConfig} from './utilities/state'

export function service(app) {
	setApp(app)

	const config = getConfig()
	_out.verbose('set config from app config')
	Object.assign(config, objectMergeDeep(config, app.get('queue') || {}))
	if (config.watcher === true) config.watcher = {enabled: true} as WatcherConfig
	if (config.worker === true) config.worker = {enabled: true} as WorkerConfig
	config.watcher = {...(defaultConfig.watcher as WatcherConfig), ...config.watcher}
	config.worker = {...(defaultConfig.worker as WorkerConfig), ...config.worker}
	_out.verbose(config)

	_out.verbose('verify queue connection (redis)')
	setConnection(config.connection || new Redis(app.get('redis')))
	setConfig(config)

	_out.verbose('Making default task queue')
	makeQueue('default')

	_out.verbose('Populating task store')
	setTaskStore(config.tasks || 'tasks')
}

export function makeQueue(name, options?) {
	if (!name || name.startsWith('_')) {
		throw new Error('Queue name must be a valid string and not start with an underscore')
	}

	if (!state.queues[name]) {
		state.app.use(`/queue/${name}`, new QueueService({
			name,
			...getConfig(),
			...(options || {})
		}))
		state.queues[name] = state.app.service(`/queue/${name}`)

		if (state.app.out) {
			state.app.out.v(1).success(`Queue ${name} created`)
		}
	}

	return state.queues[name]
}
