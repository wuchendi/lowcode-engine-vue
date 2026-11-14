# LowCode materials

Vue components and their [LowCode Engine](https://github.com/alibaba/lowcode-engine)
metas, built with `@cdlab996/lowcode-material-builder`.

## Scripts

| Command          | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| `pnpm dev`       | Rebuild on change and serve `dist` (load `assets.json` in a designer). |
| `pnpm build`     | Build the components, the metas and `assets.json` into `dist`.         |
| `pnpm lint`      | Biome lint and format check.                                           |
| `pnpm lint:type` | Type-check the components and metas with `vue-tsc`.                    |

## Layout

- `src/index.ts` exports the components.
- Each component has a `meta.ts` next to it (any `meta.*` / `*.meta.*` under
  `src`); the builder collects them into the meta library.
- `vite.config.ts` declares the material options with `lowcodeMaterial()`.

`vue` is read from the page (`window.Vue`), so it is not bundled.

TypeScript stays on 5.x: `vue-tsc` does not run on TypeScript 7 yet.
