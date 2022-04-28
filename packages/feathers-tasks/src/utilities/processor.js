import {out} from '@snickbit/out'
import {SandboxedJob} from 'bullmq'

/**
 * @param {SandboxedJob} job
 * @param {Application} app
 * @return {Promise<void>}
 */
export default async function (job, app) {
	out.fatal('Sandboxed processor not implemented')
	await app.service('queue/_tasks')._get(job.id).then(/** @param {Task} task */ async task => {
		try {
			await task.start()
			await task.run()
			await task.finish()
			out.done(`Task ${task.name} ${job.id} finished`)
		} catch (e) {
			out.extra(e).alert(`Error in task ${job.name}: ${e.message}`)
		}
	}).catch(e => {
		out.extra(e).alert(`Unable to get task: ${job.name}: ${e.message}`)
	})
}


