import {Application as ExpressApplication, RestOptions} from '@feathersjs/express'
import {Out} from '@snickbit/out'
import {OptionsJson, OptionsUrlencoded} from 'body-parser'
import {CorsOptions} from 'cors'
import {RequestHandler} from 'express'
import {HelmetOptions} from 'helmet'
import {ServerOptions} from 'socket.io'
import {ZlibOptions} from 'zlib'
import {LeveledLogMethod, Logger} from 'winston'

export interface CompressOptions extends ZlibOptions {
	filter?(): boolean
	threshold?: number
}

export interface AppSetupExpress {
	json?: OptionsJson
	urlencoded?: OptionsUrlencoded
	rest?: RequestHandler | RestOptions
	express?: {
		notFound: {
			verbose: boolean
		}
	}
	errorHandler: {
		html: boolean
		logger: Out
	}
}

type AnyFunction = ((...args: any[]) => Promise<any> | any) | {default: AnyFunction}

type AppServiceResult = AnyFunction | Record<string, AnyFunction>

type ConfigureFunction = (app: ExpressApplication) => Promise<void> | void

export interface AppSetup {
	config?: ConfigureFunction | any
	paths?: AppSetupPaths
	helmet?: Partial<HelmetOptions>
	cors?: CorsOptions
	compress?: CompressOptions
	express?: AppSetupExpress
	socketio?: ServerOptions
	middleware?(...args): any
	authentication?(...args): any
	services?: AppServiceResult | Record<string, AppServiceResult>
	channels?(...args): any
	hooks?(...args): any
	mongodb?: DatabaseLoader
	redis?: DatabaseLoader
	mysql?: DatabaseLoader
}

export type AppSetupPaths = {
	root?: string
	storage?: string
	uploads?: string
	temp?: string
}

export interface FeathersUpOverrides {
	out: Out
	log: Logger
	error: LeveledLogMethod
}

export interface Application extends ExpressApplication {
	out: Out
	log: Logger
	error: LeveledLogMethod
}

export interface FeathersUpOptions {
	verbosity?: number
}

export type DatabaseLoader = (app: Application, config: any[] | any) => Promise<any>

export interface DatabaseDefinition {
	config?: any
	loader: DatabaseLoader
}

export enum DatabaseDriver {
	MongoDB = 'mongodb',
	Redis = 'redis',
	MySQL = 'mysql'
}

export type DatabaseDefinitions = Record<DatabaseDriver, DatabaseDefinition>
