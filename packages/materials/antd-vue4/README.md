<div align="center">

<a href="https://www.antdv.com/"><img alt="element" src="https://avatars.githubusercontent.com/u/32120805" width="150"/></a>

## Ant Design Vue(4.2.6) Materials

<br />

[![npm version](https://img.shields.io/npm/v/@cdlab996/lowcode-materials-antd?logo=npm)](https://www.npmjs.com/package/@cdlab996/lowcode-materials-antd)
[![npm downloads](https://img.shields.io/npm/dm/@cdlab996/lowcode-materials-antd)](https://www.npmjs.com/package/@cdlab996/lowcode-materials-antd)

</div>

## Component material complete list

- [x] Button

## Components

Every component documented by `ant-design-vue` 4.2.6 (Vue 3) has a meta:
101 components, with the props, events and slots of [its docs](https://antdv.com/docs/vue/introduce-cn)
and a `docUrl` to its page. The material pins `ant-design-vue` to 4.2.6;
`tests/meta.test.ts` checks the metas against the components of that version
(declared props, handler names, doc links, code generation exports,
screenshots). `screenshots/` holds a thumbnail of every component rendered
from its snippet in the designer canvas; components with nothing to show
(modals, sub-components) use `screenshots/fallback.svg`.

Ant Design reads some sub-components from the vnodes of its children
(`Select.Option`, `Table.Column`, `Mentions.Option`...); rendered by the
low-code renderer they are wrapped, so the main components take them as data
(`options`, `columns`) and their metas stay out of the components pane.

## Usage Example

### pnpm

```bash
pnpm add @cdlab996/lowcode-materials-antd-vue4
```

Import the package and initialize the editor:

```ts
import { injectAssets } from '@alilc/lowcode-plugin-inject'
import { IPublicModelPluginContext } from '@alilc/lowcode-types'
import assets from '@cdlab996/lowcode-materials-antd-vue4/dist/assets.json'

const editorInit = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      const { material, project } = ctx

      const loadedAssets = await injectAssets(assets)
      material.setAssets(loadedAssets)
      // ...
    },
  }
}

editorInit.pluginName = 'editorInit'

export default editorInit
```

### CDN

```ts
import { injectAssets } from '@alilc/lowcode-plugin-inject'
import { IPublicModelPluginContext } from '@alilc/lowcode-types'

const editorInit = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      const { material, project } = ctx

      const loadedAssets = await injectAssets(
        'https://unpkg.com/@cdlab996/lowcode-materials-antd-vue4/dist/assets.json',
      )
      material.setAssets(loadedAssets)
      // ...
    },
  }
}

editorInit.pluginName = 'editorInit'

export default editorInit
```

## assets.json

Here is an example of the `assets.json` file:

```json
{
  "version": "0.0.1",
  "packages": [
    {
      "package": "@cdlab996/lowcode-materials-antd",
      "version": "0.0.1",
      "library": "Cdlab996AntdLowcodeMaterials",
      "urls": [
        "https://unpkg.com/@cdlab996/lowcode-materials-antd-vue4/dist/index.css",
        "https://unpkg.com/@cdlab996/lowcode-materials-antd-vue4/dist/index.js"
      ]
    }
  ],
  "components": [
    {
      "exportName": "Cdlab996AntdLowcodeMaterialsMeta",
      "url": "https://unpkg.com/@cdlab996/lowcode-materials-antd-vue4/dist/meta.js",
      "package": {
        "npm": "@cdlab996/antdlowcode-materials"
      }
    }
  ],
  "sort": {
    "groupList": [],
    "categoryList": []
  }
}
```

## 📜 License

[MIT](./LICENSE) License &copy; 2023-PRESENT [cdLab996](https://github.com/cdLab996)
