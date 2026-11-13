# @cdlab996/lowcode-engine-ext-vue

Setters and binding dialogs for [Alibaba LowCode Engine](https://github.com/alibaba/lowcode-engine),
adapted to Vue component metas. Based on
[lowcode-engine-ext](https://github.com/alibaba/lowcode-engine-ext); see the
[setter documentation](https://lowcode-engine.cn/site/docs/guide/appendix/setters).

[![npm version](https://img.shields.io/npm/v/@cdlab996/lowcode-engine-ext-vue.svg)](https://www.npmjs.com/package/@cdlab996/lowcode-engine-ext-vue)

## Usage

The package is a browser bundle that registers `window.AliLowCodeEngineExt`.
Load it after the engine, in place of `@alilc/lowcode-engine-ext`:

```html
<link rel="stylesheet" href="https://unpkg.com/@cdlab996/lowcode-engine-ext-vue/dist/engine-ext.css" />
<script src="https://unpkg.com/@cdlab996/lowcode-engine-ext-vue/dist/engine-ext.js"></script>
```

It reads `React`, `ReactDOM`, `PropTypes`, `moment`, `_` (lodash), `Next`
(`@alifd/next`) and `AliLowCodeEngine` from the page.

## Development

```bash
pnpm -C packages/plugins/engine-ext-vue build
```

The designer app (`pnpm dev`) serves the build from `/runtime/engine-ext/`.
