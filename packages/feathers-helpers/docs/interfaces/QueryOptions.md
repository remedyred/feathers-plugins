# Interface: QueryOptions

## Hierarchy

- `Partial`<`AdapterServiceOptions`\>

  ↳ **`QueryOptions`**

## Table of contents

### Properties

- [events](QueryOptions.md#events)
- [filters](QueryOptions.md#filters)
- [id](QueryOptions.md#id)
- [multi](QueryOptions.md#multi)
- [operators](QueryOptions.md#operators)
- [paginate](QueryOptions.md#paginate)
- [sorter](QueryOptions.md#sorter)
- [whitelist](QueryOptions.md#whitelist)

### Methods

- [matcher](QueryOptions.md#matcher)

## Properties

### events

• `Optional` **events**: `string`[]

**`Deprecated`**

Use service `events` option when registering the service with `app.use`.

#### Inherited from

Partial.events

___

### filters

• `Optional` **filters**: `FilterSettings`

An object of additional top level query filters, e.g. `{ $populate: true }`
Can also be a converter function like `{ $ignoreCase: (value) => value === 'true' ? true : false }`

#### Inherited from

Partial.filters

___

### id

• `Optional` **id**: `string`

The name of the id property

#### Inherited from

Partial.id

___

### multi

• `Optional` **multi**: `boolean` \| `string`[]

Whether to allow multiple updates for everything (`true`) or specific methods (e.g. `['create', 'remove']`)

#### Inherited from

Partial.multi

___

### operators

• `Optional` **operators**: `string`[]

#### Overrides

Partial.operators

___

### paginate

• `Optional` **paginate**: `PaginationParams`

Pagination settings for this service

#### Inherited from

Partial.paginate

___

### sorter

• `Optional` **sorter**: [`Sorter`](Sorter.md)

___

### whitelist

• `Optional` **whitelist**: `string`[]

**`Deprecated`**

renamed to `operators`.

#### Inherited from

Partial.whitelist

## Methods

### matcher

▸ `Optional` **matcher**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`
