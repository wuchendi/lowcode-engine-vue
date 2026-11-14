import { defineConfig } from 'tsdown'

export default defineConfig((options) => ({
  entry: ['./src/cli.ts'],
  format: ['esm'],
  platform: 'node',
  target: 'node20.19',
  dts: false,
  clean: !options.watch,
}))
