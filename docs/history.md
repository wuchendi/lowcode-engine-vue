# History: where this repository comes from

This repository replaces eight older ones. This page records what they
were, what was wrong with them and what changed in response, so that the
decisions in the code have their reasons next to them. The long-form
write-up (Chinese) is at
<https://wcd.pages.dev/posts/lowcode-engine-vue/>; what to change when
coming from the old packages is in [migration.md](./migration.md).

## Lineage

- **KNXCloud/lowcode-engine-vue** is the community Vue 3 renderer and
  simulator for [Alibaba LowCode Engine](https://github.com/alibaba/lowcode-engine).
  Everything here descends from it.
- **March 2023**: `cdLab996/lowcode-engine-vue2.7` forks it and ports the
  renderer to Vue 2.7, for applications that cannot leave Vue 2. Four
  packages (`@cdlab996/lowcode-hooks2.7`, `lowcode-utils2.7`,
  `lowcode-vue-renderer2.7`, `lowcode-vue-simulator-renderer2.7`) reach
  1.0.0 in July 2023. Development then stops for three years.
- **2023**: the surrounding pieces are forked or written the same way, one
  repository each: the setters (`lowcode-engine-ext-vue`), the designer
  plugins (`lowcode-engine-plugins`), the material tooling
  (`lowcode-engine-tools2.7`, `vite-plugin-lib-types2.7`), two material
  repositories (`lowcode-engine-materials-vue`,
  `lowcode-engine-materials-vue2.7`) and a demo designer
  (`lowcode-engine-demo-vue`). The Vue 3 demo uses the `@knxcloud` renderer
  packages directly.
- **November 2026**: an audit of the Vue 2.7 renderer, then this
  repository: the Vue 2.7 and Vue 3 renderers become one core with two
  adapters, and the plugins, materials, tools and designer move in next to
  it.

The old repositories and their npm packages remain available, frozen at
their last versions, with a notice pointing to this repository.

## What was wrong

### The Vue 2.7 renderer was a Vue 3 renderer

The port kept Vue 3 semantics that Vue 2 does not have. An audit against the
Vue 2.7 source (November 2026) recorded 31 findings, 11 of them reproduced
under jsdom. The ones that explain the most:

| Finding                                       | What happened                                                                                         |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Events on native tags never fired             | `onClick` on a `button` was put into component events; Vue 2 has no fallthrough to the native element |
| Loops wrapped their items in a `div`          | Vue 2 has no fragments; the wrapper broke `el-col`, `tr`, `option` layouts                            |
| The default slot got no scope arguments       | scoped default slots (`el-table-column`) rendered `undefined`                                         |
| `this` was replaced textually                 | the expression `"click this now"` became `click __self now`                                           |
| Every render compiled every expression        | `new Function` per evaluation, no cache                                                               |
| `v-model` was hard-coded to `value` + `input` | the component's `model` option was ignored                                                            |
| Vue 2 lifecycle names were ignored            | `beforeDestroy`, `destroyed`, `created` silently did nothing                                          |
| Removing a slot did not re-render             | `delete` on a reactive object is not tracked in Vue 2                                                 |
| Routes of deleted documents stayed            | vue-router 3 has no `removeRoute`                                                                     |
| Instances were tracked by `_isMounted`        | a looped node kept only its last instance, and destroyed ones were never dropped                      |
| Only pages rendered                           | no Block or Component renderer, `createComponent` returned `null`                                     |

Measured on the same schema (a loop of 1000 rows, two nodes and three
expressions per row, Vue 2.7.16 under jsdom), the published 1.0.0 against
the core here:

|                                    | 1.0.0 (2023) | now                          |
| ---------------------------------- | ------------ | ---------------------------- |
| expression compilations per mount  | 3001         | 4 on the first mount, then 0 |
| expression compilations per update | 3000         | 0                            |
| component instances                | 3006         | 2004                         |
| mount, median                      | 149 ms       | 84 ms                        |
| update, median                     | 95 ms        | 47 ms                        |

The counts do not depend on the machine; the timings are from jsdom on
Node 24 and only indicate the shape of the difference.

There were no tests. The fixes for 30 of the findings landed in the old
repository first, each with a regression test; those tests and the fixed
code are the starting point of the core here. The last one (low-code
components and Block) is covered by the unified core.

### Two renderers drifted

With one renderer per Vue version, every feature, fix and test had to be
done twice, and was not. When they were merged, the Vue 2.7 renderer missed
the `init*` hooks of the Vue source panel (`props`, `emits`, `computed`,
`watch`, `provide`, `inject`, `setup`) and the Block and Component
renderers; the Vue 3 renderer missed the expression compiler, the
data-source fixes and most tests.

### A wrapper component around every node

Both renderers rendered each schema node through a wrapper component (`Hoc`
in design mode, `Live` otherwise, later one `Leaf`). A parent therefore saw
wrappers instead of its children: libraries reading the vnodes of
`slots.default()` (Ant Design's Select, Table, Tree) or walking `$parent` /
`$children` (Element UI's Steps, Carousel, Tabs) rendered wrong. The
workarounds were to hide ten Ant Design sub-components from the components
pane and to rewire `$parent` with a Vue 2 mixin.

### The renderer and generated code had no common definition

Code generation was added here, as a second reader of the schema. Read side
by side with the renderer it already disagreed on five points (a `children`
prop next to node children, `onUpdateXxx` events, `v-model` on a literal,
empty `JSSlot`s, the global data handler).

### Hand-written material metas

The metas were written by hand and had drifted from the libraries: group
titles in `name`, Vue 3 events in kebab-case (`onExpand-change` is never
called for `expandChange`), Vant 2 events on Vant 4, ant-design-vue 1.x
metas written for the React / 3.x API, dead documentation links.

### Eight repositories

A fix in the renderer was tested by proxying the published simulator bundle
to a local build with a browser extension. Versions were bumped per
repository, and a change across the renderer, a plugin and a material
needed three releases.

### A designer that depended on a CDN

The demo designer loaded the engine, React, Fusion, lodash, moment and
Monaco from alicdn. The Monaco there (0.31, TypeScript 4.4) could not read
Vue 3.5 typings.

## What changed in response

| Problem                    | Now                                                                                   | Details                                                    |
| -------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Vue 3 semantics on Vue 2   | a `VueAdapter` per version behind one core; the core suites run on both               | [design/unified-renderer.md](./design/unified-renderer.md) |
| Two renderers              | one core (`@cdlab996/lowcode-vue-core`), two adapter packages                         | same                                                       |
| Wrapper per node           | nodes render as their component vnodes                                                | "Rendering model" in the design note                       |
| Renderer vs generated code | one schema module, a conformance suite comparing both                                 | "Schema semantics" in the design note                      |
| Hand-written metas         | generated from the docs of the pinned library version, audited against its components | [CONTRIBUTING.md](../CONTRIBUTING.md), "Material metas"    |
| Eight repositories         | one workspace, one version, one release                                               | [architecture.md](./architecture.md)                       |
| CDN                        | the designer serves everything itself; an E2E check fails on any third-party request  | [apps/designer/README.md](../apps/designer/README.md)      |

## What is new

Most packages here did not exist before, or were rewritten:

| Package                                                                                           | Origin                                                                                                  |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `@cdlab996/lowcode-vue-core`, `lowcode-vue2`, `lowcode-vue3`                                      | new: the merged renderer, reorganized as a core and two adapters                                        |
| `@cdlab996/lowcode-code-generator`, `lowcode-plugin-code-generator`                               | new: no Vue code generation existed for the engine                                                      |
| `@cdlab996/lowcode-material-builder`                                                              | new: a Vite plugin and CLI replacing the Vue CLI plugin                                                 |
| `@cdlab996/create-lowcode`                                                                        | rewritten: Vue 2.7 and Vue 3 templates on the new builder                                               |
| `@cdlab996/lowcode-materials-*`                                                                   | regenerated: 565 metas, snippets and screenshots                                                        |
| `@cdlab996/lowcode-plugin-vue-code-editor`                                                        | kept and reworked: `setup()` by default, typings for both Vue versions, bindings exposed to the setters |
| `@cdlab996/lowcode-engine-ext-vue`, `lowcode-plugin-directive-loading`, `-manual`, `-set-doc-url` | kept: locale support and tests added                                                                    |

Capabilities that were not there:

- Code generation: a Vite + Vue 2.7 / Vue 3 project from a schema, in the
  designer and from the `lowcode-codegen` CLI, with warnings for what cannot
  be exported.
- The Vue source panel on Vue 2.7, and `props`, `emits`, `computed`,
  `watch`, `provide`, `inject` and `setup` on both versions.
- Low-code components and blocks on Vue 2.7; low-code components with real
  props and emits on both.
- In the designer: several pages with route paths, low-code components,
  blocks, materials added at runtime by URL, a canvas locale for the project
  messages, project export / import / reset, JSONP data sources.
- A material pipeline: scaffold, builder (with a code generation manifest in
  `assets.json`), metas generated from the library docs.
- Tests: 491 unit tests, the renderer / generator conformance suite,
  Playwright checks rendering every material, publint.
- A designer without third-party requests, deployable as a static site.

## What was kept

- The schema conventions inherited from the React engine and from upstream:
  `this.state.x` / `this.props.x` read as `this.x`, the React lifecycle
  names map to Vue hooks, `onUpdateXxx` is accepted for `onUpdate:xxx`.
- Flat, Vue 3 style props inside the renderer. Upstream's idea of writing
  the renderer once in Vue 3 terms and converting for Vue 2 survives as the
  adapter's `h`.
- The shape of the renderer: `Renderer` picks a container renderer, a root
  scope builds `this`, a simulator maps instances to nodes.
- `window.LCVueRenderer` as the browser global.
- The reproductions of the audit, as regression tests.

## Credits

[KNXCloud/lowcode-engine-vue](https://github.com/KNXCloud/lowcode-engine-vue)
for the renderer and simulator this work started from, and
[Alibaba LowCode Engine](https://github.com/alibaba/lowcode-engine) and its
plugins for everything around it.
