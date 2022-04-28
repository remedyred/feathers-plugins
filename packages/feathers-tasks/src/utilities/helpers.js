import {TaskItem} from '../tasks/task.item'

export function makeTaskItem(value, self, options = {}) {
	return value instanceof TaskItem ? value : new TaskItem(value, self, options)
}
