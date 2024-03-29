import {feathers} from '@feathersjs/feathers'
import {Model} from '@snickbit/model'
import {Out} from '@snickbit/out'
import {initialize} from './config'
import {Application, AppSetup, FeathersUpOptions} from './definitions'
import {initLogger} from './logger'
import {sentryHandleErrors, sentryInit} from './sentry'
import {serverErrorHandlers, serverInit} from './server'
import express, {Application as ExpressApplication} from '@feathersjs/express'
import authentication from './authentication'
import channels from './channels'
import databases from './databases'
import errors from './errors'
import hooks from './hooks'
import middleware from './middleware'
import paths from './paths'
import queue from './queue'
import services from './services'
import status from './status'

let app: Application

export function useApp(appType = 'server', setup: AppSetup = {}): Application {
	if (app) {
		return app
	}
	return feathersUp(appType, setup)
}

export function feathersUp(appType = 'server', setup: AppSetup | Model = {}, options: FeathersUpOptions = {}): Application {
	if (app) {
		return app
	}

	let instance = feathers()
	instance = appType === 'cli' ? instance : express(instance) as ExpressApplication

	app = instance as Application

	app.out = new Out(appType)
	app.out.setVerbosity(options.verbosity)

	app.set('appType', appType)
	app.set('env', process.env.NODE_ENV || 'development')

	const appEnv = app.get('env')
	app.out.block.info(`Initializing {cyan}${appType}{/cyan} in {magenta}${appEnv}{/megenta} mode`)

	initialize(app, setup)

	// configure paths
	app.configure(paths)

	// configure error handlers
	app.configure(errors)

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
	app.emit('ready')

	return app
}

export default feathersUp

export {Application} from './definitions'
