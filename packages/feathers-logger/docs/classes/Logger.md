# Class: Logger

## Table of contents

### Constructors

- [constructor](Logger.md#constructor)

### Properties

- [options](Logger.md#options)
- [payload](Logger.md#payload)
- [request](Logger.md#request)
- [sent\_messages](Logger.md#sent_messages)

### Accessors

- [logs](Logger.md#logs)
- [out](Logger.md#out)

### Methods

- [addLog](Logger.md#addlog)
- [addLogs](Logger.md#addlogs)
- [channel](Logger.md#channel)
- [clone](Logger.md#clone)
- [config](Logger.md#config)
- [context](Logger.md#context)
- [debug](Logger.md#debug)
- [error](Logger.md#error)
- [fatal](Logger.md#fatal)
- [getContext](Logger.md#getcontext)
- [info](Logger.md#info)
- [log](Logger.md#log)
- [reset](Logger.md#reset)
- [send](Logger.md#send)
- [success](Logger.md#success)
- [title](Logger.md#title)
- [warn](Logger.md#warn)
- [write](Logger.md#write)

## Constructors

### constructor

• **new Logger**(`options?`, `context?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`LoggerConfig`](../interfaces/LoggerConfig.md)\> |
| `context?` | [`LoggerContext`](../README.md#loggercontext) |

• **new Logger**(`channel?`, `options?`, `context?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel?` | `string` |
| `options?` | `Partial`<[`LoggerConfig`](../interfaces/LoggerConfig.md)\> |
| `context?` | [`LoggerContext`](../README.md#loggercontext) |

## Properties

### options

• **options**: `Partial`<[`LoggerConfig`](../interfaces/LoggerConfig.md)\>

___

### payload

• **payload**: [`LoggerPayload`](../interfaces/LoggerPayload.md)

___

### request

• **request**: `any` = `null`

___

### sent\_messages

• **sent\_messages**: `number` = `0`

## Accessors

### logs

• `get` **logs**(): `any`[]

#### Returns

`any`[]

___

### out

• `get` **out**(): `Out`

#### Returns

`Out`

## Methods

### addLog

▸ **addLog**(`message`, `level`, `send?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `any` | `undefined` |
| `level` | `any` | `undefined` |
| `send` | `boolean` | `true` |

#### Returns

`any`

___

### addLogs

▸ **addLogs**(`messages`, `level?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | `any` |
| `level?` | `any` |

#### Returns

`any`

___

### channel

▸ **channel**(`channel`): [`Logger`](Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `any` |

#### Returns

[`Logger`](Logger.md)

___

### clone

▸ **clone**(`context?`, `config?`): [`Logger`](Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | [`LoggerContext`](../README.md#loggercontext) |
| `config?` | `Partial`<[`LoggerConfig`](../interfaces/LoggerConfig.md)\> |

#### Returns

[`Logger`](Logger.md)

▸ **clone**(`channel?`, `context?`, `config?`): [`Logger`](Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel?` | `string` |
| `context?` | [`LoggerContext`](../README.md#loggercontext) |
| `config?` | `Partial`<[`LoggerConfig`](../interfaces/LoggerConfig.md)\> |

#### Returns

[`Logger`](Logger.md)

___

### config

▸ **config**(`options`): [`Logger`](Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

[`Logger`](Logger.md)

___

### context

▸ **context**(`context`): [`Logger`](Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `any` |

#### Returns

[`Logger`](Logger.md)

___

### debug

▸ **debug**(...`values`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`any`

___

### error

▸ **error**(...`values`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`any`

___

### fatal

▸ **fatal**(...`values`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`any`

___

### getContext

▸ **getContext**(): `any`

#### Returns

`any`

___

### info

▸ **info**(...`values`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`any`

___

### log

▸ **log**(...`values`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`any`

___

### reset

▸ **reset**(): [`Logger`](Logger.md)

#### Returns

[`Logger`](Logger.md)

___

### send

▸ **send**(): `any`

#### Returns

`any`

___

### success

▸ **success**(...`values`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`any`

___

### title

▸ **title**(`title`): [`Logger`](Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `any` |

#### Returns

[`Logger`](Logger.md)

___

### warn

▸ **warn**(...`values`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`any`

___

### write

▸ **write**(...`values`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`any`
