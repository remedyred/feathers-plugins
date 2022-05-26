import {useSetup} from './config'
import {Application} from './definitions'

export default function(app: Application) {
	const channels = useSetup('channels')
	if (channels) {
		app.out.verbose('Set up event channels')
		try {
			app.configure(channels)
		} catch (e) {
			app.out.error('Error configuring channels', e)
		}
	}
}
