# 20261128-1000-dependency-upgrade Upgrade the dependencies to their latest versions

- **status**: completed
- **priority**: P2
- **owner**: wudi
- **createdAt**: 2026-11-28 10:00

## Description

Five Dependabot pull requests are open (#13 to #17). Three of them cannot
pass alone: the Biome bump is split over the root and the two scaffold
templates, and `create-lowcode/tests/versions.test.ts` requires the three
to match. Upgrade everything in one change instead.

## ActiveForm

Upgrading the dependencies

## Dependencies

- **blocked by**: (none)
- **blocks**: (none)

## Notes

Within the pinned lines (Vue 2 stack, React 16, Monaco 0.52, the component
libraries): Biome 2.6.9, Playwright 1.65.1, @types/node 26.6.11, Vite 8.4.0,
Vitest 5.1.2, intl-messageformat 12.2.1, Vue 3.5.46, vue-router 5.5.3,
@babel/types 8.1.3; the scaffold templates, the generated projects and the
source panel typings follow.

- complete: catalogs, templates, code generator versions, lockfile
