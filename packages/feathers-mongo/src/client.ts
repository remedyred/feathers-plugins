import {out} from '@snickbit/out'
import {MongoClient} from 'mongodb'

export default function (app) {
	if (!app.get('mongoClient')) {
		const conf = app.get('mongodb')
		if (!conf) {
			throw new Error('No mongodb configuration found')
		}
		const mongoOptions = {
			authSource: conf.authSource || conf.database,
			auth: conf.auth
		}

		const mongoClientPromise = MongoClient.connect(conf.uri, mongoOptions)
		app.set('mongoClientPromise', mongoClientPromise)
		mongoClientPromise.catch(err => out.throw(err))
		app.set('mongoClient', mongoClientPromise.then(client => client.db(conf.database)))
	}
	return app.get('mongoClient')
}
