# @snickbit/feathers-up-mongodb

## Table of contents

### Interfaces

- [MongoClientOptions](interfaces/MongoClientOptions.md)

### Functions

- [connectToMongoDB](README.md#connecttomongodb)
- [default](README.md#default)

## Functions

### connectToMongoDB

▸ **connectToMongoDB**(`app`, `config`): `Promise`<`MongoClient`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Application` |
| `config` | [`MongoClientOptions`](interfaces/MongoClientOptions.md) |

#### Returns

`Promise`<`MongoClient`\>

___

### default

▸ **default**(`app`, `config`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Application` |
| `config` | [`MongoClientOptions`](interfaces/MongoClientOptions.md) \| [`MongoClientOptions`](interfaces/MongoClientOptions.md)[] |

#### Returns

`Promise`<`any`\>
