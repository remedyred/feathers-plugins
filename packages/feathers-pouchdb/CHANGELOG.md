# @snickbit/feathers-pouchdb Changelog

## 0.0.3

### Patch Changes

- [88d436e](https://github.com/snickbit/feathers/commit/88d436e) **chore**:  updated to 5.0.0-pre.22
- [8a1c77c](https://github.com/snickbit/feathers/commit/8a1c77c) **fix**:  move _put to adapter
- [ddd79b6](https://github.com/snickbit/feathers/commit/ddd79b6) **feat**:  add basic attachment adding
- [596b23a](https://github.com/snickbit/feathers/commit/596b23a) **build**:  add source maps to dev/watch build
- [464f40f](https://github.com/snickbit/feathers/commit/464f40f) **fix**:  use db instead of bulkDocs
- [1a1c119](https://github.com/snickbit/feathers/commit/1a1c119) **feat**:  return promise from $ready and watch for database create events
- [f3e4b34](https://github.com/snickbit/feathers/commit/f3e4b34) **feat**:  overhaul encryption, rebuilding comdb internally using typescript
- [5e5b150](https://github.com/snickbit/feathers/commit/5e5b150) **fix**:  error handling
- [173ead0](https://github.com/snickbit/feathers/commit/173ead0) **feat**:  add put method
- [92e90d8](https://github.com/snickbit/feathers/commit/92e90d8) **fix**:  add debug output
- [e1e02cc](https://github.com/snickbit/feathers/commit/e1e02cc) **fix**:  return paginated results unless explicitly false
- [2c658cd](https://github.com/snickbit/feathers/commit/2c658cd) **fix**:  encrypted replication config
- [fcf2575](https://github.com/snickbit/feathers/commit/fcf2575) **fix**:  don't require replication to encrypt
- [484d346](https://github.com/snickbit/feathers/commit/484d346) **fix**:  wait for encryption to fully finish before starting replication
- [062dc5e](https://github.com/snickbit/feathers/commit/062dc5e) **fix**:  remove decrypt on login
- [69ccc17](https://github.com/snickbit/feathers/commit/69ccc17) **fix**:  remove useless interface
- [8bfab04](https://github.com/snickbit/feathers/commit/8bfab04) **fix**:  add option to set output verbosity
- [aede92d](https://github.com/snickbit/feathers/commit/aede92d) **fix**:  missing import
- [89e1f98](https://github.com/snickbit/feathers/commit/89e1f98) **fix**:  improve login encryption handling
- [b858847](https://github.com/snickbit/feathers/commit/b858847) **feat**:  add option to decrypt on "decrypt" event

## 0.0.2

### Patch Changes

- [49d78ea](https://github.com/snickbit/feathers/commit/49d78ea) **fix**:  remove sift
- [7151a42](https://github.com/snickbit/feathers/commit/7151a42) **fix**:  adjust config options
- [5ff3a2a](https://github.com/snickbit/feathers/commit/5ff3a2a) **fix**:  emit events
- [f1297af](https://github.com/snickbit/feathers/commit/f1297af) **fix**:  add memory adapter
- [6fe2a24](https://github.com/snickbit/feathers/commit/6fe2a24) **fix**:  remove matcher/sorter
- [9e47496](https://github.com/snickbit/feathers/commit/9e47496) **feat**:  add encryption options
- [f9e1832](https://github.com/snickbit/feathers/commit/f9e1832) **fix**:  adjust debugging output
- [40f51e8](https://github.com/snickbit/feathers/commit/40f51e8) **fix**:  move client initialization to setup method
- [ae2555d](https://github.com/snickbit/feathers/commit/ae2555d) **fix**:  make properties protected
- [f7dd667](https://github.com/snickbit/feathers/commit/f7dd667) **style**:  reformat
- [8c0fe40](https://github.com/snickbit/feathers/commit/8c0fe40) **fix**:  add $ready method to ensure client has been initialized
- [8447ef1](https://github.com/snickbit/feathers/commit/8447ef1) **fix**:  set id to _id
- [9418e23](https://github.com/snickbit/feathers/commit/9418e23) **fix**:  rollback tsup to maintain dynamic import support
- [7b8b88c](https://github.com/snickbit/feathers/commit/7b8b88c) **fix**:  type definition

