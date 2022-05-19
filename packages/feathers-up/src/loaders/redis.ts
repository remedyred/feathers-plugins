import Redis from 'ioredis'

export default async function (app, config) {
	if (!app.get('redisClient')) {
		app.out.verbose('Connect to redis databases...')
		if (Array.isArray(config)) {
			for (let redisDb of config) {
				app.set(`redisClient.${redisDb.keyPrefix}`, new Redis(redisDb))
			}
		} else {
			app.set('redisClient', new Redis(config))
		}
	}
	return app.get('redisClient')
}
