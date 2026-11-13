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
vue-router 3, or Vue 3 + vue-router 4); they load on demand.

## License

[MIT](https://github.com/wuchendi/lowcode-engine-vue/blob/main/LICENSE)
