# 20261114-1419-engine-ext-tests Tests for engine-ext-vue and no global switches

- **status**: completed
- **createdAt**: 2026-11-14 14:19
- **approvedAt**: (none)
- **relatedTask**: 20261114-1419-engine-ext-tests

## Context

Audit finding (repository audit of commit d422dd4): engine-ext-vue (setters and binding dialogs, about 8500 lines) has no tests and reads window.lowcodeSetterSwitch.

## Proposal

- Tests under `packages/plugins/engine-ext-vue/tests` (the `plugins`
  Vitest project; React files are tested in jsdom with
  `// @vitest-environment jsdom` and `React.createElement`):
  - `utils.test.ts`: root state / methods (schema and `setup()` bindings).
  - `style-utils.test.ts`: style data <-> CSS, units, shorthands, colors.
  - `event-bind-dialog.test.ts`: the dialog with a mocked engine lists the
    page methods, binds a new method (and adds it to the source panel) or
    an existing one.
  - `setters.test.ts`: String, Bool, Number and RadioGroup setters render
    the value and report changes.
- `window.lowcodeSetterSwitch` is gone: it only showed a `props.xxx` tip in
  the event dialog, a React pattern (Vue components emit events); the tip
  and its messages are removed.
- `tsconfig.json` type-checks the tests.

## Risks

None: no behaviour change for designers that did not set the global.

## Scope

`packages/plugins/engine-ext-vue` (tests, event dialog, locale, tsconfig,
`react-dom` dev dependency).

## Alternatives

- Keeping the switch as a plugin option: no consumer.

## Annotations

- Verified: 27 plugin tests, engine-ext type-check and build.
