import knex from 'knex'
import KnexMysql from 'knex/lib/dialects/mysql'

export default async function (app, config) {
	if (!app.get('mysqlClient')) {
		app.out.verbose('Connect to mysql databases...')
		if (Array.isArray(config)) {
			for (let mysqlDb of config) {
				app.set(`mysqlClient.${mysqlDb.database}`, knex({
					client: KnexMysql,
					connection: mysqlDb
				}))
			}
		} else {
			app.set('mysqlClient', knex({
				client: KnexMysql,
				connection: config
			}))
		}
	}
	return app.get('mysqlClient')
}
