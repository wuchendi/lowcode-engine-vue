# Architecture

What the packages are and how a schema flows through them. Details:
[design/unified-renderer.md](./design/unified-renderer.md) (renderer core and
adapter), the README of each package, [changelog.md](./changelog.md)
(decisions and pitfalls).

## Packages

```
packages/renderer   core + the Vue 2.7 / Vue 3 distributions
packages/plugins    designer plugins and the engine-ext setters (React)
packages/materials  six component-library materials
packages/tools      code generator, material builder, material scaffold
packages/tsconfig   shared tsconfig presets (private): base / vue / react / node
apps/designer       one designer for both Vue versions (?vue=2|3)
```

```
@cdlab996/lowcode-vue-core            renderer, simulator, schema rules
├─ @cdlab996/lowcode-vue2             Vue 2.7 adapter
├─ @cdlab996/lowcode-vue3             Vue 3 adapter
└─ @cdlab996/lowcode-code-generator   core/schema only
   └─ @cdlab996/lowcode-plugin-code-generator
```

Nothing else depends on another package of the repository at runtime: the
other plugins, the materials, the material builder and the scaffold stand
alone (materials are built with the material builder, a dev dependency).
Packages depend on each other with `workspace:*`; only the UMD bundles inline
the core. Every public package is released under one version.

## One designer, two Vue versions

LowCode Engine is a React application. Its canvas is an iframe that loads a
_simulator renderer_ bundle, and that bundle decides which framework renders
the schema. The designer page is therefore the same for both Vue versions;
`?vue=2|3` (`apps/designer/src/version.ts`) only selects what the iframe
loads and where the project is stored:

```
designer page (React 16, Fusion, engine, plugins, engine-ext setters)
│  setupDesignerEnvironment(project, { vue })   -> the Vue runtime URL
│  init({ simulatorUrl: [simulator.js, simulator.css] })
│  material.setAssets(assets-vue{2,3}.json)     -> material scripts and metas
▼
canvas iframe
   /runtime/vue{2,3}/vue.js          window.Vue
   /runtime/vue{2,3}/simulator.js    lowcode-vue{2,3} simulator.umd.js (core inlined)
   /materials/<name>/index.js        window[library] of each material
```

- The simulator bundle installs `window.SimulatorRenderer`; the engine hands
  it the simulator host, and the core renders each document of the project
  as a route of an in-memory router.
- Design-mode updates go from the engine's node model to the renderer through
  node subscriptions, and component instances go back through
  `onCompGetCtx` (see "Rendering model" in the design note).
- The preview page loads `vue.js` and `renderer.js` (`renderer.umd.js`, no
  simulator, no vue-router) and renders the saved schema.
- Plugins never import Vue. The ones that depend on the version take it as an
  option (`{ vue: 2 | 3 }`: the source panel's typings, the generated
  project).

## One core, two adapters

The core is written against the Composition API that Vue 2.7 and Vue 3
share and calls the `VueAdapter` (`core/src/adapter.ts`) for the rest:
creating vnodes from Vue 3 style flat props, reactive `set` / `del`,
`v-model` conventions, instance internals, mounting and the router.
`@cdlab996/lowcode-vue2` / `@cdlab996/lowcode-vue3` implement it and call
`setAdapter()` when imported. The adapter is module state of the core, which
is why an application must have exactly one core (a published package, not
inlined into the distributions).

The core suites run twice, once per Vue version.

## Schema: one reading, two consumers

```
schema ──► renderer (canvas, preview)            what the designer shows
       └─► code generator (Vite + Vue project)   what the user downloads
```

Both read a node schema through `@cdlab996/lowcode-vue-core/schema`
(children, `JSSlot`, events, `v-model`, loop arguments, the global data
handler), and `core/tests/conformance` compares what they render. The
generated project does not depend on the renderer: templates are plain Vue
SFCs, and data sources, `utils`, `constants` and `i18n` come from a small
runtime emitted into `src/lowcode/`. The designer's 出码 button
(`@cdlab996/lowcode-plugin-code-generator`) previews and downloads it.

Component imports of generated code come from the `codegen` manifest the
material builder writes into each material's `assets.json` (component ->
export of the library, styles, dependency versions).

## Materials

```
library docs (pinned version) ─► scripts/materials ─► src/lowcode/*/meta.ts, src/index.ts
                                                       │  lowcode-material build
                                                       ▼
                                     dist/index.js  dist/meta.js  dist/assets.json
```

Metas are generated from the docs of the library version each material
pins, checked against the components of that version by the `materials`
tests, and rendered one by one in the E2E checks. Third-party materials use
the same builder (`@cdlab996/create-lowcode` scaffolds a project) and are
added to the designer at runtime by the URL of their `assets.json`.

## Designer app

A static site with no third-party requests: the engine, React, Fusion,
lodash, moment and Monaco are served from their npm packages under
`/runtime/`, Monaco loads when the first editor opens. Projects (pages,
low-code components, runtime materials) are saved through `ProjectStorage`
(`localStorage` per Vue version by default). See
[apps/designer/README.md](../apps/designer/README.md).
