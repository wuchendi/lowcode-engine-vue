// Copies the built renderer bundles of one line into its demo's public/js,
// so the demo always runs the code of this workspace.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const line = process.argv[2]
if (line !== 'vue2-7' && line !== 'vue3') {
  console.error('usage: sync-renderer.mjs <vue2-7|vue3>')
  process.exit(1)
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const target = join(root, 'apps', `demo-${line}`, 'public', 'js')
const files = [
  ['renderer', 'vue-renderer.js'],
  ['simulator-renderer', 'vue-simulator-renderer.js'],
  ['simulator-renderer', 'vue-simulator-renderer.css'],
]

mkdirSync(target, { recursive: true })
for (const [pkg, file] of files) {
  const source = join(root, 'packages', line, pkg, 'dist', file)
  if (!existsSync(source)) {
    console.error(`missing ${source}; run "pnpm build" first`)
    process.exit(1)
  }
  copyFileSync(source, join(target, file))
}
console.log(`synced ${line} renderer bundles into apps/demo-${line}/public/js`)
