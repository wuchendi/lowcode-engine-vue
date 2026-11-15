# @cdlab996/lowcode-plugin-manual

[![npm version](https://img.shields.io/npm/v/@cdlab996/lowcode-plugin-manual?logo=npm)](https://www.npmjs.com/package/@cdlab996/lowcode-plugin-manual)

LowCode Engine designer plugin: a help button (如何使用) at the bottom of the
left bar that opens a link. A fork of the official
[lowcode-plugin-manual](https://github.com/alibaba/lowcode-plugins/tree/main/packages/plugin-manual),
whose link cannot be configured.

```ts
import { plugins } from '@alilc/lowcode-engine'
import Manual from '@cdlab996/lowcode-plugin-manual'

await plugins.register(Manual, { href: 'https://example.com/guide' })
```

| Option   | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `href`   | Link to open (default `https://lowcode-engine.cn/index`).    |
| `target` | Link target: `_blank` (default), `_self`, `_parent`, `_top`. |

## License

[MIT](https://github.com/wuchendi/lowcode-engine-vue/blob/main/LICENSE)
