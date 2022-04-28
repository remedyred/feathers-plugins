# Class: LocalService

## Hierarchy

- [`FileService`](FileService.md)

  ↳ **`LocalService`**

## Table of contents

### Constructors

- [constructor](LocalService.md#constructor)

### Properties

- [options](LocalService.md#options)

### Accessors

- [events](LocalService.md#events)

### Methods

- [\_bucket](LocalService.md#_bucket)
- [\_create](LocalService.md#_create)
- [\_cwd](LocalService.md#_cwd)
- [\_exists](LocalService.md#_exists)
- [\_find](LocalService.md#_find)
- [\_get](LocalService.md#_get)
- [\_getContent](LocalService.md#_getcontent)
- [\_patch](LocalService.md#_patch)
- [\_remove](LocalService.md#_remove)
- [\_update](LocalService.md#_update)
- [bucket](LocalService.md#bucket)
- [create](LocalService.md#create)
- [cwd](LocalService.md#cwd)
- [exists](LocalService.md#exists)
- [find](LocalService.md#find)
- [get](LocalService.md#get)
- [makeUrl](LocalService.md#makeurl)
- [patch](LocalService.md#patch)
- [remove](LocalService.md#remove)
- [update](LocalService.md#update)

## Constructors

### constructor

• **new LocalService**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LocalFileServiceOptions`](../interfaces/LocalFileServiceOptions.md) |

#### Overrides

[FileService](FileService.md).[constructor](FileService.md#constructor)

## Properties

### options

• **options**: [`LocalFileServiceOptions`](../interfaces/LocalFileServiceOptions.md) = `{}`

#### Overrides

FileService.options

## Accessors

### events

• `get` **events**(): `string`[]

#### Returns

`string`[]

#### Inherited from

FileService.events

## Methods

### \_bucket

▸ **_bucket**(`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`string`

#### Inherited from

[FileService](FileService.md).[_bucket](FileService.md#_bucket)

___

### \_create

▸ **_create**(`data`, `params?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`FileData`](../README.md#filedata) |
| `params?` | `Params` |

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

### \_exists

▸ **_exists**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

___

### \_find

▸ **_find**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ParsedParams`](../interfaces/ParsedParams.md) \| [`FileParams`](../README.md#fileparams) |

#### Returns

`Promise`<`any`\>

___

### \_get

▸ **_get**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

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

### \_patch

▸ **_patch**(`id`, `data?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data?` | [`FileData`](../README.md#filedata) |

#### Returns

`Promise`<`string`\>

___

### \_remove

▸ **_remove**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

___

### \_update

▸ **_update**(`id`, `data?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data?` | [`FileData`](../README.md#filedata) |

#### Returns

`Promise`<`string`\>

___

### bucket

▸ **bucket**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Inherited from

[FileService](FileService.md).[bucket](FileService.md#bucket)

___

### create

▸ **create**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`FileData`](../README.md#filedata) \| [`FileData`](../README.md#filedata)[] |
| `params?` | `Params` |

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
| `params?` | `Params` |

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
| `params?` | `Params` |

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
| `params` | [`FileParams`](../README.md#fileparams) |

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
| `params?` | `Params` |

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
| `params?` | `Params` |

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
| `params?` | `Params` |

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
| `params?` | `Params` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[FileService](FileService.md).[update](FileService.md#update)
