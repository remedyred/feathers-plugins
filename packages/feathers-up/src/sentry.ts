import {useSetup} from './config'
import {Application} from './definitions'
import * as Sentry from '@sentry/node'

export function sentryInit(app: Application) {
	const sentry = useSetup('sentry')
	if (sentry) {
		Sentry.init({
			dsn: sentry.dsn,
			environment: process.env.NODE_ENV
		})

		if (app.get('appType') === 'server') {
			app.out.verbose('Enable sentry request handler')
			app.use(Sentry.Handlers.requestHandler())
		}
	}
}

export function sentryHandleErrors(app: Application) {
	const sentry = useSetup('sentry')
	if (app.get('appType') === 'server' && sentry) {
		app.out.verbose('Configure sentry error handler')
		app.use(Sentry.Handlers.errorHandler())
	}
}
