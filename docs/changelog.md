# Changelog

## 2026-11-13 23:58 [progress]

Initialized PMA tracking (`docs/task`, `docs/plan`, `docs/architecture.md`, this changelog).

## 2026-11-14 00:11 [progress]

20261113-2358-create-lowcode-scaffold (plan 20261114-0001-create-lowcode-scaffold):
added `@cdlab996/create-lowcode` (`packages/tools/create-lowcode`), a
scaffold for Vue 2.7 / Vue 3 material projects built with the material
builder, replacing the removed Vue CLI based `create-lowcode2.7`. The
material builder now also maps `vue/dist/vue.runtime.esm.js` (the alias of
`@vitejs/plugin-vue2`) to `window.Vue`. Verified: unit tests, generated
projects install / lint / type-check / build from packed tarballs, and their
`XButton` renders in the designer for both Vue versions.

## 2026-11-14 00:11 [decision]

Generated projects pin TypeScript 5.9: `vue-tsc` 3.3 does not run on
TypeScript 7. Vue 2.7 projects use `@vitejs/plugin-vue2` 2.3.4 outside its
declared Vite range (builds with Vite 8, needs esbuild); the template allows
esbuild's install script and the peer range in `pnpm-workspace.yaml`.

## 2026-11-14 00:11 [pitfall]

`material.loadIncrementalAssets()` fails: the Vue simulator renderer has
no `load`. Tracked as 20261114-0009-simulator-incremental-assets.

## 2026-11-14 01:26 [progress]

20261114-0009-simulator-incremental-assets (plan
20261114-0118-simulator-incremental-assets): the Vue simulator implements
`load` and `loadAsyncLibrary`, so `material.loadIncrementalAssets()` works;
nodes read the renderer's component map at render time, so a node rendered
before its component was available updates once the map changes. Verified by
tests on both Vue versions and in the designer with a create-lowcode
material.

## 2026-11-14 01:26 [progress]

Added 20261114-0117-dependency-security-alerts: Dependabot security updates
fail (transitive dependencies pinned by parents; Vue 2 alerts have no patched
release).

## 2026-11-14 03:01 [progress]

20261114-0208-dev-watch (plan 20261114-0209-dev-watch): `pnpm dev`
(`scripts/dev.mjs`) runs the designer as a development build in watch mode
served by `vite preview` through nsl, plus watch builds of the renderer UMD
bundles; `--watch <names>` adds materials, engine-ext-vue or vue-code-editor.
Pages reload after each written build.

## 2026-11-14 03:01 [pitfall]

The designer's Vite dev server does not work with the CDN globals
(`optimizeDeps.exclude` drops subpaths; no CJS interop for the global
modules outside pre-bundling). Development uses the designer build instead.

## 2026-11-14 03:31 [progress]

20261114-0320-type-check-coverage (plan 20261114-0320-type-check-coverage):
`lint:type` now checks tests and build configs (renderer per Vue version
with the test module mapping, plugins, tools, root `tsconfig.node.json`);
the errors it found are fixed by typing (no `any` / `@ts-expect-error`),
Biome warnings are cleared, and the leftover `backup` directories of
element-ui / vant2 and `meta copy.ts` of antd-vue1 are deleted.

## 2026-11-14 03:31 [pitfall]

The core was type-checked against Vue 3 only: it resolves `vue` to its own
Vue 3 dev dependency, also through the Vue 2 distribution. The renderer
tsconfigs now map `vue` per version.

## 2026-11-14 03:39 [progress]

20261114-0334-tsconfig-package (plan 20261114-0334-tsconfig-package): added
`packages/tsconfig` (`@cdlab996/lowcode-tsconfig`, private, config only),
modelled on the projects monorepo's `@cdlab/tsconfig`: `base`, `vue`,
`react` and `node` presets. Every workspace tsconfig extends a preset instead
of the root file by relative path; effective compiler options and checked
files are unchanged.

## 2026-11-14 03:54 [progress]

20261114-0346-vue-version-switch: the designer top bar has a Vue 2.7 / Vue 3
switch (segmented buttons next to the logo); it saves the current schema and
reloads with the other `?vue=`.

## 2026-11-14 04:13 [progress]

20261114-0402-composition-api-source (plan 20261114-0403-composition-api-source):
the source panel defaults to the Composition API: new pages start with
`setup()`, the bindings it returns are recorded in `meta.setupBindings` and
listed by the variable and event binding dialogs and the expression setter,
event handlers created from the designer go into `setup()` and its returned
object, and the sample schemas use `setup()`. Options API pages keep
working. Fixed the `emits` fall-through into `methods` in the parser.

## 2026-11-14 05:30 [progress]

20261114-0435-vue-code-generator (plan 20261114-0437-vue-code-generator):
Vue code generation. `@cdlab996/lowcode-code-generator`
(`packages/tools/code-generator`) turns a project schema into a Vite + Vue
2.7 / Vue 3 project: a file per page and block, router for several pages,
the source panel's code as the script, and a small runtime for data sources,
`utils`, `constants` and i18n. The material builder writes a `codegen`
manifest (component exports, styles, versions) into `assets.json`. The
designer's 出码 button (`@cdlab996/lowcode-plugin-code-generator`) previews
the files and the warnings and downloads a zip. Verified: unit tests; E2E in
the designer for both versions; the downloaded projects and a multi-page
fixture (data source, i18n, utils, Options API page) install, build and
render like the canvas in both versions.

## 2026-11-14 05:30 [pitfall]

Generated projects: pnpm 11 rejects ranges only a release from the last day
satisfies (`minimumReleaseAge`, e.g. `vue-router@^5.5.1` the day after its
release) and fails on unapproved dependency build scripts (core-js); the
generator writes range floors and `strictDepBuilds: false`. Vue 3's template
compiler rejects multi-line `function () {}` handlers; they become arrow
functions.

## 2026-11-14 06:00 [progress]

20261114-0435-vue-code-generator follow-up: code generation warns about data
sources with URLs relative to the designer (the sample's `/mock/info.json`),
and registers `v-loading` in the generated app from Element UI (Vue 2.7) or
Element Plus (Vue 3). Verified in the browser for both versions (build and
dev).

## 2026-11-14 06:00 [pitfall]

Generated projects are `"type": "module"`, so Vite follows Node's interop: a
default import of a CommonJS module (`element-ui/lib/loading`) is its
`module.exports`, with the ES exports on `.default`.
