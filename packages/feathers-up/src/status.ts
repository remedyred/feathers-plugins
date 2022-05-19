import {useConfig} from './config'

export default function (app) {
	const status = useConfig('status', true)

	if (app.get('appType') === 'server' && status) {
		app.out.verbose('Configure status route')
		app.use('/status', (req, res) => res.json({status: 'ok'}))
	}
}
