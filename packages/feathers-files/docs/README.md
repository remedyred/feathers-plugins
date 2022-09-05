# @snickbit/feathers-files

## Table of contents

### Classes

- [FileService](classes/FileService.md)
- [LocalService](classes/LocalService.md)
- [S3Service](classes/S3Service.md)

### Interfaces

- [FileRecord](interfaces/FileRecord.md)
- [FileServiceOptions](interfaces/FileServiceOptions.md)
- [FilteredQuery](interfaces/FilteredQuery.md)
- [LocalFileServiceOptions](interfaces/LocalFileServiceOptions.md)
- [ParsedParams](interfaces/ParsedParams.md)
- [S3File](interfaces/S3File.md)
- [S3Options](interfaces/S3Options.md)
- [S3Payload](interfaces/S3Payload.md)
- [S3Request](interfaces/S3Request.md)
- [S3RequestParams](interfaces/S3RequestParams.md)
- [S3ServiceOptions](interfaces/S3ServiceOptions.md)
- [UploadRequest](interfaces/UploadRequest.md)

### Type Aliases

- [FileData](README.md#filedata)
- [FileId](README.md#fileid)
- [UploadMiddleware](README.md#uploadmiddleware)
- [UploadOptions](README.md#uploadoptions)

### Functions

- [uploader](README.md#uploader)

## Type Aliases

### FileData

Ƭ **FileData**: `Buffer` \| `File` \| [`FileRecord`](interfaces/FileRecord.md)

___

### FileId

Ƭ **FileId**: `string`

The path or key of the file

___

### UploadMiddleware

Ƭ **UploadMiddleware**: [`RequestHandler`, `Uploader`[``"moveToFeathers"``]]

___

### UploadOptions

Ƭ **UploadOptions**: `multer.Options`

## Functions

### uploader

▸ **uploader**(`options?`): `Uploader`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Options` |

#### Returns

`Uploader`
