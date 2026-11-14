import { lowcodeMaterial } from '@cdlab996/lowcode-material-builder'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), lowcodeMaterial()],
})
