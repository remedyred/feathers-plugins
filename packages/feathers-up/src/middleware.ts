import {useSetup} from './config'
import {Application} from './definitions'

export default function(app: Application) {
	const middleware = useSetup('middleware')
	if (app.get('appType') === 'server' && middleware) {
		try {
			app.configure(middleware)
		} catch (error) {
			app.out.error('Error configuring middleware', error)
		}
	}
}
