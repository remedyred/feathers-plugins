import {useSetup} from './config'
import {Application} from './definitions'

export default function(app: Application) {
	const authentication = useSetup('authentication')
	if (app.get('appType') === 'server' && authentication) {
		app.out.verbose('Configure authentication')
		try {
			app.configure(authentication)
		} catch (e) {
			app.out.error('Error configuring authentication', e)
		}
	}
}
