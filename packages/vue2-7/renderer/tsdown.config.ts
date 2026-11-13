import { defineConfig } from 'tsdown'

export default defineConfig((options) => [
  {
    dts: true,
    format: ['esm'],
    entry: ['./src/index.ts'],
    target: 'ES2018',
    clean: !options.watch,
    deps: {
      alwaysBundle: [/^@alilc\//],
      dts: { neverBundle: [/^@alilc\//] },
    },
  },
  // Self-contained browser bundle; only Vue stays external (global `Vue`).
  {
    dts: false,
    format: ['umd'],
    entry: ['./src/index.ts'],
    globalName: 'LCVueRenderer',
    platform: 'browser',
    target: 'ES2018',
    clean: false,
    minify: true,
    define: { 'process.env.NODE_ENV': JSON.stringify('production') },
    deps: { alwaysBundle: [/^(?!vue$)/], neverBundle: ['vue'] },
    outputOptions: {
      entryFileNames: 'vue-renderer.js',
      exports: 'named',
      globals: { vue: 'Vue' },
    },
  },
])
