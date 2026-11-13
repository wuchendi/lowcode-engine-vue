# @cdlab996/lowcode-vue3

LowCode Engine renderer and designer simulator for **Vue 3**. Same API as
`@cdlab996/lowcode-vue2`; only the peer Vue version differs.

```bash
pnpm add @cdlab996/lowcode-vue3 vue vue-router@4
```

Entries: `.` (full API, including the designer simulator), `./runtime`
(renderer only, no vue-router), `./designer` (designer page helper).

## Render a schema

```ts
import { buildComponents, getAdapter, Renderer } from '@cdlab996/lowcode-vue3'

const components = buildComponents(libraryMap, componentsMap)
getAdapter().mount(
  Renderer,
  { schema, components },
  document.getElementById('app')!,
)
```

Renderer props: `schema`, `components`, `scope`, `designMode`, `device`,
`locale`, `messages`, `props` (values for `initProps`),
`requestHandlersMap`, `getNode`, `onCompGetCtx`, `onRuntimeScope`.

## Designer

- Designer page: `setupDesignerEnvironment(project, { vue: '<Vue 3 runtime URL>' })`
  from `@cdlab996/lowcode-vue3/designer`, then pass
  `dist/simulator.umd.js` and `dist/simulator.css` as `simulatorUrl`.
- Preview page: load Vue and `dist/renderer.umd.js`; the API is
  `window.LCVueRenderer`.

Both bundles include vue-router 4; Vue is read from `window.Vue`.

## License

[MIT](https://github.com/wuchendi/lowcode-engine-vue/blob/main/LICENSE)
