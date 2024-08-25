import {isObject} from '@snickbit/utilities'
import {useConfig} from './config'
import {Application} from './definitions'

export default function(app: Application) {
	// ensure the queue worker/watcher is NOT running in CLI mode
	const queue = useConfig('queue')
	if (app.get('appType') === 'server' && queue) {
		queue.watcher = isObject(queue.watcher)
			? {enabled: false}
			: queue.watcher

		queue.worker = isObject(queue.worker)
			? {enabled: false}
			: queue.worker

		app.set('queue', queue)
	}
}
