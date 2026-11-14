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

## 2026-11-14 06:30 [progress]

20261114-0547-page-management (plan 20261114-0548-page-management): the
designer manages several pages. A 页面 panel adds (route path, validated),
switches and deletes pages; every page is loaded and saved; the preview
renders the current page (`?page=`) with links to the others; the source
panel follows the current page. Verified by unit tests and an E2E on both Vue
versions (add, edit, switch, save, reload, preview, code generation, delete).

## 2026-11-14 06:30 [pitfall]

The official data source pane and schema pane assume one page: they read
`componentsTree[0]` and import the whole project, so with several pages they
edit the first page and the schema pane deletes the others. The designer
registers them with a project scoped to the current page. The source panel
read the page once on mount and saved it into whatever page was current.

## 2026-11-14 06:55 [progress]

20261114-0632-codegen-cli (plan 20261114-0633-codegen-cli): `lowcode-codegen`
in `@cdlab996/lowcode-code-generator` generates a project from a project or
root schema file into a directory or a zip, resolving the material manifests
from an assets JSON (`--base` for relative package URLs). `materialPackages`
moved from the designer plugin into the generator; components missing from
`componentsMap` are found by name in the manifests. Verified by unit tests
and by running it on the designer assets (both versions) and building the
output.

## 2026-11-14 07:10 [progress]

20261114-0632-designer-locale (plan 20261114-0633-designer-locale): the
designer switches between Chinese and English (`@alilc/lowcode-plugin-zh-en`).
The designer app, the code generator, vue-code-editor, set-doc-url,
directive-loading, manual and engine-ext-vue (setters, variable and event
binding dialogs) take their texts from the engine locale. Material titles are
not translated. Verified by a locale-file test (same keys, English without
Chinese, valid ICU) and an E2E in English on both Vue versions.

## 2026-11-14 07:10 [pitfall]

The engine's `createIntl` parses messages as ICU: an HTML tag in a message
(`<br>`) throws `UNCLOSED_TAG` when the module loads, and the designer does
not start. Fusion components keep their own Chinese defaults (dialog OK /
Cancel, empty table) unless given texts.

## 2026-11-14 07:25 [progress]

20261114-0632-blocks (plan 20261114-0633-blocks): blocks in the designer. A
node toolbar action saves the selected node tree as a named block (without
node ids, in `localStorage` per Vue version); a 区块 panel inserts a copy by
drag or click and deletes blocks. Verified by unit tests (store, id removal)
and an E2E on both Vue versions (save, click and drag insertion on another
page, reload, delete).

## 2026-11-14 07:35 [progress]

20261114-0632-lowcode-components (plan 20261114-0633-lowcode-components):
low-code components. The pages panel creates `Component` documents; each is
registered as a `devMode: 'lowCode'` component of the components pane and
refreshed when edited, so pages drop and configure it like a material
component. The renderer accepts engine-assets project schemas in the
component map and exports a runtime `lowCodeComponent` (used by the
simulator and the preview). Verified by renderer and designer unit tests and
an E2E on both Vue versions (create, use with a prop, edit, reload, preview,
code generation, build and run the generated project).

## 2026-11-14 07:35 [pitfall]

`project.exportSchema()` writes `{ devMode: 'lowCode', componentName }`
entries into `componentsMap` for every component without a package,
including `Component`, `Page` and native tags: a consumer must not take them
for schemas or imports.

## 2026-11-14 10:02 [progress]

20261114-0812-material-metas-docs (plan 20261114-0812-material-metas-docs):
the six materials cover every documented component of their library at a
pinned version (element-ui 2.15.14, vant 2.13.9, ant-design-vue 1.7.8 for
Vue 2.7; element-plus 2.14.8, vant 4.10.2, ant-design-vue 4.2.6 for Vue 3;
559 metas), generated from the versioned docs and checked by a per-material
test against the installed components. Vue and vue-router are pinned too
(catalogs, scaffold templates, generated projects). The Vue 2 renderer gives
components their real parent in `$parent` / `$children`; the material
builder and code generator handle sub-component exports.

## 2026-11-14 10:02 [pitfall]

The old metas had prop names in Chinese (name and title swapped), Vue 3
events written in kebab-case (`onExpand-change` never fires for
`expandChange`), Vant 2 events on Vant 4, dead Gitee Pages doc links, and
ant-design-vue 1.x metas written for the React / 3.x API. In the designer,
libraries that walk `$parent` (Element UI) or read child vnodes (Ant Design
Vue) see the renderer's Leaf wrapper between parent and child.

## 2026-11-14 12:20 [progress]

20261114-1022-material-screenshots (plan 20261114-1022-material-screenshots):
every material component shows a thumbnail in the components pane: rendered
from its snippet in the canvas and shipped under `screenshots/` (393 WebP,
fallback SVG for modals and sub-components). The material builder copies
`screenshots/` into the output and resolves `./` snippet screenshots against
the meta script URL. Titles no longer carry the notes in parentheses of the
doc navigation. Snippets of text components no longer show the container
placeholder.

## 2026-11-14 12:20 [pitfall]

The designer development server served runtime files other than CSS as
`text/javascript`: browsers sniff WebP and PNG but not SVG. Libraries that
read or clone the vnodes of their children (Element UI Tabs, Ant Design Vue
Tabs / Steps / Collapse) see the renderer's Leaf wrapper and render wrong in
the canvas.

## 2026-11-14 14:40 [progress]

20261114-1419-audit-fixes: Leaf is recognised by the `__lowcodeLeaf` option
in the Vue 2 parent mixin; Dependabot ignores per-target majors; releases
check that dependencies on other groups are published; the editor reads the
installed Vue 3 / vue-router 4 typings at build time and the designer
self-hosts Monaco 0.52.2; material builds copy the `.min` files when the
plain output is already minified.

## 2026-11-14 14:40 [pitfall]

The CDN Monaco 0.31 of `@alilc/lowcode-plugin-base-monaco-editor` bundles
TypeScript 4.4, which cannot read Vue 3.5 typings. Monaco workers need an
absolute `vs` path.

## 2026-11-14 15:30 [progress]

20261114-1419-repo-scripts-e2e: the material meta generator, docs fetcher
and screenshot capture live in `scripts/materials`; Playwright E2E checks
of the designer (`e2e/`, `pnpm test:e2e`) run in CI. Fixed the generator
building Element Plus ElTable from the config-provider page.

## 2026-11-14 15:30 [pitfall]

Element Plus components are registered under their unprefixed names as weak
entries; anything keyed by "main page of a component" must also look up
the prefixed export.

## 2026-11-14 16:20 [progress]

20261114-1419-designer-self-host: the designer serves the engine, React,
Fusion, its theme, lodash and moment from npm and keeps the alicdn fonts,
images and icon scripts in `public/vendor` (URLs rewritten by file name).
An E2E check fails on any third-party request.

## 2026-11-14 16:20 [decision]

Third-party asset URLs are localized by file name in the designer only
(build transform and served runtime files); published packages keep their
URLs.

## 2026-11-14 16:50 [progress]

20261114-1419-designer-storage: the designer saves through a
`ProjectStorage` interface (localStorage implementation) and exports /
imports the project as a versioned JSON file per Vue version.

## 2026-11-14 17:10 [progress]

20261114-1419-engine-ext-tests: engine-ext-vue has unit tests (utils,
style utils) and jsdom tests (event binding dialog, basic setters); the
`window.lowcodeSetterSwitch` global and the tip it showed are removed.

## 2026-11-14 18:00 [progress]

Code generator follows the renderer on: a `children` prop overriding node
children, `onUpdateXxx` handlers (`@update:xxx`), literal `v-model` values
(plain props), slots without content (left out) and the global data source
`dataHandler`. E2E: canvas selection, setter edit and undo; CI's
`webServer` path and the antd1 docs scraper verified; upload-artifact v7.

## 2026-11-14 18:40 [progress]

20261114-1419-schema-semantics: the renderer and the code generator read
node schemas through `@cdlab996/lowcode-vue-core/schema`; a conformance
suite (both Vue versions) compares the rendered and the generated output
and data sources. Fixed on the way: inline text children in generated
templates, Vue 2 `v-model:arg` (`.sync`), default GET for renderer data
sources, 204 / error bodies in the generated runtime.

## 2026-11-14 19:40 [progress]

20261114-1419-renderer-without-leaf: nodes render as their component
vnodes (no Leaf wrapper); `Leaf`, `LEAF_MARKER`, `useCurrentNode` and the
Vue 2 `$parent` mixin are removed. Vue 2 passes default slot content as
children. The antd child components are back in the components pane.

## 2026-11-14 19:40 [pitfall]

A component vnode carrying slots (even `{}`) or new hook functions is
updated on every parent render; inject does not see a provide of the same
component (the renderer passes its context to `useLeaf`).
