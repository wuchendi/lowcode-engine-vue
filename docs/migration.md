# Migrating from the old packages

For users of the `@cdlab996/*2.7` packages, the earlier Vue 3 demo
(`@knxcloud/*` renderer packages) or the old material and plugin packages.
Why things changed is in [history.md](./history.md).

The old packages and repositories stay where they are: nothing is
unpublished, and projects on them keep working at their last versions. They
receive no further changes; their READMEs point here.

There is no codemod, and this list has not been run against a real old
project end to end: it is derived from the differences between the old and
the new code.

## Packages

### Renderer

| Old                                                                                                              | New                      |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `@cdlab996/lowcode-vue-renderer2.7`, `lowcode-vue-simulator-renderer2.7`, `lowcode-utils2.7`, `lowcode-hooks2.7` | `@cdlab996/lowcode-vue2` |
| `@knxcloud/lowcode-vue-renderer`, `lowcode-vue-simulator-renderer`, `lowcode-utils`, `lowcode-hooks`             | `@cdlab996/lowcode-vue3` |

Four packages per Vue version became one. Both new packages expose the same
API and depend on `@cdlab996/lowcode-vue-core`, which is installed with
them.

### Plugins and tools

| Old                                                                    | New                                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `@cdlab996/lowcode-engine-ext-vue`                                     | same name                                                                          |
| `@cdlab996/plugin-directive-loading`                                   | `@cdlab996/lowcode-plugin-directive-loading`                                       |
| `@cdlab996/lowcode-plugin-manual`, `lowcode-plugin-set-doc-url`        | same names                                                                         |
| `@cdlab996/lowcode-plugin-vue-code-editor2.7` (not usable at the time) | `@cdlab996/lowcode-plugin-vue-code-editor` (Vue 2.7 and Vue 3)                     |
| `@cdlab996/create-lowcode2.7`                                          | `@cdlab996/create-lowcode`                                                         |
| `@cdlab996/vue-cli-plugin-lowcode2.7`                                  | `@cdlab996/lowcode-material-builder` (Vite)                                        |
| `@cdlab996/vite-plugin-lib-types2.7`                                   | not needed: tsdown writes the declarations                                         |
| —                                                                      | new: `@cdlab996/lowcode-code-generator`, `@cdlab996/lowcode-plugin-code-generator` |

### Materials

| Old                                        | New                                        |
| ------------------------------------------ | ------------------------------------------ |
| `@cdlab996/element-lowcode-materials2.7`   | `@cdlab996/lowcode-materials-element-ui`   |
| `@cdlab996/vant-lowcode-materials2.7`      | `@cdlab996/lowcode-materials-vant2`        |
| `@cdlab996/antd-lowcode-materials2.7`      | `@cdlab996/lowcode-materials-antd-vue1`    |
| `@cdlab996/element-plus-lowcode-materials` | `@cdlab996/lowcode-materials-element-plus` |
| `@cdlab996/vant-lowcode-materials`         | `@cdlab996/lowcode-materials-vant4`        |
| `@cdlab996/antd-lowcode-materials`         | `@cdlab996/lowcode-materials-antd-vue4`    |

## What differs

### Imports and bundles

|                    | Old (`*2.7` 1.0.0)                                                         | New                                                                                                     |
| ------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Renderer component | default export of `lowcode-vue-renderer2.7`                                | named export `Renderer` of `@cdlab996/lowcode-vue2` (or `/runtime`)                                     |
| Renderer config    | `config`                                                                   | `rendererConfig`                                                                                        |
| Hooks              | `lowcode-hooks2.7`: `useRendererContext`, `useCurrentNode`                 | `useRendererContext` from the same package; `useCurrentNode` is gone                                    |
| Helpers            | `lowcode-utils2.7`: `buildComponents`, `AssetLoader`, ...                  | from the same package                                                                                   |
| Designer setup     | `setupHostEnvironment(project, vueUrl)` from `lowcode-utils2.7`            | `setupDesignerEnvironment(project, { vue: vueUrl })` from `@cdlab996/lowcode-vue2/designer`             |
| Preview bundle     | `dist/vue-renderer.js`, `window.LCVueRenderer`                             | `dist/renderer.umd.js`, `window.LCVueRenderer`                                                          |
| Canvas bundle      | `dist/vue-simulator-renderer.js` + `.css`, `window.LCVueSimulatorRenderer` | `dist/simulator.umd.js` + `dist/simulator.css`, `window.SimulatorRenderer` (and `window.LCVueRenderer`) |
| Simulator module   | default export is an installed instance                                    | no import-time side effects: `createSimulatorRenderer(host)` or `installSimulatorRenderer()`            |
| Module formats     | UMD and ESM                                                                | ESM, plus the two UMD bundles                                                                           |

Bundler `externals` that named `window.LCVueSimulatorRenderer` need the new
global.

### Rendering behaviour

These change what a saved schema renders. Most are fixes; check the pages
that relied on the old output.

- **Loops** render their items as siblings. The `div` that wrapped them is
  gone, so CSS or layout code that targeted it no longer matches.
- **Nodes** render as their component, without a wrapper component: a parent
  sees its real children in `slots.default()`, `$children` and `$parent`.
  Code that reached through the wrapper (`$parent.$parent`) is one level off.
- **Events on native tags** fire (`onClick` on a `button` did nothing on
  Vue 2.7).
- **Scoped default slots** receive their arguments.
- **`v-model`** uses the component's `model` option on Vue 2.7 instead of
  always `value` + `input`.
- **Expressions**: `this` is rewritten in code only, not inside strings; a
  `null` or `undefined` value renders as empty text instead of the word.
- **Lifecycles**: the Vue 2 names (`created`, `beforeDestroy`, `destroyed`)
  run.
- **`${...}` template replacement** from a page global is removed.
- **Blocked navigation** in the canvas logs a warning instead of showing a
  toast of a UI library.
- Schemas with Block and Component roots render; low-code components
  declare real props and emits.

### Designer plugins

- `@cdlab996/lowcode-plugin-vue-code-editor` and
  `@cdlab996/lowcode-plugin-code-generator` take `{ vue: 2 | 3 }` when
  registered. The source panel is ESM only and defaults new pages to
  `setup()`.
- `@cdlab996/lowcode-engine-ext-vue` no longer reads the
  `window.lowcodeSetterSwitch` global.

### Materials

- The UMD global follows the package name: for example
  `window.Cdlab996LowcodeMaterialsVant4` and
  `window.Cdlab996LowcodeMaterialsVant4Meta`. Hand-written `assets.json`
  files must use the new `package`, `library` and URLs; the `assets.json`
  each package ships is correct.
- The metas were regenerated from the library docs. Prop and event names
  that were wrong are fixed (`onExpand-change` is now `onExpandChange`), so
  a schema using an old name keeps the key but it has no effect: compare
  such nodes with the new settings pane.
- The Ant Design sub-components (`Select.Option`, `Table.Column`, ...) are
  back in the components pane. Schemas that give the same data through
  `options` / `columns` keep working.
- Component library versions are pinned (element-ui 2.15.14, vant 2.13.9,
  ant-design-vue 1.7.8; element-plus 2.14.8, vant 4.10.2,
  ant-design-vue 4.2.6).

### Material projects

The Vue CLI plugin is replaced by a Vite plugin:

```ts
// vite.config.ts
import { lowcodeMaterial } from '@cdlab996/lowcode-material-builder'
import { defineConfig } from 'vite'

export default defineConfig({ plugins: [lowcodeMaterial()] })
```

```bash
lowcode-material dev     # watch, serve assets.json on http://127.0.0.1:9000
lowcode-material build   # dist/index.js, dist/meta.js, dist/assets.json
```

The shortest path is a new project from `pnpm create @cdlab996/lowcode`
with the components and `meta.ts` files moved into it.

## Steps

**An application that renders pages**

1. Replace the four renderer packages with `@cdlab996/lowcode-vue2` or
   `@cdlab996/lowcode-vue3` and import everything from it (`/runtime` when
   the designer simulator is not needed).
2. Change the default `Renderer` import to the named one, `config` to
   `rendererConfig`.
3. Review pages for the rendering changes above, loops first.

**A designer**

1. Call `setupDesignerEnvironment(project, { vue })` before `init`, and pass
   `dist/simulator.umd.js` and `dist/simulator.css` as `simulatorUrl`.
2. Load `dist/renderer.umd.js` on the preview page.
3. Register the plugins that need it with `{ vue: 2 | 3 }`.
4. Point the assets at the new material packages.

**Saved schemas**

1. Replace the old material package names in `componentsMap`.
2. Check nodes whose props or events used names the new metas no longer
   list.

**Releases**

One version for every package: a `v<version>` tag publishes all of them.
The per-repository and per-group version lines are gone.
