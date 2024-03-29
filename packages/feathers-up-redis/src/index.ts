import {Application} from '@snickbit/feathers-up'
import {RedisOptions} from 'ioredis/built/redis/RedisOptions'
import Redis from 'ioredis'

export default async function(app: Application, config: RedisOptions | RedisOptions[]) {
	if (!app.get('redisClient')) {
		app.out.verbose('Connect to redis databases...')
		if (Array.isArray(config)) {
			for (const redisDb of config) {
				app.set(`redisClient.${redisDb.keyPrefix}`, new Redis(redisDb))
			}
		} else {
			app.set('redisClient', new Redis(config))
		}
	}
	return app.get('redisClient')
}
