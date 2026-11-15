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

The designer loads nothing from a CDN. The engine, React, Fusion (with the
lowcode theme), lodash and moment are served from their npm packages under
`/runtime/vendor/`, Monaco under `/runtime/monaco/` and the Vue setters
under `/runtime/engine-ext/`; `index.html` loads them as scripts and
`vite.config.mts` maps their imports to those globals. The fonts, images and
icon scripts these packages and the plugins reference on alicdn are kept in
`public/vendor`, and their URLs are rewritten there (by file name). The
renderer bundles of `packages/renderer/vue{2,3}/dist` and the material builds
are served under `/runtime/` and `/materials/` (copied into the output on
build), so rebuild a package and reload to see a change.

Monaco loads when a code editor first opens: the CDN path the editors'
loader is configured with is rewritten to `/runtime/monaco/vs`. Only the
Monaco languages the editors use and the material files the designer loads
(`index.js`, `index.css`, `meta.js`, screenshots) are served and copied
(`isPublished` in `vite.config.mts`): add a language there when an editor
starts using it (a missing one is a 404, also in development).

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

Saving stores the project (the schema of every page and component, and the
material packages) through a `ProjectStorage` (`src/utils/project-storage.ts`,
`load` / `save` / `clear`): `src/utils/store.ts` uses the `localStorage`
one, per Vue version; replace it there to save to a backend. **导出**
downloads the project as a JSON file (`lowcode-project-vue<2|3>.json`);
**导入** replaces the project with such a file of the same Vue version and
reloads; **重置** forgets the saved project and starts again from the sample.
**Preview** opens `preview.html` with the same version, the current page
(`?page=/about`) and the canvas locale (`?locale=en-US`), which renders the
saved schema with `dist/renderer.umd.js` and links the other pages and
locales.

The project messages (`i18n` of the project schema, used as
`this.i18n('key')`) show in the locale the top bar selects for the canvas
(中文 / English, independent of the designer language); the sample project
binds its Vue 3 buttons to them. Right-clicking a canvas node opens the
engine's node menu (select, copy, paste, delete).

Data sources are `fetch` or `jsonp` (`jsonpCallback`: the callback query
parameter, `callback` by default; `jsonpCallbackFunction`: a fixed function
name, as `public/mock/info.jsonp.js` needs).

The **物料** panel adds a material by the URL of its `assets.json` (as the
material builder writes it; relative URLs inside resolve against it): its
components join the components pane at once. The URLs are part of the
project (`ProjectRecord.materials`, saved, exported and imported with it)
and load again before the pages when the designer opens; a removed
material leaves once the project is saved and the designer reloaded.
