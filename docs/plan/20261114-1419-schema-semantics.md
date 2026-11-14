# 20261114-1419-schema-semantics Shared schema semantics for the renderer and the code generator

- **status**: completed
- **createdAt**: 2026-11-14 14:19
- **approvedAt**: 2026-11-14
- **relatedTask**: 20261114-1419-schema-semantics

## Context

Audit finding (repository audit of commit d422dd4): Conditions, loops, slots, events and data sources are implemented twice (renderer and code generator) without a conformance test.

## Findings

The renderer (`packages/renderer/core/src/renderer/{leaf,use}.ts`,
`data-source/`) and the code generator (`packages/tools/code-generator/src/
{template,script,runtime}.ts`) each interpret the schema. Read side by side,
they already disagree:

| Schema feature                          | Renderer                                 | Code generator                                             |
| --------------------------------------- | ---------------------------------------- | ---------------------------------------------------------- |
| `children` prop and node `children`     | the prop wins (`splitSchema`)            | node `children` wins (`schema.children ?? props.children`) |
| `JSSlot` without `value`                | slot not passed (live mode)              | `<template #name />` (an empty slot is passed)             |
| `onUpdateXxx` events                    | normalized to `onUpdate:xxx`             | `@updateXxx` (Vue 3 emits `update:xxx`: not called)        |
| `v-model` plus an `onUpdate...` handler | both handlers run (merged into an array) | not covered by a test                                      |
| `v-model` with a literal value          | plain prop                               | `v-model="'x'"` (Vue compile error)                        |
| Global `dataSource.dataHandler`         | applied to items without their own       | ignored                                                    |
| Loop key                                | `<id>-<index>`                           | `:key="index"`                                             |

Condition before loop (outer scope), `loopArgs` defaults, slot params (Vue
passes one slot argument: both bind it to `params[0]`), `className` ->
`class`, `__` keys skipped and i18n values agree.

## Proposal

1. **Conformance suite first** (`packages/tools/code-generator/tests/
   conformance/`): fixture schemas, one per feature row above plus the
   agreeing ones (condition, loop, loop + condition, nested slots with
   params, events with extra params, v-model, refs, i18n, data source with
   `isInit` / handlers against a mocked `fetch`). Each fixture is
   - rendered by the Vue 3 renderer in live mode (jsdom), and
   - generated, compiled with `vue/compiler-sfc` and mounted with the
     generated page context,
     then the normalized HTML (and, for events and data sources, recorded
     calls) must match. The Vue 2.7 renderer and generator run the same
     fixtures. The table above becomes failing tests.
2. **Shared semantics module**: the pure decisions both sides make move to
   `packages/renderer/core/src/shared/schema.ts`, exported as
   `@cdlab996/lowcode-vue-core/schema` (no `vue` import):
   `splitNodeSchema(schema)` (props / slots / default children precedence,
   `className`, `__` keys, empty slots), `normalizeEventName(key)`,
   `modelBinding(key, value)` (`v-model[:arg]` -> value prop + update
   event), `loopArgsOf(schema)`, `mergeDataSourceConfig(list,
   dataHandler)`. The renderer's `splitSchema`
   / `processProp` and the generator's `TemplateBuilder` call them; the
   generator emits code from their results. The code generator gets a
   dependency on `@cdlab996/lowcode-vue-core` (tools then needs renderer on
   npm first: `scripts/check-release-deps.mjs` enforces it).
3. **Fix each mismatch** in the direction of the renderer (what the
   designer shows is the reference), except the loop key, which stays
   `index` in generated code (ids are designer data) and is excluded from
   the HTML comparison.
4. The generated data source runtime (`runtime.ts`, emitted as a string)
   stays separate code (it ships inside generated apps); the conformance
   suite covers it.

## Risks

- Generated templates change for projects using the mismatched features
  (intended: they did not match the canvas).
- The conformance harness mounts generated SFCs in jsdom: material
  components are replaced by small stub components (both sides use the
  same stubs) so the suite checks schema semantics, not libraries.

## Scope

`packages/renderer/core` (new `shared/schema.ts`, `leaf.ts` / `use.ts`
using it, subpath export), `packages/tools/code-generator` (template /
script using it, dependency, conformance tests), vitest config.

## Alternatives

- Conformance tests only, two implementations kept: catches drift but
  every rule is still written twice.
- Generating code by serializing the renderer's runtime structures: not
  readable Vue code.

## Annotations

- 2026-11-14: the mismatches of the table (except the loop key) are fixed
  in the code generator directly (`tests/semantics.test.ts`); the shared
  module and the conformance suite remain.
- Implemented: `@cdlab996/lowcode-vue-core/schema` (`splitNodeSchema`,
  `isNodeData`, `normalizeEventKey` / `eventNameOf`, `modelOf`,
  `loopArgsOf`, `withGlobalDataHandler`) used by the renderer (`leaf.ts`,
  `use.ts`, data sources) and the code generator (bundled by tsdown, a dev
  dependency). A `children` JSSlot prop is the default slot on both sides.
- Conformance suite `packages/renderer/core/tests/conformance` (runs on Vue
  2.7 and Vue 3): 12 node fixtures (HTML before and after clicks, method
  calls) and the data sources (requests and loaded data, generated runtime
  evaluated as written). It found and fixed:
  - generated templates put text children on separate lines (rendered as
    spaces);
  - Vue 2 `v-model:arg` (now `:arg.sync`);
  - the renderer's data sources without `method` sent GET requests with a
    body (now GET by default);
  - the generated runtime failed on 204 responses and on non-JSON error
    bodies.
