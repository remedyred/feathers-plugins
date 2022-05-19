import {useConfig} from './config'
import {Application} from './definitions'

export default async function (app: Application) {
	const databases = useConfig('databases')
	if (databases) {
		app.out.verbose('Set up databases')
		for (let database in databases) {
			app.out.verbose(`Set up ${database}`)
			const {default: configureDatabase} = await import('./loaders/' + database)
			await configureDatabase(app, databases[database])
		}
	}
}
