# lowcode-engine-vue

Vue renderers, designer simulators and demo designers for
[Alibaba LowCode Engine](https://github.com/alibaba/lowcode-engine), for both
**Vue 2.7** and **Vue 3**, kept in one pnpm workspace.

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

## Dependency catalogs

Versions are managed through catalogs in `pnpm-workspace.yaml`:

- `shared` — `@alilc/*` and other dependencies used by both lines. Keep
  `@alilc/*` here; never pin it per line.
- `vue2-7` / `vue3` — framework versions for each line.
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
- `.github/workflows/release.yml` publishes one line per tag to npm through
  trusted publishing (OIDC): `vue2-7-v<version>` releases `packages/vue2-7`,
  `vue3-v<version>` releases `packages/vue3`. Every package of the line must
  already carry that version.

## License

[MIT](./LICENSE)
