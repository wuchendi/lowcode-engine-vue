# 20261114-0320-type-check-coverage Type-check tests and build configs

- **status**: completed
- **createdAt**: 2026-11-14 03:20
- **approvedAt**: 2026-11-14 03:21
- **relatedTask**: 20261114-0320-type-check-coverage

## Context

- `lint:type` runs `tsc -p ./tsconfig.json` per package; the package
  tsconfigs include `src` only (renderer: `./src`, `../core/src`). The root
  tsconfig has no `include` but is not run.
- Tracked TS files outside every package tsconfig:
  - tests: `renderer/core/tests` (40), `renderer/vue2/tests` (6),
    `renderer/vue3/tests` (2), `tools/create-lowcode/tests` (2),
    `tools/material-builder/tests` (3);
  - build configs: tsdown configs of renderer vue2/vue3, plugins
    directive-loading / manual / set-doc-url, tools create-lowcode /
    material-builder; `plugins/vue-code-editor/vite.config.ts`;
    `vitest.config.ts`;
  - leftovers: `materials/element-ui/backup` (29 files),
    `materials/vant2/backup` (5), `materials/antd-vue1/src/lowcode/button/meta copy.ts`.
- Checked with temporary configs:
  - build configs: 2 errors, both `deps.onlyBundle: false` widened to
    `boolean` in the renderer tsdown configs (introduced by
    20261114-0208-dev-watch, not committed yet);
  - tools tests: 0 errors;
  - renderer tests: errors common to both versions in
    `core/tests/simulator/router.test.ts` (10, stub documents vs
    `DocumentModel`), `core/tests/data-source/data-source.test.ts` (5,
    `JSFunction` literals typed `string`), vue2 tests using `Array.at` (lib),
    `vue2/tests/adapter-h.test.ts` (2); exact numbers once each version
    checks only its own setup file.
- Biome: 9 warnings: unused imports (5 in engine-ext style-setter, left by
  the `StyleChange` migration; 2 in element-ui metas), 2 implicit-any
  `let` in engine-ext.

## Proposal

1. Renderer tsdown configs: type `umd()` as tsdown `UserConfig` so literals
   keep their types (fixes `onlyBundle`).
2. Coverage:
   - renderer vue2/vue3: `tsconfig.json` also includes `tsdown.config.ts`,
     `../core/tests` (without the other version's setup file) and its own
     `tests`, with the test-time module mapping of `vitest.config.ts`
     (`vue`, `vue-router`, `@cdlab996/lowcode-vue-core`) as `paths`;
   - plugins and tools: include their `tsdown.config.ts` /
     `vite.config.ts` and `tests`;
   - root: a `tsconfig.node.json` for `vitest.config.ts`, run by the root
     `lint:type`.
3. Fix the reported errors in tests by typing the test data (stub helpers
   typed against the engine interfaces, `JSFunction` literals `as const` or
   typed), not by `any`/`@ts-expect-error`.
4. Biome warnings: remove the unused imports, type the two `let`s.
5. Delete the leftovers (`backup` directories, `meta copy.ts`): not built,
   not exported, duplicates of live files.

## Risks

- Tests compile against both Vue typings; some helpers may need small
  version-neutral typing. No runtime change intended; the suite guards it.
- Deleting the backup files is not reversible outside git history.

## Scope

Renderer and tools tsconfigs / tsdown configs, plugin tsconfigs, a root
`tsconfig.node.json` and `lint:type` script, test files with type errors,
5 engine-ext / 2 element-ui files for warnings, leftover deletions.

## Alternatives

- Keep tests out of `lint:type` and only fix today's editor errors:
  the gap stays; rejected.

## Annotations

- Implementation notes:
  - The renderer tsconfigs map `vue` / `vue-router` per version (as the
    test projects do). Before, the core resolved `vue` to its own Vue 3 dev
    dependency even when checked through the Vue 2 distribution; with the
    mapping, Vue 2 typings rejected `defineRenderer`: the custom
    `__renderer__` option (now declared through `ComponentCustomOptions`)
    and the opaque adapter VNode returned by `render` (typed `never`).
  - `setCompRootData` takes an `HTMLElement` and asserts it is a component
    root, so callers need no cast.
  - Typing `formatTemp` in the event bind dialog exposed two more
    `substr` calls (replaced with `substring`).
  - Root `@types/node` dev dependency for `tsconfig.node.json`.
  - Verified: `lint:type` covers every tracked TS file except the
    create-lowcode templates and passes; Biome clean; 310 tests; designer,
    setters and ext interaction E2E on both Vue versions.
