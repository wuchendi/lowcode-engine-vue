# Architecture

- Renderer: one core for Vue 2.7 and Vue 3 behind a version adapter; see
  [design/unified-renderer.md](./design/unified-renderer.md).
- Packages: `packages/renderer` (core + Vue 2.7 / Vue 3 distributions),
  `packages/plugins` (designer plugins and the engine-ext setters, React),
  `packages/materials` (component materials), `packages/tools` (material
  builder, `create-lowcode` scaffold for material projects, Vue code
  generator), `packages/tsconfig`
  (`@cdlab996/lowcode-tsconfig`: `base` / `vue` / `react` / `node` presets
  every tsconfig extends).
- Apps: `apps/designer`, one designer for both Vue versions (`?vue=2|3`).
- Code generation: `@cdlab996/lowcode-code-generator` turns a project schema
  into a Vite + Vue 2.7 / Vue 3 project; component imports come from the
  `codegen` manifest the material builder writes into `assets.json`. The
  designer's 出码 button (`@cdlab996/lowcode-plugin-code-generator`) previews
  and downloads it.
