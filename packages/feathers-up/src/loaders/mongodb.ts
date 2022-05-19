import {MongoClient} from 'mongodb'

export default async function (app, config) {
	if (!app.get('mongoClient')) {
		app.out.verbose('Connect to MongoDB database...')
		if (Array.isArray(config)) {
			const promises = []
			for (let mongoDB of config) {
				const mongoClientPromise = connectToMongoDB(app, mongoDB)
				app.set(`mongoClientPromise.${mongoDB.database}`, mongoClientPromise)
				app.set(`mongoClient.${mongoDB.database}`, mongoClientPromise.then(client => client.db(mongoDB.database)))
				promises.push(mongoClientPromise)
			}
			await Promise.all(promises)
		} else {
			const mongoClientPromise = connectToMongoDB(app, config)
			app.set('mongoClientPromise', mongoClientPromise)
			app.set('mongoClient', mongoClientPromise.then(client => client.db(config.database)))
		}
	}
	return app.get('mongoClient')
}

export function connectToMongoDB(app, config): Promise<MongoClient> {
	const mongoOptions = {
		authSource: config.authSource || config.database,
		auth: config.auth
	}
	const mongoClientPromise = MongoClient.connect(config.uri, mongoOptions)
	mongoClientPromise.catch(err => app.out.error(err))
	return mongoClientPromise
}
