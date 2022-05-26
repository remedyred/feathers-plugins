import {isFunction, isObject} from '@snickbit/utilities'
import {useSetup} from './config'
import {Application} from './definitions'
import setHooks from '@snickbit/feathers-hooks'

export default function(app: Application) {
	const hooks = useSetup('hooks')
	if (app.get('appType') === 'server' && hooks) {
		app.out.verbose('Set up hooks')
		if (hooks) {
			if (isFunction(hooks)) {
				app.configure(hooks)
			} else if (isObject(hooks)) {
				setHooks(app, hooks)
			}
		}
	}
}
