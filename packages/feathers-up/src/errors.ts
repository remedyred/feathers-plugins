import {Application} from './definitions'

export default function(app: Application) {
	app.out.verbose('Configure Error handlers')
	// Catch unhandled promise rejections
	process.on('unhandledRejection', (reason, promise) => {
		if (app.log) {
			app.log.error('Unhandled Rejection: ', reason)
		}

		promise.then(response => {
			app.log.error(response)
		}).catch(err => {
			app.log.error(err)
		})
	})

	process.on('uncaughtException', error => {
		if (app.log) {
			app.log.error('Unhandled Exception: ', error)
		}
	})
}
