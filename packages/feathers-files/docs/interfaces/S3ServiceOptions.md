# Interface: S3ServiceOptions

## Hierarchy

- [`FileServiceOptions`](FileServiceOptions.md)

  ↳ **`S3ServiceOptions`**

## Table of contents

### Properties

- [ACL](S3ServiceOptions.md#acl)
- [Bucket](S3ServiceOptions.md#bucket)
- [endpoint](S3ServiceOptions.md#endpoint)
- [events](S3ServiceOptions.md#events)
- [filters](S3ServiceOptions.md#filters)
- [id](S3ServiceOptions.md#id)
- [multi](S3ServiceOptions.md#multi)
- [operators](S3ServiceOptions.md#operators)
- [paginate](S3ServiceOptions.md#paginate)
- [root](S3ServiceOptions.md#root)
- [url](S3ServiceOptions.md#url)
- [whitelist](S3ServiceOptions.md#whitelist)

### Methods

- [matcher](S3ServiceOptions.md#matcher)

## Properties

### ACL

• `Optional` **ACL**: `string`

___

### Bucket

• `Optional` **Bucket**: `string`

___

### endpoint

• `Optional` **endpoint**: `string`

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
