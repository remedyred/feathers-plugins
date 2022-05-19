import express, {Application as ExpressApplication, RestOptions} from '@feathersjs/express'
import {feathers} from '@feathersjs/feathers'
import {Model} from '@snickbit/model'
import {Out} from '@snickbit/out'
import {CorsOptions} from 'cors'
import {HelmetOptions} from 'helmet'
import {OptionsJson, OptionsUrlencoded} from 'body-parser'
import {RequestHandler} from 'express'
import Logger from '@snickbit/feathers-logger'
import {ZlibOptions} from 'zlib'
import {ServerOptions} from 'socket.io'
import {initialize} from './config'
import paths from './paths'
import {serverErrorHandlers, serverInit} from './server'
import queue from './queue'
import channels from './channels'
import authentication from './authentication'
import services from './services'
import hooks from './hooks'
import databases from './databases'
import {sentryHandleErrors, sentryInit} from './sentry'
import middleware from './middleware'
import status from './status'
import {initLogger, ProxyLogger} from './logger'
import knex from 'knex'
import KnexMysql from 'knex/lib/dialects/mysql'
import Redis from 'ioredis'

export interface CompressOptions extends ZlibOptions {
	filter?: () => boolean
	threshold?: number
}

export interface AppSetupExpress {
	json?: OptionsJson
	urlencoded?: OptionsUrlencoded
	rest?: RestOptions | RequestHandler
	express?: {
		notFound: {
			verbose: boolean
		}
	}
	errorHandler: {
		html: boolean,
		logger: Out
	}
}

type AnyFunction = ((...args: any[]) => Promise<any> | any) | { default: AnyFunction }

type AppServiceResult = AnyFunction | Record<string, AnyFunction>

interface AppDatabaseConfig {
	adapter: AnyFunction | any

	[key: string]: any
}

export interface AppSetup {
	paths?: AppSetupPaths
	helmet?: Partial<HelmetOptions>
	cors?: CorsOptions
	compress?: CompressOptions
	express?: AppSetupExpress
	socketio?: ServerOptions
	middleware?: (...args) => any
	authentication?: (...args) => any
	services?: AppServiceResult | Record<string, AppServiceResult>
	channels?: (...args) => any
	hooks?: (...args) => any
	databases?: Record<string, AppDatabaseConfig>
}

export type AppSetupPaths = {
	root?: string;
	storage?: string;
	uploads?: string;
	temp?: string;
};

export interface FeathersUpOverrides {
	out: Out;
	log: typeof Logger;
	error: typeof Logger;
}

export interface Application extends ExpressApplication {
	out: Out;
	log: typeof Logger | ProxyLogger;
	error: typeof Logger;
}

let app: Application

export function useApp(appType = 'server', setup: AppSetup = {}): Application {
	if (app) return app
	else return feathersUp(appType, setup)
}

export function feathersUp(appType = 'server', setup: AppSetup | Model = {}): Application {
	if (app) return app

	let instance = feathers()
	instance = appType === 'cli' ? instance : express(instance) as ExpressApplication

	app = instance as Application

	initialize(app, setup)

	app.set('appType', appType)
	app.set('env', process.env.NODE_ENV || 'development')

	app.out = new Out(appType)
	app.out.setVerbosity(5)
	const appEnv = app.get('env')
	app.out.block.info(`Initializing {cyan}${appType}{/cyan} in {magenta}${appEnv}{/megenta} mode`)

	// Catch unhandled promise rejections
	process.on('unhandledRejection', (reason, promise) => {
		if (app.log) app.log.error('Unhandled Rejection: ', reason)

		promise.then(response => {
			app.log.error(response)
		}).catch(err => {
			app.log.error(err)
		})
	})

	// configure paths
	app.configure(paths)

	// configure logger
	app.configure(initLogger)

	// configure sentry
	app.configure(sentryInit)

	// configure database connections
	// check for databases
	const databases = {
		mysql: app.get('mysql'),
		redis: app.get('redis'),
		mongodb: app.get('mongodb')
	}

	if (databases.mysql) {
		app.out.verbose('Connect to mysql databases...')
		if (isArray(databases.mysql)) {
			for (let mysqlDb of databases.mysql) {
				app.set(`mysqlClient.${mysqlDb.database}`, knex({
					client: KnexMysql,
					connection: mysqlDb
				}))
			}
		} else {
			app.set('mysqlClient', knex({
				client: 'mysql',
				connection: databases.mysql
			}))
		}
	}

	if (databases.redis) {
		app.out.verbose('Connect to redis databases...')
		if (isArray(databases.redis)) {
			for (let redisDb of databases.redis) {
				app.set(`redisClient.${redisDb.keyPrefix}`, new Redis(redisDb))
			}
		} else {
			app.set('redisClient', new Redis(databases.redis))
		}
	}

	// configure server
	app.configure(serverInit)

	// configure custom middleware
	app.configure(middleware)

	// configure queue watcher and worker
	app.configure(queue)

	// configure services
	app.configure(services)

	// configure authentication
	app.configure(authentication)

	// configure channels
	app.configure(channels)

	// configure status route
	app.configure(status)

	// configure hooks
	app.configure(hooks)

	// configure sentry error handlers
	app.configure(sentryHandleErrors)

	// configure server error handlers
	app.configure(serverErrorHandlers)

	// Feathers up!
	app.out.verbose.success('Feathers Up!')

	return app
}

export default feathersUp
