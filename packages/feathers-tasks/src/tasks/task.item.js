import {Model} from '@snickbit/feathers-model'
import {uuid} from '@snickbit/utilities'

export class TaskItem extends Model {

	/**
	 *
	 * @param {any} data
	 * @param {Task} parent
	 * @param {object} options
	 */
	constructor(data, parent, options) {
		let is_new = !(data instanceof TaskItem)

		if (is_new) {
			data = {
				id: uuid(),
				value: data,
				status: 'new',
				reason: ''
			}
		}

		super(data, {id: 'id', name: 'TaskItem'})

		this.patch(options)

		this.options.root = 'value'

		/** @type {Task} */
		this.parent = parent
		if (is_new) {
			this.commit()
		}
		parent.resetOut()
	}

	log(...args) {
		this.out.log(...args)
		if (this.parent.options.logs) {
			this.parent.job().then(job => {
				if (job) job.log(...args)
			}).catch(e => this.out.error('Error logging to job', e))
		}
	}

	async afterSave() {
		await this.parent._save()
	}

	async _save() {
		return this.parent._save()
	}

	async _destroy() {
		const items = this.siblings()
		const index = items.findIndex(item => item.id === this.id)
		items.splice(index, 1)
		this.parent.set('items', items)
		return this
	}

	toString() {
		return this.get()
	}

	toJSON() {
		return this.get()
	}

	/**
	 * @return {*[]}
	 */
	siblings() {
		return this.parent.get('items') || []
	}

	commit() {
		const items = this.siblings()
		const index = items.findIndex(item => item.id === this.id)
		items[index] = this.get()
		this.parent.set('items', items)
		return this
	}

	async success() {
		this.set('.status', 'succeeded').commit()

		if (this.parent.looping) {
			return this.parent.tick()
		} else {
			return this._save()
		}
	}

	async fail(reason) {
		this.set('.status', 'failed')

		if (reason) {
			this.set('.reason', reason)
		}

		this.commit()

		if (this.parent.looping) {
			return this.parent.tick()
		} else {
			return this._save()
		}
	}
}
