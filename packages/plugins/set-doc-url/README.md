# 🚀 @cdlab996/lowcode-plugin-set-doc-url

Lowcode Plugin Component material new documentation address

[![NPM](https://nodei.co/npm/@cdlab996/lowcode-plugin-set-doc-url.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@cdlab996/lowcode-plugin-set-doc-url/)

[![npm version](https://img.shields.io/npm/v/@cdlab996/lowcode-plugin-set-doc-url.svg)](https://www.npmjs.com/package/@cdlab996/lowcode-plugin-set-doc-url)
[![npm downloads](https://img.shields.io/npm/dm/@cdlab996/lowcode-plugin-set-doc-url.svg)](https://www.npmjs.com/package/@cdlab996/lowcode-plugin-set-doc-url)

## ⚡ Usage

### Register the plugin

```jsx
import { plugins } from '@alilc/lowcode-engine'
import PluginSetDocUrlProp from '@cdlab996/lowcode-plugin-set-doc-url'

// Register with the engine
plugins.register(PluginSetDocUrlProp)
```

### Plugin Properties & Methods

none

### Components Materials

```ts
import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  group: 'Element-plus',
  componentName: 'ElButton',
  docUrl: 'https://element-plus.org/zh-CN/component/button.html',
  configure: {
    props: [],
    supports: {},
  },
  snippets: [],
}

export default meta
```
