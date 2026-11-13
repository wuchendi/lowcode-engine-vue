import React from '@vitejs/plugin-react'
import {
  presetAttributify,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { dependencies, peerDependencies } from './package.json' with {
  type: 'json',
}

export default defineConfig({
  build: {
    target: 'es2018',
    lib: {
      entry: './src/index.tsx',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
      cssFileName: 'style',
    },
    rollupOptions: {
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(peerDependencies),
        /^@alilc\/lowcode-plugin-base-monaco-editor\//,
        /style\.css$/,
      ],
    },
  },
  plugins: [
    React({ jsxRuntime: 'classic' }),
    Unocss({
      presets: [presetUno(), presetAttributify()],
      transformers: [
        transformerCompileClass(),
        transformerVariantGroup(),
        transformerDirectives(),
      ],
    }),
  ],
})
