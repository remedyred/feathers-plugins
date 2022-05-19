import {isObject} from '@snickbit/utilities'
import {useConfig} from './config'

export default function (app) {
	// ensure the queue worker/watcher is NOT running in CLI mode
	const queue = useConfig('queue')
	if (app.get('appType') === 'server' && queue) {
		if (!isObject(queue.watcher)) {
			queue.watcher = {enabled: false}
		} else {
			queue.watcher.enabled = false
		}

		if (!isObject(queue.worker)) {
			queue.worker = {enabled: false}
		} else {
			queue.worker.enabled = false
		}
		app.set('queue', queue)
	}
}
