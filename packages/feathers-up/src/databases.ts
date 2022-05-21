import {useConfig} from './config'
import {Application} from './definitions'
import * as loaders from './loaders'

export default async function (app: Application) {
	const databases = useConfig('databases')
	if (databases) {
		app.out.verbose('Set up databases')
		for (let database in databases) {
			app.out.verbose(`Set up ${database}`)
			await loaders[database](app, databases[database])
		}
	}
}
