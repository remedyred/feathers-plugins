# Class: PouchService<T, D, P\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `Partial`<`T`\> |
| `P` | extends `Params` = `Params` |

## Hierarchy

- [`PouchAdapter`](PouchAdapter.md)

  ↳ **`PouchService`**

## Implements

- `ServiceMethods`<`Paginated`<`T`\> \| `T`, `D`, `P`\>

## Table of contents

### Constructors

- [constructor](PouchService.md#constructor)

### Properties

- [options](PouchService.md#options)

### Accessors

- [events](PouchService.md#events)
- [id](PouchService.md#id)

### Methods

- [$attach](PouchService.md#$attach)
- [$create](PouchService.md#$create)
- [$find](PouchService.md#$find)
- [$get](PouchService.md#$get)
- [$multi](PouchService.md#$multi)
- [$patch](PouchService.md#$patch)
- [$put](PouchService.md#$put)
- [$ready](PouchService.md#$ready)
- [$remove](PouchService.md#$remove)
- [$update](PouchService.md#$update)
- [\_attach](PouchService.md#_attach)
- [\_create](PouchService.md#_create)
- [\_find](PouchService.md#_find)
- [\_get](PouchService.md#_get)
- [\_patch](PouchService.md#_patch)
- [\_put](PouchService.md#_put)
- [\_remove](PouchService.md#_remove)
- [\_update](PouchService.md#_update)
- [addListener](PouchService.md#addlistener)
- [allowsMulti](PouchService.md#allowsmulti)
- [attach](PouchService.md#attach)
- [create](PouchService.md#create)
- [emit](PouchService.md#emit)
- [eventNames](PouchService.md#eventnames)
- [find](PouchService.md#find)
- [get](PouchService.md#get)
- [getMaxListeners](PouchService.md#getmaxlisteners)
- [getOptions](PouchService.md#getoptions)
- [getQuery](PouchService.md#getquery)
- [listenerCount](PouchService.md#listenercount)
- [listeners](PouchService.md#listeners)
- [on](PouchService.md#on)
- [once](PouchService.md#once)
- [patch](PouchService.md#patch)
- [prependListener](PouchService.md#prependlistener)
- [prependOnceListener](PouchService.md#prependoncelistener)
- [put](PouchService.md#put)
- [remove](PouchService.md#remove)
- [removeAllListeners](PouchService.md#removealllisteners)
- [removeListener](PouchService.md#removelistener)
- [sanitizeData](PouchService.md#sanitizedata)
- [sanitizeQuery](PouchService.md#sanitizequery)
- [setMaxListeners](PouchService.md#setmaxlisteners)
- [setup](PouchService.md#setup)
- [update](PouchService.md#update)

## Constructors

### constructor

• **new PouchService**<`T`, `D`, `P`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `Partial`<`T`\> |
| `P` | extends `Params`<`Query`, `P`\> = `Params`<`Query`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `PouchServiceOptions` |

#### Inherited from

[PouchAdapter](PouchAdapter.md).[constructor](PouchAdapter.md#constructor)

## Properties

### options

• **options**: `PouchServiceOptions`

#### Inherited from

[PouchAdapter](PouchAdapter.md).[options](PouchAdapter.md#options)

## Accessors

### events

• `get` **events**(): `string`[]

#### Returns

`string`[]

#### Inherited from

PouchAdapter.events

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

PouchAdapter.id

## Methods

### $attach

▸ **$attach**(`id`, `attachment`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `attachment` | `PouchAttachment` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$attach](PouchAdapter.md#$attach)

▸ **$attach**(`id`, `attachments`): `Promise`<`Response`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `attachments` | `PouchAttachment`[] |

#### Returns

`Promise`<`Response`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$attach](PouchAdapter.md#$attach)

___

### $create

▸ **$create**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PostDocument`<`Document`\> |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$create](PouchAdapter.md#$create)

▸ **$create**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PostDocument`<`Document`\>[] |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$create](PouchAdapter.md#$create)

▸ **$create**(`data`, `_params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PostDocument`<`Document`\> \| `PostDocument`<`Document`\>[] |
| `_params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$create](PouchAdapter.md#$create)

___

### $find

▸ **$find**(`params?`): `Promise`<`Paginated`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Params`<`Query`\> & { `paginate?`: `PaginationOptions`  } |

#### Returns

`Promise`<`Paginated`<`any`\>\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$find](PouchAdapter.md#$find)

▸ **$find**(`params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Params`<`Query`\> & { `paginate`: ``false``  } |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$find](PouchAdapter.md#$find)

___

### $get

▸ **$get**(`id`, `_params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `_params` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$get](PouchAdapter.md#$get)

___

### $multi

▸ **$multi**(`method`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$multi](PouchAdapter.md#$multi)

___

### $patch

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `data` | `PutDocument`<`Document`\> |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$patch](PouchAdapter.md#$patch)

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `PutDocument`<`Document`\> |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$patch](PouchAdapter.md#$patch)

▸ **$patch**(`id`, `data`, `_params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `data` | `PutDocument`<`Document`\> |
| `_params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$patch](PouchAdapter.md#$patch)

___

### $put

▸ **$put**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PutDocument`<`Document`\> |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$put](PouchAdapter.md#$put)

▸ **$put**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PutDocument`<`Document`\>[] |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$put](PouchAdapter.md#$put)

▸ **$put**(`data`, `_params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PutDocument`<`Document`\> \| `PutDocument`<`Document`\>[] |
| `_params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$put](PouchAdapter.md#$put)

___

### $ready

▸ **$ready**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$ready](PouchAdapter.md#$ready)

___

### $remove

▸ **$remove**(`id`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$remove](PouchAdapter.md#$remove)

▸ **$remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$remove](PouchAdapter.md#$remove)

▸ **$remove**(`id`, `_params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `_params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$remove](PouchAdapter.md#$remove)

___

### $update

▸ **$update**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `PutDocument`<`Document`\> |
| `params` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[$update](PouchAdapter.md#$update)

___

### \_attach

▸ **_attach**(`id`, `attachment`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `attachment` | `PouchAttachment` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_attach](PouchAdapter.md#_attach)

▸ **_attach**(`id`, `attachments`): `Promise`<`Response`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `attachments` | `PouchAttachment`[] |

#### Returns

`Promise`<`Response`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_attach](PouchAdapter.md#_attach)

___

### \_create

▸ **_create**(`data`, `params?`): `Promise`<`any`\>

Create a new resource for this service, skipping any service-level hooks, sanitize the data
and check if multiple updates are allowed.

**`See`**

 - HookLessServiceMethods
 - [API Documentation: .create(data, params)](https://docs.feathersjs.com/api/services.html#create-data-params|Feathers)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\> | Data to insert into this service. |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> | Service call parameters Params |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_create](PouchAdapter.md#_create)

▸ **_create**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_create](PouchAdapter.md#_create)

▸ **_create**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\> \| `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_create](PouchAdapter.md#_create)

___

### \_find

▸ **_find**(`_params?`): `Promise`<`Paginated`<`any`\>\>

Retrieve all resources from this service, skipping any service-level hooks but sanitize the query
with allowed filters and properties by calling `sanitizeQuery`.

**`See`**

 - HookLessServiceMethods
 - [API Documentation: .find(params)](https://docs.feathersjs.com/api/services.html#find-params|Feathers)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> & { `paginate?`: `PaginationOptions`  } |

#### Returns

`Promise`<`Paginated`<`any`\>\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_find](PouchAdapter.md#_find)

▸ **_find**(`_params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> & { `paginate`: ``false``  } |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_find](PouchAdapter.md#_find)

▸ **_find**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_find](PouchAdapter.md#_find)

___

### \_get

▸ **_get**(`id`, `params?`): `Promise`<`any`\>

Retrieve a single resource matching the given ID, skipping any service-level hooks but sanitize the query
with allowed filters and properties by calling `sanitizeQuery`.

**`See`**

 - HookLessServiceMethods
 - [API Documentation: .get(id, params)](https://docs.feathersjs.com/api/services.html#get-id-params|Feathers)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `Id` | ID of the resource to locate |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> | Service call parameters Params |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_get](PouchAdapter.md#_get)

___

### \_patch

▸ **_patch**(`id`, `data`, `params?`): `Promise`<`any`[]\>

Merge any resources matching the given ID with the given data, skipping any service-level hooks.
Sanitizes the query and data and checks it multiple updates are allowed.

**`See`**

 - HookLessServiceMethods
 - [API Documentation: .patch(id, data, params)](https://docs.feathersjs.com/api/services.html#patch-id-data-params|Feathers)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | ``null`` | ID of the resource to be patched |
| `data` | `Partial`<`Partial`<`any`\>\> | Data to merge with the current resource. |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> | Service call parameters Params |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_patch](PouchAdapter.md#_patch)

▸ **_patch**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `Partial`<`Partial`<`any`\>\> |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_patch](PouchAdapter.md#_patch)

▸ **_patch**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `data` | `Partial`<`Partial`<`any`\>\> |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_patch](PouchAdapter.md#_patch)

___

### \_put

▸ **_put**(`data`, `params?`): `Promise`<`any`\>

Put a new resource for this service, skipping any service-level hooks, sanitize the data
and check if multiple updates are allowed.

**`See`**

 - HookLessServiceMethods
 - [API Documentation: .put(data, params)](https://docs.feathersjs.com/api/services.html#put-data-params|Feathers)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `PutDocument`<`Document`\> | Data to insert into this service. |
| `params?` | `Params`<`Query`\> | Service call parameters |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_put](PouchAdapter.md#_put)

▸ **_put**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PutDocument`<`Document`\>[] |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_put](PouchAdapter.md#_put)

▸ **_put**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PutDocument`<`Document`\> \| `PutDocument`<`Document`\>[] |
| `params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_put](PouchAdapter.md#_put)

___

### \_remove

▸ **_remove**(`id`, `params?`): `Promise`<`any`[]\>

Remove resources matching the given ID from the this service, skipping any service-level hooks.
Sanitized the query and verifies that multiple updates are allowed.

**`See`**

 - HookLessServiceMethods
 - [API Documentation: .remove(id, params)](https://docs.feathersjs.com/api/services.html#remove-id-params|Feathers)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | ``null`` | ID of the resource to be removed |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> | Service call parameters Params |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_remove](PouchAdapter.md#_remove)

▸ **_remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_remove](PouchAdapter.md#_remove)

▸ **_remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_remove](PouchAdapter.md#_remove)

___

### \_update

▸ **_update**(`id`, `data`, `params?`): `Promise`<`any`\>

Replace any resources matching the given ID with the given data, skipping any service-level hooks.

**`See`**

 - HookLessServiceMethods
 - [API Documentation: .update(id, data, params)](https://docs.feathersjs.com/api/services.html#update-id-data-params|Feathers)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `Id` | ID of the resource to be updated |
| `data` | `Partial`<`any`\> | Data to be put in place of the current resource. |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> | Service call parameters Params |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[_update](PouchAdapter.md#_update)

___

### addListener

▸ **addListener**(`event`, `listener`): [`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[addListener](PouchAdapter.md#addlistener)

___

### allowsMulti

▸ **allowsMulti**(`method`, `params?`): `boolean`

Check if this adapter allows multiple updates for a method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | `string` | The method name to check. |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> | The service call params. |

#### Returns

`boolean`

Wether or not multiple updates are allowed.

#### Inherited from

[PouchAdapter](PouchAdapter.md).[allowsMulti](PouchAdapter.md#allowsmulti)

___

### attach

▸ **attach**(`id`, `attachment`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `attachment` | `PouchAttachment` |

#### Returns

`Promise`<`Response`\>

▸ **attach**(`id`, `attachments`): `Promise`<`Response`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `attachments` | `PouchAttachment`[] |

#### Returns

`Promise`<`Response`[]\>

___

### create

▸ **create**(`data`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`D`\> |
| `params?` | `P` |

#### Returns

`Promise`<`T`\>

#### Implementation of

ServiceMethods.create

▸ **create**(`data`, `params?`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`D`\>[] |
| `params?` | `P` |

#### Returns

`Promise`<`T`[]\>

#### Implementation of

ServiceMethods.create

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[PouchAdapter](PouchAdapter.md).[emit](PouchAdapter.md#emit)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[PouchAdapter](PouchAdapter.md).[eventNames](PouchAdapter.md#eventnames)

___

### find

▸ **find**(`params?`): `Promise`<`Paginated`<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `P` & { `paginate?`: `PaginationOptions`  } |

#### Returns

`Promise`<`Paginated`<`T`\>\>

#### Implementation of

ServiceMethods.find

▸ **find**(`params?`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `P` & { `paginate`: ``false``  } |

#### Returns

`Promise`<`T`[]\>

#### Implementation of

ServiceMethods.find

▸ **find**(`params?`): `Promise`<`Paginated`<`T`\> \| `T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `P` |

#### Returns

`Promise`<`Paginated`<`T`\> \| `T`[]\>

#### Implementation of

ServiceMethods.find

___

### get

▸ **get**(`id`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `P` |

#### Returns

`Promise`<`T`\>

#### Implementation of

ServiceMethods.get

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[PouchAdapter](PouchAdapter.md).[getMaxListeners](PouchAdapter.md#getmaxlisteners)

___

### getOptions

▸ **getOptions**(`params`): `AdapterServiceOptions`

Returns the combined options for a service call. Options will be merged
with `this.options` and `params.adapter` for dynamic overrides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> | The parameters for the service method call |

#### Returns

`AdapterServiceOptions`

The actual options for this call

#### Inherited from

[PouchAdapter](PouchAdapter.md).[getOptions](PouchAdapter.md#getoptions)

___

### getQuery

▸ **getQuery**(`params`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Params`<`Query`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `filters` | { `$limit`: `any` ; `$select`: `any` ; `$skip`: `any` ; `$sort`: `any`  } |
| `filters.$limit` | `any` |
| `filters.$select` | `any` |
| `filters.$skip` | `any` |
| `filters.$sort` | `any` |
| `query` | {} |

#### Inherited from

[PouchAdapter](PouchAdapter.md).[getQuery](PouchAdapter.md#getquery)

___

### listenerCount

▸ **listenerCount**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[PouchAdapter](PouchAdapter.md).[listenerCount](PouchAdapter.md#listenercount)

___

### listeners

▸ **listeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[PouchAdapter](PouchAdapter.md).[listeners](PouchAdapter.md#listeners)

___

### on

▸ **on**(`event`, `listener`): [`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[on](PouchAdapter.md#on)

___

### once

▸ **once**(`event`, `listener`): [`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[once](PouchAdapter.md#once)

___

### patch

▸ **patch**(`id`, `data`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `Partial`<`D`\> |
| `params?` | `P` |

#### Returns

`Promise`<`T`\>

#### Implementation of

ServiceMethods.patch

▸ **patch**(`id`, `data`, `params?`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `data` | `Partial`<`D`\> |
| `params?` | `P` |

#### Returns

`Promise`<`T`[]\>

#### Implementation of

ServiceMethods.patch

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[prependListener](PouchAdapter.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[prependOnceListener](PouchAdapter.md#prependoncelistener)

___

### put

▸ **put**(`data`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PutDocument`<`Document`\> |
| `params?` | `P` |

#### Returns

`Promise`<`T`\>

▸ **put**(`data`, `params?`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PutDocument`<`Document`\>[] |
| `params?` | `P` |

#### Returns

`Promise`<`T`[]\>

___

### remove

▸ **remove**(`id`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `P` |

#### Returns

`Promise`<`T`\>

#### Implementation of

ServiceMethods.remove

▸ **remove**(`id`, `params?`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `params?` | `P` |

#### Returns

`Promise`<`T`[]\>

#### Implementation of

ServiceMethods.remove

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[removeAllListeners](PouchAdapter.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[removeListener](PouchAdapter.md#removelistener)

___

### sanitizeData

▸ **sanitizeData**<`X`\>(`data`, `_params`): `Promise`<`X`\>

Sanitize the incoming data, e.g. removing invalid keywords etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `X` | `Partial`<`Partial`<`any`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `X` | The data to sanitize |
| `_params` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> | Service call parameters |

#### Returns

`Promise`<`X`\>

The sanitized data

#### Inherited from

[PouchAdapter](PouchAdapter.md).[sanitizeData](PouchAdapter.md#sanitizedata)

___

### sanitizeQuery

▸ **sanitizeQuery**(`params?`): `Promise`<`Query`\>

Returns a sanitized version of `params.query`, converting filter values
(like $limit and $skip) into the expected type. Will throw an error if
a `$` prefixed filter or operator value that is not allowed in `filters`
or `operators` is encountered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> | The service call parameter. |

#### Returns

`Promise`<`Query`\>

A new object containing the sanitized query.

#### Inherited from

[PouchAdapter](PouchAdapter.md).[sanitizeQuery](PouchAdapter.md#sanitizequery)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`PouchService`](PouchService.md)<`T`, `D`, `P`\>

#### Inherited from

[PouchAdapter](PouchAdapter.md).[setMaxListeners](PouchAdapter.md#setmaxlisteners)

___

### setup

▸ **setup**(`app`, `servicePath`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Application`<`any`, `any`\> |
| `servicePath` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

ServiceMethods.setup

#### Inherited from

[PouchAdapter](PouchAdapter.md).[setup](PouchAdapter.md#setup)

___

### update

▸ **update**(`id`, `data`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `D` |
| `params?` | `P` |

#### Returns

`Promise`<`T`\>

#### Implementation of

ServiceMethods.update
