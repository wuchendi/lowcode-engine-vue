# @cdlab996/lowcode-plugin-directive-loading

[![npm version](https://img.shields.io/npm/v/@cdlab996/lowcode-plugin-directive-loading?logo=npm)](https://www.npmjs.com/package/@cdlab996/lowcode-plugin-directive-loading)

LowCode Engine designer plugin: adds a **loading** switch (`v-loading`) to
the 高级 (Advanced) group of every component's settings pane. The value is a
boolean or a bound variable and is saved as the `v-loading` prop of the node,
which the Vue renderer applies as a directive.

```ts
import { plugins } from '@alilc/lowcode-engine'
import DirectiveLoading from '@cdlab996/lowcode-plugin-directive-loading'

await plugins.register(DirectiveLoading)
```

No options. Page and Component roots do not get the switch.

The plugin only adds the setting: the `v-loading` directive itself must be
registered where the schema renders (the renderer resolves `v-<name>` props
as directives of the running app). The code generator registers it in the
generated `src/main.js`, from Element UI (Vue 2.7) or Element Plus (Vue 3).

## License

[MIT](https://github.com/wuchendi/lowcode-engine-vue/blob/main/LICENSE)
