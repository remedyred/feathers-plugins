import {isObject} from '@snickbit/utilities'
import {useSetup} from './config'
import {Application} from './definitions'

export default function(app: Application) {
	const services = useSetup('services')
	if (services) {
		app.out.verbose('Set up services')
		if (Array.isArray(services)) {
			for (const service of services) {
				try {
					app.configure(service)
				} catch (error) {
					app.out.error('Error configuring service', error)
				}
			}
		} else if (isObject(services)) {
			for (const service in services) {
				try {
					app.configure(services[service])
				} catch (error) {
					app.out.error(`Error configuring service ${service}`, error)
				}
			}
		} else {
			try {
				app.configure(services)
			} catch (error) {
				app.out.error('Error configuring services', error)
			}
		}
	}
}
