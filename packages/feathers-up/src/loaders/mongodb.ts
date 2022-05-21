import {Application} from '../definitions'

export interface MongoClientOptions {
	uri?: string
	database?: string
	authSource?: string,
	auth?: {
		username?: string
		password?: string
	}
}

export default async function (app: Application, config: MongoClientOptions | MongoClientOptions[]) {
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

export async function connectToMongoDB(app: Application, config: MongoClientOptions): Promise<any> {
	const mongoOptions = {
		authSource: config.authSource || config.database,
		auth: config.auth
	}
	const MongoClient = await loadMongodb()
	const mongoClientPromise = MongoClient.connect(config.uri, mongoOptions)
	mongoClientPromise.catch(err => app.out.error(err))
	return mongoClientPromise
}

let _mongodb: any
async function loadMongodb(): Promise<any> {
	if (!_mongodb) {
		const mongodb = await import('mongodb')
		_mongodb = mongodb.MongoClient
	}
	return _mongodb
}
