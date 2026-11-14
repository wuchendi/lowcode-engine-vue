<div align="center">

<a href="https://vant-contrib.gitee.io/vant/v2/#/en-US/"><img alt="vant" src="https://img01.yzcdn.cn/vant/logo.png" width="150"/></a>

## Vant(2.13.9) Materials

<br />

[![npm version](https://img.shields.io/npm/v/@cdlab996/lowcode-materials-vant2?logo=npm)](https://www.npmjs.com/package/@cdlab996/lowcode-materials-vant2)
[![npm downloads](https://img.shields.io/npm/dm/@cdlab996/lowcode-materials-vant2)](https://www.npmjs.com/package/@cdlab996/lowcode-materials-vant2)

</div>

## Components

Every component documented by `vant` 2.13.9 (Vue 2.7, the last Vant 2 release) has a meta:
81 components, with the props, events and slots of [its docs](https://vant-ui.github.io/vant/v2/#/zh-CN/)
and a `docUrl` to its page. The material pins `vant` to 2.13.9;
`tests/meta.test.ts` checks the metas against the components of that version
(declared props, handler names, doc links, code generation exports,
screenshots). `screenshots/` holds a thumbnail of every component rendered
from its snippet in the designer canvas; components with nothing to show
(modals, sub-components) use `screenshots/fallback.svg`.

## Usage Example

### pnpm

```bash
pnpm add @cdlab996/lowcode-materials-vant2
```

Import the package and initialize the editor:

```ts
import { injectAssets } from '@alilc/lowcode-plugin-inject'
import { IPublicModelPluginContext } from '@alilc/lowcode-types'
import assets from '@cdlab996/lowcode-materials-vant2/dist/assets.json'

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
        'https://unpkg.com/@cdlab996/lowcode-materials-vant2@1.0.0/dist/assets.json',
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
      "package": "@cdlab996/lowcode-materials-vant2",
      "version": "1.0.0",
      "library": "Cdlab996LowcodeMaterialsVant2",
      "urls": [
        "https://unpkg.com/@cdlab996/lowcode-materials-vant2@1.0.0/dist/index.css",
        "https://unpkg.com/@cdlab996/lowcode-materials-vant2@1.0.0/dist/index.js"
      ]
    }
  ],
  "components": [
    {
      "exportName": "Cdlab996LowcodeMaterialsVant2Meta",
      "url": "https://unpkg.com/@cdlab996/lowcode-materials-vant2@1.0.0/dist/meta.js",
      "package": {
        "npm": "@cdlab996/lowcode-materials-vant2"
      }
    }
  ],
  "sort": {
    "groupList": [],
    "categoryList": []
  }
}
```
