import {dates} from '@snickbit/dates'
import {useQueue} from '../utilities/helpers'
import QueueService from './queue.service'

export interface QueueChildOptions {
	queue?: QueueService
	name?: string
}

export function parseQueueChildOptions(options: QueueChildOptions | string = {}) {
	if (typeof options === 'string') {
		options = {name: options as string} as QueueChildOptions
	}
	if (!options.queue && options.name) {
		options.queue = useQueue(options.name)
		if (!options.queue) {
			throw new Error(`Queue ${options.queue} does not exist`)
		}
	}
	if (!options.queue) {
		throw new Error('Queue is required')
	}
	return options as QueueChildOptions
}

export function jobToPayload(job) {
	if (!job) {
		return {}
	}
	if (job.toJSON) {
		job = job.toJSON()
	}
	const data = job.data
	delete job.data

	job.timestamp = dates(job.timestamp).timestamp()
	job.finishedOn = dates(job.finishedOn).timestamp()
	job.processedOn = dates(job.processedOn).timestamp()

	return {...job, ...data}
}
