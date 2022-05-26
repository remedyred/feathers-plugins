import {isObject} from '@snickbit/utilities'
import {useSetup} from './config'
import {Application} from './definitions'

export default function(app: Application) {
	const services = useSetup('services')
	if (services) {
		app.out.verbose('Set up services')
		if (Array.isArray(services)) {
			for (let service of services) {
				try {
					app.configure(service)
				} catch (e) {
					app.out.error('Error configuring service', e)
				}
			}
		} else if (isObject(services)) {
			for (let service in services) {
				try {
					app.configure(services[service])
				} catch (e) {
					app.out.error(`Error configuring service ${service}`, e)
				}
			}
		} else {
			try {
				app.configure(services)
			} catch (e) {
				app.out.error('Error configuring services', e)
			}
		}
	}
}
