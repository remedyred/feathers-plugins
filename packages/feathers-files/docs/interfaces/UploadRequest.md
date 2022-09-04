# Interface: UploadRequest

## Hierarchy

- `Request`

  ↳ **`UploadRequest`**

## Table of contents

### Properties

- [body](UploadRequest.md#body)
- [feathers](UploadRequest.md#feathers)
- [file](UploadRequest.md#file)
- [files](UploadRequest.md#files)
- [method](UploadRequest.md#method)

## Properties

### body

• **body**: `any`

___

### feathers

• **feathers**: `any`

___

### file

• `Optional` **file**: `File`

`Multer.File` object populated by `single()` middleware.

#### Inherited from

Express.Request.file

___

### files

• `Optional` **files**: { `[fieldname: string]`: `Multer.File`[];  } \| `File`[]

Array or dictionary of `Multer.File` object populated by `array()`,
`fields()`, and `any()` middleware.

#### Inherited from

Express.Request.files

___

### method

• **method**: `string`
