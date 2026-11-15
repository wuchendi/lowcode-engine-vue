# 20261115-1200-public-core-unified-release Public core package and one version for all packages

- **status**: completed
- **priority**: P2
- **owner**: claude/session-gn15nk27
- **createdAt**: 2026-11-15 12:00

## Description

`@cdlab996/lowcode-vue-core` is private and bundled into vue2 / vue3 and the
code generator. Publish it as a package of its own (built to `dist`), make
those packages depend on it, and release every public package under one
version and one `v<version>` tag (bumpp), replacing the per-group tags.

## ActiveForm

Publishing the core package and unifying the release

## Dependencies

- **blocked by**: (none)
- **blocks**: (none)

## Notes

One version, `bumpp -r`, `pnpm -r publish` on a `v*` tag, `workspace:`
dependencies, tsdown `dist` builds, publint.

- complete: core published, one version, v* release
