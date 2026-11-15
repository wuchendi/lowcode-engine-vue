# Contributing

How to work on this repository. [README.md](./README.md) describes the
packages; [AGENTS.md](./AGENTS.md) lists the rules by area (they apply to
people too); [docs/architecture.md](./docs/architecture.md) is the map.

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
| `pnpm test`           | Vitest: every project (see Tests).                       |
| `pnpm test:e2e`       | Playwright checks of the designer build (see Tests).     |
| `pnpm check:publint`  | Lint the packed manifests of the public packages.        |
| `pnpm format`         | Format with Biome.                                       |
| `pnpm clean`          | Remove `node_modules` and build outputs (then install).  |

## Tests

`vitest.config.ts` defines six projects:

| Project        | Runs                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `vue2`, `vue3` | the core suites (`packages/renderer/core/tests`) with that version's `vue`, `vue-router` and adapter, plus the adapter's own suites |
| `plugins`      | pure modules of the designer plugins                                                                                                |
| `designer`     | pure modules of the designer app (locale files, storage, pages)                                                                     |
| `materials`    | the metas of each material against its component library, and its README                                                            |
| `tools`        | the code generator, the material builder and the scaffold                                                                           |

A change to the core is done when both `vue2` and `vue3` pass.
`packages/renderer/core/tests/conformance` renders the same schemas with the
renderer and with the generated code and compares them: extend it when
adding a schema feature.

`e2e/` holds the Playwright checks of the designer build, on both Vue
versions where it matters: the designer loads and renders, nothing is
requested from third-party hosts, the code editor type-checks against the
Vue typings, a canvas node is selected and edited with a setter, dialogs are
centered, the snippet of every material component renders, code generation,
project export / import / reset, the preview, the canvas context menu and
locale, JSONP data sources, and materials added by their `assets.json`.
`pnpm test:e2e` serves the designer build (`pnpm build:designer`, then
`pnpm -C apps/designer preview`), or runs against `DESIGNER_URL` when set.
Install the browser once with `pnpm exec playwright install chromium`.

## Dependency catalogs

Versions are managed through catalogs in `pnpm-workspace.yaml`:

- `shared` — `@alilc/*`, React 16 (the engine's React) and other dependencies
  used across groups. Keep `@alilc/*` here.
- `vue2-7` / `vue3` — Vue and vue-router of each version.
- `plugins` — Fusion (`@alifd/next`) for the designer plugins.
- `materials` — lodash, bundled into the material metas.
- `dev` — tooling (Biome, TypeScript, Vitest, tsdown, Vite).

## Material metas

The metas of the six component-library materials are generated from the
docs of the library versions they install (`scripts/materials`):

```bash
node scripts/materials/fetch-docs.cjs      # docs into .cache/material-docs (GITHUB_TOKEN optional)
node scripts/materials/scrape-antd1.cjs    # ant-design-vue 1.x docs from its site (Playwright)
node scripts/materials/parse.cjs           # API tables -> parsed.json
node scripts/materials/generate.cjs vant4 --write   # element-ui, vant2, antd1, element-plus, vant4, antd4
node scripts/materials/readme.cjs          # the six material READMEs (version, count, UMD global)
```

`recipes.cjs` holds the hand-written snippets. `capture.cjs <2|3> <pc|mobile>
<group,...>` takes the snippet screenshots from a running designer
(`DESIGNER_URL`, default `http://localhost:5577`); `generate.cjs` links the
existing ones.

The material READMEs are generated too: the `materials` tests fail when one
no longer matches its package (`readme.cjs --check` reports the same).

## CI and release

- `.github/workflows/ci.yml` runs lint, build + type-check, tests, publint and
  the designer build on Node 24 and 26, and the E2E checks, for every push to
  `main` and every pull request.
- Every public package carries the same version. `pnpm release` (bumpp,
  `bump.config.ts`) bumps the root and `packages/*/*` manifests, commits,
  tags `v<version>` and pushes.
- `.github/workflows/release.yml` runs on that tag: it checks that every
  public package has the tag's version, runs the checks, and publishes all of
  them (`pnpm publish -r`, dependencies first, versions already on npm
  skipped) through trusted publishing (OIDC).
- `pnpm check:publint` lints the packed manifests (exports, files, types); CI
  runs it too.
- `.github/dependabot.yml` keeps the major versions of Vue, vue-router and the
  component libraries: the Vue 2 packages stay on the last Vue 2 releases.

## Deploy

The designer build (`pnpm build:designer`, `apps/designer/dist`) is a static
site with no third-party requests. Serve it at the root of a domain (it uses
root paths such as `/runtime/...`).

`.github/workflows/deploy.yml` deploys it to Cloudflare Pages when run by
hand (Actions -> Deploy designer -> Run workflow; the branch picked is the
Pages branch, `main` is production). It needs the repository secrets
`CLOUDFLARE_API_TOKEN` (permission _Account / Cloudflare Pages / Edit_) and
`CLOUDFLARE_ACCOUNT_ID`; the optional variable `CLOUDFLARE_PAGES_PROJECT`
names the project (`lowcode-vue` by default, created on the first deploy).
Cloudflare's Git integration works too: build command `pnpm build:designer`,
output directory `apps/designer/dist`, variables `NODE_VERSION=24.15.0` and
`PNPM_VERSION=12.16.1`.

By hand:

```bash
pnpm build:designer
npx wrangler pages deploy apps/designer/dist --project-name lowcode-vue
```
