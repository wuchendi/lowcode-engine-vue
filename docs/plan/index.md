# lowcode-engine-vue - Plan Index

> Updated: 2026-11-13

## Usage

Each plan is a single line linking to its detail file. All detailed information lives in `docs/plan/<timestamp>-<feature-slug>.md`.

### Format

- [ ] [**20260907-1440-add-endpoint Add endpoint**](20260907-1440-add-endpoint.md) `YYYY-MM-DD`

### Status Markers

| Marker | Meaning                                   |
| ------ | ----------------------------------------- |
| `[ ]`  | Draft / Pending review                    |
| `[-]`  | Approved / Implementing                   |
| `[x]`  | Completed                                 |
| `[~]`  | Rejected / Abandoned                      |
| `[d]`  | Deleted detail file; index entry retained |

### Rules

- Only update the checkbox marker; never delete the line or change its other content. If the detail file is deleted, mark the entry `[d]`.
- Record change history and deletion reasons in `docs/changelog.md`; update affected task and plan references.
- New plans append to the end.
- See each `<timestamp>-<feature-slug>.md` for full details, except `[d]` entries whose files have been deleted; consult `docs/changelog.md` for their history.

---

## Plans

- [x] [**20261114-0001-create-lowcode-scaffold Re-introduce the create-lowcode scaffold**](20261114-0001-create-lowcode-scaffold.md) `2026-11-14`
- [x] [**20261114-0118-simulator-incremental-assets Support incremental assets in the simulator renderer**](20261114-0118-simulator-incremental-assets.md) `2026-11-14`
- [x] [**20261114-0209-dev-watch Rebuild workspace packages during designer development**](20261114-0209-dev-watch.md) `2026-11-14`
- [x] [**20261114-0320-type-check-coverage Type-check tests and build configs**](20261114-0320-type-check-coverage.md) `2026-11-14`
- [x] [**20261114-0334-tsconfig-package Shared tsconfig package**](20261114-0334-tsconfig-package.md) `2026-11-14`
- [x] [**20261114-0403-composition-api-source Composition API in the source panel**](20261114-0403-composition-api-source.md) `2026-11-14`
- [x] [**20261114-0437-vue-code-generator Vue code generation (phases 1-3)**](20261114-0437-vue-code-generator.md) `2026-11-14`
- [x] [**20261114-0548-page-management Multi-page management in the designer**](20261114-0548-page-management.md) `2026-11-14`
- [x] [**20261114-0633-codegen-cli Code generation CLI**](20261114-0633-codegen-cli.md) `2026-11-14`
- [x] [**20261114-0633-designer-locale Designer Chinese / English switch**](20261114-0633-designer-locale.md) `2026-11-14`
- [x] [**20261114-0633-blocks Blocks (reusable snippets)**](20261114-0633-blocks.md) `2026-11-14`
- [x] [**20261114-0633-lowcode-components Low-code components**](20261114-0633-lowcode-components.md) `2026-11-14`
- [x] [**20261114-0812-material-metas-docs Align the material metas with the component docs**](20261114-0812-material-metas-docs.md) `2026-11-14`
- [x] [**20261114-1022-material-screenshots Component screenshots for the materials**](20261114-1022-material-screenshots.md) `2026-11-14`
- [x] [**20261114-1419-audit-fixes Audit fixes: Leaf marker, Dependabot, release order, editor types, builds**](20261114-1419-audit-fixes.md) `2026-11-14`
- [x] [**20261114-1419-repo-scripts-e2e Material scripts and E2E tests in the repository and CI**](20261114-1419-repo-scripts-e2e.md) `2026-11-14`
- [x] [**20261114-1419-designer-self-host Designer without third-party CDN**](20261114-1419-designer-self-host.md) `2026-11-14`
- [x] [**20261114-1419-designer-storage Designer storage interface and project export / import**](20261114-1419-designer-storage.md) `2026-11-14`
- [x] [**20261114-1419-engine-ext-tests Tests for engine-ext-vue and no global switches**](20261114-1419-engine-ext-tests.md) `2026-11-14`
- [x] [**20261114-1419-schema-semantics Shared schema semantics for the renderer and the code generator**](20261114-1419-schema-semantics.md) `2026-11-14`
- [x] [**20261114-1419-renderer-without-leaf Render nodes without the Leaf wrapper**](20261114-1419-renderer-without-leaf.md) `2026-11-14`
