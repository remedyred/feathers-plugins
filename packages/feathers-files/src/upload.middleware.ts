import multer, {Multer} from 'multer'
import {isArray} from '@snickbit/utilities'
import {Out} from '@snickbit/out'
import {RequestHandler} from 'express'
import {NextFunction} from '@feathersjs/feathers'

export type UploadOptions = multer.Options

export interface UploadRequest extends Express.Request {
	method: string
	feathers: any
	body: any
}

export type UploadMiddleware = [RequestHandler, Uploader['moveToFeathers']]

class Uploader {
	out = new Out('uploader')
	multer: Multer

	constructor(options) {
		this.multer = multer(options)
	}

	moveToFeathers(req: UploadRequest, res: Response, next: NextFunction) {
		if (req?.feathers && ['POST', 'PUT'].includes(req.method) && req.files) {

			const files = {}

			const addFile = file => {
				if (!file) return
				if (isArray(file)) {
					return file.forEach(f => addFile(f))
				}
				this.out.verbose(`[addFile] Adding file to "${file.fieldname}"`, file)
				if (isArray(files[file.fieldname])) {
					this.out.debug('[addFile] Adding file to array')
					files[file.fieldname].push(file)
				} else {
					this.out.debug('[addFile] Creating array')
					files[file.fieldname] = [file]
				}
			}

			for (const fileIndex in req.files) {
				this.out.debug(`[loop] Adding file to`, fileIndex)
				addFile(req.files[fileIndex])
			}

			delete req.files

			for (const fileField in files) {
				const fileArray = files[fileField]
				req.body[fileField] = fileArray.length === 1 ? fileArray[0] : fileArray
			}
		}
		return next()
	}

	/**
	 * @param {string} fieldName
	 * @returns {UploadMiddleware}
	 */
	single(fieldName: string): UploadMiddleware {
		return [
			this.multer.single(fieldName),
			this.moveToFeathers.bind(this)
		]
	}

	array(fieldName: string, maxCount?: number): UploadMiddleware {
		return [
			this.multer.array(fieldName, maxCount),
			this.moveToFeathers.bind(this)
		]
	}

	fields(fields: multer.Field[]): UploadMiddleware {
		return [
			this.multer.fields(fields),
			this.moveToFeathers.bind(this)
		]
	}

	any(): UploadMiddleware {
		return [
			this.multer.any(),
			this.moveToFeathers.bind(this)
		]
	}

	none(): UploadMiddleware {
		return [
			this.multer.none(),
			this.moveToFeathers.bind(this)
		]
	}
}

export function uploader(options: UploadOptions = {}): Uploader {
	if (typeof options === 'object' && options !== null) {
		return new Uploader(options)
	}

	throw new TypeError('Expected object for argument options')
}
