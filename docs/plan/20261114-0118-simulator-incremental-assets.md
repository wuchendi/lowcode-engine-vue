# 20261114-0118-simulator-incremental-assets Support incremental assets in the simulator renderer

- **status**: completed
- **createdAt**: 2026-11-14 01:18
- **approvedAt**: 2026-11-14 01:19
- **relatedTask**: 20261114-0009-simulator-incremental-assets

## Context

- `material.loadIncrementalAssets(assets)` (designer) builds the new metas,
  then `host.setupComponents(packages)`, which calls
  `renderer.load(libraryAsset)` and, when the host has async libraries,
  `renderer.loadAsyncLibrary(asyncLibraryMap)`; it then merges the assets and
  calls `refreshComponentMetasMap()`, which gives `designer.componentsMap` a
  new identity. `host.mountContentFrame` also calls `loadAsyncLibrary` at
  startup when async libraries exist.
- `IPublicTypeSimulatorRenderer` declares both `load(asset): Promise<any>`
  and `loadAsyncLibrary(asyncMap)`. The React simulator implements them with
  its asset loader (`loadAsyncLibrary` also rebuilds the components).
- The Vue simulator (`packages/renderer/core/src/simulator/simulator.ts`)
  implements neither: `loadIncrementalAssets` throws
  `TypeError: n.load is not a function` (seen in the designer, both Vue
  versions), and a project with async libraries would fail at startup.
- It already has an `AssetLoader` (`shared/asset.ts`, with `load` and
  `loadAsyncLibrary`), and its `host.connect` callback rebuilds the
  components when `host.libraryMap` or `designer.componentsMap` changes, so
  the components of a loaded package appear once the metas refresh.

- Implementation finding: with `load` added, `loadIncrementalAssets` no
  longer throws and the simulator rebuilds its components (`XButton` is in
  `SimulatorRenderer.components`), but a node rendered before the rebuild
  stays `component not found`: `useLeaf` (`renderer/use.ts`) destructures
  `components` from the renderer context once at setup, so later component
  maps are never read. The same applies to the live renderer when its
  `components` prop changes.

## Proposal

- `simulator.load = (asset) => loader.load(asset)`.
- `simulator.loadAsyncLibrary = async (map) => { await
  loader.loadAsyncLibrary(map); _buildComponents() }`.
- `VueSimulatorRenderer` already declares both (inherited from the
  engine's renderer type; the simulator object is cast, which hid the gap):
  no interface change.
- `renderer/use.ts`: read `components` from the renderer context when
  rendering instead of destructuring it at setup, so nodes re-render when the
  component map changes. Test first: a renderer whose `components` prop gains
  a component re-renders a node that was `component not found` (both Vue
  versions).
- Tests first (`core/tests/simulator/assets.test.ts`, both Vue versions):
  `load` evaluates an asset (a global appears); `loadAsyncLibrary` replaces
  a promise global with its module and the component of that library
  becomes available through `getComponent`.
- Verify in the designer: `loadIncrementalAssets` with a generated
  create-lowcode material (Vue 2 and Vue 3) and render its component, no
  page errors.

## Risks

- Low: two added methods on the simulator; no existing path changes.

## Scope

`simulator.ts`, `renderer/use.ts`, two test files (simulator assets,
renderer components update), test stub typing; changelog and task/plan
records.

## Alternatives

(none)

## Annotations

- Scope revised during implementation (renderer `use.ts` fix); approved
  2026-11-14 01:24.
