# lowcode-engine-vue - Task List

> Updated: 2026-11-13

## Usage

Each task is a single line linking to its detail file. All detailed information lives in `docs/task/<timestamp>-<feature-slug>.md`.

### Format

- [ ] [**20260907-1428-add-endpoint Add endpoint**](20260907-1428-add-endpoint.md) `P1`

### Status Markers

| Marker | Meaning                                   |
| ------ | ----------------------------------------- |
| `[ ]`  | Pending                                   |
| `[-]`  | In progress                               |
| `[x]`  | Completed                                 |
| `[~]`  | Closed / Won't do                         |
| `[d]`  | Deleted detail file; index entry retained |

### Priority: P0 (blocking) > P1 (high) > P2 (medium) > P3 (low)

### Rules

- Only update the checkbox marker; never delete the line or change its other content. If the detail file is deleted, mark the entry `[d]`.
- Record change history and deletion reasons in `docs/changelog.md`; update affected dependency and plan references.
- New tasks append to the end.
- See each `<timestamp>-<feature-slug>.md` for full details, except `[d]` entries whose files have been deleted; consult `docs/changelog.md` for their history.

---

## Tasks

- [x] [**20261113-2358-create-lowcode-scaffold Re-introduce the create-lowcode scaffold**](20261113-2358-create-lowcode-scaffold.md) `P1`
- [ ] [**20261114-0009-simulator-incremental-assets Support incremental assets in the simulator renderer**](20261114-0009-simulator-incremental-assets.md) `P2`
