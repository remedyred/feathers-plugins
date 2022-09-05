# Class: RedisService<T, D, P\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `Partial`<`T`\> |
| `P` | extends `RedisServiceOptions` = `RedisServiceOptions` |

## Hierarchy

- [`RedisAdapter`](RedisAdapter.md)

  ↳ **`RedisService`**

## Implements

- `ServiceMethods`<`Paginated`<`T`\> \| `T`, `D`, `P`\>

## Table of contents

### Constructors

- [constructor](RedisService.md#constructor)

### Properties

- [client](RedisService.md#client)
- [options](RedisService.md#options)

### Accessors

- [events](RedisService.md#events)
- [id](RedisService.md#id)
- [keyPrefix](RedisService.md#keyprefix)

### Methods

- [$create](RedisService.md#$create)
- [$find](RedisService.md#$find)
- [$get](RedisService.md#$get)
- [$multi](RedisService.md#$multi)
- [$patch](RedisService.md#$patch)
- [$remove](RedisService.md#$remove)
- [$set](RedisService.md#$set)
- [$update](RedisService.md#$update)
- [\_create](RedisService.md#_create)
- [\_find](RedisService.md#_find)
- [\_get](RedisService.md#_get)
- [\_patch](RedisService.md#_patch)
- [\_remove](RedisService.md#_remove)
- [\_update](RedisService.md#_update)
- [allowsMulti](RedisService.md#allowsmulti)
- [create](RedisService.md#create)
- [find](RedisService.md#find)
- [get](RedisService.md#get)
- [getOptions](RedisService.md#getoptions)
- [patch](RedisService.md#patch)
- [remove](RedisService.md#remove)
- [sanitizeData](RedisService.md#sanitizedata)
- [sanitizeQuery](RedisService.md#sanitizequery)
- [update](RedisService.md#update)

## Constructors

### constructor

• **new RedisService**<`T`, `D`, `P`\>(`options`, `app`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `Partial`<`T`\> |
| `P` | extends `RedisServiceOptions`<`any`, `P`\> = `RedisServiceOptions`<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RedisServiceOptions`<`any`\> |
| `app` | `Application`<`any`, `any`\> |

#### Inherited from

[RedisAdapter](RedisAdapter.md).[constructor](RedisAdapter.md#constructor)

## Properties

### client

• **client**: `Redis`

#### Inherited from

[RedisAdapter](RedisAdapter.md).[client](RedisAdapter.md#client)

___

### options

• **options**: `RedisServiceOptions`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[options](RedisAdapter.md#options)

## Accessors

### events

• `get` **events**(): `string`[]

#### Returns

`string`[]

#### Inherited from

RedisAdapter.events

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

RedisAdapter.id

___

### keyPrefix

• `get` **keyPrefix**(): `string`

#### Returns

`string`

#### Inherited from

RedisAdapter.keyPrefix

## Methods

### $create

▸ **$create**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`any`\> |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$create](RedisAdapter.md#$create)

▸ **$create**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`any`\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$create](RedisAdapter.md#$create)

▸ **$create**(`data`, `_params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`any`\> \| `Partial`<`any`\>[] |
| `_params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$create](RedisAdapter.md#$create)

___

### $find

▸ **$find**(`params?`): `Promise`<`Paginated`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> & { `paginate?`: `PaginationOptions`  } |

#### Returns

`Promise`<`Paginated`<`any`\>\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$find](RedisAdapter.md#$find)

▸ **$find**(`params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> & { `paginate`: ``false``  } |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$find](RedisAdapter.md#$find)

___

### $get

▸ **$get**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$get](RedisAdapter.md#$get)

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

[RedisAdapter](RedisAdapter.md).[$multi](RedisAdapter.md#$multi)

___

### $patch

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `data` | `Partial`<`any`\> |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$patch](RedisAdapter.md#$patch)

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `Partial`<`any`\> |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$patch](RedisAdapter.md#$patch)

▸ **$patch**(`id`, `data`, `_params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `Partial`<`any`\> |
| `_params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$patch](RedisAdapter.md#$patch)

___

### $remove

▸ **$remove**(`id`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$remove](RedisAdapter.md#$remove)

▸ **$remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$remove](RedisAdapter.md#$remove)

▸ **$remove**(`id`, `_params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `_params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$remove](RedisAdapter.md#$remove)

___

### $set

▸ **$set**(`key`, `data`, `_params?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `data` | `Partial`<`any`\> \| `Partial`<`any`\>[] |
| `_params?` | `Params`<`Query`\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$set](RedisAdapter.md#$set)

___

### $update

▸ **$update**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `Partial`<`any`\> |
| `params` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[$update](RedisAdapter.md#$update)

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

[RedisAdapter](RedisAdapter.md).[_create](RedisAdapter.md#_create)

▸ **_create**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[_create](RedisAdapter.md#_create)

▸ **_create**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\> \| `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[_create](RedisAdapter.md#_create)

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

[RedisAdapter](RedisAdapter.md).[_find](RedisAdapter.md#_find)

▸ **_find**(`_params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> & { `paginate`: ``false``  } |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[_find](RedisAdapter.md#_find)

▸ **_find**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[_find](RedisAdapter.md#_find)

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

[RedisAdapter](RedisAdapter.md).[_get](RedisAdapter.md#_get)

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

[RedisAdapter](RedisAdapter.md).[_patch](RedisAdapter.md#_patch)

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

[RedisAdapter](RedisAdapter.md).[_patch](RedisAdapter.md#_patch)

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

[RedisAdapter](RedisAdapter.md).[_patch](RedisAdapter.md#_patch)

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

[RedisAdapter](RedisAdapter.md).[_remove](RedisAdapter.md#_remove)

▸ **_remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[_remove](RedisAdapter.md#_remove)

▸ **_remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RedisAdapter](RedisAdapter.md).[_remove](RedisAdapter.md#_remove)

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

[RedisAdapter](RedisAdapter.md).[_update](RedisAdapter.md#_update)

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

[RedisAdapter](RedisAdapter.md).[allowsMulti](RedisAdapter.md#allowsmulti)

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

[RedisAdapter](RedisAdapter.md).[getOptions](RedisAdapter.md#getoptions)

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

[RedisAdapter](RedisAdapter.md).[sanitizeData](RedisAdapter.md#sanitizedata)

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

[RedisAdapter](RedisAdapter.md).[sanitizeQuery](RedisAdapter.md#sanitizequery)

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
