import { defineConfig } from 'tsdown'

export default defineConfig((options) => ({
  entry: ['./src/index.ts', './src/cli.ts'],
  format: ['esm'],
  platform: 'node',
  target: 'node24',
  dts: true,
  clean: !options.watch,
}))
