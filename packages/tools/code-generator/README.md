# @cdlab996/lowcode-code-generator

Generates a Vite + Vue project (Vue 2.7 or Vue 3) from a LowCode Engine
project schema. Runs in the browser (the designer's 出码 button) and in Node.

```ts
import { generateProject, toZip } from '@cdlab996/lowcode-code-generator'

const { files, warnings } = await generateProject(schema, {
  vue: 3,
  packages, // asset packages with their `codegen` manifests
  name: 'my-app',
  format: true,
})
const zip = toZip(files) // Uint8Array
```

| Option     | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| `vue`      | `2` (Vue 2.7) or `3`.                                          |
| `packages` | `{ package, codegen }` of each material package.               |
| `name`     | Package name of the generated project (default `lowcode-app`). |
| `format`   | Format the files with prettier 3 (loaded on demand).           |

`warnings` lists what is not exported as is (components missing from the
manifests, directives to register, data source URLs relative to the
designer, ...).

## CLI

```bash
lowcode-codegen schema.json --vue 3 --assets assets.json --base https://cdn.example.com/ --out my-app
lowcode-codegen page.json --vue 2 --assets https://cdn.example.com/assets.json --zip my-app.zip
```

The schema is a project schema (`componentsTree`) or a single root schema.
`--assets` is the engine assets JSON of the materials; packages without a
`codegen` manifest get it from the `assets.json` next to their script, whose
relative URLs resolve against `--base` (default: the assets URL). Warnings go
to stderr; the output directory must be empty. `--name` sets the package
name, `--no-format` skips prettier.

Components missing from the schema's `componentsMap` are looked up by name
in the manifests.

`materialPackages(packages, fetch?, base?)` is the manifest lookup the CLI
and the designer plugin use.

## Output

- `src/pages/<fileName>.vue` per `Page` root and `src/components/<fileName>.vue`
  per `Block` / `Component` root. The template mirrors the renderer
  (`condition`, `loop` / `loopArgs`, slots, events, i18n texts); the script is
  the source panel's code (`meta.originCode`) with the component imports
  added, or an Options API component from `state` / `methods` / `lifeCycles`;
  the root `css` becomes a `<style>` block.
- `src/lowcode/`, when a page uses them: data sources (`fetch`, `jsonp`),
  `utils`, `constants` and `i18n`, given to each page through a mixin
  (`this.dataSourceMap`, ...); in `setup()`, `this.<context>` is rewritten to
  the page's `lowcode` object.
- `v-loading`, which the designer canvas gets from the material libraries, is
  registered in `src/main.js` from Element UI (Vue 2.7) or Element Plus
  (Vue 3).
- `package.json`, `vite.config.js`, `index.html`, `src/main.js`, `src/App.vue`,
  and `src/router.js` (vue-router 3 / 5, hash history) when there are several
  pages.

Component imports come from the `codegen` manifest that
`@cdlab996/lowcode-material-builder` writes into `assets.json`:

```json
{
  "exports": { "VanButton": { "package": "vant", "exportName": "Button" } },
  "styles": ["vant/lib/index.css"],
  "dependencies": { "vant": "^4.8.10" }
}
```

## License

[MIT](https://github.com/wuchendi/lowcode-engine-vue/blob/main/LICENSE)
