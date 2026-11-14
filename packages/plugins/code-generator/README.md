# @cdlab996/lowcode-plugin-code-generator

Code generation for the LowCode Engine designer: a 出码 button in the top bar
generates a Vite + Vue project from the current schema with
[`@cdlab996/lowcode-code-generator`](../../tools/code-generator), shows its
files and what could not be exported, and downloads it as a zip.

```ts
import { plugins } from '@alilc/lowcode-engine'
import CodeGenerator from '@cdlab996/lowcode-plugin-code-generator'

await plugins.register(CodeGenerator, { vue: 3, name: 'my-app' })
```

| Option | Description                                   |
| ------ | --------------------------------------------- |
| `vue`  | `2` (Vue 2.7) or `3` (default).               |
| `name` | Package and zip name (default `lowcode-app`). |

Component imports come from the materials' code generation manifests: the
`codegen` field of the asset packages, or the `assets.json` next to a
package script (written by `@cdlab996/lowcode-material-builder`).
