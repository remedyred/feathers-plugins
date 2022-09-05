# @snickbit/feathers-helpers

## Table of contents

### Interfaces

- [FilteredQuery](interfaces/FilteredQuery.md)
- [QueryOptions](interfaces/QueryOptions.md)
- [Results](interfaces/Results.md)
- [Sort](interfaces/Sort.md)
- [Sorter](interfaces/Sorter.md)
- [Timestamps](interfaces/Timestamps.md)

### Type Aliases

- [TimestampOptions](README.md#timestampoptions)

### Functions

- [\_select](README.md#_select)
- [callMethod](README.md#callmethod)
- [filterParams](README.md#filterparams)
- [filterResults](README.md#filterresults)
- [parseResponse](README.md#parseresponse)
- [parseResponseError](README.md#parseresponseerror)
- [parseTimestampOptions](README.md#parsetimestampoptions)
- [safeCallMethod](README.md#safecallmethod)

## Type Aliases

### TimestampOptions

Ƭ **TimestampOptions**: `Partial`<[`Timestamps`](interfaces/Timestamps.md)\> \| `boolean`

## Functions

### \_select

▸ **_select**(`data`, `params`, ...`args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `params` | `Params`<`Query`\> |
| `...args` | `any`[] |

#### Returns

`any`

___

### callMethod

▸ **callMethod**(`self`, `name`, ...`args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | `any` |
| `name` | `string` |
| `...args` | `any`[] |

#### Returns

`any`

___

### filterParams

▸ **filterParams**(`params?`, `options?`): [`FilteredQuery`](interfaces/FilteredQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `AdapterParams`<`AdapterQuery`, `Partial`<`AdapterServiceOptions`\>\> |
| `options` | [`QueryOptions`](interfaces/QueryOptions.md) |

#### Returns

[`FilteredQuery`](interfaces/FilteredQuery.md)

___

### filterResults

▸ **filterResults**(`data`, `params?`, `options?`): `any`[] \| [`Results`](interfaces/Results.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `params?` | `Params`<`Query`\> |
| `options?` | [`QueryOptions`](interfaces/QueryOptions.md) |

#### Returns

`any`[] \| [`Results`](interfaces/Results.md)

___

### parseResponse

▸ **parseResponse**(`response`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `any` |

#### Returns

`any`

___

### parseResponseError

▸ **parseResponseError**(`e`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`any`

___

### parseTimestampOptions

▸ **parseTimestampOptions**(`timestampOptions`, `options?`): [`Timestamps`](interfaces/Timestamps.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestampOptions` | [`TimestampOptions`](README.md#timestampoptions) |
| `options` | `Object` |
| `options.softDelete?` | `boolean` |
| `options.timestamps?` | [`TimestampOptions`](README.md#timestampoptions) |

#### Returns

[`Timestamps`](interfaces/Timestamps.md)

___

### safeCallMethod

▸ **safeCallMethod**(`self`, `name`, ...`args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | `any` |
| `name` | `any` |
| `...args` | `any`[] |

#### Returns

`any`
