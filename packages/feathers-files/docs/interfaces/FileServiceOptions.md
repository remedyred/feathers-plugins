# Interface: FileServiceOptions

## Hierarchy

- `Partial`<`AdapterServiceOptions`\>

  ↳ **`FileServiceOptions`**

  ↳↳ [`LocalFileServiceOptions`](LocalFileServiceOptions.md)

  ↳↳ [`S3ServiceOptions`](S3ServiceOptions.md)

## Table of contents

### Properties

- [events](FileServiceOptions.md#events)
- [filters](FileServiceOptions.md#filters)
- [id](FileServiceOptions.md#id)
- [multi](FileServiceOptions.md#multi)
- [operators](FileServiceOptions.md#operators)
- [paginate](FileServiceOptions.md#paginate)
- [root](FileServiceOptions.md#root)
- [url](FileServiceOptions.md#url)
- [whitelist](FileServiceOptions.md#whitelist)

### Methods

- [matcher](FileServiceOptions.md#matcher)

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

A list of additional property query operators to allow in a query

#### Inherited from

Partial.operators

___

### paginate

• `Optional` **paginate**: `PaginationParams`

Pagination settings for this service

#### Inherited from

Partial.paginate

___

### root

• `Optional` **root**: `string`

___

### url

• `Optional` **url**: `string`

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
