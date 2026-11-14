<div align="center">

<a href="https://element.eleme.cn/#/en-US"><img alt="element" src="https://camo.githubusercontent.com/5c4691bfa141b2d01f0f2314a0e6495d3c051a8dd8aea54fc57b81e6fe1b840e/68747470733a2f2f63646e2e7261776769742e636f6d2f456c656d6546452f656c656d656e742f6465762f656c656d656e745f6c6f676f2e737667" width="150"/></a>

## Element(2.15.14) Materials

<br />

[![npm version](https://img.shields.io/npm/v/@cdlab996/lowcode-materials-element-ui?logo=npm)](https://www.npmjs.com/package/@cdlab996/lowcode-materials-element-ui)
[![npm downloads](https://img.shields.io/npm/dm/@cdlab996/lowcode-materials-element-ui)](https://www.npmjs.com/package/@cdlab996/lowcode-materials-element-ui)

</div>

## Components

Every component documented by `element-ui` 2.15.14 (Vue 2.7, the last Element UI release) has a meta:
77 components, with the props, events and slots of [its docs](https://element.eleme.cn/#/zh-CN/component/installation)
and a `docUrl` to its page. The material pins `element-ui` to 2.15.14;
`tests/meta.test.ts` checks the metas against the components of that version
(declared props, handler names, doc links, code generation exports,
screenshots). `screenshots/` holds a thumbnail of every component rendered
from its snippet in the designer canvas; components with nothing to show
(modals, sub-components) use `screenshots/fallback.svg`.

## Usage Example

### pnpm

```bash
pnpm add @cdlab996/lowcode-materials-element-ui
```

Import the package and initialize the editor:

```ts
import { injectAssets } from '@alilc/lowcode-plugin-inject'
import { IPublicModelPluginContext } from '@alilc/lowcode-types'
import assets from '@cdlab996/lowcode-materials-element-ui/dist/assets.json'

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
        'https://unpkg.com/@cdlab996/lowcode-materials-element-ui@1.0.0/dist/assets.json',
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
      "package": "@cdlab996/lowcode-materials-element-ui",
      "version": "1.0.0",
      "library": "Cdlab996LowcodeMaterialsVant2",
      "urls": [
        "https://unpkg.com/@cdlab996/lowcode-materials-element-ui@1.0.0/dist/index.css",
        "https://unpkg.com/@cdlab996/lowcode-materials-element-ui@1.0.0/dist/index.js"
      ]
    }
  ],
  "components": [
    {
      "exportName": "Cdlab996LowcodeMaterialsVant2Meta",
      "url": "https://unpkg.com/@cdlab996/lowcode-materials-element-ui@1.0.0/dist/meta.js",
      "package": {
        "npm": "@cdlab996/lowcode-materials-element-ui"
      }
    }
  ],
  "sort": {
    "groupList": [],
    "categoryList": []
  }
}
```
