# @cdlab996/create-lowcode

Creates a [LowCode Engine](https://github.com/alibaba/lowcode-engine) material
project for Vue 2.7 or Vue 3, built with
[`@cdlab996/lowcode-material-builder`](../material-builder).

```bash
pnpm create @cdlab996/lowcode my-materials
# or: npm create @cdlab996/lowcode@latest my-materials
```

Options:

| Option       | Description                                       |
| ------------ | ------------------------------------------------- |
| `[dir]`      | Project directory (asked when omitted).           |
| `--vue 2\|3` | Vue version; `2` is Vue 2.7 (asked when omitted). |
| `--force`    | Empty the directory when it is not empty.         |

Without a terminal, omitted answers default to `lowcode-materials` and Vue 3,
and a non-empty directory needs `--force`.

The project contains an example `XButton` component (SFC) with its meta, a
Vite config declaring the material options, Biome and `vue-tsc`. Vue 2.7
projects compile SFCs with `@vitejs/plugin-vue2` and ship a
`pnpm-workspace.yaml` that allows esbuild's install script.
