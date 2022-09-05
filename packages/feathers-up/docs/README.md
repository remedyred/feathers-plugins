# @snickbit/feathers-up

## Table of contents

### References

- [default](README.md#default)

### Interfaces

- [Application](interfaces/Application.md)

### Functions

- [feathersUp](README.md#feathersup)
- [useApp](README.md#useapp)

## References

### default

Renames and re-exports [feathersUp](README.md#feathersup)

## Functions

### feathersUp

▸ **feathersUp**(`appType?`, `setup?`, `options?`): [`Application`](interfaces/Application.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `appType` | `string` | `'server'` |
| `setup` | `Model`<`any`, `Partial`<`any`\>\> \| `AppSetup` | `{}` |
| `options` | `FeathersUpOptions` | `{}` |

#### Returns

[`Application`](interfaces/Application.md)

___

### useApp

▸ **useApp**(`appType?`, `setup?`): [`Application`](interfaces/Application.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `appType` | `string` | `'server'` |
| `setup` | `AppSetup` | `{}` |

#### Returns

[`Application`](interfaces/Application.md)
