import logger from '@snickbit/feathers-logger'
import {LogService} from './log.service'

export default function service(app) {
	app.use('/logs', new LogService(app), {
		methods: ['find', 'get', 'create', 'update', 'remove', 'contexts', 'channels']
	})
	app.log = logger.config({service: app.service('logs'), out: app.out})
	app.error = app.log.new('error', {defaultLevel: 'error'})
}
