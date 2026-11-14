# 20261114-0633-lowcode-components Low-code components

- **status**: completed
- **createdAt**: 2026-11-14 06:33
- **approvedAt**: 2026-11-14 06:40
- **relatedTask**: 20261114-0632-lowcode-components

## Context

- The engine puts the `schema` of a `devMode: 'lowCode'` component
  description into `designer.componentsMap` as is; official assets give a
  project schema there (`{ componentsTree: [Component root] }`).
- Our renderer handles component-map entries that are Component roots
  (`isComponentSchema`: `componentName === 'Component'`), through the
  simulator's `createComponent`; a project schema is not recognised, and the
  runtime (preview) has no `createComponent`.
- Pages are documents of one project (pages panel); code generation writes
  `Component` roots to `src/components/<fileName>.vue` and imports them where
  a node uses that name.

## Proposal

1. Renderer (core, both versions): accept `{ componentsTree: [root] }`
   entries as component schemas; export a runtime `lowCodeComponent(schema,
   components)` used by the simulator and the preview.
2. Designer: components are documents too. The pages panel gets a 组件
   group with 新建组件 (PascalCase name, unique); a Component document is
   edited like a page (props through `initProps` in the source panel).
   Every Component document is registered as a low-code component
   (`material.loadIncrementalAssets`: description with `devMode: 'lowCode'`
   and its schema, in a 低代码组件 group of the components pane), refreshed
   when its document changes, so pages can drop it.
3. Preview: builds the low-code components from the saved Component roots.
4. Code generation: works as is (Component roots and their uses); verify.

Verification: renderer unit tests (project-schema entries, runtime
component with props) on both versions; E2E on both versions: create
`UserCard` with a prop, use it on a page with a value, edit the component
(page updates), save and reload, preview, code generation (component file,
import, build of the generated project).

## Risks

- A component used inside itself would recurse; refuse dropping a component
  into its own document.
- Refreshing metas on every change may be heavy; refresh on a debounce.

## Scope

`packages/renderer/core` (+ tests in vue2 / vue3), `apps/designer` (pages
panel, registration, preview), docs.

## Alternatives

- A separate "component mode" designer (official single-component demo):
  publishing and versioning flow without a backend; rejected for now.

## Annotations

- 2026-11-14: implementation notes.
  - `exportSchema()` lists components without a package as
    `{ devMode: 'lowCode', componentName }` in `componentsMap` (`Component`,
    `span`, ...). The renderer took the `Component` entry for a component
    schema, which recursed in the preview; `componentSchemaOf` ignores such
    entries, the preview maps the native ones to native tags, and the code
    generator only uses `componentsMap` entries with a package.
  - The simulator's `createComponent` now uses the runtime
    `lowCodeComponent` the preview uses.
  - A deleted component stays in the components pane until the designer
    reloads (assets cannot be removed incrementally).
