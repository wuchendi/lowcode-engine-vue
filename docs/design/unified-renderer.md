# Unified Vue renderer

One renderer core for Vue 2.7 and Vue 3, in the spirit of Alibaba's
`renderer-core`: the core holds the LowCode Engine logic, a small adapter
holds what differs between the Vue versions.

## Why

Vue 2.7 ships the Composition API, so `defineComponent`, `ref`, `reactive`,
`computed`, `watch`, `provide` / `inject`, `getCurrentInstance` and the
lifecycle hooks are common to both versions. The remaining differences are
few and concentrated:

| Concern            | Vue 2.7                                          | Vue 3                              |
| ------------------ | ------------------------------------------------ | ---------------------------------- |
| vnode data         | `VNodeData` (`props`/`attrs`/`on`/`scopedSlots`) | flat props, `Fragment`, directives |
| instance internals | `_uid`, `_isDestroyed`, `$options.created`       | `$.uid`, `$.isUnmounted`, `$.refs` |
| mount              | `new Vue(...)`                                   | `createApp(...)`                   |
| router             | vue-router 3 (no `removeRoute`)                  | vue-router 5 (4 works too)         |
| `v-model`          | `model` option / `value` + `input`               | `modelValue` + `update:modelValue` |

Keeping two renderers meant every schema feature, fix and test had to be done
twice, and the two drifted apart (the Vue 2.7 renderer missed the `init*`
hooks, Block and Component renderers; the Vue 3 one missed the expression
compiler and data-source fixes and most tests).

## Packages

```
packages/renderer/
  core/   @cdlab996/lowcode-vue-core, a dependency of both distributions
    src/adapter.ts      VueAdapter interface, setAdapter / getAdapter
    src/shared/         no `vue` import: expression compiler, schema parsing,
                        i18n, asset loader, designer environment
    src/context/        renderer context and current-node injection
    src/renderer/       Renderer, Page/Block/Component renderers, leaf,
                        root scope, data source, component building
    src/simulator/      designer simulator, document instances, canvas utils
  vue2/   @cdlab996/lowcode-vue2: Vue 2.7 adapter, re-exports the core
  vue3/   @cdlab996/lowcode-vue3: Vue 3 adapter, re-exports the core
```

- The core imports the shared Composition API from `vue` directly; it
  resolves to the application's Vue (a peer dependency). The distributions
  keep the core external in their ESM builds, so an application has one core
  and one adapter; their UMD bundles inline it. It is type-checked against
  both Vue 2.7 and Vue 3 typings (through each distribution).
- Each distribution calls `setAdapter()` when imported; the core calls
  `getAdapter()` for everything version-specific.
- Both distributions export the same API and build the same UMD bundles
  (`renderer.umd.js`, `simulator.umd.js`, both exposing
  `window.LCVueRenderer`), so pages and materials do not branch on the Vue
  version.

## Adapter

`packages/renderer/core/src/adapter.ts` is the contract:

- **Render**: `h(type, flatProps, slots)` with Vue 3 style props (`onX`,
  `class`, `style`, `key`, `ref`, `v-name:arg.mod` directives) and slot
  functions; `text()`; `Fragment` (Vue 2: a `div`); `PassThrough`;
  `RouterView`.
- **Reactivity gaps**: `set` / `del` for adding and removing reactive keys.
- **Components**: `isComponent`, `normalizeComponent`, `wrapTag` (native tags
  and Vue 2 functional components), `modelOf` (`v-model` prop and event).
- **Instances**: `refsOf`, `onCreated`, `onRouteGuards`, `unmountedHook`,
  `instanceId`, `isAlive`, `domNodesOf`.
- **App**: `mount`.
- **Router** (`RouterAdapter`, installed by the full entry only):
  `RouterView`, `createMemoryRouter` (add/remove routes, replace, guard).
  The renderer-only entry (`./runtime`, `renderer.umd.js`) leaves it out, so
  preview pages do not load vue-router. Route guards of a page use
  `$router.beforeEach` in both versions.

Vue 2 converts the flat props in `vue2/src/vnode-data.ts`; declared props win
over the `onX` and `v-` conventions, as in Vue 3.

## Runtime scope

`this` of a page, block or component schema is the renderer component's
public instance. Setup returns the bindings, so `state` (merged with
`initData`), `initComputed`, refs from `initInject` and the data-source
bindings become reactive instance properties in both versions. Methods,
context (`i18n`, `dataSource`, `utils`, `constants`, `__scope` keys) and
`initModule` exports are assigned through the public instance. No private
field (`setupState`, `accessCache`, `_data`) is written.

Order follows the options API: `initModule`, `beforeCreate`, `initProps`,
`setup`, `initInject`, methods, data, `initComputed`, `initProvide`; the
created phase (`initWatch`, initial data-source load, `created`) runs after
setup, when the bindings are on the instance (Vue 2: the instance's own
`created` list; Vue 3: the first `onBeforeMount` hook).

`initProps` and `initEmits` are applied when the schema's component is
defined: a schema using them renders through a component derived from its
container renderer that also declares those props and emits (cached per
schema). Values come from the renderer's `props` prop; attributes and
listeners given to the renderer are forwarded to that component, so
`this.$emit(...)` reaches the parent. `setup` may be async: rendering waits
for it.

## Expressions and data source

- Schema type guards (`isJSExpression`, `isJSFunction`, `isJSSlot`,
  `isI18nData`, `isDOMText`, `isNodeSchema`) live in `core/src/shared`. The
  ones exported by `@alilc/lowcode-types` are deprecated in favour of
  `@alilc/lowcode-utils`, but that package pulls React, Fusion, mobx, Node's
  `events` and a stylesheet into the canvas and preview bundles; the core
  keeps equivalent guards instead. Designer-side code (plugins, designer app)
  runs next to the engine's React and uses `@alilc/lowcode-utils`.
- One compiler: cached per source, `this` rewritten by a scanner (strings,
  template text, comments and regexes untouched), bare identifiers resolved
  through the scope with `with`, functions bound to the scope.
- One data-source engine with the `fetch` and `jsonp` handlers and
  `requestHandlersMap`;
  initial-load failures are recorded on the item, never unhandled.

## Simulator

`createSimulatorRenderer(host)` has no import-time side effects;
`installSimulatorRenderer()` (run by `simulator.umd.js`) exposes it as
`window.SimulatorRenderer`. Each document is a route of an in-memory router;
removed documents remove their route. `createComponent` renders low-code
component schemas with `initProps`.

## Rendering model

Every node renders as the vnode of its own component (`h(comp, props,
slots)`); there is no wrapper component between a parent and its children,
so libraries that read `slots.default()` vnodes (Ant Design's Select, Table,
Tree) or walk `$parent` / `$children` (Element UI's Steps, Tabs) see what
they expect.

- `renderer/leaf.ts` is the node state, not a component: it splits the
  schema into props and slots (`shared/schema.ts`) and, in design mode,
  subscribes to the designer node (`onPropChange` / `onChildrenChange`).
- The state is read where the node's vnode is created. A slot function runs
  in the component that renders the slot, so a change re-renders the node's
  container and Vue patches what changed.
- Instances reach the simulator (`onCompGetCtx`) through a `ref` and the
  adapter's `unmountedHook` props; an unmount reports `null`, which drops
  dead instances. Both are cached per node key: a new function on a vnode,
  or a slots object, forces the child to update on every parent render, so
  no slots object is passed when a node has no slots.
- `inject` does not see a `provide` of the same component, so the renderer
  context is passed explicitly inside one setup.
- Vue 2: default slot content without slot props is passed as children (as
  compiled templates do), so `$slots.default` holds the rendered vnodes
  instead of producing new ones on each read; slots with params are marked
  with `markScopedSlot`.

## Schema semantics

How a node schema is read (a `children` prop vs node children, `JSSlot`
props, `onUpdateXxx` events, `v-model[:arg]`, loop arguments, the global
`dataHandler`) lives in `core/src/shared/schema.ts`
(`@cdlab996/lowcode-vue-core/schema`, no Vue import) and is shared with the
code generator. `core/tests/conformance` renders fixtures with the renderer
and with the generated templates and runtime, on both Vue versions, and
compares the HTML, the method calls and the data source requests.

## Tests

`vitest.config.ts` runs the core suites twice, once per Vue version, each with
its own `vue`, `vue-router` and adapter (`core/tests/setup/vue{2,3}.ts`). Test
components are written with the adapter's `h`. Adapter-specific behaviour
(Vue 2 vnode data and functional components, vue-router 3 / 4 guards, Vue 3
directives and fragments) has its own suite in each distribution.

## Apps, plugins and materials

- `apps/designer` (Vite) serves both versions; `?vue=2|3` selects the Vue
  runtime, simulator bundle, materials and initial schema.
- Plugins are React components and independent of the Vue version. The Vue
  source panel takes `{ vue: 2 | 3 }` and loads the matching Vue and
  vue-router declarations into its editor. It defaults to the Composition
  API: `setup()` runs as `lifeCycles.setup`, and its returned bindings are
  recorded in `meta.setupBindings`, which the binding dialogs and the
  expression setter of `engine-ext-vue` read next to `state` / `methods`.
- `engine-ext-vue` is the engine's setter and binding-dialog bundle
  (`window.AliLowCodeEngineExt`), adapted to Vue component metas. It is an
  IIFE build that reads React, Fusion, moment, lodash and the engine from the
  page; the designer serves it from `/runtime/engine-ext/`.
- Materials are named after their UI library
  (`@cdlab996/lowcode-materials-<library>`) and built with
  `@cdlab996/lowcode-material-builder`.
