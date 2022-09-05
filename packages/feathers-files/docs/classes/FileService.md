# Class: FileService

## Hierarchy

- **`FileService`**

  ↳ [`LocalService`](LocalService.md)

  ↳ [`S3Service`](S3Service.md)

## Table of contents

### Constructors

- [constructor](FileService.md#constructor)

### Accessors

- [events](FileService.md#events)

### Methods

- [\_getContent](FileService.md#_getcontent)
- [create](FileService.md#create)
- [cwd](FileService.md#cwd)
- [exists](FileService.md#exists)
- [find](FileService.md#find)
- [get](FileService.md#get)
- [makeUrl](FileService.md#makeurl)
- [patch](FileService.md#patch)
- [remove](FileService.md#remove)
- [update](FileService.md#update)

## Constructors

### constructor

• **new FileService**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

## Accessors

### events

• `get` **events**(): `string`[]

#### Returns

`string`[]

## Methods

### \_getContent

▸ **_getContent**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

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

___

### cwd

▸ **cwd**(`params?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Params`<`Query`\> |

#### Returns

`string`

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

___

### find

▸ **find**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

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

___

### makeUrl

▸ **makeUrl**(`id`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`string`

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
