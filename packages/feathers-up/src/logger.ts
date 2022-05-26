import {useConfig} from './config'
import {Application} from './definitions'
import logs, {useLogger} from '@snickbit/feathers-logs'
import * as winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

export async function initLogger(app: Application) {
	const config = useConfig('logs')

	if (config) {
		app.log = new ProxyLogger()

		if (config === true || config === 'feathers-logger') {
			try {
				app.configure(logs)

				const logger = useLogger()
				logger.context({app_type: app.get('appType'), app: app.get('name'), version: app.get('version')})
				app.log.addLogger(logger)
			} catch (e) {
				app.out.error('Failed to initialize logger', e)
			}
		} else {
			app.out.warn('Skipping mongodb logger')
		}

		if (config === true || config === 'daily') {
			const {logs: logDir} = app.get('paths')

			const transport: DailyRotateFile = new DailyRotateFile({
				filename: 'application-%DATE%.log',
				dirname: logDir,
				datePattern: 'YYYY-MM-DD-HH',
				zippedArchive: true,
				maxSize: '20m',
				maxFiles: '14d'
			})

			const dailyLogger = winston.createLogger({transports: [transport]})

			app.log.addLogger(dailyLogger)
		} else {
			app.out.warn('Skipping daily file logger')
		}

		app.log.info('Initializing App')
	} else {
		app.out.warn('No logger configuration found')
	}
}

export class ProxyLogger {
	private loggers: any[] = []

	constructor(loggers?: any[]) {
		this.loggers = loggers || []
	}

	addLogger(logger: any) {
		this.loggers.push(logger)
	}

	private toLoggers(level: string, args: any[]) {
		if (!this.loggers) {
			throw new Error('No loggers found')
		}

		for (let logger of this.loggers) {
			let method = level in logger ? level : 'log'
			if (method in logger) {
				logger[method](...args)
			}
		}
	}

	log(...args: any[]) {
		this.toLoggers('log', args)
	}

	info(...args: any[]) {
		this.toLoggers('info', args)
	}

	warn(...args: any[]) {
		this.toLoggers('warn', args)
	}

	error(...args: any[]) {
		this.toLoggers('error', args)
	}

	verbose(...args: any[]) {
		this.toLoggers('verbose', args)
	}

	debug(...args: any[]) {
		this.toLoggers('debug', args)
	}
}
