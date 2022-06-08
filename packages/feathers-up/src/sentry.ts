import {useSetup} from './config'
import {Application} from './definitions'
import * as Sentry from '@sentry/node'

export function sentryInit(app: Application) {
	const sentry = useSetup('sentry')
	if (sentry) {
		const sentryConfig = {
			autoSessionTracking: false,
			debug: process.env.NODE_ENV === 'development',
			environment: process.env.NODE_ENV,
			...sentry
		}

		if (app.get('version')) {
			sentryConfig.release = app.get('version')
		}

		Sentry.init(sentryConfig)

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
