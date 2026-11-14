# 20261114-1419-designer-self-host Designer without third-party CDN

- **status**: completed
- **createdAt**: 2026-11-14 14:19
- **approvedAt**: (none)
- **relatedTask**: 20261114-1419-designer-self-host

## Context

Audit finding (repository audit of commit d422dd4): The designer loads the engine, React, Fusion, lodash and moment from alicdn at versions different from the workspace catalogs.

## Proposal

- `vite.config.mts` serves (and copies on build) the engine 1.3.4, React /
  ReactDOM 16.14, prop-types, lodash, moment, Fusion Next and
  `@alifd/theme-lowcode-light` 0.2.1 from npm under `/runtime/vendor/`;
  `index.html` loads them instead of the alicdn scripts and styles.
- The fonts (Fusion icon font, Roboto), images and icon scripts referenced
  by these packages, the official plugins, engine-ext and the designer are
  kept in `apps/designer/public/vendor` (woff2/woff only). A `localize`
  rewrite points every alicdn URL whose file is kept there to
  `/vendor/<file>`: in the bundled modules (a Vite transform, also for
  pre-bundled dependencies) and in the served/copied vendor and engine-ext
  files. engine-ext's published bundle keeps its URLs.
- Monaco is self-hosted by 20261114-1419-audit-fixes.

## Risks

- The vendored versions follow the catalog (React 16.14, Next 1.27, lodash
  4.17, moment 2.31) instead of the CDN's (16.13, 1.26, 4.6, 2.24).
- An alicdn URL added later loads from the CDN until its file is added to
  `public/vendor`; the E2E check fails on any third-party request.

## Scope

`apps/designer` (`index.html`, `vite.config.mts`, `public/vendor`, README),
`e2e/designer.spec.ts`.

## Alternatives

- Patching the packages (pnpm patches) per URL: more places to maintain.

## Annotations

- Page content (images of the designed page, e.g. the demo's vant image) is
  not rewritten; the E2E check ignores image requests of the canvas.
- Verified: E2E 10/10 on the production build (new: no third-party requests
  in either Vue version, including the source panel), screenshot with icon
  font and Roboto loaded.
