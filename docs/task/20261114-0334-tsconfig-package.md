# 20261114-0334-tsconfig-package Shared tsconfig package

- **status**: completed
- **priority**: P2
- **owner**: claude/session-gn15nk27
- **createdAt**: 2026-11-14 03:34

## Description

Add `packages/tsconfig` (`@cdlab996/lowcode-tsconfig`), modelled on
`/srv/work/projects/packages/tsconfig` (`@cdlab/tsconfig`): config-only JSON
presets (a base plus overlays) that every package and app extends instead of
`../../../tsconfig.json`.

Acceptance: every workspace tsconfig (except the create-lowcode templates)
extends a preset; compiler options of each project are unchanged;
`lint:type`, tests and builds pass.

## ActiveForm

Adding the shared tsconfig package

## Dependencies

- **blocked by**: (none)
- **blocks**: (none)

## Notes

Plan: 20261114-0334-tsconfig-package

- complete: showConfig/listFiles identical on 21 projects; lint, lint:type, tests, builds pass.
