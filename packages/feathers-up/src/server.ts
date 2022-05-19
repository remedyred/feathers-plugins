import helmet from 'helmet'
import {json as expressJson, rest as expressRest, urlencoded as expressUrlEncoded} from '@feathersjs/express'
import socketio from '@feathersjs/socketio'
import {useSetup} from './config'
import cors from 'cors'
import compress from 'compression'
import {errorHandler as expressErrorHandler, notFound as expressNotFound} from '@feathersjs/express/lib/handlers'
import {Application} from './definitions'

export function serverInit(app: Application) {
	if (app.get('appType') === 'server') {
		app.out.verbose('Enable security, CORS, compression, favicon and body parsing...')

		const helmetConfig = useSetup('helmet', {contentSecurityPolicy: false})
		app.use(helmet(helmetConfig))

		const corsConfig = useSetup('cors')
		app.use(cors(corsConfig))

		const compressConfig = useSetup('compress')
		app.use(compress(compressConfig))

		const jsonConfig = useSetup('express.json')
		app.use(expressJson(jsonConfig))

		const urlencodedConfig = useSetup('express.urlencoded')
		app.use(expressUrlEncoded(urlencodedConfig || {extended: true}))

		app.out.verbose('Set up Plugins and providers...')

		const restConfig = useSetup('express.rest')
		app.configure(expressRest(restConfig))

		const socketioConfig = useSetup('socketio')
		app.configure(socketio(socketioConfig))

		app.out.verbose('Configure middleware')
		const middleware = useSetup('middleware')
		if (middleware) {
			try {
				app.configure(middleware)
			} catch (e) {
				app.out.error('Error configuring middleware', e)
			}
		}
	}
}


export function serverErrorHandlers(app: Application) {
	if (app.get('appType') === 'server') {
		app.out.verbose('Configure a middleware for 404s and the error handler')

		const notFoundConfig = useSetup('express.notFound', {verbose: process.env.NODE_ENV !== 'production'})
		app.use(expressNotFound(notFoundConfig))

		const errorHandlerConfig = useSetup('express.errorHandler', {
			html: false,
			logger: app.log
		})
		app.use(expressErrorHandler(errorHandlerConfig))
	}
}
