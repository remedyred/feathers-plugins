import {dates} from '@snickbit/dates'
import {typeOf} from '@snickbit/utilities'
import {useQueue} from '../utilities/state'
import {QueueService} from './queue.service'

export function parseQueueChildOptions(options = {}) {
	if (typeOf(options) === 'string') options = {queue: options}
	if (!options.queue && options.name) options.queue = options.name
	if (!options.queue) throw new Error('Queue is required')
	if (!(options.queue instanceof QueueService)) {
		const queue = useQueue(options.queue)
		if (queue) {
			options.queue = queue
		} else {
			throw new Error(`Queue ${options.queue} does not exist`)
		}
	}
	return options
}

export function jobToPayload(job) {
	if (!job) return {}
	if (job.toJSON) job = job.toJSON()
	const data = job.data
	delete job.data

	job.timestamp = dates(job.timestamp).timestamp()
	job.finishedOn = dates(job.finishedOn).timestamp()
	job.processedOn = dates(job.processedOn).timestamp()

	return {...job, ...data}
}
