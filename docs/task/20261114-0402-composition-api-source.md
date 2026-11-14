# 20261114-0402-composition-api-source Composition API in the source panel

- **status**: completed
- **priority**: P1
- **owner**: claude/session-gn15nk27
- **createdAt**: 2026-11-14 04:02

## Description

The Vue source panel writes and reads the Options API (`data`, `methods`,
`mounted`). Make the Composition API (`setup()`) the default: default
template and sample schemas use `setup()`, and the bindings returned by
`setup()` are listed by the variable and event binding dialogs. Also fix the
missing `break` after `emits` in the parser.

## ActiveForm

Moving the source panel to the Composition API

## Dependencies

- **blocked by**: (none)
- **blocks**: (none)

## Notes

Plan: 20261114-0403-composition-api-source

- complete: Unit tests, lint, lint:type, 318 tests and designer E2E on both Vue versions pass.
