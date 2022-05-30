import {out} from '@snickbit/out'
import {isJSONString, JSONParse} from '@snickbit/utilities'

export function parseResponseError(e: any): any {
	const data: any = {message: 'Unknown error'}

	if (e.message) {
		data.message = e.message
	}

	if (e.response) {
		data.response = {
			status: e.response?.status,
			statusText: e.response?.statusText,
			url: e.response.config?.url,
			details: e.response?.data
		}
	}

	if (out.isVerbose(2) && e.config) {
		data.request = {
			method: e.config?.method,
			baseURL: e.config?.baseURL,
			url: e.config?.url,
			data: e.config?.data,
			retry: e.config['axios-retry']
		}

		if (out.isVerbose(3)) {
			data.request.headers = e.config?.headers
			data.request.params = e.config?.params
		}
	}

	return data
}

export function parseResponse(response: any): any {
	if (!response) {
		return response
	}
	if (!response.data) {
		return response
	}
	response.data = isJSONString(response.data) ? JSONParse(response.data) : response.data
	if (Array.isArray(response.data) && response.data.length === 1) {
		response.data = response.data.pop()
	}
	return response
}
