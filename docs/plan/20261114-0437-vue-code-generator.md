# 20261114-0437-vue-code-generator Vue code generation (phases 1-3)

- **status**: completed
- **createdAt**: 2026-11-14 04:37
- **approvedAt**: 2026-11-14 04:48
- **relatedTask**: 20261114-0435-vue-code-generator

## Context

- Upstream: `@alilc/lowcode-code-generator` 1.1.7 (official, MIT) has only
  `icejs`, `icejs3` and `rax-app` solutions (React / Rax). Its plugins and IR
  chunks are React-oriented; it is one bundle with prettier 2, babel 7.12
  and Node-only dependencies (`fs-extra`, `node-fetch`, `mock-fs`, `chalk`)
  shipped as runtime dependencies, run in the browser through `browser` field
  replacements or its standalone worker. The browser plugin
  `@alilc/lowcode-plugin-code-generator` is React-only, sources on Alibaba's
  internal GitLab. KNXCloud, cdLab996 and the GitHub community have no Vue
  code generation for the engine.
- What a page has here:
  - `meta.originCode`: the source panel's code, a complete Vue component
    module (`defineComponent({ setup() { ... } })` or Options API, with
    imports); pages without it have `state` / `methods` / `lifeCycles`;
  - the node tree: `componentName`, `props` (literals, `JSExpression`,
    `JSFunction`, `JSSlot`, i18n), `children`, `condition`, `loop` /
    `loopArgs`, `css` on the root;
  - expressions use `this.<name>` (instance scope).
- Materials: metas carry `npm: { package: <material package>, exportName:
  <material export> }` (e.g. `@cdlab996/lowcode-materials-vant4` /
  `VanButton`); the designer resolves them through the material's IIFE global,
  so they must stay. Material entries are re-exports of the UI library plus a
  style import (`export { Button as VanButton } from 'vant'`,
  `import 'vant/lib/index.css'`); the library version is in the material's
  `dependencies`. Generated code needs the library import, not the material.
- Runtime-only context: `this.dataSourceMap`, `this.utils`, `this.i18n`,
  `this.constants` exist only under the renderer.

## Proposal

1. Material builder: also write a code generation manifest into
   `assets.json` per package, read statically from the entry: for each
   re-exported component, the library package and export name; the style
   imports; the library versions (from `dependencies`). Unit tested; rebuild
   the materials.
2. New `packages/tools/code-generator` (`@cdlab996/lowcode-code-generator`,
   tools release group): our own small generator, browser and Node, no
   dependency on the official one. `generateProject(schema, { vue: 3,
   assets })` returns `{ files, warnings }`:
   - `src/pages/<fileName>.vue` per page:
     - `<template>` from the node tree: component tags from the manifest,
       literal props as attributes, `JSExpression` as `:prop`, event props
       (`onX` bound to a method by the designer) as `@x`, `JSSlot` as
       `<template #name>`, `condition` as `v-if`, `loop` as `v-for`;
       `this.` is removed from template expressions;
     - `<script>`: `meta.originCode` as is (plus the component imports);
       otherwise an Options API component from `state` / `methods` /
       `lifeCycles`;
     - `<style>` from the root `css` (global, like in the designer);
   - project: `package.json` (vue, the libraries from the manifest, vite,
     `@vitejs/plugin-vue`), `vite.config.ts`, `index.html`, `src/main.ts`
     (style imports), `src/App.vue` rendering the page;
   - `warnings` lists what phase 1 does not export (runtime context
     `this.dataSourceMap` / `utils` / `i18n` / `constants`, data sources,
     inline `JSFunction` props other than method bindings, components missing
     from the manifest) instead of emitting broken code silently;
   - formatting with prettier 3 standalone (loaded on demand in the browser);
     `toZip(files)` with fflate.
     Unit tests (Vitest, tools project) on schemas covering each construct.
3. Designer plugin `packages/plugins/code-generator`
   (`@cdlab996/lowcode-plugin-code-generator`): a top bar button 出码 opens a
   dialog with the file tree, a read-only code view and the warnings, and a
   download button (zip). The designer passes `{ vue }` and the assets. Vue
   2.7 pages: the button is disabled with a note until phase 2.
4. Docs: README, design doc, package READMEs, changelog.

Verification: unit tests; `lint`, `lint:type`, tests; E2E: generate the Vue
3 sample in the designer, check the dialog, then write the files out,
`pnpm install` and `vite build` the generated project, serve it and check it
renders the same components and texts as the designer canvas.

### Additions for all phases (scope extended by the user)

- Component registration: the page script is the source panel's
  `defineComponent({...})` (or a generated one); the generator inserts the
  component imports and a `components` option into it (acorn + magic-string),
  for Vue 2.7 and Vue 3. The template is wrapped in one root element (Vue 2
  needs a single root).
- The manifest is read from the package's `codegen` field when the assets
  have it, otherwise from the `assets.json` next to the package script
  (`/materials/<name>/assets.json` in the designer; the same relative place
  on a CDN).

### Phase 2: Vue 2.7

- Project template: `vue` 2.7, `@vitejs/plugin-vue2` + `esbuild` with the
  `pnpm-workspace.yaml` of the create-lowcode Vue 2 template, `new Vue({
  render })` entry; vue-router 3 when there are several pages.
- Same page generation (Vue 2.7 supports `defineComponent`, `setup()`,
  `#slot` syntax); the designer button works for both versions.

### Phase 3: runtime context, data sources, i18n, pages

- A small standalone runtime in the generated project (`src/lowcode/`):
  - `dataSourceMap`: `fetch` items (`uri`, `method`, `params`, `headers`,
    `isInit`, `dataHandler`, `errorHandler`, `willFetch`, `shouldFetch`),
    each with `load()`, `status`, `data`, `error`; other types are reported;
  - `utils` from `schema.utils` (`npm` imports, `function` sources),
    `constants` from `schema.constants`, `i18n(key, params)` with the
    messages of `schema.i18n`;
  - each page gets them through a mixin (`this.dataSourceMap`, `this.utils`,
    ... in Options API code and in the template); inside `setup()` the code's
    `this.<context>` is rewritten to the page's `lowcode` object; `isInit`
    sources load on mount.
- i18n props (`{ type: 'i18n', key }`) become `i18n('key')` bindings.
- Several roots: `Page` roots become `src/pages/<fileName>.vue` with a
  router (`/<fileName>`, the first also `/`); `Block` / `Component` roots
  become `src/components/<fileName>.vue`, imported where used.

## Risks

- Template fidelity: the renderer accepts any prop value; phase 1 covers the
  constructs above and reports the rest as warnings.
- `originCode` used as is relies on the source panel (imports from `vue`,
  `defineComponent`); runtime context use in it is reported, not rewritten.
- New dependencies: prettier 3 (large, loaded on demand), fflate.
- Materials not built with our builder have no manifest: their components
  are reported.

## Scope

material-builder (manifest + tests), materials rebuild (no source change),
new `packages/tools/code-generator` and `packages/plugins/code-generator`,
designer registration, docs. All three phases are in this plan.

## Alternatives

- Build on `@alilc/lowcode-code-generator`: reuses its schema parser,
  project builder and zip publisher, but every Vue plugin is new anyway and
  it brings prettier 2 / babel 7.12 / Node polyfills into the designer;
  rejected.
- Hard-code the import map of our three Vue 3 libraries in the generator
  instead of a builder manifest: smaller, but wrong for any other material;
  rejected.
- `<script setup>` output (rewrite `setup()` bodies): nicer code, but a
  rewrite of user code; can follow once the export is in place.

## Annotations

- 2026-11-14: the user approved the plan and asked for all three phases at once; phases 2 and 3 were added above.
- 2026-11-14: implementation notes. The designer button works for both
  versions (the phase 1 note about disabling it for Vue 2.7 is superseded).
  Generated projects are plain JavaScript (`vite.config.js`, `src/main.js`).
  Runtime context use in `setup()` is rewritten, not only reported.
  Found by building the generated projects:
  - root file names can be route paths (`/`) and are turned into file names;
  - function handlers become arrow functions, since Vue 3's template compiler
    rejects function expressions once they span several lines;
  - less styles get the `~` alias and `javascriptEnabled`;
  - every project gets `strictDepBuilds: false`, since pnpm 11 fails on the
    unapproved build scripts of UI library dependencies;
  - dependency ranges are floors (`^5.0.0`), since pnpm's
    `minimumReleaseAge` rejects a range only a one-day-old release satisfies.
- 2026-11-14: follow-up approved by the user. Data sources with relative
  URLs get a warning. `v-loading` is registered in the generated app from
  Element UI (`element-ui/lib/loading`, unwrapped from Node's CommonJS
  interop) or Element Plus, instead of being reported.
