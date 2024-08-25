import {fileExists, findUp, getFileJSON} from '@snickbit/node-utilities'
import {useConfig} from './config'
import {Application} from './definitions'
import path from 'path'

export default function(app: Application) {
	// Check path configuration
	const paths = useConfig('paths', {})
	if (!paths.root) {
		paths.root = path.dirname(findUp('package.json', {cwd: process.cwd()}) || '.')
	}
	if (!paths.storage) {
		paths.storage = path.resolve(path.join(paths.root, '..', 'storage'))
	}
	if (!paths.uploads) {
		paths.uploads = path.join(paths.storage, 'uploads')
	}
	if (!paths.logs) {
		paths.logs = path.join(paths.storage, 'logs')
	}
	if (!paths.temp) {
		paths.temp = path.join(paths.storage, 'temp')
	}
	if (!paths.templates) {
		paths.templates = path.join(paths.root, 'templates')
	}
	if (!paths.public) {
		paths.public = path.join(paths.root, 'public')
	}
	app.set('paths', paths)

	// package.json path
	const pkgPath = path.join(paths.root, 'package.json')
	if (fileExists(pkgPath)) {
		// Load package.json info
		const {name, version, description} = getFileJSON(pkgPath)
		app.set('name', name)
		app.set('version', version)
		app.set('description', description)
	}
}
