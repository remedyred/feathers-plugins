import {isEmpty} from '@snickbit/utilities'
import {useConfig} from './config'
import {Application, DatabaseDefinitions} from './definitions'

export default async function(app: Application) {
	const databases = useConfig('databases') as DatabaseDefinitions
	if (!isEmpty(databases)) {
		app.out.verbose('Set up databases')
		for (const database in databases) {
			app.out.verbose(`Set up ${database}`)
			const {config, loader} = databases[database]
			try {
				await loader(app, config)
			} catch (error) {
				app.out.error(`Failed to load ${database}`, error)
			}
		}
	}
}
