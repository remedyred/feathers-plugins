import {ZlibOptions} from 'zlib'
import {Application as ExpressApplication, RestOptions} from '@feathersjs/express'
import {HelmetOptions} from 'helmet'
import {ServerOptions} from 'socket.io'
import {ProxyLogger} from './logger'
import {CorsOptions} from 'cors'
import {OptionsJson, OptionsUrlencoded} from 'body-parser'
import {RequestHandler} from 'express'
import Logger from '@snickbit/feathers-logger'
import {Out} from '@snickbit/out'

export interface CompressOptions extends ZlibOptions {
	filter?: () => boolean
	threshold?: number
}

export interface AppSetupExpress {
	json?: OptionsJson
	urlencoded?: OptionsUrlencoded
	rest?: RestOptions | RequestHandler
	express?: {
		notFound: {
			verbose: boolean
		}
	}
	errorHandler: {
		html: boolean,
		logger: Out
	}
}

type AnyFunction = ((...args: any[]) => Promise<any> | any) | { default: AnyFunction }

type AppServiceResult = AnyFunction | Record<string, AnyFunction>

interface AppDatabaseConfig {
	adapter: AnyFunction | any

	[key: string]: any
}

export interface AppSetup {
	paths?: AppSetupPaths
	helmet?: Partial<HelmetOptions>
	cors?: CorsOptions
	compress?: CompressOptions
	express?: AppSetupExpress
	socketio?: ServerOptions
	middleware?: (...args) => any
	authentication?: (...args) => any
	services?: AppServiceResult | Record<string, AppServiceResult>
	channels?: (...args) => any
	hooks?: (...args) => any
	databases?: Record<string, AppDatabaseConfig>
}

export type AppSetupPaths = {
	root?: string;
	storage?: string;
	uploads?: string;
	temp?: string;
};

export interface FeathersUpOverrides {
	out: Out;
	log: typeof Logger;
	error: typeof Logger;
}

export interface Application extends ExpressApplication {
	out: Out;
	log: typeof Logger | ProxyLogger;
	error: typeof Logger;
}
