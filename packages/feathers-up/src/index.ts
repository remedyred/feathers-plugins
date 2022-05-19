import express, {Application as ExpressApplication} from '@feathersjs/express'
import {feathers} from '@feathersjs/feathers'
import {Model} from '@snickbit/model'
import {Out} from '@snickbit/out'
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
import {initLogger} from './logger'
import {Application, AppSetup, FeathersUpOptions} from './definitions'

let app: Application

export function useApp(appType = 'server', setup: AppSetup = {}): Application {
	if (app) return app
	else return feathersUp(appType, setup)
}

export function feathersUp(appType = 'server', setup: AppSetup | Model = {}, options: FeathersUpOptions = {}): Application {
	if (app) return app

	let instance = feathers()
	instance = appType === 'cli' ? instance : express(instance) as ExpressApplication

	app = instance as Application

	initialize(app, setup)

	app.set('appType', appType)
	app.set('env', process.env.NODE_ENV || 'development')

	app.out = new Out(appType)
	app.out.setVerbosity(options.verbosity)
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

	process.on('uncaughtException', function(error) {
		if (app.log) app.log.error('Unhandled Exception: ', error)
	});

	// configure paths
	app.configure(paths)

	// configure logger
	app.configure(initLogger)

	// configure sentry
	app.configure(sentryInit)

	// configure database connections
	app.configure(databases)

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
