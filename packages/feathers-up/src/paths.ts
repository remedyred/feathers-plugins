import {useConfig} from './config'
import path from 'path'
import {Application} from './index'
import {findUp} from '@snickbit/node-utilities'

export default function (app: Application) {
	// Check path configuration
	let paths = useConfig('paths', {})
	if (!paths.root) paths.root = path.dirname(findUp('package.json', {cwd: process.cwd()}) || '.')
	if (!paths.storage) paths.storage = path.resolve(path.join(paths.root, '..', 'storage'))
	if (!paths.uploads) paths.uploads = path.join(paths.storage, 'uploads')
	if (!paths.logs) paths.logs = path.join(paths.storage, 'logs')
	if (!paths.temp) paths.temp = path.join(paths.storage, 'temp')
	if (!paths.templates) paths.templates = path.join(paths.root, 'templates')
	if (!paths.public) paths.public = path.join(paths.root, 'public')
	app.set('paths', paths)

	// Load package.json info
	/* eslint @typescript-eslint/no-var-requires: off */
	const packageJson = require(path.join(paths.root, 'package.json'))
	app.set('name', packageJson.name)
	app.set('version', packageJson.version)
	app.set('description', packageJson.description)
}
