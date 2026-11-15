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

The plugin only adds the setting; the `v-loading` directive comes from a
material. Element UI registers it globally when its script loads (Vue 2.7),
and `@cdlab996/lowcode-materials-element-plus` exports it in `directives`,
which the renderer registers (Vue 3). With neither material loaded the prop
has no effect. The code generator registers the directive in the generated
`src/main.js`.

## License

[MIT](https://github.com/wuchendi/lowcode-engine-vue/blob/main/LICENSE)
