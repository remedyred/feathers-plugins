import {useSetup} from './config'

export default function (app){
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
