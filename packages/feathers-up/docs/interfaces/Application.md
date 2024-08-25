# Interface: Application

## Hierarchy

- `Application`

  ↳ **`Application`**

## Table of contents

### Properties

- [\_isSetup](Application.md#_issetup)
- [\_router](Application.md#_router)
- [all](Application.md#all)
- [checkout](Application.md#checkout)
- [connect](Application.md#connect)
- [copy](Application.md#copy)
- [delete](Application.md#delete)
- [error](Application.md#error)
- [head](Application.md#head)
- [io](Application.md#io)
- [link](Application.md#link)
- [locals](Application.md#locals)
- [lock](Application.md#lock)
- [log](Application.md#log)
- [m-search](Application.md#m-search)
- [map](Application.md#map)
- [merge](Application.md#merge)
- [mixins](Application.md#mixins)
- [mkactivity](Application.md#mkactivity)
- [mkcol](Application.md#mkcol)
- [mountpath](Application.md#mountpath)
- [move](Application.md#move)
- [notify](Application.md#notify)
- [on](Application.md#on)
- [options](Application.md#options)
- [out](Application.md#out)
- [patch](Application.md#patch)
- [post](Application.md#post)
- [propfind](Application.md#propfind)
- [proppatch](Application.md#proppatch)
- [purge](Application.md#purge)
- [put](Application.md#put)
- [report](Application.md#report)
- [request](Application.md#request)
- [resource](Application.md#resource)
- [response](Application.md#response)
- [router](Application.md#router)
- [routes](Application.md#routes)
- [search](Application.md#search)
- [server](Application.md#server)
- [services](Application.md#services)
- [settings](Application.md#settings)
- [stack](Application.md#stack)
- [subscribe](Application.md#subscribe)
- [trace](Application.md#trace)
- [unlink](Application.md#unlink)
- [unlock](Application.md#unlock)
- [unsubscribe](Application.md#unsubscribe)
- [use](Application.md#use)
- [version](Application.md#version)

### Methods

- [addListener](Application.md#addlistener)
- [configure](Application.md#configure)
- [defaultConfiguration](Application.md#defaultconfiguration)
- [defaultService](Application.md#defaultservice)
- [disable](Application.md#disable)
- [disabled](Application.md#disabled)
- [emit](Application.md#emit)
- [enable](Application.md#enable)
- [enabled](Application.md#enabled)
- [engine](Application.md#engine)
- [eventNames](Application.md#eventnames)
- [get](Application.md#get)
- [getMaxListeners](Application.md#getmaxlisteners)
- [hooks](Application.md#hooks)
- [init](Application.md#init)
- [listen](Application.md#listen)
- [listenerCount](Application.md#listenercount)
- [listeners](Application.md#listeners)
- [off](Application.md#off)
- [once](Application.md#once)
- [param](Application.md#param)
- [path](Application.md#path)
- [prependListener](Application.md#prependlistener)
- [prependOnceListener](Application.md#prependoncelistener)
- [rawListeners](Application.md#rawlisteners)
- [removeAllListeners](Application.md#removealllisteners)
- [removeListener](Application.md#removelistener)
- [render](Application.md#render)
- [route](Application.md#route)
- [service](Application.md#service)
- [set](Application.md#set)
- [setMaxListeners](Application.md#setmaxlisteners)
- [setup](Application.md#setup)
- [teardown](Application.md#teardown)

## Properties

### \_isSetup

• **\_isSetup**: `boolean`

A private-ish indicator if `app.setup()` has been called already

#### Inherited from

ExpressApplication.\_isSetup

___

### \_router

• **\_router**: `any`

Used to get all registered routes in Express Application

#### Inherited from

ExpressApplication.\_router

___

### all

• **all**: `IRouterMatcher`<`Express`, ``"all"``\>

Special-cased "all" method, applying the given route `path`,
middleware, and callback to _every_ HTTP method.

#### Inherited from

ExpressApplication.all

___

### checkout

• **checkout**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.checkout

___

### connect

• **connect**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.connect

___

### copy

• **copy**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.copy

___

### delete

• **delete**: `IRouterMatcher`<`Express`, ``"delete"``\>

#### Inherited from

ExpressApplication.delete

___

### error

• **error**: `LeveledLogMethod`

___

### head

• **head**: `IRouterMatcher`<`Express`, ``"head"``\>

#### Inherited from

ExpressApplication.head

___

### io

• **io**: `Server`<`DefaultEventsMap`, `DefaultEventsMap`, `DefaultEventsMap`, `any`\>

#### Inherited from

ExpressApplication.io

___

### link

• **link**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.link

___

### locals

• **locals**: `Record`<`string`, `any`\> & `Locals`

#### Inherited from

ExpressApplication.locals

___

### lock

• **lock**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.lock

___

### log

• **log**: `Logger`

___

### m-search

• **m-search**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.m-search

___

### map

• **map**: `any`

#### Inherited from

ExpressApplication.map

___

### merge

• **merge**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.merge

___

### mixins

• **mixins**: `ServiceMixin`<`Application`<`any`, `any`\>\>[]

A list of callbacks that run when a new service is registered

#### Inherited from

ExpressApplication.mixins

___

### mkactivity

• **mkactivity**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.mkactivity

___

### mkcol

• **mkcol**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.mkcol

___

### mountpath

• **mountpath**: `string` \| `string`[]

The app.mountpath property contains one or more path patterns on which a sub-app was mounted.

#### Inherited from

ExpressApplication.mountpath

___

### move

• **move**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.move

___

### notify

• **notify**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.notify

___

### on

• **on**: (`event`: `string`, `callback`: (`parent`: `Application`<`Record`<`string`, `any`\>\>) => `void`) => `Express` & (`eventName`: `string` \| `symbol`, `listener`: (...`args`: `any`[]) => `void`) => [`Application`](Application.md)

The mount event is fired on a sub-app, when it is mounted on a parent app.
The parent app is passed to the callback function.

NOTE:
Sub-apps will:
 - Not inherit the value of settings that have a default value. You must set the value in the sub-app.
 - Inherit the value of settings with no default value.

#### Inherited from

ExpressApplication.on

___

### options

• **options**: `IRouterMatcher`<`Express`, ``"options"``\>

#### Inherited from

ExpressApplication.options

___

### out

• **out**: `Out`

___

### patch

• **patch**: `IRouterMatcher`<`Express`, ``"patch"``\>

#### Inherited from

ExpressApplication.patch

___

### post

• **post**: `IRouterMatcher`<`Express`, ``"post"``\>

#### Inherited from

ExpressApplication.post

___

### propfind

• **propfind**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.propfind

___

### proppatch

• **proppatch**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.proppatch

___

### purge

• **purge**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.purge

___

### put

• **put**: `IRouterMatcher`<`Express`, ``"put"``\>

#### Inherited from

ExpressApplication.put

___

### report

• **report**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.report

___

### request

• **request**: `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

#### Inherited from

ExpressApplication.request

___

### resource

• **resource**: `any`

#### Inherited from

ExpressApplication.resource

___

### response

• **response**: `Response`<`any`, `Record`<`string`, `any`\>, `number`\>

#### Inherited from

ExpressApplication.response

___

### router

• **router**: `string`

#### Inherited from

ExpressApplication.router

___

### routes

• **routes**: `any`

The app.routes object houses all of the routes defined mapped by the
associated HTTP verb. This object may be used for introspection
capabilities, for example Express uses this internally not only for
routing but to provide default OPTIONS behaviour unless app.options()
is used. Your application or framework may also remove routes by
simply by removing them from this object.

#### Inherited from

ExpressApplication.routes

___

### search

• **search**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.search

___

### server

• **server**: `Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>

#### Inherited from

ExpressApplication.server

___

### services

• **services**: `any`

The index of all services keyed by their path.

__Important:__ Services should always be retrieved via `app.service('name')`
not via `app.services`.

#### Inherited from

ExpressApplication.services

___

### settings

• **settings**: `any`

The application settings that can be used via
`app.get` and `app.set`

#### Inherited from

ExpressApplication.settings

___

### stack

• **stack**: `ILayer`[]

Stack of configured routes

#### Inherited from

ExpressApplication.stack

___

### subscribe

• **subscribe**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.subscribe

___

### trace

• **trace**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.trace

___

### unlink

• **unlink**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.unlink

___

### unlock

• **unlock**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.unlock

___

### unsubscribe

• **unsubscribe**: `IRouterMatcher`<`Express`, `any`\>

#### Inherited from

ExpressApplication.unsubscribe

___

### use

• **use**: <L\>(`path`: `L`, `service`: `Application`<`any`, `any`\> \| `Partial`<`ServiceMethods`<`any`, `Partial`<`any`\>, `Params`<`Query`\>\>\>, `options?`: `ServiceOptions`) => [`Application`](Application.md) & `ExpressUseHandler`<[`Application`](Application.md), `any`\>

#### Inherited from

ExpressApplication.use

___

### version

• **version**: `string`

The Feathers application version

#### Inherited from

ExpressApplication.version

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): `Express`

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`Express`

#### Inherited from

ExpressApplication.addListener

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

ExpressApplication.addListener

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

ExpressApplication.configure

___

### defaultConfiguration

▸ **defaultConfiguration**(): `void`

Initialize application configuration.

#### Returns

`void`

#### Inherited from

ExpressApplication.defaultConfiguration

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

ExpressApplication.defaultService

___

### disable

▸ **disable**(`setting`): `Express`

Disable `setting`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | `string` |

#### Returns

`Express`

#### Inherited from

ExpressApplication.disable

___

### disabled

▸ **disabled**(`setting`): `boolean`

Check if `setting` is disabled.

   app.disabled('foo')
   // => true

   app.enable('foo')
   app.disabled('foo')
   // => false

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | `string` |

#### Returns

`boolean`

#### Inherited from

ExpressApplication.disabled

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

ExpressApplication.emit

___

### enable

▸ **enable**(`setting`): `Express`

Enable `setting`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | `string` |

#### Returns

`Express`

#### Inherited from

ExpressApplication.enable

___

### enabled

▸ **enabled**(`setting`): `boolean`

Check if `setting` is enabled (truthy).

   app.enabled('foo')
   // => false

   app.enable('foo')
   app.enabled('foo')
   // => true

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | `string` |

#### Returns

`boolean`

#### Inherited from

ExpressApplication.enabled

___

### engine

▸ **engine**(`ext`, `fn`): `Express`

Register the given template engine callback `fn`
as `ext`.

By default will `require()` the engine based on the
file extension. For example if you try to render
a "foo.jade" file Express will invoke the following internally:

    app.engine('jade', require('jade').__express);

For engines that do not provide `.__express` out of the box,
or if you wish to "map" a different extension to the template engine
you may use this method. For example mapping the EJS template engine to
".html" files:

    app.engine('html', require('ejs').renderFile);

In this case EJS provides a `.renderFile()` method with
the same signature that Express expects: `(path, options, callback)`,
though note that it aliases this method as `ejs.__express` internally
so if you're using ".ejs" extensions you dont need to do anything.

Some template engines do not follow this convention, the
[Consolidate.js](https://github.com/visionmedia/consolidate.js)
library was created to map all of node's popular template
engines to follow this convention, thus allowing them to
work seamlessly within Express.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ext` | `string` |
| `fn` | (`path`: `string`, `options`: `object`, `callback`: (`e`: `any`, `rendered?`: `string`) => `void`) => `void` |

#### Returns

`Express`

#### Inherited from

ExpressApplication.engine

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

ExpressApplication.eventNames

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

ExpressApplication.get

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

ExpressApplication.getMaxListeners

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

ExpressApplication.hooks

___

### init

▸ **init**(): `void`

Initialize the server.

  - setup default configuration
  - setup default middleware
  - setup route reflection methods

#### Returns

`void`

#### Inherited from

ExpressApplication.init

___

### listen

▸ **listen**(`options`): `Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

`Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Inherited from

ExpressApplication.listen

▸ **listen**(`port`, `hostname`, `backlog`, `callback?`): `Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `hostname` | `string` |
| `backlog` | `number` |
| `callback?` | () => `void` |

#### Returns

`Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Inherited from

ExpressApplication.listen

▸ **listen**(`port`, `hostname`, `callback?`): `Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `hostname` | `string` |
| `callback?` | () => `void` |

#### Returns

`Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Inherited from

ExpressApplication.listen

▸ **listen**(`port`, `callback?`): `Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `any` |
| `callback?` | () => `void` |

#### Returns

`Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Inherited from

ExpressApplication.listen

▸ **listen**(`callback?`): `Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Inherited from

ExpressApplication.listen

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

ExpressApplication.listenerCount

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

ExpressApplication.listeners

___

### off

▸ **off**(`eventName`, `listener`): `Express`

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`Express`

#### Inherited from

ExpressApplication.off

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

ExpressApplication.off

___

### once

▸ **once**(`eventName`, `listener`): `Express`

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

`Express`

#### Inherited from

ExpressApplication.once

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

ExpressApplication.once

___

### param

▸ **param**(`name`, `handler`): `Express`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `string`[] |
| `handler` | `RequestParamHandler` |

#### Returns

`Express`

#### Inherited from

ExpressApplication.param

▸ **param**(`callback`): `Express`

Alternatively, you can pass only a callback, in which case you have the opportunity to alter the app.param()

**`Deprecated`**

since version 4.11

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`name`: `string`, `matcher`: `RegExp`) => `RequestParamHandler` |

#### Returns

`Express`

#### Inherited from

ExpressApplication.param

___

### path

▸ **path**(): `string`

Return the app's absolute pathname
based on the parent(s) that have
mounted it.

For example if the application was
mounted as "/admin", which itself
was mounted as "/blog" then the
return value would be "/blog/admin".

#### Returns

`string`

#### Inherited from

ExpressApplication.path

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): `Express`

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

`Express`

#### Inherited from

ExpressApplication.prependListener

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

ExpressApplication.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): `Express`

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

`Express`

#### Inherited from

ExpressApplication.prependOnceListener

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

ExpressApplication.prependOnceListener

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

ExpressApplication.rawListeners

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `Express`

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

`Express`

#### Inherited from

ExpressApplication.removeAllListeners

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

ExpressApplication.removeAllListeners

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): `Express`

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

`Express`

#### Inherited from

ExpressApplication.removeListener

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

ExpressApplication.removeListener

___

### render

▸ **render**(`name`, `options?`, `callback?`): `void`

Render the given view `name` name with `options`
and a callback accepting an error and the
rendered template string.

Example:

   app.render('email', { name: 'Tobi' }, function(err, html){
     // ...
   })

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | `object` |
| `callback?` | (`err`: `Error`, `html`: `string`) => `void` |

#### Returns

`void`

#### Inherited from

ExpressApplication.render

▸ **render**(`name`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | (`err`: `Error`, `html`: `string`) => `void` |

#### Returns

`void`

#### Inherited from

ExpressApplication.render

___

### route

▸ **route**<`T`\>(`prefix`): `IRoute`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `T` |

#### Returns

`IRoute`<`T`\>

#### Inherited from

ExpressApplication.route

▸ **route**(`prefix`): `IRoute`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `PathParams` |

#### Returns

`IRoute`<`string`\>

#### Inherited from

ExpressApplication.route

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

ExpressApplication.service

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

ExpressApplication.set

___

### setMaxListeners

▸ **setMaxListeners**(`n`): `Express`

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

`Express`

#### Inherited from

ExpressApplication.setMaxListeners

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

ExpressApplication.setMaxListeners

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

ExpressApplication.setup

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

ExpressApplication.teardown
