import {useConfig} from './config'
import {Application} from './definitions'
import {isObject} from '@snickbit/utilities'
import * as winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import Transport from 'winston-transport'

export async function initLogger(app: Application) {
	const config = useConfig('logs')

	if (!config) {
		app.out.warn('Skipping daily file logger')
		return
	}

	const {logs: dirname} = app.get('paths')

	const loggerOptions = {
		filename: 'application-%DATE%.log',
		dirname,
		datePattern: 'YYYY-MM-DD-HH',
		zippedArchive: true,
		maxSize: '20m',
		maxFiles: '14d',
		...(isObject(config) ? config : {})
	}

	const transports: Transport[] = [new DailyRotateFile(loggerOptions)]

	app.log = winston.createLogger({transports, exceptionHandlers: transports})
	app.error = app.log.error
	app.out.info('Initializing App')
}
