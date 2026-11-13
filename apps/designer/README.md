# Designer

LowCode Engine designer for the Vue renderers of this repository. One app
serves both Vue versions:

- `/?vue=3` (default) — Vue 3 canvas and the Vue 3 materials
- `/?vue=2` — Vue 2.7 canvas and the workspace materials
  (`@cdlab996/lowcode-materials-*`)

Add `client=pc` for the desktop canvas (mobile by default).

## Run

```bash
pnpm dev        # from the repository root (needs nsl)
pnpm -C apps/designer dev:bare   # plain Vite on port 5577
```

The engine, React, Fusion and the Vue setters come from CDN scripts in
`index.html`; `vite.config.mts` maps their imports to those globals. The
renderer bundles of `packages/renderer/vue{2,3}/dist` and the material builds
are served under `/runtime/` and `/materials/` (copied into the output on
build), so rebuild a package and reload to see a change.

Saving stores the schema in `localStorage` per Vue version; **Preview** opens
`preview.html` with the same version, which renders the saved schema with
`dist/renderer.umd.js`.
