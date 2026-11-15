import type { UserConfig } from 'tsdown'
import { defineConfig } from 'tsdown'

// ESM build: the core, @alilc/* and intl-messageformat are dependencies,
// Vue and vue-router peers; all stay external. The UMD bundles inline
// everything but Vue.

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
          deps: { dts: { neverBundle: [/^@alilc\//] } },
          // Kept as `<package>/simulator.css` for the designer setups using it
          copy: [{ from: '../core/src/simulator/simulator.css', to: 'dist' }],
        },
        // Preview pages: the renderer API as `window.LCVueRenderer`
        umd('./src/umd/renderer.ts', 'renderer.umd.js', true),
        // Designer canvas: also installs `window.SimulatorRenderer`
        umd('./src/umd/simulator.ts', 'simulator.umd.js', true),
      ],
)
