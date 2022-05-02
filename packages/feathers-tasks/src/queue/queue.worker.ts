import {beforeExit} from '@snickbit/node-utilities'
import {Out, out} from '@snickbit/out'
import {objectOnly} from '@snickbit/utilities'
import {Worker} from 'bullmq'
import {Task} from '../tasks/task'
import {getConfig, useConnection} from '../utilities/state'
import {parseQueueChildOptions} from './helpers'
import {QueueService} from './queue.service'

export interface QueueWorkerConfig extends WorkerOptions {
	name: string;
	enabled: boolean
	queue: QueueService
}

export type QueueWorkerOptions = Partial<QueueWorkerConfig>

export class QueueWorker {
	worker: Worker
	options: QueueWorkerOptions
	out: Out

	constructor(options: QueueWorkerOptions) {
		options = parseQueueChildOptions(options)

		this.options = {
			...objectOnly(getConfig(), ['limiter', 'streams']),
			concurrency: 10,
			limiter: {},
			...options,
			connection: options.connection || useConnection()
		}

		this.out = out.app(`worker:${this.options.name}`)
	}

	start() {
		this.out.info('Starting Worker in current process')
		const processor = async (job) => {
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

		this.out.verbose('Creating Worker')
		this.worker = new Worker(this.options.name, processor, this.options)
		this.out.verbose('Worker Started')

		beforeExit(() => this.stop())

		return this.worker
	}

	async stop() {
		this.out.warn('Stopping Worker')
		await this.worker.close()
	}
}
