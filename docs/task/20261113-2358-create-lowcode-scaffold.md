# 20261113-2358-create-lowcode-scaffold Re-introduce the create-lowcode scaffold

- **status**: completed
- **priority**: P1
- **owner**: claude/session-gn15nk27
- **createdAt**: 2026-11-13 23:58

## Description

Bring back the material-project scaffold that was removed with the Vue CLI
tooling (`create-lowcode` from cdLab996/lowcode-engine-tools2.7), redesigned
for the current toolchain: Vite + `@cdlab996/lowcode-material-builder`,
Vue 2.7 or Vue 3, no Vue CLI / babel / eslint / stylelint.

Acceptance:

- `pnpm create @cdlab996/lowcode <dir>` generates a material project for the
  chosen Vue version (prompt or `--vue 2|3`), with an example component.
- The generated project installs, type-checks and builds; its `assets.json`
  loads in the designer and the example component renders, for both versions.
- Tests cover generation for both versions and the overwrite handling.
- Released with the `tools` group; README and docs updated.

## ActiveForm

Re-introducing the create-lowcode scaffold

## Dependencies

- **blocked by**: (none)
- **blocks**: (none)

## Notes

Plan: 20261114-0001-create-lowcode-scaffold

- complete: Unit tests, generated-project checks (install/lint/lint:type/build) and designer rendering passed for Vue 2.7 and Vue 3.
