# Class: TaskItem

## Hierarchy

- `Model`

  ↳ **`TaskItem`**

## Table of contents

### Constructors

- [constructor](TaskItem.md#constructor)

### Properties

- [append](TaskItem.md#append)
- [data](TaskItem.md#data)
- [options](TaskItem.md#options)
- [parent](TaskItem.md#parent)
- [service](TaskItem.md#service)

### Accessors

- [id](TaskItem.md#id)

### Methods

- [\_destroy](TaskItem.md#_destroy)
- [\_fresh](TaskItem.md#_fresh)
- [\_save](TaskItem.md#_save)
- [afterSave](TaskItem.md#aftersave)
- [coalesce](TaskItem.md#coalesce)
- [commit](TaskItem.md#commit)
- [count](TaskItem.md#count)
- [decrement](TaskItem.md#decrement)
- [destroy](TaskItem.md#destroy)
- [empty](TaskItem.md#empty)
- [ensureExists](TaskItem.md#ensureexists)
- [fail](TaskItem.md#fail)
- [find](TaskItem.md#find)
- [findKey](TaskItem.md#findkey)
- [first](TaskItem.md#first)
- [fresh](TaskItem.md#fresh)
- [get](TaskItem.md#get)
- [getError](TaskItem.md#geterror)
- [has](TaskItem.md#has)
- [hasError](TaskItem.md#haserror)
- [increment](TaskItem.md#increment)
- [insert](TaskItem.md#insert)
- [keys](TaskItem.md#keys)
- [last](TaskItem.md#last)
- [log](TaskItem.md#log)
- [patch](TaskItem.md#patch)
- [pull](TaskItem.md#pull)
- [push](TaskItem.md#push)
- [remove](TaskItem.md#remove)
- [save](TaskItem.md#save)
- [set](TaskItem.md#set)
- [siblings](TaskItem.md#siblings)
- [success](TaskItem.md#success)
- [toJSON](TaskItem.md#tojson)
- [toString](TaskItem.md#tostring)
- [validate](TaskItem.md#validate)

## Constructors

### constructor

• **new TaskItem**(`data`, `parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `parent` | [`Task`](Task.md) |
| `options` | `any` |

#### Overrides

Model.constructor

## Properties

### append

• **append**: `string`[]

#### Inherited from

Model.append

___

### data

• **data**: `ObjectPathBound`<`T`\>

#### Inherited from

Model.data

___

### options

• **options**: `ModelOptions`

#### Inherited from

Model.options

___

### parent

• **parent**: [`Task`](Task.md)

___

### service

• **service**: `any`

#### Inherited from

Model.service

## Accessors

### id

• `get` **id**(): `ModelId`

#### Returns

`ModelId`

#### Inherited from

Model.id

## Methods

### \_destroy

▸ **_destroy**(): `Promise`<[`TaskItem`](TaskItem.md)\>

#### Returns

`Promise`<[`TaskItem`](TaskItem.md)\>

#### Overrides

Model.\_destroy

___

### \_fresh

▸ **_fresh**(): `Promise`<[`TaskItem`](TaskItem.md)\>

#### Returns

`Promise`<[`TaskItem`](TaskItem.md)\>

#### Inherited from

Model.\_fresh

___

### \_save

▸ **_save**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Overrides

Model.\_save

___

### afterSave

▸ **afterSave**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### coalesce

▸ **coalesce**(): `any`

#### Returns

`any`

#### Inherited from

Model.coalesce

▸ **coalesce**(`key`, `defaultValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `defaultValue?` | `any` |

#### Returns

`any`

#### Inherited from

Model.coalesce

___

### commit

▸ **commit**(): [`TaskItem`](TaskItem.md)

#### Returns

[`TaskItem`](TaskItem.md)

___

### count

▸ **count**(): `number`

#### Returns

`number`

#### Inherited from

Model.count

▸ **count**(`key`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

`number`

#### Inherited from

Model.count

___

### decrement

▸ **decrement**(`key`, `value?`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value?` | `number` |

#### Returns

[`TaskItem`](TaskItem.md)

#### Inherited from

Model.decrement

___

### destroy

▸ **destroy**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

Model.destroy

___

### empty

▸ **empty**(): [`TaskItem`](TaskItem.md)

#### Returns

[`TaskItem`](TaskItem.md)

#### Inherited from

Model.empty

▸ **empty**(`key`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

[`TaskItem`](TaskItem.md)

#### Inherited from

Model.empty

___

### ensureExists

▸ **ensureExists**(`key`, `value`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value` | `any` |

#### Returns

[`TaskItem`](TaskItem.md)

#### Inherited from

Model.ensureExists

___

### fail

▸ **fail**(`reason`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `any` |

#### Returns

`Promise`<`any`\>

___

### find

▸ **find**(`predicate`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `ObjectPredicate`<`any`\> |

#### Returns

`any`

#### Inherited from

Model.find

▸ **find**(`key`, `predicate`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `predicate` | `ObjectPredicate`<`any`\> |

#### Returns

`any`

#### Inherited from

Model.find

___

### findKey

▸ **findKey**(`predicate`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `ObjectPredicate`<`any`\> |

#### Returns

`any`

#### Inherited from

Model.findKey

▸ **findKey**(`key`, `predicate`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `predicate` | `ObjectPredicate`<`any`\> |

#### Returns

`any`

#### Inherited from

Model.findKey

___

### first

▸ **first**(): `any`

#### Returns

`any`

#### Inherited from

Model.first

▸ **first**(`key?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `ModelKey` |

#### Returns

`any`

#### Inherited from

Model.first

___

### fresh

▸ **fresh**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

Model.fresh

___

### get

▸ **get**(): `any`

#### Returns

`any`

#### Inherited from

Model.get

▸ **get**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

`any`

#### Inherited from

Model.get

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

Model.getError

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

Model.has

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

Model.hasError

___

### increment

▸ **increment**(`key`, `value?`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value?` | `number` |

#### Returns

[`TaskItem`](TaskItem.md)

#### Inherited from

Model.increment

___

### insert

▸ **insert**(`key`, `value`, `at?`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value` | `any` |
| `at?` | `number` |

#### Returns

[`TaskItem`](TaskItem.md)

#### Inherited from

Model.insert

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Inherited from

Model.keys

___

### last

▸ **last**(): `any`

#### Returns

`any`

#### Inherited from

Model.last

▸ **last**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

`any`

#### Inherited from

Model.last

___

### log

▸ **log**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

___

### patch

▸ **patch**(`data`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`any`\> |

#### Returns

[`TaskItem`](TaskItem.md)

#### Inherited from

Model.patch

▸ **patch**(`key`, `value`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value` | `any` |

#### Returns

[`TaskItem`](TaskItem.md)

#### Inherited from

Model.patch

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

Model.pull

___

### push

▸ **push**(`key`, ...`values`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `...values` | `any`[] |

#### Returns

[`TaskItem`](TaskItem.md)

#### Inherited from

Model.push

___

### remove

▸ **remove**(`key`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

[`TaskItem`](TaskItem.md)

#### Inherited from

Model.remove

___

### save

▸ **save**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

Model.save

___

### set

▸ **set**(`data`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TaskItem`](TaskItem.md)

#### Inherited from

Model.set

▸ **set**(`key`, `value`, `overwrite?`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value` | `any` |
| `overwrite?` | `boolean` |

#### Returns

[`TaskItem`](TaskItem.md)

#### Inherited from

Model.set

___

### siblings

▸ **siblings**(): `any`

#### Returns

`any`

___

### success

▸ **success**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Overrides

Model.toJSON

___

### toString

▸ **toString**(): `any`

#### Returns

`any`

#### Overrides

Model.toString

___

### validate

▸ **validate**(): `Promise`<``true`` \| `ModelErrors`\>

#### Returns

`Promise`<``true`` \| `ModelErrors`\>

#### Inherited from

Model.validate
