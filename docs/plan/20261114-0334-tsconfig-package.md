# 20261114-0334-tsconfig-package Shared tsconfig package

- **status**: completed
- **createdAt**: 2026-11-14 03:34
- **approvedAt**: 2026-11-14 03:36
- **relatedTask**: 20261114-0334-tsconfig-package

## Context

- Reference: `/srv/work/projects/packages/tsconfig` (`@cdlab/tsconfig`):
  private, config-only (raw JSON at the package root, no `exports`, no build),
  `base.json` plus overlays (`nextjs`, `hono`, `react-library`, `utils`)
  that only patch what differs; consumers add it as a `workspace:*` dev
  dependency and `extends: "@cdlab/tsconfig/<preset>.json"`, keeping their own
  `paths` / `include` / `exclude`.
- Here every project extends the root `tsconfig.json` by relative path
  (`../../../tsconfig.json`); the root holds the shared options
  (`strict`, `noImplicitAny: false`, `ESNext` + `Bundler`, `lib` ES2020 + DOM,
  `declaration`, `isolatedModules`, `useDefineForClassFields`, ...).
  Overrides fall into four groups:
  - Vue (`jsx: preserve`): renderer core / vue2 / vue3, the six materials
    (which also set `noImplicitAny: true`);
  - React classic JSX (`jsx: react`): the four plugins, engine-ext-vue,
    the designer;
  - Node (`types: ["node"]`): material-builder, create-lowcode,
    `tsconfig.node.json`;
  - standalone: the create-lowcode templates (generated projects must not
    depend on the workspace).
- `pnpm-workspace.yaml` lists `packages/{renderer,plugins,tools,materials}/*`
  and `apps/*`; release groups publish `packages/<group>/*`.

## Proposal

1. `packages/tsconfig` (`@cdlab996/lowcode-tsconfig`, private, version 1.0.0,
   no build, files at the root, README):
   - `base.json`: the current root compiler options, unchanged;
   - `vue.json`: base + `jsx: preserve`;
   - `react.json`: base + `jsx: react`;
   - `node.json`: base + `types: ["node"]`.
2. Add `packages/tsconfig` to `pnpm-workspace.yaml` (outside the release
   groups, never published).
3. Every package and app: dev dependency `"@cdlab996/lowcode-tsconfig":
   "workspace:*"`; `extends` the matching preset; keep its own `paths`,
   `include`, `exclude` and package-specific options (`vite/client`,
   `experimentalDecorators`, the materials' `noImplicitAny`). The root
   `tsconfig.json` extends `base.json` (editor fallback) and
   `tsconfig.node.json` extends `node.json`.
4. Verify unchanged options: `tsc --showConfig` of every project before and
   after (diff limited to the `extends` chain), then `lint:type`, tests,
   `pnpm build`, `pnpm build:designer`.
5. README (layout), `docs/architecture.md`, changelog.

## Risks

- Published packages keep `@cdlab996/lowcode-tsconfig` as a dev dependency;
  `pnpm publish` rewrites `workspace:*` to `1.0.0`, which is not on npm.
  Dev dependencies are not installed by consumers, so this is inert.
- Tightening options (e.g. `noImplicitAny` across the workspace) is out of
  scope: this change keeps every project's effective options.

## Scope

New `packages/tsconfig` (4 JSON files, `package.json`, README);
`pnpm-workspace.yaml`, `pnpm-lock.yaml`; ~20 `tsconfig*.json` and their
`package.json` dev dependencies; root `tsconfig.json`; docs.

## Alternatives

- Extend the presets by relative path without a package: no dependency
  bookkeeping, but every project keeps a path into another directory;
  rejected to match the reference package.

## Annotations

- Implementation: the root `exclude` stays in the root `tsconfig.json` (paths
  in an inherited `exclude` are relative to the declaring file). Verified
  with `tsc --showConfig` and `--listFilesOnly` on all 21 projects: no
  difference in `compilerOptions`, `include` or checked files; only the
  inherited `exclude` is gone. `lint:type`, Biome, 310 tests, `pnpm build`,
  `pnpm build:designer` pass.
- Name: `@cdlab996/lowcode-tsconfig` (lowcode prefix, as the other packages), directory `packages/tsconfig`.
