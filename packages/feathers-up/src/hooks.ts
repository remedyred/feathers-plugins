import setHooks from '@snickbit/feathers-hooks'
import {isFunction, isObject} from '@snickbit/utilities'
import {useSetup} from './config'

export default function (app){
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
