import {BadRequest} from '@feathersjs/errors'
import {out} from '@snickbit/out'
import {escapeRegExp, isEmpty, isObject, isString, objectExcept, objectPull} from '@snickbit/utilities'
import {SearchOptions} from './mongo.adapter'

/**
 * Adds " around `str` and removes any " in `str`.
 * @param {string} str
 */
const escape = str => `"${str.replace(/"/g, '')}"`

export function transformSearchFieldsInQuery(query: any, options: SearchOptions, fieldName?: string) {
	const makeRegex = value => {
		try {
			value = escapeRegExp(value)
			value =
				value.split(/\W/)
					.map(v => v.trim())
					.filter(Boolean)
					.join('.*')
			return query.$caseSensitive ? new RegExp(value) : new RegExp(value, 'i')
		} catch (error) {
			out.throw('Error making regex', error)
		}
	}

	let newQuery = objectExcept(query, ['$search'])

	// cache top level search fields
	if (!fieldName && '$search' in query) {
		if (!String(query.$search).trim().length) {
			return newQuery
		}

		if (!options.fields || !options.fields.length) {
			throw new BadRequest('For a global search, you must specify the fields to search in.')
		}
		const $regex = makeRegex(query.$search)
		const $searchQueries = []
		for (const field of options.fields) {
			$searchQueries.push({[field]: {$regex}})
		}

		if ($searchQueries.length > 1) {
			newQuery.$or = $searchQueries
		} else if ($searchQueries.length === 1) {
			newQuery = {...newQuery, ...$searchQueries.pop()}
		}
	} else {
		for (const [key, value] of Object.entries(query)) {
			// Process current attribute or recurse
			if (key === '$search') {
				if (isString(value) && String(value).trim().length) {
					newQuery.$regex = makeRegex(value)
				}
			} else if (!key.startsWith('$') && isObject(value) && (options.fields.length && !options.fields.includes(key) || !options.excludedFields.includes(key))) {
				newQuery[key] = transformSearchFieldsInQuery(value, options, key)
			} else {
				newQuery[key] = value
			}
		}
	}

	newQuery = isEmpty(newQuery) && fieldName ? undefined : newQuery

	// out.info('transformSearchFieldsInQuery', {fieldName, query, newQuery})
	return newQuery
}

export function fullTextSearch(query: any, options: any) {
	if (!query) {
		return query
	}

	const $search = objectPull(query, '$search')

	let $language = objectPull(query, '$language')
	if ($language === undefined) {
		$language = options.language
	}

	let $caseSensitive = objectPull(query, '$caseSensitive')
	if ($caseSensitive === undefined) {
		$caseSensitive = options.caseSensitive
	}

	let $diacriticSensitive = objectPull(query, '$diacriticSensitive')
	if ($diacriticSensitive === undefined) {
		$diacriticSensitive = options.diacriticSensitive
	}

	const $text: any = {}

	if ($search) {
		$text.$search = options.escape ? escape($search) : $search

		if ($language) {
			$text.$language = $language
		}

		if ($caseSensitive) {
			$text.$caseSensitive = $caseSensitive
		}

		if ($diacriticSensitive) {
			$text.$diacriticSensitive = $diacriticSensitive
		}
	}

	if (Object.keys($text).length) {
		query.$text = $text
	}

	return query
}
