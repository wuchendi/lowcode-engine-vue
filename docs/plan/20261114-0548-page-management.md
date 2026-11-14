# 20261114-0548-page-management Multi-page management in the designer

- **status**: completed
- **createdAt**: 2026-11-14 05:48
- **approvedAt**: 2026-11-14 05:55
- **relatedTask**: 20261114-0547-page-management

## Context

- `apps/designer/src/plugins/init.ts` opens `componentsTree.pop()` of the
  saved schema (one document); `preview.ts` renders `componentsTree[0]`;
  `utils/store.ts` saves `project.exportSchema()`, which exports every open
  document.
- The engine (1.3.4, non-workspace mode) keeps several documents per
  project: `project.openDocument(schema | id)`, `removeDocument`,
  `documents`, `onChangeDocument`.
- The Vue simulator (`packages/renderer/core/src/simulator/simulator.ts`)
  already renders every document of the project, one memory-router route per
  `fileName`, and follows the current document.
- The source panel (`packages/plugins/vue-code-editor`) reads the current
  document's schema once, when it mounts: after a page switch it would show,
  and save into the new page, the previous page's code.
- Official page plugins (`@alilc/lowcode-plugin-view-manager-pane`,
  `resource-tabs` 2.0.1) require the engine's workspace mode (resource types,
  one editor window and simulator per resource; every plugin registered per
  window). The app supplies page creation through their options anyway.
- Code generation (`@cdlab996/lowcode-code-generator`) already writes one
  file per page plus a router.

## Proposal

1. Page panel, `apps/designer/src/plugins/pages.tsx` (left area PanelDock
   "页面", app-local plugin):
   - lists the project's Page documents by `fileName`, marks the current one;
     click switches (`project.openDocument(id)`);
   - "新建页面": a dialog asking for the path (`/about`), validated (route
     form, unique); opens `{ componentName: 'Page', fileName, children: [] }`
     with the same page props as the sample;
   - delete with confirmation, except the last page.
2. Load and save: `init.ts` opens every root of the saved schema (the first
   becomes current); saving is unchanged (`exportSchema` has all
   documents).
3. Source panel: re-read the schema when the current document changes
   (`project.onChangeDocument`), so it never writes one page's code into
   another.
4. Preview: renders the page given by `?page=<fileName>` (the top bar
   preview button passes the current page), with a small page switcher when
   there are several pages; default the first page.
5. Docs: README (designer features), changelog.

Verification: unit test for the source panel switching documents (Vitest,
plugins project); E2E in both Vue versions: add `/about`, edit it, switch
back and forth (canvas and source panel follow), save, reload (both pages
back), preview each page, delete a page, and code generation lists
`src/pages/index.vue` + `src/pages/about.vue` with a router.

## Risks

- Official plugins (datasource pane, outline, schema) must follow the
  current document; the E2E covers them on switch.
- Route paths come from `fileName`; duplicates would collide, hence the
  validation.

## Scope

`apps/designer` (new pages plugin, init, preview, actions),
`packages/plugins/vue-code-editor` (document change), docs. No renderer
change expected.

## Alternatives

- Official `view-manager-pane` + `resource-tabs` in workspace mode: the
  upstream look, but it rewrites the designer setup (every plugin per
  resource window, one simulator per window) for the same result; rejected
  for now.
- Rename pages and page titles: not included; can follow.

## Annotations

- 2026-11-14: implementation notes.
  - The official data source pane and schema pane read and write
    `componentsTree[0]` and import the whole project (the schema pane saves
    the page as the only page, deleting the others). Both are registered by
    the designer with a project scoped to the current page
    (`src/utils/document-project.ts`): `src/plugins/datasource.tsx`,
    `src/plugins/schema.tsx`.
  - The source panel fix also syncs the editor's code ref (`JsEditor`), which
    was set once on mount.
  - Unit tests cover the pure helpers (`src/utils/pages.ts`,
    `document-project.ts`, a new `designer` Vitest project); the panel
    behaviour is covered by the E2E, not by a component test.
