# Class: RestService<T, D, P\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `Partial`<`T`\> |
| `P` | extends `AdapterParams` = `AdapterParams` |

## Hierarchy

- [`RestAdapter`](RestAdapter.md)

  ↳ **`RestService`**

## Implements

- `ServiceMethods`<`Paginated`<`T`\> \| `T`, `D`, `P`\>

## Table of contents

### Constructors

- [constructor](RestService.md#constructor)

### Properties

- [client](RestService.md#client)
- [options](RestService.md#options)
- [url\_path](RestService.md#url_path)

### Accessors

- [events](RestService.md#events)
- [id](RestService.md#id)

### Methods

- [$create](RestService.md#$create)
- [$find](RestService.md#$find)
- [$get](RestService.md#$get)
- [$patch](RestService.md#$patch)
- [$remove](RestService.md#$remove)
- [$update](RestService.md#$update)
- [\_\_delete](RestService.md#__delete)
- [\_\_get](RestService.md#__get)
- [\_\_patch](RestService.md#__patch)
- [\_\_post](RestService.md#__post)
- [\_\_put](RestService.md#__put)
- [\_create](RestService.md#_create)
- [\_find](RestService.md#_find)
- [\_get](RestService.md#_get)
- [\_patch](RestService.md#_patch)
- [\_remove](RestService.md#_remove)
- [\_update](RestService.md#_update)
- [allowsMulti](RestService.md#allowsmulti)
- [create](RestService.md#create)
- [find](RestService.md#find)
- [get](RestService.md#get)
- [getOptions](RestService.md#getoptions)
- [headers](RestService.md#headers)
- [patch](RestService.md#patch)
- [path](RestService.md#path)
- [pullPath](RestService.md#pullpath)
- [remove](RestService.md#remove)
- [request](RestService.md#request)
- [sanitizeData](RestService.md#sanitizedata)
- [sanitizeQuery](RestService.md#sanitizequery)
- [update](RestService.md#update)

## Constructors

### constructor

• **new RestService**<`T`, `D`, `P`\>(`options`, `app`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `Partial`<`T`\> |
| `P` | extends `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>, `P`\> = `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RestServiceOptions` |
| `app` | `Application`<`any`, `any`\> |

#### Inherited from

[RestAdapter](RestAdapter.md).[constructor](RestAdapter.md#constructor)

## Properties

### client

• **client**: `AxiosInstance`

#### Inherited from

[RestAdapter](RestAdapter.md).[client](RestAdapter.md#client)

___

### options

• **options**: `RestServiceOptions`

#### Inherited from

[RestAdapter](RestAdapter.md).[options](RestAdapter.md#options)

___

### url\_path

• **url\_path**: `string`

#### Inherited from

[RestAdapter](RestAdapter.md).[url_path](RestAdapter.md#url_path)

## Accessors

### events

• `get` **events**(): `string`[]

#### Returns

`string`[]

#### Inherited from

RestAdapter.events

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

RestAdapter.id

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

[RestAdapter](RestAdapter.md).[$create](RestAdapter.md#$create)

▸ **$create**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`any`\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RestAdapter](RestAdapter.md).[$create](RestAdapter.md#$create)

▸ **$create**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`any`\> \| `Partial`<`any`\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[$create](RestAdapter.md#$create)

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

[RestAdapter](RestAdapter.md).[$find](RestAdapter.md#$find)

▸ **$find**(`params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> & { `paginate`: ``false``  } |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RestAdapter](RestAdapter.md).[$find](RestAdapter.md#$find)

___

### $get

▸ **$get**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[$get](RestAdapter.md#$get)

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

[RestAdapter](RestAdapter.md).[$patch](RestAdapter.md#$patch)

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `Partial`<`any`\> |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[$patch](RestAdapter.md#$patch)

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `data` | `Partial`<`any`\> |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[$patch](RestAdapter.md#$patch)

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

[RestAdapter](RestAdapter.md).[$remove](RestAdapter.md#$remove)

▸ **$remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[$remove](RestAdapter.md#$remove)

▸ **$remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[$remove](RestAdapter.md#$remove)

___

### $update

▸ **$update**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `Partial`<`any`\> |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[$update](RestAdapter.md#$update)

___

### \_\_delete

▸ **__delete**(`url`, `config?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | `RestServiceRequestConfig` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[__delete](RestAdapter.md#__delete)

___

### \_\_get

▸ **__get**(`url`, `config?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | `RestServiceRequestConfig` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[__get](RestAdapter.md#__get)

___

### \_\_patch

▸ **__patch**(`url`, `data`, `config?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data` | `any` |
| `config?` | `RestServiceRequestConfig` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[__patch](RestAdapter.md#__patch)

___

### \_\_post

▸ **__post**(`url`, `data`, `config?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data` | `any` |
| `config?` | `RestServiceRequestConfig` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[__post](RestAdapter.md#__post)

___

### \_\_put

▸ **__put**(`url`, `data`, `config?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data` | `any` |
| `config?` | `RestServiceRequestConfig` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[__put](RestAdapter.md#__put)

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

[RestAdapter](RestAdapter.md).[_create](RestAdapter.md#_create)

▸ **_create**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RestAdapter](RestAdapter.md).[_create](RestAdapter.md#_create)

▸ **_create**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\> \| `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[_create](RestAdapter.md#_create)

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

[RestAdapter](RestAdapter.md).[_find](RestAdapter.md#_find)

▸ **_find**(`_params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> & { `paginate`: ``false``  } |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RestAdapter](RestAdapter.md).[_find](RestAdapter.md#_find)

▸ **_find**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[_find](RestAdapter.md#_find)

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

[RestAdapter](RestAdapter.md).[_get](RestAdapter.md#_get)

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

[RestAdapter](RestAdapter.md).[_patch](RestAdapter.md#_patch)

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

[RestAdapter](RestAdapter.md).[_patch](RestAdapter.md#_patch)

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

[RestAdapter](RestAdapter.md).[_patch](RestAdapter.md#_patch)

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

[RestAdapter](RestAdapter.md).[_remove](RestAdapter.md#_remove)

▸ **_remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[_remove](RestAdapter.md#_remove)

▸ **_remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[_remove](RestAdapter.md#_remove)

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

[RestAdapter](RestAdapter.md).[_update](RestAdapter.md#_update)

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

[RestAdapter](RestAdapter.md).[allowsMulti](RestAdapter.md#allowsmulti)

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

[RestAdapter](RestAdapter.md).[getOptions](RestAdapter.md#getoptions)

___

### headers

▸ **headers**(`headers`): [`RestAdapter`](RestAdapter.md)<`any`, `Partial`<`any`\>, `RestServiceOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `AxiosRequestHeaders` |

#### Returns

[`RestAdapter`](RestAdapter.md)<`any`, `Partial`<`any`\>, `RestServiceOptions`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[headers](RestAdapter.md#headers)

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

### path

▸ **path**(`url_path?`): [`RestAdapter`](RestAdapter.md)<`any`, `Partial`<`any`\>, `RestServiceOptions`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url_path` | `string` | `'/'` |

#### Returns

[`RestAdapter`](RestAdapter.md)<`any`, `Partial`<`any`\>, `RestServiceOptions`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[path](RestAdapter.md#path)

___

### pullPath

▸ **pullPath**(): `string`

#### Returns

`string`

#### Inherited from

[RestAdapter](RestAdapter.md).[pullPath](RestAdapter.md#pullpath)

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

### request

▸ **request**(`method`, `data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `Method` |
| `data` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RestAdapter](RestAdapter.md).[request](RestAdapter.md#request)

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

[RestAdapter](RestAdapter.md).[sanitizeData](RestAdapter.md#sanitizedata)

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

[RestAdapter](RestAdapter.md).[sanitizeQuery](RestAdapter.md#sanitizequery)

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
