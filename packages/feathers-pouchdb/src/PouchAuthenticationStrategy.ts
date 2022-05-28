import {AuthenticationBaseStrategy} from '@feathersjs/authentication'
import {AuthenticationRequest, AuthenticationResult} from '@feathersjs/authentication/src/core'
import {NotAuthenticated} from '@feathersjs/errors'

export class PouchAuthStrategy extends AuthenticationBaseStrategy {
	async authenticate(authentication: AuthenticationRequest): Promise<AuthenticationResult> {
		const {token} = authentication

		const {allowed_keys} = this.authentication.configuration[this.name]

		if (allowed_keys) {
			const match = allowed_keys.includes(token)
			if (!match) {
				throw new NotAuthenticated('Incorrect API Key')
			}

			return {api: true}
		}
	}
}
