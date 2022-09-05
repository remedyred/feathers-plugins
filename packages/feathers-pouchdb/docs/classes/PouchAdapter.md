# Class: PouchAdapter<T, P, O\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `P` | extends `Params` = `Params` |
| `O` | extends `PouchServiceOptions` = `PouchServiceOptions` |

## Hierarchy

- `AdapterBase`

- `EventEmitter`

  ↳ **`PouchAdapter`**

  ↳↳ [`PouchService`](PouchService.md)

## Table of contents

### Constructors

- [constructor](PouchAdapter.md#constructor)

### Properties

- [options](PouchAdapter.md#options)

### Accessors

- [events](PouchAdapter.md#events)
- [id](PouchAdapter.md#id)

### Methods

- [$attach](PouchAdapter.md#$attach)
- [$create](PouchAdapter.md#$create)
- [$find](PouchAdapter.md#$find)
- [$get](PouchAdapter.md#$get)
- [$multi](PouchAdapter.md#$multi)
- [$patch](PouchAdapter.md#$patch)
- [$put](PouchAdapter.md#$put)
- [$ready](PouchAdapter.md#$ready)
- [$remove](PouchAdapter.md#$remove)
- [$update](PouchAdapter.md#$update)
- [\_attach](PouchAdapter.md#_attach)
- [\_create](PouchAdapter.md#_create)
- [\_find](PouchAdapter.md#_find)
- [\_get](PouchAdapter.md#_get)
- [\_patch](PouchAdapter.md#_patch)
- [\_put](PouchAdapter.md#_put)
- [\_remove](PouchAdapter.md#_remove)
- [\_update](PouchAdapter.md#_update)
- [addListener](PouchAdapter.md#addlistener)
- [allowsMulti](PouchAdapter.md#allowsmulti)
- [emit](PouchAdapter.md#emit)
- [eventNames](PouchAdapter.md#eventnames)
- [getMaxListeners](PouchAdapter.md#getmaxlisteners)
- [getOptions](PouchAdapter.md#getoptions)
- [getQuery](PouchAdapter.md#getquery)
- [listenerCount](PouchAdapter.md#listenercount)
- [listeners](PouchAdapter.md#listeners)
- [on](PouchAdapter.md#on)
- [once](PouchAdapter.md#once)
- [prependListener](PouchAdapter.md#prependlistener)
- [prependOnceListener](PouchAdapter.md#prependoncelistener)
- [removeAllListeners](PouchAdapter.md#removealllisteners)
- [removeListener](PouchAdapter.md#removelistener)
- [sanitizeData](PouchAdapter.md#sanitizedata)
- [sanitizeQuery](PouchAdapter.md#sanitizequery)
- [setMaxListeners](PouchAdapter.md#setmaxlisteners)
- [setup](PouchAdapter.md#setup)

## Constructors

### constructor

• **new PouchAdapter**<`T`, `P`, `O`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `P` | extends `Params`<`Query`, `P`\> = `Params`<`Query`\> |
| `O` | extends `PouchServiceOptions` = `PouchServiceOptions` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `O` |

#### Inherited from

AdapterBase.constructor

## Properties

### options

• **options**: `O`

#### Inherited from

AdapterBase.options

## Accessors

### events

• `get` **events**(): `string`[]

#### Returns

`string`[]

#### Inherited from

AdapterBase.events

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

AdapterBase.id

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

▸ **$attach**(`id`, `attachments`): `Promise`<`Response`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `attachments` | `PouchAttachment`[] |

#### Returns

`Promise`<`Response`[]\>

___

### $create

▸ **$create**(`data`, `params?`): `Promise`<`ExistingDocument`<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PostDocument`<`Document`\> |
| `params?` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\>\>

#### Inherited from

AdapterBase.$create

▸ **$create**(`data`, `params?`): `Promise`<`ExistingDocument`<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PostDocument`<`Document`\>[] |
| `params?` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\>[]\>

#### Inherited from

AdapterBase.$create

▸ **$create**(`data`, `_params?`): `Promise`<`ExistingDocument`<`T`\> \| `ExistingDocument`<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PostDocument`<`Document`\> \| `PostDocument`<`Document`\>[] |
| `_params?` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\> \| `ExistingDocument`<`T`\>[]\>

#### Inherited from

AdapterBase.$create

___

### $find

▸ **$find**(`params?`): `Promise`<`Paginated`<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `P` & { `paginate?`: `PaginationOptions`  } |

#### Returns

`Promise`<`Paginated`<`T`\>\>

#### Inherited from

AdapterBase.$find

▸ **$find**(`params?`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `P` & { `paginate`: ``false``  } |

#### Returns

`Promise`<`T`[]\>

#### Inherited from

AdapterBase.$find

___

### $get

▸ **$get**(`id`, `_params?`): `Promise`<`ExistingDocument`<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `_params` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\>\>

#### Inherited from

AdapterBase.$get

___

### $multi

▸ **$multi**(`method`, `params?`): `Promise`<`ExistingDocument`<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\>[]\>

___

### $patch

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`ExistingDocument`<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `data` | `PutDocument`<`Document`\> |
| `params?` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\>[]\>

#### Inherited from

AdapterBase.$patch

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`ExistingDocument`<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `PutDocument`<`Document`\> |
| `params?` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\>\>

#### Inherited from

AdapterBase.$patch

▸ **$patch**(`id`, `data`, `_params?`): `Promise`<`T` \| `ExistingDocument`<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `data` | `PutDocument`<`Document`\> |
| `_params?` | `P` |

#### Returns

`Promise`<`T` \| `ExistingDocument`<`T`\>[]\>

#### Inherited from

AdapterBase.$patch

___

### $put

▸ **$put**(`data`, `params?`): `Promise`<`ExistingDocument`<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PutDocument`<`Document`\> |
| `params?` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\>\>

▸ **$put**(`data`, `params?`): `Promise`<`ExistingDocument`<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PutDocument`<`Document`\>[] |
| `params?` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\>[]\>

▸ **$put**(`data`, `_params?`): `Promise`<`ExistingDocument`<`T`\> \| `ExistingDocument`<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PutDocument`<`Document`\> \| `PutDocument`<`Document`\>[] |
| `_params?` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\> \| `ExistingDocument`<`T`\>[]\>

___

### $ready

▸ **$ready**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

___

### $remove

▸ **$remove**(`id`, `params?`): `Promise`<`ExistingDocument`<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `params?` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\>[]\>

#### Inherited from

AdapterBase.$remove

▸ **$remove**(`id`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `P` |

#### Returns

`Promise`<`T`\>

#### Inherited from

AdapterBase.$remove

▸ **$remove**(`id`, `_params?`): `Promise`<`T` \| `ExistingDocument`<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `_params?` | `P` |

#### Returns

`Promise`<`T` \| `ExistingDocument`<`T`\>[]\>

#### Inherited from

AdapterBase.$remove

___

### $update

▸ **$update**(`id`, `data`, `params?`): `Promise`<`ExistingDocument`<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `PutDocument`<`Document`\> |
| `params` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\>\>

#### Inherited from

AdapterBase.$update

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

▸ **_attach**(`id`, `attachments`): `Promise`<`Response`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `attachments` | `PouchAttachment`[] |

#### Returns

`Promise`<`Response`[]\>

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

AdapterBase.\_create

▸ **_create**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

AdapterBase.\_create

▸ **_create**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\> \| `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

AdapterBase.\_create

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

AdapterBase.\_find

▸ **_find**(`_params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> & { `paginate`: ``false``  } |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

AdapterBase.\_find

▸ **_find**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

AdapterBase.\_find

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

AdapterBase.\_get

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

AdapterBase.\_patch

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

AdapterBase.\_patch

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

AdapterBase.\_patch

___

### \_put

▸ **_put**(`data`, `params?`): `Promise`<`ExistingDocument`<`T`\>\>

Put a new resource for this service, skipping any service-level hooks, sanitize the data
and check if multiple updates are allowed.

**`See`**

 - HookLessServiceMethods
 - [API Documentation: .put(data, params)](https://docs.feathersjs.com/api/services.html#put-data-params|Feathers)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `PutDocument`<`Document`\> | Data to insert into this service. |
| `params?` | `P` | Service call parameters |

#### Returns

`Promise`<`ExistingDocument`<`T`\>\>

▸ **_put**(`data`, `params?`): `Promise`<`ExistingDocument`<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PutDocument`<`Document`\>[] |
| `params?` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\>[]\>

▸ **_put**(`data`, `params?`): `Promise`<`ExistingDocument`<`T`\> \| `ExistingDocument`<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PutDocument`<`Document`\> \| `PutDocument`<`Document`\>[] |
| `params?` | `P` |

#### Returns

`Promise`<`ExistingDocument`<`T`\> \| `ExistingDocument`<`T`\>[]\>

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

AdapterBase.\_remove

▸ **_remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

AdapterBase.\_remove

▸ **_remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

AdapterBase.\_remove

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

AdapterBase.\_update

___

### addListener

▸ **addListener**(`event`, `listener`): [`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Inherited from

EventEmitter.addListener

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

AdapterBase.allowsMulti

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

EventEmitter.emit

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

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

AdapterBase.getOptions

___

### getQuery

▸ **getQuery**(`params`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `P` |

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

EventEmitter.listenerCount

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

EventEmitter.listeners

___

### on

▸ **on**(`event`, `listener`): [`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Inherited from

EventEmitter.on

___

### once

▸ **once**(`event`, `listener`): [`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Inherited from

EventEmitter.once

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Inherited from

EventEmitter.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Inherited from

EventEmitter.prependOnceListener

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Inherited from

EventEmitter.removeAllListeners

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Inherited from

EventEmitter.removeListener

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

AdapterBase.sanitizeData

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

AdapterBase.sanitizeQuery

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`PouchAdapter`](PouchAdapter.md)<`T`, `P`, `O`\>

#### Inherited from

EventEmitter.setMaxListeners

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
