import logger from '@snickbit/feathers-logger'
import {LogService} from './log.service'
import {Application as FeathersApp} from '@feathersjs/feathers'

export interface Application extends FeathersApp {
	log: typeof logger
	error: typeof logger
	out?: any
}

export default function service(app: Application) {
	app.use('/logs', new LogService(app), {
		methods: ['find', 'get', 'create', 'update', 'remove', 'contexts', 'channels']
	})
	app.log = logger.config({service: app.service('logs'), out: app?.out})
	app.error = app.log.clone('error', {defaultLevel: 'error'})
}
