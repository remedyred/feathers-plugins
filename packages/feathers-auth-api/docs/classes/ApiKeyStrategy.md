# Class: ApiKeyStrategy

## Hierarchy

- `AuthenticationBaseStrategy`

  ↳ **`ApiKeyStrategy`**

## Table of contents

### Constructors

- [constructor](ApiKeyStrategy.md#constructor)

### Properties

- [app](ApiKeyStrategy.md#app)
- [authentication](ApiKeyStrategy.md#authentication)
- [name](ApiKeyStrategy.md#name)

### Accessors

- [configuration](ApiKeyStrategy.md#configuration)
- [entityService](ApiKeyStrategy.md#entityservice)

### Methods

- [authenticate](ApiKeyStrategy.md#authenticate)
- [setApplication](ApiKeyStrategy.md#setapplication)
- [setAuthentication](ApiKeyStrategy.md#setauthentication)
- [setName](ApiKeyStrategy.md#setname)

## Constructors

### constructor

• **new ApiKeyStrategy**()

#### Inherited from

AuthenticationBaseStrategy.constructor

## Properties

### app

• `Optional` **app**: `Application`<`any`, `any`\>

#### Inherited from

AuthenticationBaseStrategy.app

___

### authentication

• `Optional` **authentication**: `AuthenticationBase`

#### Inherited from

AuthenticationBaseStrategy.authentication

___

### name

• `Optional` **name**: `string`

#### Inherited from

AuthenticationBaseStrategy.name

## Accessors

### configuration

• `get` **configuration**(): `any`

#### Returns

`any`

#### Inherited from

AuthenticationBaseStrategy.configuration

___

### entityService

• `get` **entityService**(): `Service`<`any`, `Partial`<`any`\>, `Params`<`Query`\>\>

#### Returns

`Service`<`any`, `Partial`<`any`\>, `Params`<`Query`\>\>

#### Inherited from

AuthenticationBaseStrategy.entityService

## Methods

### authenticate

▸ **authenticate**(`authentication`): `Promise`<`AuthenticationResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authentication` | `AuthenticationRequest` |

#### Returns

`Promise`<`AuthenticationResult`\>

___

### setApplication

▸ **setApplication**(`app`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Application`<`any`, `any`\> |

#### Returns

`void`

#### Inherited from

AuthenticationBaseStrategy.setApplication

___

### setAuthentication

▸ **setAuthentication**(`auth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `auth` | `AuthenticationBase` |

#### Returns

`void`

#### Inherited from

AuthenticationBaseStrategy.setAuthentication

___

### setName

▸ **setName**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

AuthenticationBaseStrategy.setName
