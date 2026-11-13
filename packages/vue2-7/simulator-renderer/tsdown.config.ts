import { readFile } from 'node:fs/promises'
import type { Server } from 'node:http'
import { createServer } from 'node:http'
import { basename, join } from 'node:path'
import { defineConfig } from 'tsdown'

const DEV_PORT = 5559
let server: Server | undefined

// In watch mode (`pnpm start`), serve dist so the UMD bundle can be proxied
// into a running designer.
function serveDist() {
  if (server) return
  server = createServer(async (req, res) => {
    const name = basename(new URL(req.url ?? '/', 'http://localhost').pathname)
    try {
      const body = await readFile(join('dist', name))
      res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': name.endsWith('.css') ? 'text/css' : 'text/javascript',
      })
      res.end(body)
    } catch {
      res.writeHead(404).end()
    }
  }).listen(DEV_PORT, () => {
    console.log(`Serving dist at http://localhost:${DEV_PORT}/`)
  })
}

export default defineConfig((options) => [
  {
    dts: true,
    format: ['esm'],
    entry: ['./src/runtime.ts'],
    target: 'ES2018',
    clean: !options.watch,
    deps: {
      alwaysBundle: [/^@alilc\//],
      dts: { neverBundle: [/^@alilc\//] },
    },
  },
  // Self-contained browser bundle loaded by the designer iframe; only Vue
  // stays external (global `Vue`).
  {
    dts: false,
    format: ['umd'],
    entry: ['./src/index.ts'],
    globalName: 'LCVueSimulatorRenderer',
    platform: 'browser',
    target: 'ES2018',
    clean: false,
    minify: true,
    define: { 'process.env.NODE_ENV': JSON.stringify('production') },
    deps: { alwaysBundle: [/^(?!vue$)/], neverBundle: ['vue'] },
    copy: ['src/vue-simulator-renderer.css'],
    outputOptions: {
      entryFileNames: 'vue-simulator-renderer.js',
      exports: 'named',
      globals: { vue: 'Vue' },
    },
    onSuccess: options.watch ? serveDist : undefined,
  },
])
