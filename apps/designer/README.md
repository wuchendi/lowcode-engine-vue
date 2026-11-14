# Designer

LowCode Engine designer for the Vue renderers of this repository. One app
serves both Vue versions:

- `/?vue=3` (default) — Vue 3 canvas and the Vue 3 materials
- `/?vue=2` — Vue 2.7 canvas and the workspace materials
  (`@cdlab996/lowcode-materials-*`)

Add `client=pc` for the desktop canvas (mobile by default).

## Run

```bash
pnpm dev        # from the repository root (needs nsl)
pnpm -C apps/designer dev:bare   # plain Vite on port 5577
```

The engine, React, Fusion and the Vue setters come from CDN scripts in
`index.html`; `vite.config.mts` maps their imports to those globals. The
renderer bundles of `packages/renderer/vue{2,3}/dist` and the material builds
are served under `/runtime/` and `/materials/` (copied into the output on
build), so rebuild a package and reload to see a change.

The **页面** panel adds, switches and deletes pages; each page has a route
path (`/`, `/about`) used by the canvas, the preview and code generation. The
data source and schema panels are the official ones, scoped to the current
page (the plugins themselves edit the first page and import the whole
project).

The same panel creates **low-code components** (`新建组件`, a PascalCase
name): a component is a `Component` document edited like a page, with props
declared in the source panel (`props`, saved as `initProps`). Every component
document is registered as a `devMode: 'lowCode'` component of the components
pane (refreshed when it changes; not droppable into itself), so pages use it
like a material component; the preview and code generation
(`src/components/<Name>.vue`) include it.

**Save as block** in the toolbar of a selected node stores its node tree (in
`localStorage` per Vue version); the **区块** panel inserts a copy by drag or
click (after the selected node, or at the end of the page) and deletes blocks.

The globe button at the bottom of the left bar switches the designer between
Chinese and English (`@alilc/lowcode-plugin-zh-en`; the engine stores the
choice, and defaults to the browser language). The designer and the plugins
of this repository take their texts from `locale/{zh-CN,en-US}.json` through
the engine's `createIntl`; texts are ICU messages, so no HTML in them. The
titles of the material components stay as the metas give them.

Saving stores the schema (every page) in `localStorage` per Vue version;
**Preview** opens `preview.html` with the same version and the current page
(`?page=/about`), which renders the saved schema with `dist/renderer.umd.js`
and links the other pages.
