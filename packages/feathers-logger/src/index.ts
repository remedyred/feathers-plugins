import {Out} from '@snickbit/out'
import {objectCopy, overloadOptions} from '@snickbit/utilities'
import {isBrowser, isNode} from 'browser-or-node'
import axios from 'axios'

export type LoggerOptions = Partial<LoggerConfig>

export interface LoggerConfig {
	endpoint: string
	service: any
	auth: import('axios').AxiosBasicCredentials
	immediate: boolean
	global: boolean
	out: import('@snickbit/out').Out | null
	defaultLevel: 'error' | 'fatal' | 'info' | 'log' | 'warn'
	headers?: Record<string, string>
}

interface ParsedLoggerOptions {
	channel?: string
	context?: LoggerContext
	options?: LoggerOptions
}

export type LoggerContext = Record<string, any>

export interface LoggerPayload {
	_id?: any
	channel: string
	context: any
	messages: any[]
}

export class Logger {
	#out: Out

	options: LoggerOptions = {
		auth: null,
		out: null
	}

	payload: LoggerPayload = {
		channel: 'default',
		context: null,
		messages: []
	}

	sent_messages = 0

	request = null

	constructor(options?: LoggerOptions, context?: LoggerContext)
	constructor(channel?: string, options?: LoggerOptions, context?: LoggerContext)
	constructor(...args) {
		const {channel, options, context} = this.#parseLoggerArgs(args, [{channel: 'string', options: 'object', context: 'object'}, {options: 'object', context: 'object'}, {options: 'object'}])

		this.#out = new Out('logger')

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
		let {channel, options, context} = overloadOptions(args, schemas) as ParsedLoggerOptions

		channel = channel || 'default'

		options = {
			...this.options,
			immediate: true,
			global: false,
			defaultLevel: 'log',
			...options || {}
		}

		context = {
			...this.payload.context,
			...context || {}
		}
		return {
			channel,
			options,
			context
		}
	}

	reset() {
		this.payload = {
			channel: 'default',
			context: null,
			messages: []
		}
		return this
	}

	clone(context?: LoggerContext, config?: LoggerOptions): Logger
	clone(channel?: string, context?: LoggerContext, config?: LoggerOptions): Logger
	clone(...args) {
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
			this.#out.error(e)
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

	addLogs(messages, level?) {
		level = level || this.options.defaultLevel || 'log'
		for (const message of messages) {
			this.addLog(message, level, false)
		}

		if (this.options.immediate) {
			this.#out.warn('immediately sending')
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
			this.#out.warn('No endpoint or Feathers service specified')

			this.#out.log(...this.logs)

			return undefined
		}

		if (!this.options.global && this.request) {
			this.#out.warn('Already sending, wait for the previous request to finish')
			return this.request.then(() => {
				this.request = null
				this.#out.debug('Request finished, check if more logs are available to send: ', {messages: this.payload.messages.length, sent: this.sent_messages, shouldSend: this.payload.messages.length > this.sent_messages}, this.payload.messages)
				return this.payload.messages.length > this.sent_messages ? this.send() : Promise.resolve()
			})
		}

		const payload = objectCopy(this.payload) as LoggerPayload
		if (this.options.global) {
			this.payload.messages = []
		}

		const sending_messages = this.payload.messages.length

		if (this.options.endpoint) {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					...this.options?.headers || {}
				},
				auth: this.options?.auth
			}
			this.#out.debug('Sending Logger data to endpoint', `${this.logs.length} logs`, this.options.endpoint)
			this.request = axios.post(this.options.endpoint, payload, config)
		} else {
			const service = this.options?.service
			this.#out.debug('Sending Logger data to service', `${this.logs.length} logs`)

			if (payload?._id) {
				this.request = service.patch(payload._id, payload)
			} else {
				this.request = service.create(payload)
			}
		}

		return this.request.then(response => {
			if (!this.options.global) {
				this.#out.debug('Saving response')
				this.payload._id = response?._id || response?.data?._id
				this.#out.debug('Updating sent messages', {current: this.sent_messages, plus: sending_messages, total: this.sent_messages + sending_messages})
				this.sent_messages += sending_messages
			}
			return response
		}).catch(err => this.#out.error('Error sending Logger data', err))
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
			runtime: 'browser',
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
			runtime: 'node',
			env: process.env.NODE_ENV || 'development',
			cwd: process.cwd(),
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
