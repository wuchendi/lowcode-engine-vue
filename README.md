# lowcode-engine-vue

Vue renderer, designer simulator, designer plugins, materials and tooling for
[Alibaba LowCode Engine](https://github.com/alibaba/lowcode-engine), for both
**Vue 2.7** and **Vue 3**.

One renderer core serves both Vue versions: it is written against the
Composition API that Vue 2.7 and Vue 3 share, and everything that differs
between the two (vnode data, instance internals, mounting, the router) lives
behind a small adapter. `@cdlab996/lowcode-vue2` and `@cdlab996/lowcode-vue3`
are the same core built with their own adapter. See
[docs/design/unified-renderer.md](./docs/design/unified-renderer.md).

## Layout

```
packages/
  renderer/
    core/                 private: renderer + simulator core, shared helpers
    vue2/                 @cdlab996/lowcode-vue2  (Vue 2.7 adapter + core)
    vue3/                 @cdlab996/lowcode-vue3  (Vue 3 adapter + core)
  plugins/                designer plugins (React), Vue-version independent
    code-generator/       @cdlab996/lowcode-plugin-code-generator (出码 button)
    directive-loading/    @cdlab996/lowcode-plugin-directive-loading
    engine-ext-vue/       @cdlab996/lowcode-engine-ext-vue (setters and binding dialogs)
    manual/               @cdlab996/lowcode-plugin-manual
    set-doc-url/          @cdlab996/lowcode-plugin-set-doc-url
    vue-code-editor/      @cdlab996/lowcode-plugin-vue-code-editor
  materials/              component materials
    antd-vue1/            @cdlab996/lowcode-materials-antd-vue1   (Vue 2.7)
    element-ui/           @cdlab996/lowcode-materials-element-ui  (Vue 2.7)
    vant2/                @cdlab996/lowcode-materials-vant2       (Vue 2.7)
    antd-vue4/            @cdlab996/lowcode-materials-antd-vue4   (Vue 3)
    element-plus/         @cdlab996/lowcode-materials-element-plus (Vue 3)
    vant4/                @cdlab996/lowcode-materials-vant4       (Vue 3)
  tools/
    code-generator/       @cdlab996/lowcode-code-generator (schema -> Vite + Vue project)
    material-builder/     @cdlab996/lowcode-material-builder (lowcode-material CLI)
    create-lowcode/       @cdlab996/create-lowcode (material project scaffold)
  tsconfig/               @cdlab996/lowcode-tsconfig (shared tsconfig presets, private)
apps/
  designer/               designer app; `?vue=2` / `?vue=3` selects the version
e2e/                      Playwright checks of the designer build
scripts/
  materials/              material meta generator, docs fetcher, screenshots
docs/
  design/                 architecture
  task/, plan/            task and plan tracking (see AGENTS.md)
```

## Renderer packages

`@cdlab996/lowcode-vue2` and `@cdlab996/lowcode-vue3` expose the same API:

| Entry                   | Content                                                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `.`                     | `Renderer`, `rendererConfig`, `useRendererContext`, `buildComponents`, `AssetLoader`, `createSimulatorRenderer`, types |
| `./runtime`             | the same without the designer simulator (no vue-router)                                                                |
| `./designer`            | `setupDesignerEnvironment(project, { vue })` for the designer page (no Vue import)                                     |
| `dist/renderer.umd.js`  | browser bundle for preview pages: the `./runtime` API as `window.LCVueRenderer`                                        |
| `dist/simulator.umd.js` | designer canvas bundle: `window.LCVueRenderer` plus `window.SimulatorRenderer`                                         |
| `dist/simulator.css`    | canvas styles                                                                                                          |

`vue` and `vue-router` (3.6 for Vue 2.7, 4 for Vue 3) are peer dependencies;
the UMD bundles read Vue from `window.Vue`; only the simulator bundle includes
vue-router.

`initProps` and `initEmits` declare real props and emits: a schema that uses
them renders through its own component type, so a low-code component
receives props and its `this.$emit(...)` reaches the parent's listeners.

Schemas support Page, Block and Component roots, `state`, `methods`,
`dataSource`, `css`, i18n, every Vue lifecycle name (plus the React names),
route guards, and the option hooks written by the Vue source panel:
`initModule`, `initProps`, `initEmits`, `initData`, `initComputed`,
`initWatch`, `initProvide`, `initInject` and `setup`.

## Material projects

`@cdlab996/create-lowcode` creates a material project (an example SFC
component and its meta, built by the material builder) for Vue 2.7 or Vue 3:

```bash
pnpm create @cdlab996/lowcode my-materials --vue 3
```

See [packages/tools/create-lowcode](./packages/tools/create-lowcode).

## Dependency catalogs

Versions are managed through catalogs in `pnpm-workspace.yaml`:

- `shared` — `@alilc/*`, React 16 (the engine's React) and other dependencies
  used across groups. Keep `@alilc/*` here.
- `vue2-7` / `vue3` — Vue and vue-router of each version.
- `plugins` — Fusion (`@alifd/next`) for the designer plugins.
- `materials` — lodash, bundled into the material metas.
- `dev` — tooling (Biome, TypeScript, Vitest, tsdown, Vite).

## Requirements

- Node.js `>= 24.15`
- pnpm `12` (version pinned by `packageManager`)
- `nsl` for `pnpm dev` (the designer is served at
  `http://lowcode-vue.localhost:<nsl port>`)

## Getting started

```bash
pnpm install   # also builds every package via "prepare"
pnpm dev       # designer; open it with ?vue=2 or ?vue=3
```

`pnpm dev` builds the designer in development mode on every change, serves
it through nsl and rebuilds the renderer bundles (Vue 2.7 and Vue 3) on
change; open pages reload once a build is written. Other packages are
rebuilt on request:

```bash
pnpm dev --watch vant4,engine-ext-vue   # material directory names, engine-ext-vue, vue-code-editor
```

The remaining packages (the other designer plugins, the material builder)
need `pnpm build` (or `pnpm -C <package> build`) after a change. Without
nsl, run `pnpm -C apps/designer dev:build` and `pnpm -C apps/designer
dev:bare` (port 5577).

## Scripts

| Command               | Description                                              |
| --------------------- | -------------------------------------------------------- |
| `pnpm build`          | Build all packages.                                      |
| `pnpm dev`            | Designer and renderer in watch mode (`--watch <names>`). |
| `pnpm build:designer` | Build the designer app.                                  |
| `pnpm lint`           | Biome lint and format check.                             |
| `pnpm lint:type`      | Build, then type-check every package and the designer.   |
| `pnpm test`           | Run the test suites on Vue 2.7 and on Vue 3.             |
| `pnpm test:e2e`       | Playwright checks of the designer build (see Tests).     |
| `pnpm format`         | Format with Biome.                                       |

## Tests

`vitest.config.ts` defines one project per Vue version. Both run the core
suites (`packages/renderer/core/tests`) with their own `vue`, `vue-router`
and adapter; each also runs its adapter's suites.

`e2e/` holds Playwright checks of the designer in both Vue versions: it
loads and renders, the code editor type-checks against the Vue typings, the
snippet of every material component renders, and the code generator
produces a project. `pnpm test:e2e` serves the designer build
(`pnpm build:designer`, then `pnpm -C apps/designer preview`), or runs
against `DESIGNER_URL` when set. Install the browser once with
`pnpm exec playwright install chromium`.

## Material metas

The metas of the six component-library materials are generated from the
docs of the library versions they install (`scripts/materials`):

```bash
node scripts/materials/fetch-docs.cjs      # docs into .cache/material-docs (GITHUB_TOKEN optional)
node scripts/materials/scrape-antd1.cjs    # ant-design-vue 1.x docs from its site (Playwright)
node scripts/materials/parse.cjs           # API tables -> parsed.json
node scripts/materials/generate.cjs vant4 --write   # element-ui, vant2, antd1, element-plus, vant4, antd4
```

`recipes.cjs` holds the hand-written snippets. `capture.cjs <2|3> <pc|mobile>
<group,...>` takes the snippet screenshots from a running designer
(`DESIGNER_URL`, default `http://localhost:5577`); `generate.cjs` links the
existing ones.

## CI and release

- `.github/workflows/ci.yml` runs lint, build + type-check, tests and the
  designer build on Node 24 and 26, and the E2E checks, for every push to
  `main` and every pull request.
- `.github/workflows/release.yml` publishes one group per tag to npm through
  trusted publishing (OIDC). The tag is `<group>-v<version>` and releases
  `packages/<group>`: `renderer`, `plugins`, `materials` or `tools` (for
  example `renderer-v1.0.0`). Every package of the group must already carry
  that version. A group depending on another one is released after it
  (`scripts/check-release-deps.mjs`: the plugins need the code generator of
  `tools` on npm).
- `.github/dependabot.yml` keeps the major versions of Vue, vue-router and the
  component libraries: the Vue 2 packages stay on the last Vue 2 releases.

## Deploy

The designer build (`pnpm build:designer`, `apps/designer/dist`) is a static
site with no third-party requests. Serve it at the root of a domain (it uses
root paths such as `/runtime/...`).

`.github/workflows/deploy.yml` deploys it to Cloudflare Pages after CI passes
on `main`, or when run by hand. It needs the repository secrets
`CLOUDFLARE_API_TOKEN` (permission _Account / Cloudflare Pages / Edit_) and
`CLOUDFLARE_ACCOUNT_ID`; the optional variable `CLOUDFLARE_PAGES_PROJECT`
names the project (`lowcode-vue` by default, created on the first deploy).
Without the secrets the workflow skips the deploy.

By hand:

```bash
pnpm build:designer
npx wrangler pages deploy apps/designer/dist --project-name lowcode-vue
```

## License

[MIT](./LICENSE)
