import {TaskItem} from '../tasks/task.item'

export function makeTaskItem(value, self, options = {}) {
	return value instanceof TaskItem ? value : new TaskItem(value, self, options)
}

export function booleanConfig(value: boolean | any, defaultValue: any): any {
	if (value === false) {
		return {
			...defaultValue,
			enabled: false
		}
	} else if (value === true) {
		return {
			...defaultValue,
			enabled: true
		}
	} else {
		return {...value}
	}
}
