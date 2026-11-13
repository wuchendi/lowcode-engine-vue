# Renderer and Simulator Audit — 2026-11-13

Scope: all four packages (`hooks`, `utils`, `vue-renderer`, `vue-simulator-renderer`) at
commit `5dbc13b` on `chore/modernize-tooling-vue27`, checked against Vue 2.7.16 source and
the Vue 3 implementation (now `packages/vue3`).

Status: findings R-01 to R-11 and S-01 to S-19 have since been fixed on `chore/modernize-tooling-vue27`; S-20 (low-code components and Block) is still open. The locations below refer to the audited commit.

## Summary

The code is a port of the Vue 3 renderer. Most defects come from Vue 3 semantics that were
not adapted to Vue 2: attribute/event fallthrough, fragments, scoped default slots,
deletion reactivity, lifecycle names, and DOM-to-instance bookkeeping. Several basic
capabilities do not work as a result.

Verification levels used below:

- **Reproduced** — observed by running the built renderer under jsdom.
- **Source** — established by reading the code and the Vue 2.7 source; not executed.
- **Inferred** — follows from a reproduced fact plus code reading; not executed end to end.

## Current architecture

- `vue-renderer`: `Renderer` → `PageRenderer` (`useRootScope` builds the page scope) → one
  `Hoc` (design mode) or `Live` (live mode) component per schema node, both built on
  `useLeaf`.
- `utils/Vue3Adapter.h`: converts flat Vue 3 style props into Vue 2 `VNodeData`. Every
  semantic gap funnels through it.
- `vue-simulator-renderer`: creates the Vue root and router inside the designer iframe and
  tracks which component instances belong to which node.
- `utils`, `hooks`: component/asset loading and injection keys.

## Findings

### Reproduced

| ID   | Finding                                           | Location                                                       | Observation                                                 |
| ---- | ------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------- |
| R-01 | Events on native tags never fire                  | `packages/utils/src/build-components.ts:25`                    | `onClick` on `button`: click counter stays 0                |
| R-02 | Loop wraps items in an extra `div`                | `packages/vue-renderer/src/core/hoc.ts:183`, `core/live.ts:50` | `<div><span>1</span>…</div>`                                |
| R-03 | Default slot receives no scope arguments          | `packages/vue-renderer/src/utils/Vue3Adapter.ts:127`           | named slot gets its argument, default slot gets `undefined` |
| R-04 | `this` is replaced textually in expressions       | `packages/vue-renderer/src/utils/parse.ts:60`                  | `"click this now"` becomes `click __self now`               |
| R-05 | `${a.b}` nested paths resolve to empty            | `packages/vue-renderer/src/core/use.ts:129`                    | `${top}\|${a.b}` renders `TOP\|`                            |
| R-06 | Designer-internal keys leak into the DOM          | `packages/vue-renderer/src/core/hoc.ts:87`                     | element gains `___condition___="true"`                      |
| R-07 | Live mode ignores a replaced schema               | `packages/vue-renderer/src/core/live.ts:13`                    | attribute keeps the old value                               |
| R-08 | Failed init data source is an unhandled rejection | `packages/vue-renderer/src/core/use.ts:937`                    | `unhandledRejection` captured                               |
| R-09 | `h1`–`h6` are not recognised as tags              | `packages/utils/src/build-components.ts:26`                    | regex `/^[a-z-]+$/` rejects digits                          |
| R-10 | Nil expression values render as literal text      | `packages/vue-renderer/src/core/use.ts:217`                    | text node `undefined`                                       |
| R-11 | Instance not mounted when the ref callback runs   | `packages/vue-simulator-renderer/src/simulator.ts:97`, `:127`  | `_isMounted` is `false` for all three loop instances        |

Notes:

- R-01 has two causes. The tag wrapper forwards `attrs` only, not `listeners`; and the
  adapter puts every `onXxx` into `on` (component events), while Vue 2 has no native event
  fallthrough.
- R-02 breaks layouts that depend on parent/child structure (`el-col`, `tr`, `option`).
- R-03 affects any component using a scoped default slot, such as `el-table-column`.
- R-05 sits next to a hard-coded business global, `window.WeShineProductSettings`
  (`use.ts:396`), inside the generic renderer.
- R-11 consequence (**Inferred**): `mountInstance` filters existing instances by
  `_isMounted`, so a looped node keeps only its last instance. Vue 2 also leaves
  `_isMounted` `true` after destroy, so the filter cannot detect destroyed instances.

### Source

| ID   | Finding                                                                                                                                 | Location                                                               |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| S-01 | `delete compSlots[key]` is not reactive in Vue 2; removing a slot does not re-render                                                    | `core/hoc.ts:116`, `:125`                                              |
| S-02 | Request error payload is always lost: the error thrown inside `try` is caught and replaced                                              | `data-source/request.ts:155`                                           |
| S-03 | HTTP 204 on non-DELETE throws; default JSON body is sent without `Content-Type`; timeout timer is never cleared                         | `data-source/request.ts:117-147`                                       |
| S-04 | `__newFunc(tarStr)(self)` passes `window`, not the scope                                                                                | `utils/parse.ts:67`                                                    |
| S-05 | `router.beforeEach` is registered inside `autorun`, adding one guard per document change                                                | `vue-simulator-renderer/src/simulator.ts:410`                          |
| S-06 | vue-router 3 has no `removeRoute`; routes of deleted documents remain                                                                   | `simulator.ts:426-434`                                                 |
| S-07 | Root `schema` computed has no Vue dependency and caches forever; upstream reads `timestamp.value`                                       | `simulator.ts:70`                                                      |
| S-08 | Lifecycle map lacks Vue 2 names (`beforeDestroy`, `destroyed`, `created`); they are silently ignored                                    | `core/use.ts:72`                                                       |
| S-09 | Route guards are installed by mutating constructor `options`; never removed                                                             | `core/use.ts:842-874`                                                  |
| S-10 | `v-model` hard-codes `value` + `input`; the component `model` option is ignored                                                         | `core/use.ts:481`                                                      |
| S-11 | `requestHandlersMap` is synced by the simulator but never reaches the renderer; data source `type` is ignored                           | `simulator.ts:384`, `data-source/index.ts:136`                         |
| S-12 | Dead Vue 3 code: `__vueParentComponent`, `'$' in scope`, multi-root logic in `findDOMNodes`, private-property copy in `use.ts:233`      | `comp-node.ts:40`, `utils/scope.ts:22`, `find-dom-nodes.ts`            |
| S-13 | Every render compiles every expression with `new Function`; no cache                                                                    | `utils/parse.ts:70`                                                    |
| S-14 | `Hoc` deep-clones via JSON on every prop change                                                                                         | `core/hoc.ts:42`, `:61`                                                |
| S-15 | Page CSS is injected into `head` and never removed                                                                                      | `core/use.ts:880-898`                                                  |
| S-16 | `__scope` is applied once in `setup`; later changes are ignored                                                                         | `core/use.ts:914`                                                      |
| S-17 | All props are merged into `attrs`; undeclared objects/functions become DOM attributes                                                   | `utils/Vue3Adapter.ts:119`                                             |
| S-18 | Two diverged copies of `Vue3Adapter`; simulator `isNil` means "not nil", opposite to `utils`                                            | `vue-simulator-renderer/src/utils/Vue3Adapter.ts`, `utils/check.ts`    |
| S-19 | Module-level side effects on import (simulator creation, document listeners, `createRange`)                                             | `simulator.ts:466`, `navtive-selection.ts:10`, `get-client-rects.ts:4` |
| S-20 | Only `PageRenderer` exists and `createComponent` returns `null`; low-code components and Block are unsupported (upstream supports them) | `renderers/index.ts`, `simulator.ts:326`                               |

## Recommendations

1. Replace `Vue3Adapter` with one explicit `VNodeData` normalisation layer exported by the
   renderer and reused by the simulator: every slot (default included) goes through
   `scopedSlots`; tag wrappers forward `listeners` and slots; `v-model` reads the
   component `model` option.
2. Expand loops in a functional component. Vue 2 functional components may return a VNode
   array (`create-functional-component.ts:137`), which removes the wrapper `div`.
3. Extract an expression compiler: `compile(source)` with a cache, `fn.call(scope)` for
   `this`, a configurable error handler. Turn the business template replacement into an
   injectable prop transformer.
4. Merge `Hoc` and `Live` into one leaf component plus an optional design-mode
   subscription. Treat the schema as reactive input; handle designer-internal keys in one
   reducer so they never reach component props.
5. Split `useRootScope` into state, methods, lifecycle, CSS and data source modules, each
   owning its cleanup and its reaction to schema changes.
6. Make the data source an engine keyed by `type`, wired to `requestHandlersMap`, with
   failures contained.
7. Clean up the simulator: defer side effects to explicit initialisation, track instances
   with `_isDestroyed`, drop multi-root logic, register the guard once, make the root
   schema depend on `timestamp`.
8. Add tests before refactoring. The renderer runs under jsdom outside the designer, so
   the reproduced findings can become regression tests (Vitest + jsdom).

## Reproduction

Each reproduced finding was observed by mounting `Renderer` from the built
`packages/vue-renderer/dist/index.mjs` under jsdom with components produced by
`buildComponents` from `packages/utils`.

- R-01: `button` node with `onClick` JSFunction incrementing a global; dispatch `click`.
- R-02: `span` node with `loop: [1, 2, 3]`; inspect `outerHTML`.
- R-03: component calling `$scopedSlots.default({ name })` and `$scopedSlots.cell({ name })`,
  with JSSlot props `default` and `cell` (`params: ['scope']`) rendering `this.scope.name`.
- R-04: JSExpression `"click this now"` bound to an attribute.
- R-05: `window.WeShineProductSettings = { a: { b: 'NESTED' }, top: 'TOP' }`, string prop
  `'${top}|${a.b}'`.
- R-06: design mode with a stub node; invoke the captured `onPropChange` listener with
  `{ key: '___condition___', prop: { path: ['___condition___'] }, newValue: true }`.
- R-07: replace the `schema` prop with a new object changing one child prop.
- R-08: data source with `isInit: true` and a rejecting `fetch`; listen for
  `unhandledRejection`.
- R-09: `buildComponents` with an `h1` entry; the key is absent from the result.
- R-10: R-03 default slot output.
- R-11: design mode loop; record `inst._isMounted` inside `onCompGetCtx`.

The simulator cannot run without the designer host, so its findings are Source or
Inferred.
