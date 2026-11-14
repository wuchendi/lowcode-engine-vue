#!/usr/bin/env node
// `pnpm dev`: the designer (development build in watch mode, served through
// nsl) and the renderer watch builds, plus the packages named with
// `--watch a,b`.
import { spawn } from 'node:child_process'
import { readdirSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'

const root = fileURLToPath(new URL('..', import.meta.url))
const materials = readdirSync(new URL('../packages/materials', import.meta.url))

/** Packages that can be watched on request: name -> pnpm arguments. */
const optional = {
  'engine-ext-vue': ['-C', 'packages/plugins/engine-ext-vue', 'dev'],
  'vue-code-editor': ['-C', 'packages/plugins/vue-code-editor', 'dev'],
  ...Object.fromEntries(
    materials.map((name, i) => [
      name,
      // `lowcode-material dev` also serves the material; one port each
      [
        '-C',
        `packages/materials/${name}`,
        'exec',
        'lowcode-material',
        'dev',
        '--port',
        String(9100 + i),
      ],
    ]),
  ),
}

const { values } = parseArgs({
  options: { watch: { type: 'string' }, help: { type: 'boolean', short: 'h' } },
})
if (values.help) {
  console.log(`Usage: pnpm dev [--watch <names>]

Starts the designer (development build and preview) and the renderer watch
builds. --watch also rebuilds the named packages (comma-separated):
${Object.keys(optional).join(', ')}`)
  process.exit(0)
}

const tasks = {
  'designer-build': ['-C', 'apps/designer', 'dev:build'],
  designer: ['-C', 'apps/designer', 'dev'],
  'renderer-vue2': ['-C', 'packages/renderer/vue2', 'dev'],
  'renderer-vue3': ['-C', 'packages/renderer/vue3', 'dev'],
}
for (const name of (values.watch ?? '').split(',').filter(Boolean)) {
  if (!optional[name]) {
    console.error(
      `Unknown package "${name}"; one of: ${Object.keys(optional).join(', ')}`,
    )
    process.exit(1)
  }
  tasks[name] = optional[name]
}

const width = Math.max(...Object.keys(tasks).map((name) => name.length))
const children = new Map()
let stopping = false

function stop(code) {
  if (stopping) return
  stopping = true
  for (const child of children.values()) {
    // Each task runs in its own process group: end pnpm and its children
    try {
      process.kill(-child.pid, 'SIGTERM')
    } catch {}
  }
  process.exitCode = code
}

for (const [name, args] of Object.entries(tasks)) {
  const child = spawn('pnpm', args, {
    cwd: root,
    detached: true,
    env: { ...process.env, FORCE_COLOR: '1' },
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  children.set(name, child)
  const prefix = `[${name.padEnd(width)}]`
  for (const stream of [child.stdout, child.stderr]) {
    createInterface({ input: stream }).on('line', (line) =>
      console.log(`${prefix} ${line}`),
    )
  }
  child.on('exit', (code) => {
    children.delete(name)
    if (!stopping) {
      console.error(`${prefix} exited with code ${code}; stopping`)
      stop(code || 1)
    }
  })
}

process.on('SIGINT', () => stop(0))
process.on('SIGTERM', () => stop(0))
