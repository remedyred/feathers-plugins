import out from '@snickbit/out'
import {objectCopy, overloadOptions} from '@snickbit/utilities'
import axios from 'axios'
import {isBrowser, isNode} from 'browser-or-node'

const _out = out.app('logger')

export class Logger {
	options = {
		auth: null,
		out: null
	}

	payload = {
		channel: 'default',
		context: null,
		messages: []
	}

	sent_messages = 0

	request = null

	constructor(...args) {
		const {channel, options, context} = this.#parseLoggerArgs(args, [
			{channel: 'string', options: 'object', context: 'object'},
			{options: 'object', context: 'object'},
			{options: 'object'}
		])

		this.config(options)
		this.channel(channel)
		this.payload.context = context || getDefaultContext()
	}

	get logs() {
		return this.payload.messages.map(m => m?.message || m)
	}

	get out() {
		return this.options.out
	}

	#parseLoggerArgs(args, schemas) {
		let {channel, options, context} = overloadOptions(args, schemas)

		channel = channel || 'default'

		options = {
			...this.options,
			immediate: true,
			global: false,
			defaultLevel: 'log',
			...(options || {})
		}

		context = {
			...this.payload.context,
			...(context || {})
		}
		return {
			channel,
			options,
			context
		}
	}

	reset() {
		this.payload = {
			context: null,
			messages: []
		}
		return this
	}

	new(...args) {
		const {channel, options, context} = this.#parseLoggerArgs(args, [
			{channel: 'string', context: 'object', options: 'object'},
			{context: 'object', options: 'object'},
			{channel: 'string'},
			{context: 'object'}
		])
		return new Logger(channel, options, context)
	}

	config(options) {
		this.options = {
			...this.options,
			...options
		}
		return this
	}

	context(context) {
		context = parseContext(context)
		this.payload.context = {
			...this.payload.context,
			...context
		}
		return this
	}

	channel(channel) {
		this.payload.channel = channel
		return this
	}

	getContext() {
		return this.payload.context
	}

	title(title) {
		return this.context({title})
	}

	addLog(message, level, send = true) {
		if (!this.payload.messages) {
			this.payload.messages = []
		}
		level = level || this.options.defaultLevel || 'log'

		try {
			if (this.out && this.out[level]) {
				this.out[level](message)
			}
		} catch (e) {
			_out.error(e)
		}
		this.payload.messages.push({
			level,
			message,
			timestamp: (new Date).getTime()
		})

		if (send && this.options.immediate) {
			return this.send()
		}
		return this
	}

	addLogs(messages, level) {
		level = level || this.options.defaultLevel || 'log'
		for (let message of messages) {
			this.addLog(message, level, false)
		}

		if (this.options.immediate) {
			_out.warn('immediately sending')
			return this.send()
		}
		return this
	}

	log(...values) {
		return this.addLogs(values)
	}

	write(...values) {
		return this.addLogs(values)
	}

	fatal(...values) {
		return this.addLogs(values, 'fatal')
	}

	error(...values) {
		return this.addLogs(values, 'error')
	}

	warn(...values) {
		return this.addLogs(values, 'warn')
	}

	info(...values) {
		return this.addLogs(values, 'info')
	}

	debug(...values) {
		return this.addLogs(values, 'debug')
	}

	success(...values) {
		return this.addLogs(values, 'success')
	}

	send() {
		if (!this.options.service && !this.options.endpoint) {
			_out.warn('No endpoint or Feathers service specified')

			out.log(...this.logs)

			return undefined
		}

		if (!this.options.global && this.request) {
			_out.warn('Already sending, wait for the previous request to finish')
			return this.request.then(() => {
				this.request = null
				_out.debug('Request finished, check if more logs are available to send: ', {messages: this.payload.messages.length, sent: this.sent_messages, shouldSend: this.payload.messages.length > this.sent_messages}, this.payload.messages)
				return this.payload.messages.length > this.sent_messages ? this.send() : Promise.resolve()
			})
		}

		const payload = objectCopy(this.payload)
		if (this.options.global) {
			this.payload.messages = []
		}

		let sending_messages = this.payload.messages.length

		if (this.options.endpoint) {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					...(this.options?.headers || {})
				},
				auth: this.options?.auth
			}
			_out.debug('Sending Logger data to endpoint', this.logs.length + ' logs', this.options.endpoint)
			this.request = axios.post(this.options.endpoint, payload, config)
		} else {
			const service = this.options?.service
			_out.debug('Sending Logger data to service', this.logs.length + ' logs')

			if (payload?._id) {
				this.request = service.patch(payload._id, payload)
			} else {
				this.request = service.create(payload)
			}
		}

		return this.request
			.then(response => {
				if (!this.options.global) {
					_out.debug('Saving response')
					this.payload._id = response?._id || response?.data?._id
					_out.debug('Updating sent messages', {current: this.sent_messages, plus: sending_messages, total: this.sent_messages + sending_messages})
					this.sent_messages += sending_messages
				}
				return response
			})
			.catch(err => _out.alert('Error sending Logger data', err))
	}
}

export function parseContext(context) {
	if (context) {
		if (context?.toJSON) {
			return context.toJSON()
		}

		return context
	}

	return {}
}

let _defaultContext

function getDefaultBrowserContext() {
	if (!_defaultContext) {
		const {browser, version} = navigator?.userAgent.match(/(?<browser>MSIE|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari|(?!AppleWebKit.+)Chrome|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))[ /](?<version>[\d.apre]+)/i)?.groups || {}
		_defaultContext = {
			'runtime': 'browser',
			browser,
			browser_version: version,
			platform: navigator.platform,
			host: location.host,
			href: location.href,
			port: location.port
		}
	}

	return _defaultContext
}

function getDefaultNodeContext() {
	if (!_defaultContext) {
		_defaultContext = {
			'runtime': 'node',
			'env': process.env.NODE_ENV || 'development',
			'cwd': process.cwd(),
			pid: process.pid
		}
	}

	return _defaultContext
}

function getDefaultContext() {
	if (!_defaultContext) {
		if (isBrowser) {
			_defaultContext = getDefaultBrowserContext()
		} else if (isNode) {
			_defaultContext = getDefaultNodeContext()
		} else {
			_defaultContext = {}
		}
	}
	return _defaultContext
}

const logger = new Logger({global: true})
export default logger
