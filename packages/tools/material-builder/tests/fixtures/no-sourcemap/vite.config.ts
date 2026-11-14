import { defineConfig } from 'vite'
import { lowcodeMaterial } from '../../../src/options'

export default defineConfig({
  plugins: [lowcodeMaterial({ sourceMap: false })],
})
