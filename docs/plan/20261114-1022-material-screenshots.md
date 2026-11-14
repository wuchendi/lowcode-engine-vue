# 20261114-1022-material-screenshots Component screenshots for the materials

- **status**: completed
- **createdAt**: 2026-11-14 10:22
- **approvedAt**: 2026-11-14 10:22
- **relatedTask**: 20261114-1022-material-screenshots

## Context

- The components pane shows `snippets[].screenshot`; the old hand-written
  metas had about 100 (Ant Design thumbnails of the official low-code
  materials, 67 of the 223 component types), the generated ones have none.
- The canvas renders every snippet (render check of
  20261114-0812-material-metas-docs).

## Proposal

1. Titles: drop the parenthesised notes of the doc navigation titles.
2. Capture: render each snippet in the designer canvas (one component on an
   empty page), screenshot it and fit it into a fixed-size WebP thumbnail;
   stored as `packages/materials/<m>/screenshots/<folder>.webp`.
   Components with nothing visible (modals, zero-size) use a fallback image.
3. Material builder: copy `screenshots/` into the output (build and dev);
   the generated meta entry resolves relative snippet screenshots
   (`./screenshots/x.webp`) against the URL of `meta.js`.
4. Metas: `snippets[0].screenshot` points at the material's image.

Verification: builder unit tests (copy, URL resolution); the components pane
shows the images on both Vue versions (E2E); material audit tests.

## Risks

- Package size: about 560 small WebP files.
- `document.currentScript` is only set while `meta.js` runs synchronously,
  which is how the asset loader runs it.

## Scope

`packages/tools/material-builder`, `packages/materials/*` (screenshots,
metas, READMEs), docs.

## Alternatives

- Reuse the Ant Design thumbnails plus category icons, or one icon set:
  smaller, but not what the components look like; the user chose screenshots.

## Annotations

- 2026-11-14: implementation notes.
  - Capture (a script outside the repository, like the meta generator):
    each snippet in a 200px wide box on an empty canvas page (desktop canvas
    for Element and Ant Design, mobile for Vant), screenshot, trimmed to
    what is drawn and fitted into 240x160 WebP; nearly white captures and
    modals use `fallback.svg`. 393 thumbnails, about 1.6 MB.
  - Snippet fixes found by the review: text components (Button, Tag...) and
    components with a string `text` prop are no containers (the design-mode
    placeholder showed in them); containers start with text content; Alert,
    Avatar, Badge, Element Icon, Vant Form and Steps got snippets.
  - The designer development server sent every runtime file but CSS as
    JavaScript: SVG images failed; it now sends the type of the extension.
  - Seen in the thumbnails, not fixed here: components that read or clone
    their children's vnodes (Element UI Tabs; Ant Design Vue Tabs, Steps
    1.x, Collapse 4.x) render wrong in the canvas because every node is
    wrapped in a Leaf component.
