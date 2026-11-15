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

## Setters

`StringSetter`, `TextAreaSetter`, `NumberSetter`, `BoolSetter`,
`SelectSetter`, `RadioGroupSetter`, `DateSetter` (and year / month / range), `TimePicker`,
`ColorSetter`, `IconSetter`, `CIconSetter`, `ClassNameSetter`, `StyleSetter`, `I18nSetter`,
`TitleSetter`, `JsonSetter`, `ArraySetter`, `ObjectSetter`, `MixedSetter`,
`SlotSetter`, `FunctionSetter`, `EventsSetter`, `ExpressionSetter` and
`VariableSetter`, plus the variable and event binding dialogs.

What differs from the React bundle:

- The binding dialogs and the expression setter list what a Vue page exposes
  on `this`: `state`, `methods` and the bindings returned by `setup()`
  (`meta.setupBindings`, written by
  [`@cdlab996/lowcode-plugin-vue-code-editor`](../vue-code-editor)).
- They read the document being edited (the current page or low-code
  component), not the first root of the project.
- `CIconSetter` picks an icon of a component library, with its font bundled:
  `{ componentName: 'CIconSetter', props: { library: 'vant' } }` (`element`,
  the Element UI class names, by default). The materials of this repository
  use it for their `icon` props.
- Texts follow the engine locale (`zh-CN` / `en-US`).

## Development

```bash
pnpm -C packages/plugins/engine-ext-vue build
```

The designer app (`pnpm dev`) serves the build from `/runtime/engine-ext/`.
