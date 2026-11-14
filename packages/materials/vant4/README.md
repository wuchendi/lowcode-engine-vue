<div align="center">

<a href="https://vant-ui.github.io/vant/en-US/"><img alt="vant" src="https://img01.yzcdn.cn/vant/logo.png" width="150"/></a>

## Vant(4.10.2) Materials

<br />

[![npm version](https://img.shields.io/npm/v/@cdlab996/lowcode-materials-vant4?logo=npm)](https://www.npmjs.com/package/@cdlab996/lowcode-materials-vant4)
[![npm downloads](https://img.shields.io/npm/dm/@cdlab996/lowcode-materials-vant4)](https://www.npmjs.com/package/@cdlab996/lowcode-materials-vant4)

</div>

## Component material complete list

- [x] Button
- [x] Image
- [x] Switch
- [x] Tab/Tabs

## Components

Every component documented by `vant` 4.10.2 (Vue 3) has a meta:
99 components, with the props, events and slots of [its docs](https://vant-ui.github.io/vant/#/zh-CN/)
and a `docUrl` to its page. The material pins `vant` to 4.10.2;
`tests/meta.test.ts` checks the metas against the components of that version
(declared props, handler names, doc links, code generation exports,
screenshots). `screenshots/` holds a thumbnail of every component rendered
from its snippet in the designer canvas; components with nothing to show
(modals, sub-components) use `screenshots/fallback.svg`.

## Usage Example

### pnpm

```bash
pnpm add @cdlab996/lowcode-materials-vant4
```

Import the package and initialize the editor:

```ts
import { injectAssets } from '@alilc/lowcode-plugin-inject'
import { IPublicModelPluginContext } from '@alilc/lowcode-types'
import assets from '@cdlab996/lowcode-materials-vant4/dist/assets.json'

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
        'https://unpkg.com/@cdlab996/lowcode-materials-vant4/dist/assets.json',
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
      "package": "@cdlab996/lowcode-materials-vant4",
      "version": "1.0.0",
      "library": "Cdlab996VantLowcodeMaterials",
      "urls": [
        "https://unpkg.com/@cdlab996/lowcode-materials-vant4/dist/index.css",
        "https://unpkg.com/@cdlab996/lowcode-materials-vant4/dist/index.js"
      ]
    }
  ],
  "components": [
    {
      "exportName": "Cdlab996VantLowcodeMaterialsMeta",
      "url": "https://unpkg.com/@cdlab996/lowcode-materials-vant4/dist/meta.js",
      "package": {
        "npm": "@cdlab996/lowcode-materials-vant4"
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
