import {NotFound} from '@feathersjs/errors'
import {cli} from '@snickbit/node-cli'
import {confirm} from '@snickbit/node-utilities'
import {out} from '@snickbit/out'
import {useQueue} from '../utilities/state'

export const name = 'queue:clean'
export default async argv => cli(argv)
.args({
	queue: {
		description: 'The queue to clean',
		type: 'string',
		default: 'default'
	}
})
.run().then(async args => {
	const queue = useQueue(args.queue)
	if (!queue) throw new NotFound(`Queue ${args.queue} not found or not initialized`)
	out.info(`Cleaning queue: ${args.queue}`)
	if (args.force && (args.yes || await confirm('Are you sure you want to delete all jobs?'))) {
		await queue.pause()
		await queue.obliterate()
		out.done(`Queue ${args.queue} obliterated`)
	} else {
		await queue.clean()
		out.done(`Queue ${args.queue} cleaned`)
	}
})
