import { glob, mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { LowcodeNpmInfo } from './options'

const slash = (path: string) => path.replace(/\\/g, '/')

/**
 * Writes the meta entry: imports every `meta.*` / `*.meta.*` under `metaDir`
 * (a file may export one meta or an array of metas), fills in the npm info,
 * resolves relative snippet screenshots against the URL of the meta script
 * and exports `components`.
 */
export async function writeMetaEntry(
  tempDir: string,
  metaDir: string,
  npmInfo: LowcodeNpmInfo,
): Promise<string> {
  const files: string[] = []
  for await (const file of glob(
    ['**/meta.{js,jsx,ts,tsx}', '**/*.meta.{js,jsx,ts,tsx}'],
    { cwd: metaDir, exclude: (name) => name === 'node_modules' },
  )) {
    files.push(slash(join(metaDir, file)))
  }
  files.sort()

  const code = `${files.map((file, i) => `import meta${i} from ${JSON.stringify(file)}`).join('\n')}

const npmInfo = ${JSON.stringify(npmInfo)}
const components = []
// Relative snippet screenshots (\`./screenshots/x.webp\`) are files next to meta.js
const base = typeof document !== 'undefined' && document.currentScript && document.currentScript.src

function pushComponentMeta(item) {
  if (!item.npm) {
    const { componentName } = item
    const names = componentName.split('.')
    item.npm = {
      exportName: names[0],
      main: '',
      destructuring: true,
      subName: names.length > 1 ? componentName.slice(componentName.indexOf('.') + 1) : names[1],
    }
  }
  item.npm = { ...npmInfo, ...item.npm }
  for (const snippet of item.snippets || []) {
    if (base && typeof snippet.screenshot === 'string' && snippet.screenshot.startsWith('./')) {
      snippet.screenshot = new URL(snippet.screenshot, base).href
    }
  }
  components.push(item)
}

for (const item of [${files.map((_, i) => `meta${i}`).join(', ')}]) {
  if (Array.isArray(item)) item.forEach(pushComponentMeta)
  else pushComponentMeta(item)
}

export { components }
`
  await mkdir(tempDir, { recursive: true })
  const path = join(tempDir, 'meta-entry.js')
  await writeFile(path, code)
  return path
}
