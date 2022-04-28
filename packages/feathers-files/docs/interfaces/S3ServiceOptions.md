# Interface: S3ServiceOptions

## Hierarchy

- [`FileServiceOptions`](FileServiceOptions.md)

  ↳ **`S3ServiceOptions`**

## Table of contents

### Properties

- [ACL](S3ServiceOptions.md#acl)
- [allow](S3ServiceOptions.md#allow)
- [bucket](S3ServiceOptions.md#bucket)
- [endpoint](S3ServiceOptions.md#endpoint)
- [events](S3ServiceOptions.md#events)
- [filters](S3ServiceOptions.md#filters)
- [id](S3ServiceOptions.md#id)
- [multi](S3ServiceOptions.md#multi)
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

### allow

• `Optional` **allow**: `string`[]

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[allow](FileServiceOptions.md#allow)

___

### bucket

• `Optional` **bucket**: `string`

___

### endpoint

• `Optional` **endpoint**: `string`

___

### events

• `Optional` **events**: `string`[]

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[events](FileServiceOptions.md#events)

___

### filters

• `Optional` **filters**: `string`[]

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[filters](FileServiceOptions.md#filters)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[id](FileServiceOptions.md#id)

___

### multi

• `Optional` **multi**: `boolean` \| `string`[]

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[multi](FileServiceOptions.md#multi)

___

### paginate

• `Optional` **paginate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `number` |
| `max?` | `number` |

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

**`deprecated`** renamed to `allow`.

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[whitelist](FileServiceOptions.md#whitelist)

## Methods

### matcher

▸ `Optional` **matcher**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[matcher](FileServiceOptions.md#matcher)
