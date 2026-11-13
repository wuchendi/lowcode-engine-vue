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
    directive-loading/    @cdlab996/lowcode-plugin-directive-loading
    manual/               @cdlab996/lowcode-plugin-manual
    set-doc-url/          @cdlab996/lowcode-plugin-set-doc-url
    vue-code-editor/      @cdlab996/lowcode-plugin-vue-code-editor
  materials/              component materials
    antd-vue1/            @cdlab996/lowcode-materials-antd-vue1   (Vue 2.7)
    element-ui/           @cdlab996/lowcode-materials-element-ui  (Vue 2.7)
    vant2/                @cdlab996/lowcode-materials-vant2       (Vue 2.7)
  tools/
    material-builder/     @cdlab996/lowcode-material-builder (lowcode-material CLI)
apps/
  designer/               designer app; `?vue=2` / `?vue=3` selects the version
docs/
  design/                 architecture
```

## Renderer packages

`@cdlab996/lowcode-vue2` and `@cdlab996/lowcode-vue3` expose the same API:

| Entry                   | Content                                                                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `.`                     | `Renderer`, `rendererConfig`, `useRendererContext`, `useCurrentNode`, `buildComponents`, `AssetLoader`, `createSimulatorRenderer`, types |
| `./runtime`             | the same without the designer simulator (no vue-router)                                                                                  |
| `./designer`            | `setupDesignerEnvironment(project, { vue })` for the designer page (no Vue import)                                                       |
| `dist/renderer.umd.js`  | browser bundle for preview pages: the `./runtime` API as `window.LCVueRenderer`                                                          |
| `dist/simulator.umd.js` | designer canvas bundle: `window.LCVueRenderer` plus `window.SimulatorRenderer`                                                           |
| `dist/simulator.css`    | canvas styles                                                                                                                            |

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
- `nsl` for `pnpm dev` (or `pnpm -C apps/designer dev:bare` without it)

## Getting started

```bash
pnpm install   # also builds every package via "prepare"
pnpm dev       # designer; open it with ?vue=2 or ?vue=3
```

The designer serves the renderer bundles and the workspace materials from
their `dist` directories: after changing a package, rebuild it (`pnpm build`)
and reload the page.

## Scripts

| Command               | Description                                            |
| --------------------- | ------------------------------------------------------ |
| `pnpm build`          | Build all packages.                                    |
| `pnpm dev`            | Start the designer.                                    |
| `pnpm build:designer` | Build the designer app.                                |
| `pnpm lint`           | Biome lint and format check.                           |
| `pnpm lint:type`      | Build, then type-check every package and the designer. |
| `pnpm test`           | Run the test suites on Vue 2.7 and on Vue 3.           |
| `pnpm format`         | Format with Biome.                                     |

## Tests

`vitest.config.ts` defines one project per Vue version. Both run the core
suites (`packages/renderer/core/tests`) with their own `vue`, `vue-router`
and adapter; each also runs its adapter's suites.

## CI and release

- `.github/workflows/ci.yml` runs lint, build + type-check, tests and the
  designer build on Node 24 and 26 for every push to `main` and every pull
  request.
- `.github/workflows/release.yml` publishes one group per tag to npm through
  trusted publishing (OIDC). The tag is `<group>-v<version>` and releases
  `packages/<group>`: `renderer`, `plugins`, `materials` or `tools` (for
  example `renderer-v1.0.0`). Every package of the group must already carry
  that version.

## License

[MIT](./LICENSE)
