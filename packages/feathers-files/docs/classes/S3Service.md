# Class: S3Service

## Hierarchy

- [`FileService`](FileService.md)

  ↳ **`S3Service`**

## Table of contents

### Constructors

- [constructor](S3Service.md#constructor)

### Properties

- [client](S3Service.md#client)
- [options](S3Service.md#options)

### Accessors

- [bucket](S3Service.md#bucket)
- [events](S3Service.md#events)

### Methods

- [\_create](S3Service.md#_create)
- [\_cwd](S3Service.md#_cwd)
- [\_download](S3Service.md#_download)
- [\_exists](S3Service.md#_exists)
- [\_find](S3Service.md#_find)
- [\_get](S3Service.md#_get)
- [\_getContent](S3Service.md#_getcontent)
- [\_list](S3Service.md#_list)
- [\_patch](S3Service.md#_patch)
- [\_readContent](S3Service.md#_readcontent)
- [\_remove](S3Service.md#_remove)
- [\_update](S3Service.md#_update)
- [\_uploadContent](S3Service.md#_uploadcontent)
- [\_uploadFile](S3Service.md#_uploadfile)
- [bucketParams](S3Service.md#bucketparams)
- [create](S3Service.md#create)
- [cwd](S3Service.md#cwd)
- [exists](S3Service.md#exists)
- [find](S3Service.md#find)
- [get](S3Service.md#get)
- [makeUrl](S3Service.md#makeurl)
- [patch](S3Service.md#patch)
- [remove](S3Service.md#remove)
- [update](S3Service.md#update)

## Constructors

### constructor

• **new S3Service**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`S3ServiceOptions`](../interfaces/S3ServiceOptions.md) |

#### Overrides

[FileService](FileService.md).[constructor](FileService.md#constructor)

## Properties

### client

• **client**: `S3`

___

### options

• **options**: [`S3ServiceOptions`](../interfaces/S3ServiceOptions.md)

#### Overrides

FileService.options

## Accessors

### bucket

• `get` **bucket**(): `string`

#### Returns

`string`

___

### events

• `get` **events**(): `string`[]

#### Returns

`string`[]

#### Inherited from

FileService.events

## Methods

### \_create

▸ **_create**(`data`, `params?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`FileData`](../README.md#filedata) |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`string`\>

___

### \_cwd

▸ **_cwd**(`options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

`any`

___

### \_download

▸ **_download**(`key?`, `file_path?`, `params?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |
| `file_path?` | `string` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`void`\>

___

### \_exists

▸ **_exists**(`id`, `params?`): `Promise`<`string` \| ``false``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`string` \| ``false``\>

___

### \_find

▸ **_find**(`params`, `options?`): `Promise`<`any`[] \| { `data`: `any`[] ; `limit`: `any` = filters.$limit; `skip`: `any` ; `total`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |
| `options` | `Object` |

#### Returns

`Promise`<`any`[] \| { `data`: `any`[] ; `limit`: `any` = filters.$limit; `skip`: `any` ; `total`: `number`  }\>

___

### \_get

▸ **_get**(`id`, `params?`): `Promise`<`string` \| `void` \| `Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`string` \| `void` \| `Buffer`\>

___

### \_getContent

▸ **_getContent**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`any`

#### Inherited from

[FileService](FileService.md).[_getContent](FileService.md#_getcontent)

___

### \_list

▸ **_list**(`params`, `options?`): `AsyncGenerator`<{ `file`: `_Object` ; `total_results`: `number`  }, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |
| `options` | `Object` |

#### Returns

`AsyncGenerator`<{ `file`: `_Object` ; `total_results`: `number`  }, `void`, `unknown`\>

___

### \_patch

▸ **_patch**(`id`, `data`, `params?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | [`FileData`](../README.md#filedata) |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`string`\>

___

### \_readContent

▸ **_readContent**(`Key?`, `params?`): `Promise`<`string` \| `Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `Key?` | `string` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`string` \| `Buffer`\>

___

### \_remove

▸ **_remove**(`id`, `params?`): `Promise`<`DeleteObjectCommandOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`DeleteObjectCommandOutput`\>

___

### \_update

▸ **_update**(`id`, `data`, `params?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | [`FileData`](../README.md#filedata) |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`string`\>

___

### \_uploadContent

▸ **_uploadContent**(`Key`, `Body`, `params`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `Key` | `string` |
| `Body` | `string` \| `Buffer` \| `Readable` |
| `params` | `any` |

#### Returns

`Promise`<`string`\>

___

### \_uploadFile

▸ **_uploadFile**(`key`, `file_path`, `params`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `file_path` | `any` |
| `params` | `any` |

#### Returns

`Promise`<`string`\>

___

### bucketParams

▸ **bucketParams**(`payload?`, `params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`S3RequestParams`](../interfaces/S3RequestParams.md) |
| `params` | `any` |

#### Returns

`any`

___

### create

▸ **create**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`FileData`](../README.md#filedata) \| [`FileData`](../README.md#filedata)[] |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[FileService](FileService.md).[create](FileService.md#create)

___

### cwd

▸ **cwd**(`params?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Params`<`Query`\> |

#### Returns

`string`

#### Inherited from

[FileService](FileService.md).[cwd](FileService.md#cwd)

___

### exists

▸ **exists**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[FileService](FileService.md).[exists](FileService.md#exists)

___

### find

▸ **find**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[FileService](FileService.md).[find](FileService.md#find)

___

### get

▸ **get**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `string`[] |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[FileService](FileService.md).[get](FileService.md#get)

___

### makeUrl

▸ **makeUrl**(`id`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`string`

#### Inherited from

[FileService](FileService.md).[makeUrl](FileService.md#makeurl)

___

### patch

▸ **patch**(`id?`, `data?`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `string` |
| `data?` | [`FileData`](../README.md#filedata) \| [`FileData`](../README.md#filedata)[] |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[FileService](FileService.md).[patch](FileService.md#patch)

___

### remove

▸ **remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `string`[] |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[FileService](FileService.md).[remove](FileService.md#remove)

___

### update

▸ **update**(`id`, `data?`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `string`[] |
| `data?` | [`FileData`](../README.md#filedata) |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[FileService](FileService.md).[update](FileService.md#update)
