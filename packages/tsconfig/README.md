# @cdlab996/lowcode-tsconfig

Shared `tsconfig.json` presets of the lowcode-engine-vue workspace: one
`base.json` and overlays that only change what differs. Config only: raw JSON
at the package root, no build, not published.

```json
// package.json
{ "devDependencies": { "@cdlab996/lowcode-tsconfig": "workspace:*" } }
```

```json
// tsconfig.json
{
  "extends": "@cdlab996/lowcode-tsconfig/vue.json",
  "include": ["./src"]
}
```

Consumers keep their own `paths`, `include`, `exclude` and project-specific
options.

| Preset       | Used by                                                | Changes vs `base.json` |
| ------------ | ------------------------------------------------------ | ---------------------- |
| `base.json`  | everything (directly or through a preset)              | —                      |
| `vue.json`   | renderer (core, vue2, vue3), materials                 | `jsx: preserve`        |
| `react.json` | designer plugins, engine-ext-vue, the designer app     | `jsx: react` (classic) |
| `node.json`  | material builder, create-lowcode, `tsconfig.node.json` | `types: ["node"]`      |

The create-lowcode templates do not use it: generated projects stand alone.
