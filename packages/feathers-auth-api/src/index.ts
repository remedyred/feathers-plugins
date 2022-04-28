import {NotAuthenticated} from '@feathersjs/errors'
import {AuthenticationBaseStrategy} from '@feathersjs/authentication'
import {AuthenticationRequest, AuthenticationResult} from '@feathersjs/authentication/src/core'

export class ApiKeyStrategy extends AuthenticationBaseStrategy {
	async authenticate(authentication: AuthenticationRequest): Promise<AuthenticationResult> {
		const {token} = authentication

		const {allowed_keys} = this.authentication.configuration[this.name]

		if (allowed_keys) {
			const match = allowed_keys.includes(token)
			if (!match) throw new NotAuthenticated('Incorrect API Key')

			return {
				api: true
			}
		}
	}
}

export async function allowApiKey(context) {
	const {params, app} = context
	const config = app.get('authentication')
	if (config.api) {
		const headerField = config.header?.toLowerCase() || 'authorization'
		const token = params.headers[headerField]?.replace(/^Bearer\s/, '')
		if (token && params.provider && !params.authentication) {
			context.params = {
				...params,
				authentication: {
					strategy: 'api',
					token
				}
			}
		}
	}
	return context
}
