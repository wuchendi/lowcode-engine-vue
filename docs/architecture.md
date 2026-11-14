# Architecture

- Renderer: one core for Vue 2.7 and Vue 3 behind a version adapter; see
  [design/unified-renderer.md](./design/unified-renderer.md).
- Packages: `packages/renderer` (core + Vue 2.7 / Vue 3 distributions),
  `packages/plugins` (designer plugins and the engine-ext setters, React),
  `packages/materials` (component materials), `packages/tools` (material
  builder, `create-lowcode` scaffold for material projects).
- Apps: `apps/designer`, one designer for both Vue versions (`?vue=2|3`).
