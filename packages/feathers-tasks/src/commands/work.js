import {NotFound} from '@feathersjs/errors'
import {cli} from '@snickbit/node-cli'
import {useQueue} from '../utilities/state'

export const name = 'queue:work'
export default async argv => cli(argv).args({
	queue: {
		description: 'The queue to work',
		type: 'string',
		default: 'default'
	},
	jobs: {
		description: 'The queue to work',
		type: 'array'
	}
}).options({
	limit: {
		alias: 'l',
		type: 'number',
		description: 'The number of jobs to process per second',
		default: 10
	},
	concurrency: {
		alias: 'c',
		type: 'number',
		description: 'The number of jobs to process concurrently',
		default: 10
	}
}).run().then(async args => {
	const queue = useQueue(args.queue)
	if (!queue) throw new NotFound(`Queue ${args.queue} not found or not initialized`)
	await queue.startWorker()
})
