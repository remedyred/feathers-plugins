# Class: Model

## Hierarchy

- `Model`

  ↳ **`Model`**

## Table of contents

### Constructors

- [constructor](Model.md#constructor)

### Properties

- [append](Model.md#append)
- [data](Model.md#data)
- [options](Model.md#options)
- [service](Model.md#service)

### Accessors

- [id](Model.md#id)

### Methods

- [\_destroy](Model.md#_destroy)
- [\_fresh](Model.md#_fresh)
- [\_save](Model.md#_save)
- [coalesce](Model.md#coalesce)
- [count](Model.md#count)
- [decrement](Model.md#decrement)
- [destroy](Model.md#destroy)
- [empty](Model.md#empty)
- [ensureExists](Model.md#ensureexists)
- [find](Model.md#find)
- [findKey](Model.md#findkey)
- [first](Model.md#first)
- [fresh](Model.md#fresh)
- [get](Model.md#get)
- [getError](Model.md#geterror)
- [has](Model.md#has)
- [hasError](Model.md#haserror)
- [increment](Model.md#increment)
- [insert](Model.md#insert)
- [keys](Model.md#keys)
- [last](Model.md#last)
- [patch](Model.md#patch)
- [pull](Model.md#pull)
- [push](Model.md#push)
- [remove](Model.md#remove)
- [save](Model.md#save)
- [set](Model.md#set)
- [toJSON](Model.md#tojson)
- [toString](Model.md#tostring)
- [validate](Model.md#validate)

## Constructors

### constructor

• **new Model**(`data`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `options` | `any` |

#### Overrides

BaseModel.constructor

## Properties

### append

• **append**: `string`[]

#### Inherited from

BaseModel.append

___

### data

• **data**: `ObjectPathBound`<`T`\>

#### Inherited from

BaseModel.data

___

### options

• **options**: [`ModelOptions`](../interfaces/ModelOptions.md)

#### Overrides

BaseModel.options

___

### service

• **service**: `any`

## Accessors

### id

• `get` **id**(): `ModelId`

#### Returns

`ModelId`

#### Inherited from

BaseModel.id

## Methods

### \_destroy

▸ **_destroy**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### \_fresh

▸ **_fresh**(): `Promise`<[`Model`](Model.md)\>

#### Returns

`Promise`<[`Model`](Model.md)\>

___

### \_save

▸ **_save**(`attempts?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `attempts` | `number` | `0` |

#### Returns

`any`

___

### coalesce

▸ **coalesce**(): `any`

#### Returns

`any`

#### Inherited from

BaseModel.coalesce

▸ **coalesce**(`key`, `defaultValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `defaultValue?` | `any` |

#### Returns

`any`

#### Inherited from

BaseModel.coalesce

___

### count

▸ **count**(): `number`

#### Returns

`number`

#### Inherited from

BaseModel.count

▸ **count**(`key`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

`number`

#### Inherited from

BaseModel.count

___

### decrement

▸ **decrement**(`key`, `value?`): [`Model`](Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value?` | `number` |

#### Returns

[`Model`](Model.md)

#### Inherited from

BaseModel.decrement

___

### destroy

▸ **destroy**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### empty

▸ **empty**(): [`Model`](Model.md)

#### Returns

[`Model`](Model.md)

#### Inherited from

BaseModel.empty

▸ **empty**(`key`): [`Model`](Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

[`Model`](Model.md)

#### Inherited from

BaseModel.empty

___

### ensureExists

▸ **ensureExists**(`key`, `value`): [`Model`](Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value` | `any` |

#### Returns

[`Model`](Model.md)

#### Inherited from

BaseModel.ensureExists

___

### find

▸ **find**(`predicate`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `ObjectPredicate` |

#### Returns

`any`

#### Inherited from

BaseModel.find

▸ **find**(`key`, `predicate`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `predicate` | `ObjectPredicate` |

#### Returns

`any`

#### Inherited from

BaseModel.find

___

### findKey

▸ **findKey**(`predicate`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `ObjectPredicate` |

#### Returns

`any`

#### Inherited from

BaseModel.findKey

▸ **findKey**(`key`, `predicate`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `predicate` | `ObjectPredicate` |

#### Returns

`any`

#### Inherited from

BaseModel.findKey

___

### first

▸ **first**(): `any`

#### Returns

`any`

#### Inherited from

BaseModel.first

▸ **first**(`key?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `ModelKey` |

#### Returns

`any`

#### Inherited from

BaseModel.first

___

### fresh

▸ **fresh**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### get

▸ **get**(): `any`

#### Returns

`any`

#### Inherited from

BaseModel.get

▸ **get**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

`any`

#### Inherited from

BaseModel.get

___

### getError

▸ **getError**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Inherited from

BaseModel.getError

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

`boolean`

#### Inherited from

BaseModel.has

___

### hasError

▸ **hasError**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

BaseModel.hasError

___

### increment

▸ **increment**(`key`, `value?`): [`Model`](Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value?` | `number` |

#### Returns

[`Model`](Model.md)

#### Inherited from

BaseModel.increment

___

### insert

▸ **insert**(`key`, `value`, `at?`): [`Model`](Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value` | `any` |
| `at?` | `number` |

#### Returns

[`Model`](Model.md)

#### Inherited from

BaseModel.insert

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Inherited from

BaseModel.keys

___

### last

▸ **last**(): `any`

#### Returns

`any`

#### Inherited from

BaseModel.last

▸ **last**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

`any`

#### Inherited from

BaseModel.last

___

### patch

▸ **patch**(`data`): [`Model`](Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`any`\> |

#### Returns

[`Model`](Model.md)

#### Inherited from

BaseModel.patch

▸ **patch**(`key`, `value`): [`Model`](Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value` | `any` |

#### Returns

[`Model`](Model.md)

#### Inherited from

BaseModel.patch

___

### pull

▸ **pull**(`key`, `defaultValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `defaultValue?` | `any` |

#### Returns

`any`

#### Inherited from

BaseModel.pull

___

### push

▸ **push**(`key`, ...`values`): [`Model`](Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `...values` | `any`[] |

#### Returns

[`Model`](Model.md)

#### Inherited from

BaseModel.push

___

### remove

▸ **remove**(`key`): [`Model`](Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

[`Model`](Model.md)

#### Inherited from

BaseModel.remove

___

### save

▸ **save**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### set

▸ **set**(`data`): [`Model`](Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Model`](Model.md)

#### Inherited from

BaseModel.set

▸ **set**(`key`, `value`, `overwrite?`): [`Model`](Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value` | `any` |
| `overwrite?` | `boolean` |

#### Returns

[`Model`](Model.md)

#### Inherited from

BaseModel.set

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

BaseModel.toJSON

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

BaseModel.toString

___

### validate

▸ **validate**(): `Promise`<``true`` \| `ModelErrors`\>

#### Returns

`Promise`<``true`` \| `ModelErrors`\>

#### Inherited from

BaseModel.validate
