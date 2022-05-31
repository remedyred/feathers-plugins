import {ErrorMessage, FeathersError} from '@feathersjs/errors'

export class PouchError extends FeathersError {
	constructor(message?: ErrorMessage, data?: any) {
		if (data instanceof Error && typeof message === 'string') {
			data.message = `${message}: ${data.message}`
		}

		super(data, 'PouchError', 500, 'pouch-error', data)
	}
}
