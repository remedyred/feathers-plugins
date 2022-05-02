import {cli} from '@snickbit/node-cli'
import {out} from '@snickbit/out'
import {Task} from '../tasks/task'
import {useQueue} from '../utilities/state'

export const name = 'queue:run'
export default async argv => cli(argv)
.args({
	job: {
		description: 'The job to run',
		type: 'string',
		required: true
	}
})
.options({
	queue: {
		alias: 'q',
		description: 'The queue to run the job on',
		type: 'string',
		default: 'default'
	},
	now: {
		description: 'run synchronously',
		type: 'boolean'
	}
}).run().then(async args => {
	out.info(`Creating job for ${args.job}`)
	if (args.now) {
		const task = new Task({name: args.job}, {queue: args.queue, synchronous: args.now})
		out.warn(`Running job now`)
		await task.run()
		out.done(`Job ${args.job} finished`)
	} else {
		const queue = useQueue(args.queue)
		await queue._create({name: args.job})
		out.done(`Job ${args.job} queued`)
	}
})
