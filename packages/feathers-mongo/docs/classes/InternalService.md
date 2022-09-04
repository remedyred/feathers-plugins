# Class: InternalService<T, D, P\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `Partial`<`T`\> |
| `P` | extends `MongoServiceOptions` = `MongoServiceOptions` |

## Hierarchy

- `default`

  ↳ **`InternalService`**

## Implements

- `ServiceMethods`<`Paginated`<`T`\> \| `T`, `D`, `P`\>

## Table of contents

### Constructors

- [constructor](InternalService.md#constructor)

### Properties

- [Cache](InternalService.md#cache)
- [asModel](InternalService.md#asmodel)
- [client](InternalService.md#client)
- [options](InternalService.md#options)
- [out](InternalService.md#out)

### Accessors

- [Model](InternalService.md#model)
- [events](InternalService.md#events)
- [id](InternalService.md#id)

### Methods

- [$aggregate](InternalService.md#$aggregate)
- [$create](InternalService.md#$create)
- [$destroy](InternalService.md#$destroy)
- [$find](InternalService.md#$find)
- [$findOrGet](InternalService.md#$findorget)
- [$get](InternalService.md#$get)
- [$getOrCreate](InternalService.md#$getorcreate)
- [$patch](InternalService.md#$patch)
- [$remove](InternalService.md#$remove)
- [$restore](InternalService.md#$restore)
- [$touch](InternalService.md#$touch)
- [$update](InternalService.md#$update)
- [$upsert](InternalService.md#$upsert)
- [\_\_save](InternalService.md#__save)
- [\_aggregate](InternalService.md#_aggregate)
- [\_create](InternalService.md#_create)
- [\_destroy](InternalService.md#_destroy)
- [\_find](InternalService.md#_find)
- [\_get](InternalService.md#_get)
- [\_getOrCreate](InternalService.md#_getorcreate)
- [\_patch](InternalService.md#_patch)
- [\_remove](InternalService.md#_remove)
- [\_restore](InternalService.md#_restore)
- [\_touch](InternalService.md#_touch)
- [\_update](InternalService.md#_update)
- [aggregate](InternalService.md#aggregate)
- [allowsMulti](InternalService.md#allowsmulti)
- [clearCached](InternalService.md#clearcached)
- [connected](InternalService.md#connected)
- [create](InternalService.md#create)
- [destroy](InternalService.md#destroy)
- [filterQuery](InternalService.md#filterquery)
- [find](InternalService.md#find)
- [get](InternalService.md#get)
- [getCached](InternalService.md#getcached)
- [getObjectId](InternalService.md#getobjectid)
- [getOptions](InternalService.md#getoptions)
- [getOrCreate](InternalService.md#getorcreate)
- [getSelect](InternalService.md#getselect)
- [normalizeId](InternalService.md#normalizeid)
- [patch](InternalService.md#patch)
- [remove](InternalService.md#remove)
- [restore](InternalService.md#restore)
- [sanitizeData](InternalService.md#sanitizedata)
- [sanitizeQuery](InternalService.md#sanitizequery)
- [setCached](InternalService.md#setcached)
- [setup](InternalService.md#setup)
- [touch](InternalService.md#touch)
- [update](InternalService.md#update)

## Constructors

### constructor

• **new InternalService**<`T`, `D`, `P`\>(`options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `Partial`<`T`\> |
| `P` | extends `MongoServiceOptions` = `MongoServiceOptions` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Overrides

MongoAdapter.constructor

## Properties

### Cache

• **Cache**: `any`

#### Inherited from

MongoAdapter.Cache

___

### asModel

• **asModel**: `any`

#### Inherited from

MongoAdapter.asModel

___

### client

• **client**: `any`

#### Inherited from

MongoAdapter.client

___

### options

• **options**: `MongoServiceOptions`

#### Inherited from

MongoAdapter.options

___

### out

• **out**: `Out`

#### Inherited from

MongoAdapter.out

## Accessors

### Model

• `get` **Model**(): `Collection`<`Document`\>

#### Returns

`Collection`<`Document`\>

#### Inherited from

MongoAdapter.Model

___

### events

• `get` **events**(): `string`[]

#### Returns

`string`[]

#### Inherited from

MongoAdapter.events

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

MongoAdapter.id

## Methods

### $aggregate

▸ **$aggregate**(`pipeline`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pipeline` | `any`[] |
| `params` | `AggregateOptions` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$aggregate

___

### $create

▸ **$create**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\> |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$create

▸ **$create**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

MongoAdapter.$create

▸ **$create**(`data`, `_params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\> \| `Partial`<`Partial`<`any`\>\>[] |
| `_params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$create

___

### $destroy

▸ **$destroy**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$destroy

___

### $find

▸ **$find**(`params?`): `Promise`<`Paginated`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `MongoAdapterParams` & { `paginate?`: `PaginationOptions`  } |

#### Returns

`Promise`<`Paginated`<`any`\>\>

#### Inherited from

MongoAdapter.$find

▸ **$find**(`params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `MongoAdapterParams` & { `paginate`: ``false``  } |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

MongoAdapter.$find

___

### $findOrGet

▸ **$findOrGet**(`id`, `params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$findOrGet

___

### $get

▸ **$get**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$get

___

### $getOrCreate

▸ **$getOrCreate**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `data` | `any` |
| `params` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$getOrCreate

___

### $patch

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `data` | `Partial`<`Partial`<`any`\>\> |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

MongoAdapter.$patch

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `Partial`<`Partial`<`any`\>\> |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$patch

▸ **$patch**(`id`, `data`, `_params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `data` | `Partial`<`Partial`<`any`\>\> |
| `_params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$patch

___

### $remove

▸ **$remove**(`id`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

MongoAdapter.$remove

▸ **$remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$remove

▸ **$remove**(`id`, `_params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `_params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$remove

___

### $restore

▸ **$restore**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$restore

___

### $touch

▸ **$touch**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$touch

___

### $update

▸ **$update**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `Partial`<`any`\> |
| `params` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$update

___

### $upsert

▸ **$upsert**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.$upsert

▸ **$upsert**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

MongoAdapter.$upsert

___

### \_\_save

▸ **__save**(`method`, ...`args`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `any` |
| `...args` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_\_save

___

### \_aggregate

▸ **_aggregate**(`pipeline`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pipeline` | `any`[] |
| `params` | `AggregateOptions` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_aggregate

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
| `params?` | `MongoAdapterParams` | Service call parameters Params |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_create

▸ **_create**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

MongoAdapter.\_create

▸ **_create**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\> \| `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_create

___

### \_destroy

▸ **_destroy**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_destroy

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
| `_params?` | `MongoAdapterParams` & { `paginate?`: `PaginationOptions`  } |

#### Returns

`Promise`<`Paginated`<`any`\>\>

#### Inherited from

MongoAdapter.\_find

▸ **_find**(`_params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_params?` | `MongoAdapterParams` & { `paginate`: ``false``  } |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

MongoAdapter.\_find

▸ **_find**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_find

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
| `params?` | `MongoAdapterParams` | Service call parameters Params |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_get

___

### \_getOrCreate

▸ **_getOrCreate**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `data` | `any` |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_getOrCreate

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
| `params?` | `MongoAdapterParams` | Service call parameters Params |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

MongoAdapter.\_patch

▸ **_patch**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `Partial`<`Partial`<`any`\>\> |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_patch

▸ **_patch**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `data` | `Partial`<`Partial`<`any`\>\> |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_patch

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
| `params?` | `MongoAdapterParams` | Service call parameters Params |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

MongoAdapter.\_remove

▸ **_remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_remove

▸ **_remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_remove

___

### \_restore

▸ **_restore**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_restore

___

### \_touch

▸ **_touch**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params?` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_touch

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
| `params?` | `MongoAdapterParams` | Service call parameters Params |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.\_update

___

### aggregate

▸ **aggregate**(`pipeline`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pipeline` | `any`[] |
| `params` | `AggregateOptions` |

#### Returns

`Promise`<`any`[]\>

___

### allowsMulti

▸ **allowsMulti**(`method`, `params?`): `boolean`

Check if this adapter allows multiple updates for a method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | `string` | The method name to check. |
| `params?` | `MongoAdapterParams` | The service call params. |

#### Returns

`boolean`

Wether or not multiple updates are allowed.

#### Inherited from

MongoAdapter.allowsMulti

___

### clearCached

▸ **clearCached**(`params`, `skipParamParse?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `params` | `MongoAdapterParams` | `undefined` |
| `skipParamParse` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Inherited from

MongoAdapter.clearCached

___

### connected

▸ **connected**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

MongoAdapter.connected

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

### destroy

▸ **destroy**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.destroy

___

### filterQuery

▸ **filterQuery**(`id`, `params`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params` | `MongoAdapterParams` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `filters` | { `$limit`: `number` ; `$select`: `string`[] ; `$skip`: `number` ; `$sort`: { `[key: string]`: ``1`` \| ``-1``;  }  } |
| `filters.$limit` | `number` |
| `filters.$select` | `string`[] |
| `filters.$skip` | `number` |
| `filters.$sort` | { `[key: string]`: ``1`` \| ``-1``;  } |
| `query` | { `[key: string]`: `any`;  } |

#### Inherited from

MongoAdapter.filterQuery

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

### getCached

▸ **getCached**(`params`, `skipParamParse?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `params` | `MongoAdapterParams` | `undefined` |
| `skipParamParse` | `boolean` | `false` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.getCached

___

### getObjectId

▸ **getObjectId**(`id`): `Id` \| `ObjectId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` \| `ObjectId` |

#### Returns

`Id` \| `ObjectId`

#### Inherited from

MongoAdapter.getObjectId

___

### getOptions

▸ **getOptions**(`params`): `MongoDBAdapterOptions`

Returns the combined options for a service call. Options will be merged
with `this.options` and `params.adapter` for dynamic overrides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `MongoAdapterParams` | The parameters for the service method call |

#### Returns

`MongoDBAdapterOptions`

The actual options for this call

#### Inherited from

MongoAdapter.getOptions

___

### getOrCreate

▸ **getOrCreate**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `data` | `any` |
| `params` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.getOrCreate

___

### getSelect

▸ **getSelect**(`select`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `select` | `string`[] \| { `[key: string]`: `number`;  } |

#### Returns

`Object`

#### Inherited from

MongoAdapter.getSelect

___

### normalizeId

▸ **normalizeId**(`id`, `data`): `Partial`<`Partial`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `data` | `Partial`<`Partial`<`any`\>\> |

#### Returns

`Partial`<`Partial`<`any`\>\>

#### Inherited from

MongoAdapter.normalizeId

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

### restore

▸ **restore**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.restore

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
| `_params` | `MongoAdapterParams` | Service call parameters |

#### Returns

`Promise`<`X`\>

The sanitized data

#### Inherited from

MongoAdapter.sanitizeData

___

### sanitizeQuery

▸ **sanitizeQuery**(`params?`): `Promise`<`Query`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `MongoAdapterParams` |

#### Returns

`Promise`<`Query`\>

#### Inherited from

MongoAdapter.sanitizeQuery

___

### setCached

▸ **setCached**(`params`, `results`, `skipParamParse?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `params` | `MongoAdapterParams` | `undefined` |
| `results` | `any` | `undefined` |
| `skipParamParse` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Inherited from

MongoAdapter.setCached

___

### setup

▸ **setup**(`app`, `_servicePath`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Application`<`any`, `any`\> |
| `_servicePath` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

ServiceMethods.setup

#### Inherited from

MongoAdapter.setup

___

### touch

▸ **touch**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params` | `MongoAdapterParams` |

#### Returns

`Promise`<`any`\>

#### Inherited from

MongoAdapter.touch

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
