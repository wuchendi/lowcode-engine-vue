# 20261114-0117-dependency-security-alerts Resolve the open Dependabot security alerts

- **status**: pending
- **priority**: P2
- **owner**: (unassigned)
- **createdAt**: 2026-11-14 01:17

## Description

Dependabot security updates fail for every open alert, all on transitive
dependencies:

- `swiper` < 6.5.1 (critical), via `@alifd/meet-react-component-one`
- `decode-uri-component` <= 0.5.0 (high), via `@alilc/lowcode-plugin-inject`
  (query-string) and `source-map-resolve`
- `glob` 9-14.0.1 / `minimatch` 7-11.0.0 (medium), `uuid` < 11.1.1 (medium)
- `vue` 2 / `vue-template-compiler` (low / medium): Vue 2 is EOL, no
  patched 2.x release (`dependency_file_not_supported`)

Acceptance: pnpm `overrides` for the alerts that can be lifted without
breaking their dependents (verified by the full suite and the designer E2E),
and the Vue 2 alerts dismissed with a reason.

## ActiveForm

Resolving the Dependabot security alerts

## Dependencies

- **blocked by**: (none)
- **blocks**: (none)

## Notes

Dependabot runs: security_update_not_possible / dependency_file_not_supported
(2026-11-13).
