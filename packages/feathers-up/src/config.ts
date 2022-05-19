import {Model} from '@snickbit/model'
import configuration from '@feathersjs/configuration'
import {Application, AppSetup} from './definitions'

let $setup: Model
let $app: Application

export function initialize(app: Application, setup: AppSetup | Model = {}) {
	$app = app
	$setup = new Model(setup)

	// Load app configuration
	app.configure(configuration())

	const databases = {
		mysql: $app.get('mysql'),
		redis: $app.get('redis'),
		mongodb: $app.get('mongodb')
	}

	// merge databases with config
	if ($setup.get('databases')) {
		Object.assign(databases, $setup.get('databases'))
	}

	$setup.set('databases', databases)
}

export function useConfig(key: string, fallback = undefined) {
	if ($setup.has(key)) return $setup.get(key)
	if ($app.get(key) !== undefined) return $app.get(key)
	return fallback
}

export function useSetup(key: string, fallback = undefined) {
	return $setup.has(key) ? $setup.get(key) : fallback
}
