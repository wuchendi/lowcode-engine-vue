# 20261114-0320-type-check-coverage Type-check tests and build configs; clear editor errors and lint warnings

- **status**: completed
- **priority**: P1
- **owner**: claude/session-gn15nk27
- **createdAt**: 2026-11-14 03:20

## Description

`pnpm lint:type` only checks each package's `src`, so editor errors in tests
and build configs go unnoticed (e.g. `deps.onlyBundle` in the renderer
tsdown configs). Make `lint:type` cover tests and build configs, fix what it
reports, clear the Biome warnings, and remove leftover files.

Acceptance: `pnpm lint:type` checks every tracked TS file except the
create-lowcode templates (checked in generated projects) and passes; `pnpm
lint` has no warnings; tests pass.

## ActiveForm

Extending type-check coverage to tests and build configs

## Dependencies

- **blocked by**: (none)
- **blocks**: (none)

## Notes

Plan: 20261114-0320-type-check-coverage

- complete: lint:type covers tests and configs and passes; Biome clean; tests and E2E pass.
