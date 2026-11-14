# 20261114-0009-simulator-incremental-assets Support incremental assets in the simulator renderer

- **status**: completed
- **priority**: P2
- **owner**: claude/session-gn15nk27
- **createdAt**: 2026-11-14 00:09

## Description

`material.loadIncrementalAssets()` fails in the designer with
`TypeError: n.load is not a function`: the engine's host calls
`renderer.load(asset)` (and the React simulator also exposes
`loadAsyncLibrary`), but the Vue simulator renderer
(`packages/renderer/core/src/simulator/simulator.ts`) has no `load`.

Acceptance: `loadIncrementalAssets` with a new package and meta makes the
component available in the canvas for both Vue versions; covered by a test.

## ActiveForm

Supporting incremental assets in the simulator renderer

## Dependencies

- **blocked by**: (none)
- **blocks**: (none)

## Notes

Found while verifying 20261113-2358-create-lowcode-scaffold.
Plan: 20261114-0118-simulator-incremental-assets

- complete: Tests on both Vue versions and designer incremental-assets E2E passed.
