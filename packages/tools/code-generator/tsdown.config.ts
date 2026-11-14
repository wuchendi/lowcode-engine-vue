import { defineConfig } from 'tsdown'

export default defineConfig((options) => [
  {
    entry: ['./src/index.ts'],
    format: ['esm'],
    platform: 'neutral',
    target: 'ES2020',
    dts: true,
    clean: !options.watch,
  },
  {
    entry: ['./src/cli.ts'],
    format: ['esm'],
    platform: 'node',
    target: 'node24',
    dts: false,
    clean: false,
  },
])
