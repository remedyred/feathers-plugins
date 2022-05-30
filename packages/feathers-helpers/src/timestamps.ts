export interface Timestamps {
	created: boolean | string
	updated: boolean | string
	deleted: boolean | string
}

export type TimestampOptions = Partial<Timestamps> | boolean

export function parseTimestampOptions(timestampOptions: TimestampOptions, options: {softDelete?: boolean; timestamps?: TimestampOptions} = {}): Timestamps {
	const timestamps: Timestamps = {
		created: '_created',
		updated: '_updated',
		deleted: options.softDelete ? '_deleted' : false
	}

	if (timestampOptions === true) {
		return timestamps
	} else if (timestampOptions) {
		Object.assign(options.timestamps, timestampOptions)
		return options.timestamps as Timestamps
	}

	return {
		created: false,
		updated: false,
		deleted: false
	}
}
