import { defineConfig } from 'tsdown'

export default defineConfig((options) => ({
  dts: true,
  format: ['esm', 'cjs'],
  entry: ['./src/index.tsx'],
  target: 'ES2018',
  clean: !options.watch,
  deps: {
    dts: { neverBundle: [/^@alilc\//] },
  },
}))
