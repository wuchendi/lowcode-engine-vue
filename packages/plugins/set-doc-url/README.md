# @cdlab996/lowcode-plugin-set-doc-url

[![npm version](https://img.shields.io/npm/v/@cdlab996/lowcode-plugin-set-doc-url?logo=npm)](https://www.npmjs.com/package/@cdlab996/lowcode-plugin-set-doc-url)

LowCode Engine designer plugin: shows a 使用文档 (Documentation) link in the
属性 (Props) group of the settings pane, for every component whose meta has a
`docUrl`.

```ts
import { plugins } from '@alilc/lowcode-engine'
import SetDocUrl from '@cdlab996/lowcode-plugin-set-doc-url'

await plugins.register(SetDocUrl)
```

No options. The link comes from the component meta:

```ts
import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  componentName: 'ElButton',
  title: 'Button',
  docUrl: 'https://element-plus.org/zh-CN/component/button.html',
  // ...
}

export default meta
```

Components without a `docUrl`, and Page and Component roots, show no link.
The metas of the `@cdlab996/lowcode-materials-*` packages all have one.

## License

[MIT](https://github.com/wuchendi/lowcode-engine-vue/blob/main/LICENSE)
