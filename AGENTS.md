# AGENTS.md

Guidance for AI coding agents working in this repository. Read
[README.md](./README.md) for what the packages are; this file covers how to
work on them.

## Workflow (PMA)

- Work is tracked in `docs/task/` (one file per task, index in
  `docs/task/index.md`) and planned in `docs/plan/` (index in
  `docs/plan/index.md`). Non-trivial work: claim a task, write or update its
  plan, get it approved, implement, then complete the task.
- `docs/changelog.md` records progress, decisions and pitfalls
  (`## <date> <time> [progress|decision|pitfall]`). Read the pitfalls before
  touching an area; add one when something cost time to find.
- `docs/architecture.md` and `docs/design/` describe the architecture; update
  them when a change alters it.
- Code, comments, docs and commit messages are in English. User-facing texts
  live in locale files (`locale/zh-CN.json` and `locale/en-US.json`, kept in
  sync; checked by `apps/designer/tests/locale.test.ts`).
- Conventional Commits (`feat(renderer): ...`, `fix(code-generator): ...`).
  Breaking changes are allowed (product-development stage): redesign freely,
  no compatibility shims, but mark them (`!`, `BREAKING CHANGE:`).

## Commands

```bash
pnpm install            # also builds every package ("prepare")
pnpm dev                # designer at http://lowcode-vue.localhost:<port> (needs nsl)
pnpm lint               # Biome (formatting is part of the check)
pnpm lint:type          # build, then type-check every package and e2e/
pnpm test               # Vitest: projects vue2, vue3, plugins, designer, materials, tools
pnpm build:designer     # production designer build (apps/designer/dist)
pnpm test:e2e           # Playwright against the designer build (or $DESIGNER_URL)
pnpm clean              # remove node_modules and build outputs
```

Run `pnpm lint`, `pnpm lint:type` and `pnpm test` before reporting work as
done; run the E2E checks when the designer, the renderer, the materials or
the code generator change. Browsers for E2E: `pnpm exec playwright install
chromium`, or the `mcr.microsoft.com/playwright:v1.65.0-noble` image.

## Rules by area

### Renderer (`packages/renderer`)

- One core (`core/`) for Vue 2.7 and Vue 3. Anything version specific goes
  through the `VueAdapter` (`core/src/adapter.ts`), implemented in
  `vue2/src/adapter.ts` and `vue3/src/adapter.ts`. Core tests run on both
  versions; a change is done when both projects pass.
- Nodes render as their component vnodes; there is no wrapper component
  (see `core/README.md`). Keep vnode props stable (cached functions, no
  empty slot objects): a new function or a slots object makes Vue update the
  child on every parent render.
- How a schema is read (props / slots / children, events, `v-model`, loops,
  data source handlers) lives in `core/src/shared/schema.ts` and is shared
  with the code generator. Change it there, and extend
  `core/tests/conformance` when adding a schema feature: it compares the
  renderer with the generated code.
- `inject` does not see a `provide` of the same component: pass values
  explicitly inside one setup.

### Code generator (`packages/tools/code-generator`)

- Output must render like the renderer (the conformance suite) and compile
  with Vue's SFC compiler (`tests/generate.test.ts`).
- `src/runtime.ts` is emitted as a string into generated projects
  (`src/lowcode/index.js`); keep it plain JavaScript.

### Designer (`apps/designer`)

- No third-party CDN: the engine, React, Fusion, its theme, lodash, moment
  and Monaco are served from npm packages (`vite.config.mts`,
  `runtimeFiles`); fonts, images and icon scripts the packages load from
  alicdn are kept in `public/vendor` and their URLs rewritten by file name.
  A new alicdn URL must be added there; the E2E check fails on any
  third-party request.
- Monaco loads on the first editor and only the languages listed in
  `vite.config.mts` (`MONACO_LANGUAGES`, `MONACO_TOKENIZERS`) ship: add one
  when an editor uses a new language.
- Projects are saved through `ProjectStorage` (`src/utils/project-storage.ts`).
- Development uses the designer build (`pnpm dev` = build in watch mode +
  preview), not the Vite dev server.

### Materials (`packages/materials`)

- Metas (`src/lowcode/*/meta.ts`) and `src/index.ts` are generated from the
  library docs by `scripts/materials` (see CONTRIBUTING.md "Material metas"). Do not
  edit them by hand: change `generate.cjs` / `recipes.cjs` and regenerate.
- The component library versions are pinned to the last releases supporting
  the target Vue version (Vue 2: element-ui 2.15, vant 2, ant-design-vue 1).
  Dependabot ignores their majors; upgrade them by hand.

### Release

- One version for every public package: `pnpm release` (bumpp) bumps it and
  tags `v<version>`; the tag publishes all packages to npm through trusted
  publishing. Do not bump one package on its own.
- Packages depend on each other with `workspace:*`; nothing is inlined from
  another package except in the UMD bundles.
- `@cdlab996/lowcode-vue-core` exports its sources inside the repository
  (tests, type-checks and `pnpm dev` use them); `publishConfig` points the
  published package at `dist`. Keep both export maps in sync.
- `pnpm check:publint` must pass.

### Deploy

- `.github/workflows/deploy.yml` deploys `apps/designer/dist` to Cloudflare
  Pages when run by hand (secrets `CLOUDFLARE_API_TOKEN`,
  `CLOUDFLARE_ACCOUNT_ID`). The site must stay static and served from a
  domain root.

## Environment notes

- Node >= 24.15, pnpm 12 (`packageManager`); versions live in the
  `pnpm-workspace.yaml` catalogs.
- The E2E and screenshot scripts need a running designer:
  `pnpm -C apps/designer preview` serves the build on port 5577.
