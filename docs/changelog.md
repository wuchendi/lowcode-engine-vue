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
