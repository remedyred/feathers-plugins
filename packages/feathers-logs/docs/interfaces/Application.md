# Interface: Application

## Hierarchy

- `Application`

  ↳ **`Application`**

## Table of contents

### Properties

- [\_isSetup](Application.md#_issetup)
- [mixins](Application.md#mixins)
- [out](Application.md#out)
- [services](Application.md#services)
- [settings](Application.md#settings)
- [version](Application.md#version)

### Methods

- [addListener](Application.md#addlistener)
- [configure](Application.md#configure)
- [defaultService](Application.md#defaultservice)
- [emit](Application.md#emit)
- [eventNames](Application.md#eventnames)
- [get](Application.md#get)
- [getMaxListeners](Application.md#getmaxlisteners)
- [hooks](Application.md#hooks)
- [listenerCount](Application.md#listenercount)
- [listeners](Application.md#listeners)
- [off](Application.md#off)
- [on](Application.md#on)
- [once](Application.md#once)
- [prependListener](Application.md#prependlistener)
- [prependOnceListener](Application.md#prependoncelistener)
- [rawListeners](Application.md#rawlisteners)
- [removeAllListeners](Application.md#removealllisteners)
- [removeListener](Application.md#removelistener)
- [service](Application.md#service)
- [set](Application.md#set)
- [setMaxListeners](Application.md#setmaxlisteners)
- [setup](Application.md#setup)
- [teardown](Application.md#teardown)
- [use](Application.md#use)

## Properties

### \_isSetup

• **\_isSetup**: `boolean`

A private-ish indicator if `app.setup()` has been called already

#### Inherited from

FeathersApp.\_isSetup

___

### mixins

• **mixins**: `ServiceMixin`<`Application`<`any`, `any`\>\>[]

A list of callbacks that run when a new service is registered

#### Inherited from

FeathersApp.mixins

___

### out

• `Optional` **out**: `any`

___

### services

• **services**: `any`

The index of all services keyed by their path.

__Important:__ Services should always be retrieved via `app.service('name')`
not via `app.services`.

#### Inherited from

FeathersApp.services

___

### settings

• **settings**: `any`

The application settings that can be used via
`app.get` and `app.set`

#### Inherited from

FeathersApp.settings

___

### version

• **version**: `string`

The Feathers application version

#### Inherited from

FeathersApp.version

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Application`](Application.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.addListener

___

### configure

▸ **configure**(`callback`): [`Application`](Application.md)

Runs a callback configure function with the current application instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`this`: [`Application`](Application.md), `app`: [`Application`](Application.md)) => `void` | The callback `(app: Application) => {}` to run |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.configure

___

### defaultService

▸ **defaultService**(`location`): `Partial`<`ServiceMethods`<`any`, `Partial`<`any`\>, `Params`<`Query`\>\>\>

Returns a fallback service instance that will be registered
when no service was found. Usually throws a `NotFound` error
but also used to instantiate client side services.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | `string` | The path of the service |

#### Returns

`Partial`<`ServiceMethods`<`any`, `Partial`<`any`\>, `Params`<`Query`\>\>\>

#### Inherited from

FeathersApp.defaultService

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

FeathersApp.emit

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

FeathersApp.eventNames

___

### get

▸ **get**<`L`\>(`name`): `any`

Retrieve an application setting by name

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `L` | The setting name |

#### Returns

`any`

#### Inherited from

FeathersApp.get

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

FeathersApp.getMaxListeners

___

### hooks

▸ **hooks**(`map`): [`Application`](Application.md)

Register application level hooks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `ApplicationHookOptions`<[`Application`](Application.md)\> | The application hook settings. |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.hooks

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

FeathersApp.listenerCount

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

FeathersApp.listeners

___

### off

▸ **off**(`eventName`, `listener`): [`Application`](Application.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.off

___

### on

▸ **on**(`eventName`, `listener`): [`Application`](Application.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.on

___

### once

▸ **once**(`eventName`, `listener`): [`Application`](Application.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.once

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Application`](Application.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Application`](Application.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.prependOnceListener

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

FeathersApp.rawListeners

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Application`](Application.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.removeAllListeners

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Application`](Application.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.removeListener

___

### service

▸ **service**<`L`\>(`path`): `FeathersService`<[`Application`](Application.md), `Service`<`any`, `Partial`<`any`\>, `Params`<`Query`\>\>\>

Get the Feathers service instance for a path. This will
be the service originally registered with Feathers functionality
like hooks and events added.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `L` | The name of the service. |

#### Returns

`FeathersService`<[`Application`](Application.md), `Service`<`any`, `Partial`<`any`\>, `Params`<`Query`\>\>\>

#### Inherited from

FeathersApp.service

___

### set

▸ **set**<`L`\>(`name`, `value`): [`Application`](Application.md)

Set an application setting

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `L` | The setting name |
| `value` | `any` | The setting value |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.set

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Application`](Application.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.setMaxListeners

___

### setup

▸ **setup**(`server?`): `Promise`<[`Application`](Application.md)\>

Set up the application and call all services `.setup` method if available.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server?` | `any` | A server instance (optional) |

#### Returns

`Promise`<[`Application`](Application.md)\>

#### Inherited from

FeathersApp.setup

___

### teardown

▸ **teardown**(`server?`): `Promise`<[`Application`](Application.md)\>

Tear down the application and call all services `.teardown` method if available.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server?` | `any` | A server instance (optional) |

#### Returns

`Promise`<[`Application`](Application.md)\>

#### Inherited from

FeathersApp.teardown

___

### use

▸ **use**<`L`\>(`path`, `service`, `options?`): [`Application`](Application.md)

Register a new service or a sub-app. When passed another
Feathers application, all its services will be re-registered
with the `path` prefix.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `L` | The path for the service to register |
| `service` | `Application`<`any`, `any`\> \| `Partial`<`ServiceMethods`<`any`, `Partial`<`any`\>, `Params`<`Query`\>\>\> | The service object to register or another Feathers application to use a sub-app under the `path` prefix. |
| `options?` | `ServiceOptions` | The options for this service |

#### Returns

[`Application`](Application.md)

#### Inherited from

FeathersApp.use
