# Interface: LocalFileServiceOptions

## Hierarchy

- [`FileServiceOptions`](FileServiceOptions.md)

  ↳ **`LocalFileServiceOptions`**

## Table of contents

### Properties

- [allow](LocalFileServiceOptions.md#allow)
- [cwd](LocalFileServiceOptions.md#cwd)
- [events](LocalFileServiceOptions.md#events)
- [filters](LocalFileServiceOptions.md#filters)
- [id](LocalFileServiceOptions.md#id)
- [multi](LocalFileServiceOptions.md#multi)
- [paginate](LocalFileServiceOptions.md#paginate)
- [root](LocalFileServiceOptions.md#root)
- [url](LocalFileServiceOptions.md#url)
- [whitelist](LocalFileServiceOptions.md#whitelist)

### Methods

- [matcher](LocalFileServiceOptions.md#matcher)

## Properties

### allow

• `Optional` **allow**: `string`[]

#### Inherited from

[FileServiceOptions](FileServiceOptions.md).[allow](FileServiceOptions.md#allow)

___

### cwd

• `Optional` **cwd**: `string`

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
