import {Application} from './definitions'

export default function(app: Application) {
	app.out.verbose('Configure Error handlers')
	// Catch unhandled promise rejections
	process.on('unhandledRejection', (reason, promise) => {
		const logger = app.log || app.out
		logger.error('Unhandled Promise Rejection: ', reason)

		promise.then(response => {
			logger.error('Promise error response', response)
		}).catch(error => {
			logger.error('Promise rejection', error)
		})
	})

	process.on('uncaughtException', error => {
		const logger = app.log || app.out
		logger.error('Unhandled Exception: ', error)
	})
}
