import {Application} from '@snickbit/feathers-up'
import knex, {Knex} from 'knex'
import KnexMysql from 'knex/lib/dialects/mysql'

export default async function(app: Application, config: Knex.ConnectionConfig | Knex.ConnectionConfig[]) {
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
