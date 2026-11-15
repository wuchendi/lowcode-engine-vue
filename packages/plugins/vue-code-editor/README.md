# @cdlab996/lowcode-plugin-vue-code-editor

Vue source panel for the LowCode Engine designer: edit a page as a Vue
component (`data`, `methods`, `computed`, `watch`, `props`, `emits`,
`provide` / `inject`, `setup`, lifecycle hooks, imports).

```ts
import { plugins } from '@alilc/lowcode-engine'
import VueCodeEditor from '@cdlab996/lowcode-plugin-vue-code-editor'

await plugins.register(VueCodeEditor, { vue: 2 }) // or 3 (default)
```

`vue` selects the Vue and vue-router declarations of the editor (Vue 2.7 +
vue-router 3, or Vue 3 + vue-router 5); they load on demand.

New pages start with the Composition API (`setup()`); pages written with the
Options API keep it. On save, the code is stored in `meta.originCode` and
the bindings returned by `setup()` in `meta.setupBindings`
(`{ state, methods }`), so the designer's binding dialogs list them. They
are read statically: names returned by an object literal at the end of
`setup()`; functions are methods, other values state, with their initial
value when it is a literal (`ref(1)`, `reactive({ ... })`). Event handlers
created from the designer go into `setup()` and its returned object (or into
`methods` for the Options API).

## License

[MIT](https://github.com/wuchendi/lowcode-engine-vue/blob/main/LICENSE)
