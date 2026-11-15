# 20261115-2000-duplication-cleanup Remove duplicated functionality and dead code

- **status**: completed
- **priority**: P1
- **owner**: wudi
- **createdAt**: 2026-11-15 20:00

## Description

A repository audit for duplicated functionality and redundant code found:
the materials reference a `CIconSetter` that only the designer app
registered; the binding setters read the first page of the project; the
designer overrode the expression setter with a weaker one; dead and
duplicated helpers in the core and the adapters; unused dependencies.

## ActiveForm

Removing duplicated functionality and dead code

## Dependencies

- **blocked by**: (none)
- **blocks**: (none)

## Notes

Not done, on purpose: one build config for vue2 / vue3 (a file outside the
packages cannot resolve tsdown), a shared helper for the two small
metadata plugins and the per-package console banner (separate published
packages), merging the guards of `shared/schema.ts` with `schema-guards.ts`
(the schema entry stays self-contained for the code generator).

- complete: setters, core and adapters, dependencies, scripts
