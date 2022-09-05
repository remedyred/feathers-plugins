# Class: RestAdapter<T, D, O\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `Partial`<`T`\> |
| `O` | extends `RestServiceOptions` = `RestServiceOptions` |

## Hierarchy

- `AdapterBase`

  ↳ **`RestAdapter`**

  ↳↳ [`RestService`](RestService.md)

## Table of contents

### Constructors

- [constructor](RestAdapter.md#constructor)

### Properties

- [client](RestAdapter.md#client)
- [options](RestAdapter.md#options)
- [url\_path](RestAdapter.md#url_path)

### Accessors

- [events](RestAdapter.md#events)
- [id](RestAdapter.md#id)

### Methods

- [$create](RestAdapter.md#$create)
- [$find](RestAdapter.md#$find)
- [$get](RestAdapter.md#$get)
- [$patch](RestAdapter.md#$patch)
- [$remove](RestAdapter.md#$remove)
- [$update](RestAdapter.md#$update)
- [\_\_delete](RestAdapter.md#__delete)
- [\_\_get](RestAdapter.md#__get)
- [\_\_patch](RestAdapter.md#__patch)
- [\_\_post](RestAdapter.md#__post)
- [\_\_put](RestAdapter.md#__put)
- [\_create](RestAdapter.md#_create)
- [\_find](RestAdapter.md#_find)
- [\_get](RestAdapter.md#_get)
- [\_patch](RestAdapter.md#_patch)
- [\_remove](RestAdapter.md#_remove)
- [\_update](RestAdapter.md#_update)
- [allowsMulti](RestAdapter.md#allowsmulti)
- [getOptions](RestAdapter.md#getoptions)
- [headers](RestAdapter.md#headers)
- [path](RestAdapter.md#path)
- [pullPath](RestAdapter.md#pullpath)
- [request](RestAdapter.md#request)
- [sanitizeData](RestAdapter.md#sanitizedata)
- [sanitizeQuery](RestAdapter.md#sanitizequery)

## Constructors

### constructor

• **new RestAdapter**<`T`, `D`, `O`\>(`options`, `app`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `Partial`<`T`\> |
| `O` | extends `RestServiceOptions`<`O`\> = `RestServiceOptions` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `O` |
| `app` | `Application`<`any`, `any`\> |

#### Overrides

AdapterBase.constructor

## Properties

### client

• **client**: `AxiosInstance`

___

### options

• **options**: `O`

#### Overrides

AdapterBase.options

___

### url\_path

• **url\_path**: `string`

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

### $create

▸ **$create**(`data`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `D` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`T`\>

#### Overrides

AdapterBase.$create

▸ **$create**(`data`, `params?`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `D`[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`T`[]\>

#### Overrides

AdapterBase.$create

▸ **$create**(`data`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `D` \| `D`[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`T`\>

#### Overrides

AdapterBase.$create

___

### $find

▸ **$find**(`params?`): `Promise`<`Paginated`<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> & { `paginate?`: `PaginationOptions`  } |

#### Returns

`Promise`<`Paginated`<`T`\>\>

#### Overrides

AdapterBase.$find

▸ **$find**(`params?`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> & { `paginate`: ``false``  } |

#### Returns

`Promise`<`T`[]\>

#### Overrides

AdapterBase.$find

___

### $get

▸ **$get**(`id`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`T`\>

#### Overrides

AdapterBase.$get

___

### $patch

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `data` | `D` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`T`[]\>

#### Overrides

AdapterBase.$patch

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `D` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`T`\>

#### Overrides

AdapterBase.$patch

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `data` | `D` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`T`\>

#### Overrides

AdapterBase.$patch

___

### $remove

▸ **$remove**(`id`, `params?`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`T`[]\>

#### Overrides

AdapterBase.$remove

▸ **$remove**(`id`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`T`\>

#### Overrides

AdapterBase.$remove

▸ **$remove**(`id`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`T`\>

#### Overrides

AdapterBase.$remove

___

### $update

▸ **$update**(`id`, `data`, `params?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `D` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`T`\>

#### Overrides

AdapterBase.$update

___

### \_\_delete

▸ **__delete**(`url`, `config?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | `RestServiceRequestConfig` |

#### Returns

`Promise`<`T`\>

___

### \_\_get

▸ **__get**(`url`, `config?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | `RestServiceRequestConfig` |

#### Returns

`Promise`<`T`\>

___

### \_\_patch

▸ **__patch**(`url`, `data`, `config?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data` | `T` |
| `config?` | `RestServiceRequestConfig` |

#### Returns

`Promise`<`T`\>

___

### \_\_post

▸ **__post**(`url`, `data`, `config?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data` | `T` |
| `config?` | `RestServiceRequestConfig` |

#### Returns

`Promise`<`T`\>

___

### \_\_put

▸ **__put**(`url`, `data`, `config?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data` | `T` |
| `config?` | `RestServiceRequestConfig` |

#### Returns

`Promise`<`T`\>

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

### headers

▸ **headers**(`headers`): [`RestAdapter`](RestAdapter.md)<`any`, `Partial`<`any`\>, `RestServiceOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `AxiosRequestHeaders` |

#### Returns

[`RestAdapter`](RestAdapter.md)<`any`, `Partial`<`any`\>, `RestServiceOptions`\>

___

### path

▸ **path**(`url_path?`): [`RestAdapter`](RestAdapter.md)<`any`, `Partial`<`any`\>, `RestServiceOptions`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url_path` | `string` | `'/'` |

#### Returns

[`RestAdapter`](RestAdapter.md)<`any`, `Partial`<`any`\>, `RestServiceOptions`\>

___

### pullPath

▸ **pullPath**(): `string`

#### Returns

`string`

___

### request

▸ **request**(`method`, `data`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `Method` |
| `data` | `T` |

#### Returns

`Promise`<`T`\>

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
