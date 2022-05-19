import {beforeExit} from '@snickbit/node-utilities'
import {Out} from '@snickbit/out'
import {Worker} from 'bullmq'
import {Task} from '../tasks/task'
import {WorkerConfig} from '../utilities/config'
import {getWorkerConfig, useQueue} from '../utilities/helpers'
import {ConnectionOptions} from 'bullmq/dist/esm/interfaces/redis-options'
import QueueService from './queue.service'
import {FeathersQueueService} from './queue.adapter'

export interface QueueWorkerConfig extends WorkerOptions {
	name: string;
	enabled: boolean
	queue: QueueService
}

export interface WorkerOptions extends WorkerConfig {
	name: string
	connection?: ConnectionOptions
}

export class QueueWorker {
	worker: Worker
	options: WorkerOptions
	queue: FeathersQueueService
	out: Out

	constructor(options: WorkerOptions) {
		const {enabled, concurrency, limiter} = getWorkerConfig()

		this.queue = useQueue(options.name)
		if (!this.queue) throw new Error(`Queue ${options.name} not found`)

		options = {
			enabled,
			concurrency,
			limiter,
			connection: this.queue.connection,
			...options
		}

		this.out = new Out(`worker:${options.name}`)

		this.options = options
	}

	start() {
		this.out.extra(this.options).info('Starting Worker in current process')
		const processor = async (job) => {
			this.out.info(`Processing job: ${job.name}`)
			const task = new Task(job, {queue: job.queue.name})
			if (task) {
				try {
					await task.run()
					this.out.success(`Job ${job.name} Complete`)
				} catch (e) {
					this.out.extra(e).error(`Job ${job.name} failed with error: ${e.message}`)
				}
			} else {
				this.out.error(`Job Not Found: ${job.name}`)
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
