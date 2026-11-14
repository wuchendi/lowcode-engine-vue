# 20261114-1419-designer-storage Designer storage interface and project export / import

- **status**: completed
- **createdAt**: 2026-11-14 14:19
- **approvedAt**: (none)
- **relatedTask**: 20261114-1419-designer-storage

## Context

Audit finding (repository audit of commit d422dd4): Projects only live in localStorage behind ad-hoc helpers; there is no export or import.

## Proposal

- `src/utils/project-storage.ts`: `ProjectRecord` (schema + packages),
  `ProjectStorage` (`load` / `save`, async so a backend fits),
  `createLocalProjectStorage(storage, vue)` (the existing
  `projectSchema:vue<n>` / `packages:vue<n>` keys), and the project file:
  `serializeProject` / `parseProjectFile` (`format`
  `lowcode-engine-vue-project`, `version` 1, `vue`), rejecting other files
  and projects of the other Vue version (`ProjectFileError`).
- `src/utils/store.ts`: the designer's `projectStorage`, `currentProject()`
  and `saveProject()` replace the localStorage helpers; the init plugin, the
  Vue switch, save / preview and `preview.ts` use them.
- Top bar: **导出** downloads the project file, **导入** reads one, asks
  for confirmation, saves it and reloads the designer.

## Risks

- Import replaces the saved project of that Vue version (confirmed first).

## Scope

`apps/designer` (utils, actions, init, preview, locale, README), `e2e`.

## Alternatives

- Importing into the running designer (documents, assets): reloading from
  the saved project reuses the start-up path.

## Annotations

- Verified: unit tests (storage, file round trip, invalid files, other Vue
  version), E2E: export -> import into a fresh browser context, refusal of
  a Vue 2 file in Vue 3, preview of the saved project; full E2E 13/13.
