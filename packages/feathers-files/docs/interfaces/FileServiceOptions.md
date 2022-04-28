# Interface: FileServiceOptions

## Hierarchy

- `Partial`<`ServiceOptions`\>

  ↳ **`FileServiceOptions`**

  ↳↳ [`LocalFileServiceOptions`](LocalFileServiceOptions.md)

  ↳↳ [`S3ServiceOptions`](S3ServiceOptions.md)

## Table of contents

### Properties

- [allow](FileServiceOptions.md#allow)
- [events](FileServiceOptions.md#events)
- [filters](FileServiceOptions.md#filters)
- [id](FileServiceOptions.md#id)
- [multi](FileServiceOptions.md#multi)
- [paginate](FileServiceOptions.md#paginate)
- [root](FileServiceOptions.md#root)
- [url](FileServiceOptions.md#url)
- [whitelist](FileServiceOptions.md#whitelist)

### Methods

- [matcher](FileServiceOptions.md#matcher)

## Properties

### allow

• `Optional` **allow**: `string`[]

#### Inherited from

Partial.allow

___

### events

• `Optional` **events**: `string`[]

#### Inherited from

Partial.events

___

### filters

• `Optional` **filters**: `string`[]

#### Inherited from

Partial.filters

___

### id

• `Optional` **id**: `string`

#### Inherited from

Partial.id

___

### multi

• `Optional` **multi**: `boolean` \| `string`[]

#### Inherited from

Partial.multi

___

### paginate

• `Optional` **paginate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `number` |
| `max?` | `number` |

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

**`deprecated`** renamed to `allow`.

#### Inherited from

Partial.whitelist

## Methods

### matcher

▸ `Optional` **matcher**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`
