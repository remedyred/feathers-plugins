import {cleanup} from '@snickbit/node-utilities'
import {out} from '@snickbit/out'
import {objectOnly} from '@snickbit/utilities'
import {Worker} from 'bullmq'
import path from 'path'
import {Task} from '../tasks/task'
import {getConfig, useConnection} from '../utilities/state'
import {parseQueueChildOptions} from './helpers'

export class QueueWorker {
	/** @type {Worker} */
	worker

	/** @type {QueueWorkerOptions} */
	options

	/**
	 * @param {QueueWorkerOptions} options
	 */
	constructor(options) {
		options = parseQueueChildOptions(options)

		this.options = {
			...objectOnly(getConfig(), ['limiter', 'streams', 'sandbox']),
			concurrency: 10,
			limiter: {},
			sandbox: false,
			...options,
			connection: options.connection || useConnection()
		}

		this.out = out.app(`worker:${this.options.name}`)
	}

	start() {
		let processor
		if (this.options.sandbox) {
			this.out.fatal('Sandbox mode is not yet supported')
			processor = path.join(__dirname, '..', 'utilities', 'processor')
		} else {
			this.out.info('Starting Worker in current process')
			processor = async (job) => {
				this.out.info(`Processing job: ${job.name}`)
				const task = new Task(job, {queue: job.queue.name})
				if (task) {
					try {
						await task.run()
						this.out.success(`Job ${job.name} Complete`)
					} catch (e) {
						this.out.extra(e).alert(`Job ${job.name} failed with error: ` + e.message)
					}
				} else {
					this.out.alert(`Job Not Found: ${job.name}`)
				}
			}
		}

		this.out.verbose('Creating Worker')
		this.worker = new Worker(this.options.name, processor, this.options)
		this.out.verbose('Worker Started')

		cleanup(() => this.stop())

		return this.worker
	}

	async stop() {
		this.out.warn('Stopping Worker')
		await this.worker.close()
	}
}
