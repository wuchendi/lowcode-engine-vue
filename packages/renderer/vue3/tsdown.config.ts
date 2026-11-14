import type { UserConfig } from 'tsdown'
import { defineConfig } from 'tsdown'

// The core is private: bundle it into every output. Vue and vue-router stay
// external (peers); @alilc/* and intl-messageformat are dependencies.
const bundled = [/^@cdlab996\/lowcode-vue-core/]

const umd = (entry: string, file: string, minify: boolean): UserConfig => ({
  dts: false,
  format: ['umd'],
  entry: [entry],
  globalName: 'LCVueRenderer',
  platform: 'browser',
  target: 'ES2018',
  clean: false,
  minify,
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    // Feature flags of the bundled vue-router (esm-bundler build)
    __VUE_PROD_DEVTOOLS__: 'false',
  },
  // Everything but Vue is bundled on purpose: no bundling hint
  deps: {
    alwaysBundle: [/^(?!vue$)/],
    neverBundle: ['vue'],
    onlyBundle: false,
  },
  outputOptions: {
    entryFileNames: file,
    exports: 'named',
    globals: { vue: 'Vue' },
  },
})

// Watch mode (`pnpm dev`): only the bundles the designer loads, unminified
const devConfig = [
  umd('./src/umd/renderer.ts', 'renderer.umd.js', false),
  umd('./src/umd/simulator.ts', 'simulator.umd.js', false),
]

export default defineConfig((options) =>
  options.watch
    ? devConfig
    : [
        {
          dts: true,
          format: ['esm'],
          entry: ['./src/index.ts', './src/runtime.ts', './src/designer.ts'],
          target: 'ES2018',
          clean: true,
          deps: {
            alwaysBundle: bundled,
            dts: {
              alwaysBundle: [/^@cdlab996\/lowcode-vue-core/],
              neverBundle: [/^@alilc\//],
            },
          },
          copy: [
            {
              from: '../core/src/simulator/simulator.css',
              to: 'dist/simulator.css',
            },
          ],
        },
        // Preview pages: the renderer API as `window.LCVueRenderer`
        umd('./src/umd/renderer.ts', 'renderer.umd.js', true),
        // Designer canvas: also installs `window.SimulatorRenderer`
        umd('./src/umd/simulator.ts', 'simulator.umd.js', true),
      ],
)
