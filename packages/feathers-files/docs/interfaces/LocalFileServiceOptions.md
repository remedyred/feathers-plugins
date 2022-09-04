# Interface: LocalFileServiceOptions

## Hierarchy

- [`FileServiceOptions`](FileServiceOptions.md)

  ↳ **`LocalFileServiceOptions`**

## Table of contents

### Properties

- [cwd](LocalFileServiceOptions.md#cwd)
- [events](LocalFileServiceOptions.md#events)
- [filters](LocalFileServiceOptions.md#filters)
- [id](LocalFileServiceOptions.md#id)
- [multi](LocalFileServiceOptions.md#multi)
- [operators](LocalFileServiceOptions.md#operators)
- [paginate](LocalFileServiceOptions.md#paginate)
- [root](LocalFileServiceOptions.md#root)
- [url](LocalFileServiceOptions.md#url)
- [whitelist](LocalFileServiceOptions.md#whitelist)

### Methods

- [matcher](LocalFileServiceOptions.md#matcher)

## Properties

### cwd

• `Optional` **cwd**: `string`

___

### events

• `Optional` **events**: `string`[]

**`Deprecated`**

Use service `events` option when registering the service with `app.use`.

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[events](FileServiceOptions.md#events)

___

### filters

• `Optional` **filters**: `FilterSettings`

An object of additional top level query filters, e.g. `{ $populate: true }`
Can also be a converter function like `{ $ignoreCase: (value) => value === 'true' ? true : false }`

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[filters](FileServiceOptions.md#filters)

___

### id

• `Optional` **id**: `string`

The name of the id property

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[id](FileServiceOptions.md#id)

___

### multi

• `Optional` **multi**: `boolean` \| `string`[]

Whether to allow multiple updates for everything (`true`) or specific methods (e.g. `['create', 'remove']`)

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[multi](FileServiceOptions.md#multi)

___

### operators

• `Optional` **operators**: `string`[]

A list of additional property query operators to allow in a query

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[operators](FileServiceOptions.md#operators)

___

### paginate

• `Optional` **paginate**: `PaginationParams`

Pagination settings for this service

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[paginate](FileServiceOptions.md#paginate)

___

### root

• `Optional` **root**: `string`

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[root](FileServiceOptions.md#root)

___

### url

• `Optional` **url**: `string`

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[url](FileServiceOptions.md#url)

___

### whitelist

• `Optional` **whitelist**: `string`[]

**`Deprecated`**

renamed to `operators`.

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[whitelist](FileServiceOptions.md#whitelist)

## Methods

### matcher

▸ `Optional` **matcher**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[matcher](FileServiceOptions.md#matcher)
