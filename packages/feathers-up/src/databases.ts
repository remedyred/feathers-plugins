import {useConfig} from './config'
import {Application, DatabaseDefinitions} from './definitions'
import {isEmpty} from '@snickbit/utilities'

export default async function (app: Application) {
	const databases = useConfig('databases') as DatabaseDefinitions
	if (!isEmpty(databases)) {
		app.out.verbose('Set up databases')
		for (let database in databases) {
			app.out.verbose(`Set up ${database}`)
			const {config, loader} = databases[database]
			try {
				await loader(app, config)
			} catch (e) {
				app.out.error(`Failed to load ${database}`, e)
			}
		}
	}
}
