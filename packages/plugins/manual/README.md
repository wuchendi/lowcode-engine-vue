# 🚀 @cdlab996/lowcode-plugin-manual

Lowcode Plugin Manual

> tips: Due to the official plugins not supporting URL configuration, it has been separated

[![NPM](https://nodei.co/npm/@cdlab996/lowcode-plugin-manual.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@cdlab996/lowcode-plugin-manual/)

[![npm version](https://img.shields.io/npm/v/@cdlab996/lowcode-plugin-manual.svg)](https://www.npmjs.com/package/@cdlab996/lowcode-plugin-manual)
[![npm downloads](https://img.shields.io/npm/dm/@cdlab996/lowcode-plugin-manual.svg)](https://www.npmjs.com/package/@cdlab996/lowcode-plugin-manual)

## ⚡ Usage

### Register the plugin

```jsx
import { plugins } from '@alilc/lowcode-engine'
import PluginManual from '@cdlab996/lowcode-plugin-manual'

// Register with the engine
plugins.register(PluginManual)
```

### Plugin Properties & Methods

```ts
interface Options {
  /**
   * Link address, default is 'https://lowcode-engine.cn/index'
   */
  href?: string
  /**
   * Link target, default is '_blank'
   */
  target?: '_blank' | '_self' | '_parent' | '_top' | string
}
```

## 📝 License

This is a fork
from [lowcode-plugin-manual](https://github.com/alibaba/lowcode-plugins/tree/main/packages/plugin-manual)
