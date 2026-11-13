import { lowcodeMaterial } from '@cdlab996/lowcode-material-builder'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    lowcodeMaterial({
      sourceMap: false,
      assetsConfig: {
        builtinAssets: {
          packages: [],
          components: [],
        },
      },
    }),
  ],
})
