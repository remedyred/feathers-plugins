import MongoService from '@snickbit/feathers-mongo'

export class LogService extends MongoService {
	public Model: any

	constructor(app) {
		super({
			paginate: app.get('paginate'),
			disableObjectify: false,
			collection: 'logs',
			timestamps: true
		}, app)
	}

	async channels() {
		return this.Model.distinct('channel')
	}

	async contexts() {
		const aggCursor = await this.Model.aggregate([
			{
				'$project': {
					'context': {
						'$objectToArray': '$context'
					}
				}
			}, {
				'$unwind': {
					'path': '$context'
				}
			}, {
				'$group': {
					'_id': '$context.k',
					'values': {
						'$addToSet': '$context.v'
					}
				}
			}
		])
		const results = []
		for await (const doc of aggCursor) {
			results.push(doc)
		}
		return results
	}
}
