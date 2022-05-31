/* eslint-disable @typescript-eslint/ban-types */

declare namespace PouchDB {
	namespace Core {
		interface IdMeta {
			isEncrypted?: boolean
			payload?
		}
	}

	interface Database<Content extends {} = {}> {
		_destroyed?: boolean

		// transform-pouch
		transform<NewContent extends object>(config: {
			incoming?(doc: Core.Document<Content>): Core.Document<NewContent> | Promise<Core.Document<NewContent>>
			outgoing?(doc: Core.Document<NewContent>): Core.Document<Content> | Promise<Core.Document<Content>>
		}): void
		// api.filter provided for backwards compat with the old "filter-pouch"
		filter<NewContent extends object>(config: {
			incoming?(doc: Core.Document<Content>): Core.Document<NewContent> | Promise<Core.Document<NewContent>>
			outgoing?(doc: Core.Document<NewContent>): Core.Document<Content> | Promise<Core.Document<Content>>
		}): void

	}

	namespace Replication {
		interface ReplicateOptions {
			encrypt?: boolean
		}
	}
}
