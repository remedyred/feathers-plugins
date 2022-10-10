import {Model} from '@snickbit/model'
import {isObject} from '@snickbit/utilities'
import {Application, AppSetup, DatabaseDefinitions} from './definitions'
import configuration from '@feathersjs/configuration'
import dotenv from 'dotenv'

let $setup: Model
let $app: Application

export function initialize(app: Application, setup: AppSetup | Model = {}) {
	$app = app
	$setup = new Model(setup)

	// load environment variables
	dotenv.config()

	// Load app configuration
	if ($setup.has('config')) {
		const config = $setup.get('config')
		if (typeof config === 'function') {
			app.out.debug('Loading custom configuration method')
			app.configure(config)
		} else if (isObject(config)) {
			app.out.debug('Loading custom configuration object')
			for (const name in config) {
				app.set(name, config[name])
			}
		}
	} else {
		app.out.debug('Loading configuration')
		app.configure(configuration())
	}

	initDatabases()
}

export function useConfig(key: string, fallback?) {
	if ($setup.has(key)) {
		return $setup.get(key)
	}
	if ($app.get(key) !== undefined) {
		return $app.get(key)
	}
	return fallback
}

export function useSetup(key: string, fallback?) {
	return $setup.has(key) ? $setup.get(key) : fallback
}

function initDatabases() {
	const databaseOptions = ['mysql', 'redis', 'mongodb']

	const databases: DatabaseDefinitions = {}
	for (const database of databaseOptions) {
		const config = $app.get(database)
		const loader = $setup.get(database)

		if (loader) {
			databases[database] = {
				config,
				loader
			}
		}
	}

	$setup.set('databases', databases)
}
