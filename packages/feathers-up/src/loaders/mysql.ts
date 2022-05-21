import {Application} from '../definitions'

export interface MysqlConnectionConfig {
	host: string;
	user: string;
	password: string;
	database: string;
	domain?: string;
	instanceName?: string;
	debug?: boolean;
	requestTimeout?: number;
}

export default async function (app: Application, config: MysqlConnectionConfig | MysqlConnectionConfig[]) {
	if (!app.get('mysqlClient')) {
		app.out.verbose('Connect to mysql databases...')
		if (Array.isArray(config)) {
			for (let mysqlDb of config) {
				await makeMysqlClient(app, mysqlDb, mysqlDb.database)
			}
		} else {
			await makeMysqlClient(app, config)
		}
	}
	return app.get('mysqlClient')
}

let _knex: any
let _mysql: any

async function makeMysqlClient(app: Application, options: MysqlConnectionConfig, prefix?: string) {
	const knex = await loadKnex()
	const mysql = await loadMysql()

	app.set('mysqlClient' + (prefix ? `.${options.database}` : ''), knex({
		client: mysql,
		connection: options
	}))
}

async function loadKnex(): Promise<any> {
	if (!_knex) {
		const knex = await import('knex')
		_knex = knex.default
	}
	return _knex
}

async function loadMysql(): Promise<any> {
	if (!_mysql) {
		const mysql = await import('knex/lib/dialects/mysql')
		_mysql = mysql.default
	}
	return _mysql
}
