# Interface: ModelService

## Hierarchy

- `InternalServiceMethods`

  ↳ **`ModelService`**

## Table of contents

### Properties

- [asModel](ModelService.md#asmodel)

### Methods

- [$create](ModelService.md#$create)
- [$find](ModelService.md#$find)
- [$get](ModelService.md#$get)
- [$patch](ModelService.md#$patch)
- [$remove](ModelService.md#$remove)
- [$update](ModelService.md#$update)

## Properties

### asModel

• **asModel**: `boolean` \| [`Model`](../classes/Model.md)

## Methods

### $create

▸ **$create**(`data`, `params?`): `Promise`<`any`\>

Create a new resource for this service, skipping any service-level hooks.
Does not sanitize data or checks if multiple updates are allowed and should only be used on the server.

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

InternalServiceMethods.$create

▸ **$create**(`data`, `params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

InternalServiceMethods.$create

▸ **$create**(`data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`Partial`<`any`\>\> \| `Partial`<`Partial`<`any`\>\>[] |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

InternalServiceMethods.$create

___

### $find

▸ **$find**(`_params?`): `Promise`<`Paginated`<`any`\>\>

Retrieve all resources from this service.
Does not sanitize the query and should only be used on the server.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> & { `paginate?`: `PaginationOptions`  } | Service call parameters Params |

#### Returns

`Promise`<`Paginated`<`any`\>\>

#### Inherited from

InternalServiceMethods.$find

▸ **$find**(`_params?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> & { `paginate`: ``false``  } |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

InternalServiceMethods.$find

▸ **$find**(`params?`): `Promise`<`any`[] \| `Paginated`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`[] \| `Paginated`<`any`\>\>

#### Inherited from

InternalServiceMethods.$find

___

### $get

▸ **$get**(`id`, `params?`): `Promise`<`any`\>

Retrieve a single resource matching the given ID, skipping any service-level hooks.
Does not sanitize the query and should only be used on the server.

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

InternalServiceMethods.$get

___

### $patch

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`any`[]\>

Merge any resources matching the given ID with the given data, skipping any service-level hooks.
Does not sanitize the data or query and should only be used on the server.

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

InternalServiceMethods.$patch

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `data` | `Partial`<`Partial`<`any`\>\> |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

InternalServiceMethods.$patch

▸ **$patch**(`id`, `data`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `data` | `Partial`<`Partial`<`any`\>\> |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

InternalServiceMethods.$patch

___

### $remove

▸ **$remove**(`id`, `params?`): `Promise`<`any`[]\>

Remove resources matching the given ID from the this service, skipping any service-level hooks.
Does not sanitize query and should only be used on the server.

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

InternalServiceMethods.$remove

▸ **$remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

InternalServiceMethods.$remove

▸ **$remove**(`id`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `NullableId` |
| `params?` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

InternalServiceMethods.$remove

___

### $update

▸ **$update**(`id`, `data`, `params?`): `Promise`<`any`\>

Completely replace the resource identified by id, skipping any service-level hooks.
Does not sanitize data or query and should only be used on the server.

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

InternalServiceMethods.$update
