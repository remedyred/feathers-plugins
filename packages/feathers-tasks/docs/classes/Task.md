# Class: Task

## Hierarchy

- `Model`

  ↳ **`Task`**

## Table of contents

### Constructors

- [constructor](Task.md#constructor)

### Properties

- [append](Task.md#append)
- [data](Task.md#data)
- [looping](Task.md#looping)
- [options](Task.md#options)
- [queue](Task.md#queue)
- [service](Task.md#service)

### Accessors

- [id](Task.md#id)
- [name](Task.md#name)
- [payload](Task.md#payload)
- [task](Task.md#task)

### Methods

- [\_destroy](Task.md#_destroy)
- [\_fresh](Task.md#_fresh)
- [\_save](Task.md#_save)
- [coalesce](Task.md#coalesce)
- [count](Task.md#count)
- [current](Task.md#current)
- [decrement](Task.md#decrement)
- [destroy](Task.md#destroy)
- [empty](Task.md#empty)
- [ensureExists](Task.md#ensureexists)
- [fail](Task.md#fail)
- [find](Task.md#find)
- [findKey](Task.md#findkey)
- [finish](Task.md#finish)
- [first](Task.md#first)
- [fresh](Task.md#fresh)
- [get](Task.md#get)
- [getError](Task.md#geterror)
- [has](Task.md#has)
- [hasError](Task.md#haserror)
- [increment](Task.md#increment)
- [insert](Task.md#insert)
- [item](Task.md#item)
- [items](Task.md#items)
- [job](Task.md#job)
- [keys](Task.md#keys)
- [last](Task.md#last)
- [log](Task.md#log)
- [loop](Task.md#loop)
- [patch](Task.md#patch)
- [progress](Task.md#progress)
- [pull](Task.md#pull)
- [push](Task.md#push)
- [remove](Task.md#remove)
- [run](Task.md#run)
- [save](Task.md#save)
- [set](Task.md#set)
- [setTaskOut](Task.md#settaskout)
- [start](Task.md#start)
- [stop](Task.md#stop)
- [tick](Task.md#tick)
- [toJSON](Task.md#tojson)
- [toString](Task.md#tostring)
- [total](Task.md#total)
- [validate](Task.md#validate)

## Constructors

### constructor

• **new Task**(`job`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `job` | `any` |
| `options` | [`TaskOptions`](../interfaces/TaskOptions.md) |

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

### looping

• **looping**: `boolean` = `false`

___

### options

• **options**: [`TaskOptions`](../interfaces/TaskOptions.md)

#### Overrides

Model.options

___

### queue

• **queue**: `string`

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

___

### name

• `get` **name**(): `string`

#### Returns

`string`

___

### payload

• `get` **payload**(): `any`

#### Returns

`any`

___

### task

• `get` **task**(): `ParsedImport`<`ImportMethod`<`any`, `any`\>\>

#### Returns

`ParsedImport`<`ImportMethod`<`any`, `any`\>\>

## Methods

### \_destroy

▸ **_destroy**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

Model.\_destroy

___

### \_fresh

▸ **_fresh**(): `Promise`<[`Task`](Task.md)\>

#### Returns

`Promise`<[`Task`](Task.md)\>

#### Inherited from

Model.\_fresh

___

### \_save

▸ **_save**(`attempts?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attempts?` | `number` |

#### Returns

`any`

#### Inherited from

Model.\_save

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

### current

▸ **current**(`current?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `current?` | `number` |

#### Returns

`any`

___

### decrement

▸ **decrement**(`key`, `value?`): [`Task`](Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value?` | `number` |

#### Returns

[`Task`](Task.md)

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

▸ **empty**(): [`Task`](Task.md)

#### Returns

[`Task`](Task.md)

#### Inherited from

Model.empty

▸ **empty**(`key`): [`Task`](Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

[`Task`](Task.md)

#### Inherited from

Model.empty

___

### ensureExists

▸ **ensureExists**(`key`, `value`): [`Task`](Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value` | `any` |

#### Returns

[`Task`](Task.md)

#### Inherited from

Model.ensureExists

___

### fail

▸ **fail**(`errorInfo?`): `Promise`<[`Task`](Task.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `errorInfo` | `Object` | `undefined` |
| `errorInfo.message` | `string` | `'Task failed'` |

#### Returns

`Promise`<[`Task`](Task.md)\>

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

Model.find

▸ **find**(`key`, `predicate`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `predicate` | `ObjectPredicate` |

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
| `predicate` | `ObjectPredicate` |

#### Returns

`any`

#### Inherited from

Model.findKey

▸ **findKey**(`key`, `predicate`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `predicate` | `ObjectPredicate` |

#### Returns

`any`

#### Inherited from

Model.findKey

___

### finish

▸ **finish**(`returnValue?`): `Promise`<[`Task`](Task.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `returnValue?` | `any` |

#### Returns

`Promise`<[`Task`](Task.md)\>

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

▸ **increment**(`key`, `value?`): [`Task`](Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value?` | `number` |

#### Returns

[`Task`](Task.md)

#### Inherited from

Model.increment

___

### insert

▸ **insert**(`key`, `value`, `at?`): [`Task`](Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value` | `any` |
| `at?` | `number` |

#### Returns

[`Task`](Task.md)

#### Inherited from

Model.insert

___

### item

▸ **item**(`id`, `options?`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `options` | `Object` |

#### Returns

[`TaskItem`](TaskItem.md)

___

### items

▸ **items**(`items?`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items?` | `any` |
| `options` | `Object` |

#### Returns

`any`

___

### job

▸ **job**(): `Promise`<`Job`<`any`, `any`, `string`\>\>

#### Returns

`Promise`<`Job`<`any`, `any`, `string`\>\>

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

### loop

▸ **loop**(): `any`

#### Returns

`any`

___

### patch

▸ **patch**(`data`): [`Task`](Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`any`\> |

#### Returns

[`Task`](Task.md)

#### Inherited from

Model.patch

▸ **patch**(`key`, `value`): [`Task`](Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value` | `any` |

#### Returns

[`Task`](Task.md)

#### Inherited from

Model.patch

___

### progress

▸ **progress**(`progress?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progress?` | [`TaskProgress`](../interfaces/TaskProgress.md) |

#### Returns

`any`

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

▸ **push**(`key`, ...`values`): [`Task`](Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `...values` | `any`[] |

#### Returns

[`Task`](Task.md)

#### Inherited from

Model.push

___

### remove

▸ **remove**(`key`): [`Task`](Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |

#### Returns

[`Task`](Task.md)

#### Inherited from

Model.remove

___

### run

▸ **run**(): `Promise`<`any`\>

Run the task

#### Returns

`Promise`<`any`\>

___

### save

▸ **save**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

Model.save

___

### set

▸ **set**(`data`): [`Task`](Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Task`](Task.md)

#### Inherited from

Model.set

▸ **set**(`key`, `value`, `overwrite?`): [`Task`](Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ModelKey` |
| `value` | `any` |
| `overwrite?` | `boolean` |

#### Returns

[`Task`](Task.md)

#### Inherited from

Model.set

___

### setTaskOut

▸ **setTaskOut**(): `void`

#### Returns

`void`

___

### start

▸ **start**(`stage`, `total?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `stage` | `any` | `undefined` |
| `total` | `any` | `null` |

#### Returns

`Promise`<`any`\>

___

### stop

▸ **stop**(`stage?`, `message?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `stage` | `string` | `'finished'` |
| `message?` | `any` | `undefined` |

#### Returns

`Promise`<`any`\>

___

### tick

▸ **tick**(`amount?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `number` | `1` |

#### Returns

`Promise`<`any`\>

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

Model.toJSON

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

Model.toString

___

### total

▸ **total**(`total?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `total?` | `number` |

#### Returns

`any`

___

### validate

▸ **validate**(): `Promise`<``true`` \| `ModelErrors`\>

#### Returns

`Promise`<``true`` \| `ModelErrors`\>

#### Inherited from

Model.validate
