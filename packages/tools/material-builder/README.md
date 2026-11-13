# @cdlab996/lowcode-material-builder

Builds [LowCode Engine](https://github.com/alibaba/lowcode-engine) component
materials with Vite, for both the Vue 2.7 and the Vue 3 line.

## Usage

```bash
pnpm add -D @cdlab996/lowcode-material-builder vite
```

`vite.config.ts`:

```ts
import { lowcodeMaterial } from '@cdlab996/lowcode-material-builder'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    lowcodeMaterial({
      // entry: 'src/index.ts',
      // metaDir: 'src',
      // sourceMap: true,
      // assetsConfig: { baseUrl: 'https://unpkg.com/{name}@{version}' },
    }),
  ],
})
```

Add other Vite plugins (for example a Vue SFC plugin) and CSS options to the
same config; the builder uses it for every output.

```bash
lowcode-material build [--clean] [--mode <mode>]
lowcode-material dev [--host 127.0.0.1] [--port 9000] [--mode <mode>]
```

## Output

`build` writes to `build.outDir` (default `dist`):

| File                                | Content                                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| `index.js` / `index.min.js` (+ css) | Component library, assigned to `window[library]`.                                               |
| `meta.js` / `meta.min.js`           | `{ components }` from every `meta.*` / `*.meta.*` file, assigned to `window[library + 'Meta']`. |
| `assets.json` / `assets.min.json`   | Assets description for the engine, pointing at `assetsConfig.baseUrl`.                          |

`library` defaults to a PascalCase form of the package name
(`@cdlab996/lowcode-materials-vant2` -> `Cdlab996LowcodeMaterialsVant2`).
A meta file may export one meta or an array of metas; metas without `npm` get
`exportName` / `subName` from `componentName` (`Select.Option`).

`dev` watches the sources, writes `assets.json` with local URLs and serves the
output directory with CORS enabled.

`vue`, `@cdlab996/lowcode-vue2` / `@cdlab996/lowcode-vue3`, `react` and
`react-dom` are read from the page globals (`Vue`, `LCVueRenderer`, `React`,
`ReactDOM`); add more with `externals` (module id -> global name).

## License

[MIT](https://github.com/wuchendi/lowcode-engine-vue/blob/main/LICENSE)
