# lowcode-engine-vue

Vue renderers, designer simulators, designer plugins, materials, tooling and
demo designers for [Alibaba LowCode Engine](https://github.com/alibaba/lowcode-engine),
for both **Vue 2.7** and **Vue 3**, kept in one pnpm workspace.

Both lines target the same engine and share one set of `@alilc/*` dependencies
(currently `1.3.4`), so a change to the engine contract is made once for both.

## Layout

```
packages/
  vue2-7/            Vue 2.7 line (@cdlab996/*)
    hooks/           @cdlab996/lowcode-hooks2.7
    utils/           @cdlab996/lowcode-utils2.7
    renderer/        @cdlab996/lowcode-vue-renderer2.7
    simulator-renderer/  @cdlab996/lowcode-vue-simulator-renderer2.7
  vue3/              Vue 3 line (@cdlab996/*)
    hooks/           @cdlab996/lowcode-hooks
    utils/           @cdlab996/lowcode-utils
    data-source/     @cdlab996/lowcode-data-source
    renderer/        @cdlab996/lowcode-vue-renderer
    simulator-renderer/  @cdlab996/lowcode-vue-simulator-renderer
  plugins/           Designer plugins, shared by both lines (@cdlab996/*)
    directive-loading/   @cdlab996/lowcode-plugin-directive-loading
    manual/              @cdlab996/lowcode-plugin-manual
    set-doc-url/         @cdlab996/lowcode-plugin-set-doc-url
    vue-code-editor/     @cdlab996/lowcode-plugin-vue-code-editor
  tools/             Tooling shared by both lines (@cdlab996/*)
    material-builder/    @cdlab996/lowcode-material-builder
  materials-vue2-7/  Component materials for the Vue 2.7 line (@cdlab996/*)
    antd/                @cdlab996/antd-lowcode-materials2.7
    element/             @cdlab996/element-lowcode-materials2.7
    vant/                @cdlab996/vant-lowcode-materials2.7
apps/
  demo-vue2-7/       Designer demo running the Vue 2.7 line
  demo-vue3/         Designer demo running the Vue 3 line
scripts/
  sync-renderer.mjs  Copies built renderer bundles into a demo
docs/
  audit/             Renderer and simulator audit notes
```

| Package              | Role                                                                                   |
| -------------------- | -------------------------------------------------------------------------------------- |
| `renderer`           | Renders a LowCode Engine schema into Vue components (runtime / live mode).             |
| `simulator-renderer` | Runs inside the designer canvas iframe and connects the renderer to the designer host. |
| `hooks`              | Renderer context and current-node hooks shared by the renderer and simulator.          |
| `utils`              | Asset loading, component/utils building and type guards.                               |
| `data-source`        | Data-source engine (Vue 3 line only).                                                  |

| Group              | Contents                                                                                                                         |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `plugins`          | React designer plugins: `v-loading` setter, manual link, per-component doc URL, Vue source-code panel. Built with tsdown / Vite. |
| `tools`            | `lowcode-material build` / `lowcode-material dev`: Vite-based material build and dev server for both lines.                      |
| `materials-vue2-7` | Ant Design Vue 1, Element UI and Vant 2 materials, built with `lowcode-material`.                                                |

## Dependency catalogs

Versions are managed through catalogs in `pnpm-workspace.yaml`:

- `shared` — `@alilc/*`, React 16 (the engine's React) and other dependencies
  used by both lines. Keep `@alilc/*` here; never pin it per line.
- `vue2-7` / `vue3` — framework versions for each line.
- `plugins` — Fusion (`@alifd/next`) for the designer plugins.
- `materials-vue2-7` — lodash, bundled into the material metas.
- `dev` — tooling (Biome, TypeScript, Vitest, tsdown).

## Requirements

- Node.js `>= 24.15`
- pnpm `12` (version pinned by `packageManager`)
- `nsl` for `dev:*` (run `pnpm -C apps/demo-<line> start:bare` to start a demo without it)

## Getting started

```bash
pnpm install          # also builds every package via "prepare"
pnpm dev:vue2-7       # Vue 2.7 demo designer
pnpm dev:vue3         # Vue 3 demo designer
```

Each demo runs `sync` first, which copies the built `renderer` and
`simulator-renderer` bundles of its line into `apps/demo-*/public/js`. After
changing a package, rebuild it (`pnpm build:vue2-7` or `pnpm build:vue3`) and
restart the demo.

## Scripts

| Command                                 | Description                           |
| --------------------------------------- | ------------------------------------- |
| `pnpm build`                            | Build all packages.                   |
| `pnpm build:vue2-7` / `pnpm build:vue3` | Build one line.                       |
| `pnpm lint`                             | Biome lint and format check.          |
| `pnpm lint:type`                        | Build, then type-check every package. |
| `pnpm test`                             | Run all Vitest suites (both lines).   |
| `pnpm format`                           | Format with Biome.                    |

## CI and release

- `.github/workflows/ci.yml` runs lint, build + type-check and tests on Node 24
  and 26 for every push to `main` and every pull request.
- `.github/workflows/release.yml` publishes one group per tag to npm through
  trusted publishing (OIDC). The tag is `<group>-v<version>` and releases
  `packages/<group>`: `vue2-7`, `vue3`, `plugins`, `tools` or
  `materials-vue2-7` (for example `plugins-v1.1.0`). Every package of the group
  must already carry that version.

## License

[MIT](./LICENSE)
