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
