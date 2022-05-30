import {NotImplemented} from '@feathersjs/errors'

export function callMethod(self, name: string, ...args: any[]): any {
	if (typeof self[name] !== 'function') {
		return Promise.reject(new NotImplemented(`Method ${name} not available`))
	}
	return self[name](...args)
}

export function safeCallMethod(self, name, ...args) {
	if (typeof self[name] !== 'function') {
		return Promise.resolve()
	}
	return self[name](...args)
}

