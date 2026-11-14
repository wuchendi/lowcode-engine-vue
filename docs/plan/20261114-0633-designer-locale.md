# 20261114-0633-designer-locale Designer Chinese / English switch

- **status**: completed
- **createdAt**: 2026-11-14 06:33
- **approvedAt**: 2026-11-14 06:40
- **relatedTask**: 20261114-0632-designer-locale

## Context

- `@alilc/lowcode-plugin-zh-en` 1.0.0 is a left-area widget that calls the
  engine's `globalLocale.setLocale()` and reloads; the engine and the
  official plugins translate themselves.
- Our UI is Chinese only: about 90 strings in `engine-ext-vue` (setters,
  variable / event binding dialogs; some setters already use the engine's
  `createIntl`), about 40 in `apps/designer` (top bar, pages panel, dialogs),
  about 25 in the other plugins (code generator, vue-code-editor,
  set-doc-url, directive-loading, manual).
- Material titles (component names in the components pane) come from the
  material metas, in Chinese.

## Proposal

1. Register `@alilc/lowcode-plugin-zh-en` (switch at the bottom of the left
   bar).
2. Translate our UI with the engine's
   `common.utils.createIntl({ 'zh-CN': ..., 'en-US': ... })`, one
   `locale/{zh-CN,en-US}.json` per package (the pattern the setters already
   use): designer app, the plugins above and engine-ext-vue.
3. Not included: material titles and descriptions (six libraries of metas),
   the canvas placeholder texts of the renderer.

Verification: unit test that every package's `en-US` and `zh-CN` have the
same keys; E2E in English: top bar, pages panel, code generator dialog,
source panel, a setter and the binding dialogs show English, no Chinese
left in those areas (checked by a CJK regex), and back to Chinese.

## Risks

- Strings built at module load (before the locale is read) would not
  switch; the switch reloads the page, so reading the locale at render time
  is enough.

## Scope

`apps/designer`, `packages/plugins/*` (all six), new dependency
`@alilc/lowcode-plugin-zh-en`.

## Alternatives

- Only the switch, no translation of our UI: a half-English designer;
  rejected.
- Include material metas (`title` as i18n objects): large, can follow.

## Annotations

- 2026-11-14: implementation notes.
  - Titles rendered by the engine (panel descriptions, setter titles, field
    tips) use `{ type: 'i18n', 'zh-CN', 'en-US' }` objects instead of intl.
  - The engine parses messages as ICU: an HTML `<br>` in a message stopped
    the designer from starting; messages carry no HTML (checked by the
    locale test) and the variable dialog turns line breaks into `<br>`.
  - Fusion components default to Chinese texts (dialog buttons, empty
    table): the dialogs and the events table get them from our messages.
  - The expression setter's own Chinese-only messages (`generateI18n`) and
    the `intl-messageformat` dependency of engine-ext-vue were dropped; the
    unused `WORDS` of vue-code-editor too.
  - The engine defaults to the browser language, so an English browser
    opens the designer in English.
