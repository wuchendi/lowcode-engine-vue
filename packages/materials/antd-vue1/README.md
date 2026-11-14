<div align="center">

<a href="https://1x.antdv.com/docs/vue/introduce/"><img alt="antdv" src="https://www.antdv.com/assets/logo.1ef800a8.svg" width="150"/></a>

## Ant Design Vue(1.7.8) Materials

<br />

[![npm version](https://img.shields.io/npm/v/@cdlab996/lowcode-materials-antd-vue1?logo=npm)](https://www.npmjs.com/package/@cdlab996/lowcode-materials-antd-vue1)
[![npm downloads](https://img.shields.io/npm/dm/@cdlab996/lowcode-materials-antd-vue1)](https://www.npmjs.com/package/@cdlab996/lowcode-materials-antd-vue1)

</div>

## Components

Every component documented by `ant-design-vue` 1.7.8 (Vue 2.7, the last 1.x release, the last one supporting Vue 2) has a meta:
94 components, with the props, events and slots of [its docs](https://1x.antdv.com/docs/vue/introduce-cn/)
and a `docUrl` to its page. The material pins `ant-design-vue` to 1.7.8;
`tests/meta.test.ts` checks the metas against the components of that version
(declared props, handler names, doc links, code generation exports,
screenshots). `screenshots/` holds a thumbnail of every component rendered
from its snippet in the designer canvas; components with nothing to show
(modals, sub-components) use `screenshots/fallback.svg`.

Ant Design reads some sub-components from the vnodes of its children
(`Select.Option`, `Table.Column`, `Mentions.Option`...); rendered by the
low-code renderer they are wrapped, so the main components take them as data
(`options`, `columns`) and their metas stay out of the components pane. `Card.Grid` has no documented props in 1.x and no meta.

## Usage Example

### pnpm

```bash
pnpm add @cdlab996/lowcode-materials-antd-vue1
```

Import the package and initialize the editor:

```ts
import { injectAssets } from '@alilc/lowcode-plugin-inject'
import { IPublicModelPluginContext } from '@alilc/lowcode-types'
import assets from '@cdlab996/lowcode-materials-antd-vue1/dist/assets.json'

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
        'https://unpkg.com/@cdlab996/lowcode-materials-antd-vue1@1.0.0/dist/assets.json',
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
  "version": "1.0.0",
  "packages": [
    {
      "package": "@cdlab996/lowcode-materials-antd-vue1",
      "version": "1.0.0",
      "library": "Cdlab996LowcodeMaterialsAntdVue1",
      "urls": [
        "https://unpkg.com/@cdlab996/lowcode-materials-antd-vue1@1.0.0/dist/index.css",
        "https://unpkg.com/@cdlab996/lowcode-materials-antd-vue1@1.0.0/dist/index.js"
      ]
    }
  ],
  "components": [
    {
      "exportName": "Cdlab996LowcodeMaterialsAntdVue1Meta",
      "url": "https://unpkg.com/@cdlab996/lowcode-materials-antd-vue1@1.0.0/dist/meta.js",
      "package": {
        "npm": "@cdlab996/lowcode-materials-antd-vue1"
      }
    }
  ],
  "sort": {
    "groupList": [],
    "categoryList": []
  }
}
```
