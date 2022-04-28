import configuration from '@feathersjs/configuration'
import express from '@feathersjs/express'
import {feathers} from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio'
import * as Sentry from '@sentry/node'
import setHooks from '@snickbit/feathers-hooks'
import logs from '@snickbit/feathers-logs'
import Model from '@snickbit/model'
import {findUp} from '@snickbit/node-utilities'
import {out} from '@snickbit/out'
import {isArray, isFunction, isObject, objectCopy} from '@snickbit/utilities'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Redis from 'ioredis'
import knex from 'knex'
import KnexMysql from 'knex/lib/dialects/mysql'
import {ray} from 'node-ray'
import path from 'path'

/**
 * @typedef {import('@feathersjs/express').ErrorHandlerOptions} ErrorHandlerOptions
 * @typedef {import('@feathersjs/express').RestOptions} RestOptions
 * @typedef {import('socket.io').ServerOptions} ServerOptions
 * @typedef {import('body-parser').OptionsJson} OptionsJson
 * @typedef {import('body-parser').OptionsUrlencoded} OptionsUrlencoded
 * @typedef {import('express').RequestHandler} RequestHandler
 * @typedef {import('cors').CorsOptions} CorsOptions
 * @typedef {import('helmet').HelmetOptions} HelmetOptions
 * @typedef {import('@snickbit/feathers-logger').Logger} Logger
 * @typedef {import('@snickbit/out').Out} Out
 */

/**
 * @type {App}
 */
let app

/**
 * @typedef {Object} CompressOptions
 * @augments {ZlibOptions}
 * @property {Function} [filter=() => true]
 * @property {Number} [threshold=1024]
 */

/**
 * @typedef {Object} AppSetupPaths
 * @property {String} [root]
 * @property {String} [storage]
 * @property {String} [uploads]
 * @property {String} [temp]
 */

/**
 * @typedef {Object} AppSetupExpress
 * @property {OptionsJson} [json]
 * @property {OptionsUrlencoded} [urlencoded={extended: true}]
 * @property {RestOptions | RequestHandler} [rest]
 * @property {{ verbose: Boolean }} [express.notFound = {verbose: process.env.NODE_ENV !== 'production'}]
 * @property {ErrorHandlerOptions} [errorHandler={html: false, logger: app.out.alert}]
 */

/**
 * @typedef {Object} AppSetup
 * @property {AppSetupPaths} [paths]
 * @property {Partial<HelmetOptions>} [helmet={contentSecurityPolicy: false}]
 * @property {CorsOptions} [cors]
 * @property {CompressOptions} [compress]
 * @property {AppSetupExpress} [express]
 * @property {ServerOptions} [socketio]
 * @property {Function} [middleware]
 * @property {Function} [authentication]
 * @property {Function} [services]
 * @property {Function} [channels]
 * @property {Function|Object} [hooks]
 */

/**
 * @param {String} [appType='server']
 * @param {AppSetup} [setup]
 * @return {App|ExpressApp}
 */
export function useApp(appType = 'server', setup = {}) {
	if (app) return app
	else return feathersUp(appType, setup)
}

/**
 * @param {String} [appType='server']
 * @param {AppSetup|Model} [setup]
 * @return {App|ExpressApp}
 */
export function feathersUp(appType = 'server', setup = {}) {
	if (app) return app

	setup = new Model(setup)

	const instance = feathers()
	// noinspection JSValidateTypes
	app = appType === 'cli' ? instance : express(instance)
	app.set('appType', appType)
	app.set('env', process.env.NODE_ENV || 'development')

	app.out = out.app(appType, 0)
	app.out.block.info(`Initializing {cyan}${appType}{/cyan} in {magenta}${app.get('env')}{/megenta} mode`)

	process.on('unhandledRejection', (reason, promise) => {
		ray('unhandledRejection', reason)
		app.error.log('Unhandled Rejection: ', reason)
		promise.then(response => {
			ray().toJson(response)
			app.error.log(response)
		}).catch(err => {
			ray().error(err.data)
			app.error.log(err)
		})
	})

	// Load app configuration
	app.out.verbose('Load app configuration...')
	app.configure(configuration())

	// Check path configuration
	let paths = app.get('paths') || setup.get('paths')
	if (!paths) {
		paths = {
			root: path.dirname(findUp('package.json', {cwd: __dirname}) || __dirname)
		}
		paths.storage = path.resolve(path.join(paths.root, '..', 'storage'))
		paths.uploads = path.join(paths.storage, 'uploads')
		paths.temp = path.join(paths.storage, 'temp')
		app.set('paths', paths)
	}

	// Load package.json info
	/* eslint @typescript-eslint/no-var-requires: off */
	const packageJson = require(path.join(paths.root, 'package.json'))
	app.set('name', packageJson.name)
	app.set('version', packageJson.version)
	app.set('description', packageJson.description)

	// load system configuration
	const system = {
		logs: app.get('logs') || setup.get('logs')
	}

	// Check config for embedded plugins
	const plugins = {
		sentry: app.get('sentry')
	}

	// check for databases
	const databases = {
		mysql: app.get('mysql'),
		redis: app.get('redis'),
		mongodb: app.get('mongodb')
	}

	if (system.logs === true || system.logs?.driver === 'feathers-logger') {
		app.configure(logs)
		app.log.context({app_type: appType, app: app.get('name'), version: app.get('version')})
		app.log.info('Initializing App')
	}

	app.out.debug(objectCopy(app.settings), {paths})
	if (plugins.sentry) {
		Sentry.init({
			dsn: plugins.sentry.dsn,
			environment: process.env.NODE_ENV,
			version: app.get('version')
		})

		if (appType === 'server') {
			app.out.verbose('Enable sentry request handler')
			// noinspection JSCheckFunctionSignatures
			app.use(Sentry.Handlers.requestHandler())
		}
	}

	// Setup database connections

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

	// server configuration
	if (appType === 'server') {
		app.out.verbose('Enable security, CORS, compression, favicon and body parsing...')
		app.use(helmet(setup.get('helmet') || {contentSecurityPolicy: false}))
		app.use(cors(setup.get('cors')))
		app.use(compress(setup.get('compress')))
		app.use(express.json(setup.get('express.json')))
		app.use(express.urlencoded(setup.get('express.urlencoded') || {extended: true}))

		app.out.verbose('Set up Plugins and providers...')
		app.configure(express.rest(setup.get('express.rest')))
		app.configure(socketio(setup.get('socketio')))

		app.out.verbose('Configure middleware')
		if (setup.has('middleware')) {
			app.configure(setup.get('middleware'))
		}

		app.out.verbose('Configure authentication')
		if (setup.has('authentication')) {
			app.configure(setup.get('authentication'))
		}
	} else if (app.get('queue')) {
		// ensure the queue worker/watcher is NOT running in CLI mode
		const queue = app.get('queue')
		if (!isObject(queue.watcher)) {
			queue.watcher = {enabled: false}
		} else {
			queue.watcher.enabled = false
		}

		if (!isObject(queue.worker)) {
			queue.worker = {enabled: false}
		} else {
			queue.worker.enabled = false
		}
		app.set('queue', queue)
	}

	if (setup.has('services')) {
		app.out.verbose('Set up services')
		app.configure(setup.get('services'))
	}
	if (setup.has('channels')) {
		app.out.verbose('Set up event channels')
		app.configure(setup.get('channels'))
	}

	if (appType !== 'cli') {
		app.out.verbose('Configure status route')
		app.use('/status', (req, res) => res.json({status: 'ok'}))

		if (setup.has('hooks')) {
			app.out.verbose('Set up hooks')
			const hooks = setup.get('hooks')
			if (isFunction(hooks)) {
				app.configure(hooks)
			} else if (isObject(hooks)) {
				setHooks(app, hooks)
			}
		}

		if (plugins.sentry) {
			app.out.verbose('Configure sentry error handler')
			app.use(Sentry.Handlers.errorHandler())
		}
		app.out.verbose('Configure a middleware for 404s and the error handler')
		app.use(express.notFound(setup.get('express.notFound') || {verbose: process.env.NODE_ENV !== 'production'}))
		app.use(express.errorHandler(setup.get('express.errorHandler') || {
			html: false,
			logger: app.error.log
		}))
	}

	return app
}

export default feathersUp
