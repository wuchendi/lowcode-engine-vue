# @cdlab996/lowcode-vue3

LowCode Engine renderer and designer simulator for **Vue 3**: the Vue 3
adapter on top of [`@cdlab996/lowcode-vue-core`](../core), re-exporting the
core API with the adapter installed. Same API as `@cdlab996/lowcode-vue2`;
only the peer Vue and vue-router versions differ.

```bash
pnpm add @cdlab996/lowcode-vue3 vue vue-router@5
```

## Entries

| Entry                   | Content                                                                |
| ----------------------- | ---------------------------------------------------------------------- |
| `.`                     | full API, including the designer simulator (needs vue-router)          |
| `./runtime`             | renderer only, no vue-router                                           |
| `./designer`            | `setupDesignerEnvironment` for the designer page (no Vue import)       |
| `dist/renderer.umd.js`  | browser bundle of `./runtime` as `window.LCVueRenderer`, no vue-router |
| `dist/simulator.umd.js` | designer canvas bundle, vue-router 5 included                          |
| `dist/simulator.css`    | canvas styles                                                          |

Both UMD bundles inline the core and read Vue from `window.Vue`.

## Render a schema

```ts
import {
  buildComponents,
  getAdapter,
  Renderer,
} from '@cdlab996/lowcode-vue3/runtime'

// libraryMap: package name -> UMD global (`packages[].library` of the assets)
// componentsMap: component name -> its entry in the schema's `componentsMap`
const components = buildComponents(libraryMap, componentsMap)

getAdapter().mount(
  Renderer,
  { schema, components }, // schema: a Page / Block / Component root
  document.getElementById('app')!,
)
```

`buildComponents` reads the libraries from `window`, so load the material
scripts first (`AssetLoader` does it from the asset `urls`).
[`apps/designer/src/preview.ts`](../../../apps/designer/src/preview.ts) is a
complete preview page.

Renderer props: `schema`, `components`, `scope`, `designMode`, `device`,
`locale`, `messages`, `props` (values for `initProps`),
`requestHandlersMap`, `getNode`, `onCompGetCtx`, `onRuntimeScope`.

## Designer

- Designer page: `setupDesignerEnvironment(project, { vue: '<Vue 3 runtime URL>' })`
  from `@cdlab996/lowcode-vue3/designer`, then give the engine
  `dist/simulator.umd.js` and `dist/simulator.css` as `simulatorUrl`.
- Preview page: load Vue and `dist/renderer.umd.js`; the API is
  `window.LCVueRenderer`.

## Peer dependencies

`vue` ^3.5.0 and `vue-router` ^4.2.0 || ^5.0.0 (the simulator's in-memory router; the
`./runtime` entry does not import it).

## License

[MIT](https://github.com/wuchendi/lowcode-engine-vue/blob/main/LICENSE)
