# @cdlab996/lowcode-vue-core

Vue-version independent core of the LowCode Engine renderer and designer
simulator. Applications install `@cdlab996/lowcode-vue2` or
`@cdlab996/lowcode-vue3`: both depend on this package and re-export its API
with their adapter installed (importing them calls `setAdapter()`). The code
generator depends on its `./schema` entry.

Use the core directly only to share code between the two Vue versions (a
library written against the renderer API) or for the schema rules; import a
distribution first so an adapter is set.

```bash
pnpm add @cdlab996/lowcode-vue3   # or @cdlab996/lowcode-vue2
```

Inside the repository the package exports its TypeScript sources (tests,
type-checks and `pnpm dev` use them directly); `publishConfig` points the
published package at the tsdown build in `dist`.

## Entries

| Entry             | Content                                                                   |
| ----------------- | ------------------------------------------------------------------------- |
| `.`               | `./runtime` plus the designer simulator (`createSimulatorRenderer`)       |
| `./runtime`       | adapter, renderer context, renderer, shared helpers                       |
| `./schema`        | how a node schema is read; shared with the code generator (no Vue import) |
| `./designer`      | `setupDesignerEnvironment(project, { vue })` for the designer page        |
| `./simulator.css` | canvas styles                                                             |

`vue` (`^2.7.16 || ^3.5.0`) is an optional peer dependency: `./schema` and
`./designer` do not import it.

## Layout

```text
src/
  adapter.ts        VueAdapter: the per-version operations (h, text, mount,
                    set/del, refs, model, directives, unmountedHook, route
                    guards); set by
                    the vue2 / vue3 packages with setAdapter()
  context/          renderer context (design mode, components, getNode)
  renderer/
    renderer.ts     <Renderer>: picks the container renderer of the schema
    renderers/      Page, Block and Component container renderers
    use.ts          node rendering (renderComp, props, slots, refs)
    leaf.ts         node state: split props / slots, designer subscriptions
    root-scope/     `this` of a schema: state, methods, lifecycle, setup()
    data-source/    data sources and the built-in fetch and jsonp handlers
  shared/
    schema.ts       splitNodeSchema, event keys, v-model, loop arguments,
                    global data handler
    ...             expressions, assets, i18n, guards
  simulator/        designer canvas: document instances, node lookup,
                    builtin components
```

## Rendering model

- Every node renders as its component's vnode (`h(comp, props, slots)`):
  there is no wrapper component, so a component sees its children's vnodes
  and instances (libraries reading `slots.default()` or `$children` work).
- Loops render their items as sibling vnodes; the condition is evaluated
  before the loop, in the outer scope.
- Design mode: the node state comes from a store subscribed to the designer
  node (`node.onPropChange` / `onChildrenChange`); it is read where the
  node's vnode is created, so a change re-renders the node's container.
  Instances are reported to the simulator through stable `ref` and
  unmount-hook props.
- Vue 2: default slot content without slot props is passed as children (as
  templates do), so `$slots.default` holds the rendered vnodes. Slots with
  params are marked with `markScopedSlot`.

## Schema semantics

`./schema` holds the rules both the renderer and the code generator follow
(children prop vs node children, `JSSlot` props, `onUpdateXxx` events,
`v-model[:arg]`, loop arguments, the global `dataHandler`).
`tests/conformance` renders fixtures with the renderer and with the
generated templates and runtime, on both Vue versions, and compares the
HTML, the method calls and the data source requests: change a rule in
`./schema` and both sides follow.

## Tests

The suites in `tests/` run twice, once per Vue version (`vitest.config.ts`
at the repository root: projects `vue2` and `vue3`), with the adapter of
that version installed (`tests/setup`).

```bash
pnpm exec vitest run --project vue2 --project vue3
```

`tests/helpers/mount-renderer.ts` mounts a `Renderer` (live or design mode)
and builds test components that work on both versions.

## License

[MIT](https://github.com/wuchendi/lowcode-engine-vue/blob/main/LICENSE)
