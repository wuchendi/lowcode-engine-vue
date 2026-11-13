import { defineConfig } from 'tsdown'

// The core is private: bundle it into every output. Vue and vue-router stay
// external (peers); @alilc/* and intl-messageformat are dependencies.
const bundled = [/^@cdlab996\/lowcode-vue-core/]

const umd = (entry: string, file: string) => ({
  dts: false,
  format: ['umd' as const],
  entry: [entry],
  globalName: 'LCVueRenderer',
  platform: 'browser' as const,
  target: 'ES2018',
  clean: false,
  minify: true,
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    // Feature flags of the bundled vue-router (esm-bundler build)
    __VUE_PROD_DEVTOOLS__: 'false',
  },
  deps: { alwaysBundle: [/^(?!vue$)/], neverBundle: ['vue'] },
  outputOptions: {
    entryFileNames: file,
    exports: 'named' as const,
    globals: { vue: 'Vue' },
  },
})

export default defineConfig((options) => [
  {
    dts: true,
    format: ['esm'],
    entry: ['./src/index.ts', './src/runtime.ts', './src/designer.ts'],
    target: 'ES2018',
    clean: !options.watch,
    deps: {
      alwaysBundle: bundled,
      dts: {
        alwaysBundle: [/^@cdlab996\/lowcode-vue-core/],
        neverBundle: [/^@alilc\//],
      },
    },
    copy: [
      { from: '../core/src/simulator/simulator.css', to: 'dist/simulator.css' },
    ],
  },
  // Preview pages: the renderer API as `window.LCVueRenderer`
  umd('./src/umd/renderer.ts', 'renderer.umd.js'),
  // Designer canvas: also installs `window.SimulatorRenderer`
  umd('./src/umd/simulator.ts', 'simulator.umd.js'),
])
