const hook_types = [
	'before',
	'after',
	'error'
]

const hook_names = [
	'all',
	'find',
	'get',
	'create',
	'update',
	'patch',
	'remove'
]

export default function setHooks(app, hooks = {}) {
	const app_hooks = {}

	hooks = hooks || {}

	for (let hook_type of hook_types) {
		app_hooks[hook_type] = {}
		const hook_type_hooks = hooks[hook_type]
		for (let hook_name of hook_names) {
			if (hook_type_hooks && hook_type_hooks[hook_name]) {
				app_hooks[hook_type][hook_name] = Object.values(hook_type_hooks[hook_name]).filter(Boolean)
			} else {
				app_hooks[hook_type][hook_name] = []
			}
		}
	}

	app.hooks(app_hooks)
}
