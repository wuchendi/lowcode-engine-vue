# 20261114-0001-create-lowcode-scaffold Re-introduce the create-lowcode scaffold

- **status**: completed
- **createdAt**: 2026-11-14 00:01
- **approvedAt**: 2026-11-14 00:03
- **relatedTask**: 20261113-2358-create-lowcode-scaffold

## Context

- The old scaffold is `@cdlab996/create-lowcode2.7`
  (cdLab996/lowcode-engine-tools2.7/packages/create-lowcode, a fork of
  KNXCloud's). It generated a Vue 2.7 material project with one `XButton`
  (SFC + `meta.ts`), built by `vue-cli-service` + `vue-cli-plugin-lowcode2.7`
  with babel / eslint / stylelint / prettier, optional less/scss and git
  hooks, and rewrote dependency versions from npm at creation time. It was
  dropped with the Vue CLI tooling.
- Today materials are built by `@cdlab996/lowcode-material-builder`
  (`lowcode-material build|dev`, options declared with `lowcodeMaterial()`
  in `vite.config.ts`). It loads the project's Vite config (`configFile`),
  so the project's own Vite plugins apply; it maps `vue`, `react`,
  `react-dom` and the renderer packages to page globals; it finds metas as
  `meta.*` / `*.meta.*` under the entry directory.
- Prototypes (.tmp/proto, Vite 8.3.8, builder from the workspace):
  - Vue 3 + `@vitejs/plugin-vue` 6.0.11: builds; `vue` stays external
    (index.min.js 872 B).
  - Vue 2.7 + `@vitejs/plugin-vue2` 2.3.4 (latest; peer range ends at
    Vite 7, Vue 2 is EOL): builds only with `esbuild` installed (the plugin
    still calls Vite's deprecated `transformWithEsbuild`; a deprecation
    warning remains). The plugin aliases `vue` to
    `vue/dist/vue.runtime.esm.js`, which bypasses the builder's `vue`
    external: Vue got bundled (71 KB). Mapping that path to `Vue` too fixes
    it (1.5 KB).
  - pnpm 12 fails `pnpm install` (exit 1, ERR_PNPM_IGNORED_BUILDS) when
    esbuild's build script is not allowed.
  - `vue-tsc` 3.3.14 does not run on TypeScript 7
    (ERR_PACKAGE_PATH_NOT_EXPORTED); with TypeScript 5.9.3 it type-checks
    both versions. Vue 2.7 needs `vueCompilerOptions.target: 2.7`, and
    template `$emit` is untyped there, so the example uses the `emit` from
    `defineEmits`.
- Tests: `vitest.config.ts` has only the renderer projects (vue2, vue3,
  jsdom). Release: `tools-v*` publishes `packages/tools/*`, all at the tag
  version (material-builder is 1.0.0).

## Proposal

1. `packages/tools/material-builder`: add
   `'vue/dist/vue.runtime.esm.js': 'Vue'` to the default externals, with a
   test (RED first) that builds a fixture importing it and checks Vue is not
   bundled.
2. New `packages/tools/create-lowcode` (`@cdlab996/create-lowcode`,
   version 1.0.0, bin `create-lowcode`; usage
   `pnpm create @cdlab996/lowcode [dir] [--vue 2|3] [--force]`):
   - No runtime dependencies: `node:util` `parseArgs`,
     `node:readline/promises` for the prompts (directory, Vue version,
     overwrite confirmation when the directory is not empty),
     `node:fs` `cp`. Built with tsdown (as the material builder).
   - Asks nothing that is given by a flag; without a TTY, missing answers
     use defaults (`lowcode-materials`, Vue 3) and a non-empty directory
     needs `--force`.
   - Prints the next commands for the package manager that ran it
     (`npm_config_user_agent`).
3. Templates (`template/common`, `template/vue2`, `template/vue3`; copied
   in that order, `_gitignore` renamed to `.gitignore`, package name set
   from the directory):
   - common: `src/index.ts`, `src/button/button.vue` (`<script setup
     lang="ts">`, typed props and emits), `src/button/meta.ts`,
     `src/env.d.ts`, `biome.json`, `_gitignore`, `README.md`.
   - per version: `package.json` (scripts `dev`, `build`, `lint`,
     `lint:type`), `vite.config.ts` (Vue plugin + `lowcodeMaterial()`),
     `tsconfig.json` (vue2 adds `vueCompilerOptions.target: 2.7`).
   - vue2 also: `esbuild` dev dependency and `pnpm-workspace.yaml` with
     `allowBuilds: { esbuild: true }` and a peer rule for
     `@vitejs/plugin-vue2>vite`.
   - Versions are written in the template package.json files (latest
     stable, verified at npm). A test checks that the ones shared with the
     workspace (vite, vue, `@alilc/lowcode-types`, Biome, the material
     builder) match the catalogs / package version, so they move together.
4. Tests (RED first): a `tools` Vitest project (node environment,
   `packages/tools/*/tests`): generation for both versions into a temp dir
   (files, package name, renamed dotfiles, vue2-only files), refusal of a
   non-empty directory without `--force`, `--force` overwrite, invalid
   `--vue`.
5. Verification beyond unit tests: generate both projects outside the
   workspace, install them with the packed local material builder, run
   `lint`, `lint:type`, `build`; check `vue` is external in both
   bundles; load each `assets.json` into the designer (`?vue=2` / `?vue=3`)
   and render `XButton` on the canvas (Playwright).
6. Docs: package README, root README (layout, getting started for
   materials), `docs/architecture.md`, release note for the tools group in
   README.

## Risks

- Vue 2 path relies on `@vitejs/plugin-vue2` outside its declared Vite
  range and on Vite's deprecated `transformWithEsbuild`; a future Vite
  release may remove it. Mitigation: covered by the generated-project build
  check; the peer rule and esbuild are scoped to the vue2 template.
- Generated projects pin TypeScript 5.9 (`vue-tsc` cannot run on
  TypeScript 7) while the repo uses 7. PINNED reason recorded in the
  template README.
- `@cdlab996/create-lowcode` is a new npm package: trusted publishing must
  be configured for it on npmjs.com before the next `tools-v*` tag
  (manual, by the owner).
- Changing the builder's default externals affects any material that
  imports `vue/dist/vue.runtime.esm.js` directly; none in the workspace do.

## Scope

- New: `packages/tools/create-lowcode` (~10 template files, ~150 lines of
  CLI, tests).
- Changed: material-builder (externals + test), `vitest.config.ts`
  (tools project), `pnpm-lock.yaml`, README, `docs/architecture.md`,
  changelog.
- Not included: designer-side "local mode" / `lowcode-ui-cli` features;
  CSS preprocessor and git-hook options of the old scaffold.

## Alternatives

- Vue 2 template without SFCs (`defineComponent` + render functions): no
  plugin-vue2 / esbuild / peer issues, but authors lose templates; rejected
  as the old scaffold and the ecosystem use SFCs.
- Keep `vue` external per project (`externals` in the generated
  `vite.config.ts`) instead of the builder default: leaks a builder
  concern into every Vue 2 project; rejected.
- Resolve dependency versions from npm at creation time (old behaviour):
  needs network, untested combinations; rejected.

## Annotations

- Implementation notes: the example component lives in `src/x-button/x-button.vue` (Biome's multi-word component name rule); the Biome template disables unused-variable checks for `.vue` (template usage is not seen); tsconfig includes `src/**/*.vue` (otherwise SFC scripts pick up a parent tsconfig); `src/env.d.ts` was dropped (vue-tsc resolves `.vue` imports). Designer rendering was verified by adding the generated assets at init, because incremental assets are not supported yet (20261114-0009-simulator-incremental-assets).
