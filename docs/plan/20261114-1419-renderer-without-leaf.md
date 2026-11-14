# 20261114-1419-renderer-without-leaf Render nodes without the Leaf wrapper

- **status**: completed
- **createdAt**: 2026-11-14 14:19
- **approvedAt**: 2026-11-14
- **relatedTask**: 20261114-1419-renderer-without-leaf

## Context

Audit finding (repository audit of commit d422dd4): Every node is wrapped in a Leaf component (use.ts:172): libraries reading their children's vnodes (Element UI Tabs, Ant Design Tabs / Steps / Collapse) render wrong in the canvas, the preview and production.

## Findings

`renderComp` (`core/src/renderer/use.ts`) renders every node as
`h(Leaf, { comp, scope, schema })`; `Leaf` (`leaf.ts`) then renders
`h(comp, props, slots)`. The Leaf component carries:

1. per-node reactivity in the designer (`useLeafStore` state subscribed to
   `node.onPropChange` / `onChildrenChange`): a change re-renders that Leaf;
2. the instance capture for the simulator (`ref` -> `triggerCompGetCtx`,
   `onUnmounted` -> `triggerCompGetCtx(schema, null)`);
3. `provide` of the current node (`useCurrentNode`, exported, no internal
   user) and of the locked state (`useLocked`, inherited through inject);
4. the scope version dependency (`useScopeVersion`).

Its cost: a parent sees `Leaf` vnodes and component instances instead of
its children.

- Libraries reading `slots.default()` vnodes (ant-design-vue 1 / 4 Select
  options, Menu sub-menus, Table columns, Tree nodes, Mentions options)
  cannot see their children: 6 (antd-vue1) and 4 (antd-vue4) components are hidden
  from the components pane (`scripts/materials/recipes.cjs` `hidden`), and
  the same schema written by hand renders wrong in the canvas, the preview
  and production.
- Vue 2 libraries using `$parent` / `$children` (Element UI Steps,
  Carousel, Tabs) need the parent-rewiring mixin of the Vue 2 adapter
  (`LEAF_MARKER`).
- One extra component instance per node.

## Proposal

Render nodes as their component vnodes, in both modes.

1. `renderComp` returns `h(comp, buildProps(...), buildSlots(...))` (per loop
   item as today). The node state is read from the leaf store (design mode,
   reactive) or derived from the schema (live mode) where the vnode is
   created. Slot functions run inside the render of the component that
   renders the slot, so a change of a node re-renders its container (the
   material component or the page), and Vue patches only what changed.
2. Instance capture: the existing function `ref` reports the instance; the
   ref's `null` call on unmount replaces `onUnmounted`. Vnode keys keep the
   `keyOf` generations.
3. Locked state: computed from the designer node and its ancestors
   (`node.isLocked`) instead of provide / inject.
4. `useCurrentNode` and its provide are removed (breaking, product-dev
   stage; no internal user).
5. The scope version is read by the renderer root render (already
   reactive); per-node reads go away with Leaf.
6. Vue 2: the `$parent` mixin and `LEAF_MARKER` are removed; Element UI's
   `$parent` lookups find the real parent.
7. Materials: `recipes.hidden` is dropped; the antd metas regenerate with
   the snippets of these components.

## Verification

- Renderer unit tests (both Vue versions) keep passing; new tests: a
  component reading `slots.default()` vnode types sees its children's
  components; Element UI style `$parent` lookups without the mixin; the
  simulator gets instances and their removal; a prop change in design mode
  re-renders the node's container only (render counters).
- E2E: every snippet renders (including the un-hidden antd components),
  setters update the canvas, select / hover / drag use the instances.

## Risks

- Designer updates re-render the container of a node instead of the node
  alone: more work per change on large containers (measured with render
  counters; acceptable if the designer stays responsive).
- Components that relied on the extra instance boundary (provide / inject
  per node) behave differently; none in the materials.

## Scope

`packages/renderer/core` (`use.ts`, `leaf.ts` -> store and state only,
context), `packages/renderer/vue2` (adapter mixin), tests,
`scripts/materials/recipes.cjs` and the antd metas.

## Alternatives

- Live mode without Leaf, design mode with it: fixes the preview and
  production, the canvas stays wrong (and differs from the preview).
- Unwrapping Leaf vnodes for specific libraries: per-library patches.

## Annotations

- Implementation notes: the renderer passes its context and scope version
  to `useLeaf` (inject does not see the same component's provide); the
  instance props (`ref` and the adapter's `unmountedHook`: Vue 3
  `onVnodeUnmounted`, Vue 2 `hook:destroyed`) are cached per vnode key, and
  nodes without slots get none, so unchanged siblings are not re-rendered
  (Vue updates a component whose vnode carries non-stable slots).
- Vue 2: default slot content without slot props is passed as children
  (as Vue 2 templates do; slots with params are marked `markScopedSlot`
  and stay scoped slots). As a scoped slot, every read of `$slots.default`
  created new vnodes without instances: Element UI's Tabs re-rendered
  forever once it could see its panes.
- Un-hiding the antd components exposed generator errors, fixed in
  `scripts/materials`: Ant Design 4's TreeNode of tree-select is
  `TreeSelectNode` (a functional component: functional components with a
  `displayName` now count), so `ATreeSelect` no longer recurses forever on
  Tree's `TreeNode`; `TableColumnGroup` only nests in its table. New antd 4
  components: `ASelectOption`, `ASelectOptGroup`, `ATreeSelectNode`, the
  Typography parts.
- Verified: renderer tests on both Vue versions (new: children vnodes seen
  by their parent, unchanged siblings not re-rendered, Element UI style
  Tabs settling), full unit suite, E2E 15/15 (every snippet renders,
  including the un-hidden components).
