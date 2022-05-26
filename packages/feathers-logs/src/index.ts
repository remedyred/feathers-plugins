import {Application as FeathersApp} from '@feathersjs/feathers'
import {ServiceInterface} from '@feathersjs/feathers/src/declarations'
import {LogService} from './log.service'
import logger, {Logger} from '@snickbit/feathers-logger'

export interface Application extends FeathersApp {
	out?: any
}

let $logger: Logger

export default function service(app: Application) {
	app.use('/logs',
		new LogService(app) as ServiceInterface,
		{
			methods: [
				'find',
				'get',
				'create',
				'update',
				'remove',
				'contexts',
				'channels'
			]
		})
	$logger = logger.config({service: app.service('logs'), out: app?.out})
}

export function useLogger(): Logger {
	return $logger
}
