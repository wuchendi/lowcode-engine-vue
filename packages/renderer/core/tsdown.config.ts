import { defineConfig } from 'tsdown'

// Published build. Inside the repository the package exports its sources
// (package.json "exports"); "publishConfig" points the published package at
// this output. Vue (peer) and the dependencies stay external.
export default defineConfig({
  entry: {
    index: './src/index.ts',
    runtime: './src/runtime.ts',
    schema: './src/shared/schema.ts',
    designer: './src/shared/designer-environment.ts',
  },
  format: ['esm'],
  platform: 'neutral',
  fixedExtension: true,
  target: 'ES2018',
  dts: true,
  clean: true,
  // Type-only: the designer page provides it
  deps: { neverBundle: [/^@alilc\//] },
  copy: [{ from: './src/simulator/simulator.css', to: 'dist' }],
})
