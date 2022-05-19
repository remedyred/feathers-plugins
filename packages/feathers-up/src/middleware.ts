import {Application} from './index'
import {useSetup} from './config'

export default function (app: Application) {
	const middleware = useSetup('middleware')
	if (app.get('appType') === 'server' && middleware) {
		try {
			app.configure(middleware)
		} catch (e) {
			app.out.error('Error configuring middleware', e)
		}
	}
}
