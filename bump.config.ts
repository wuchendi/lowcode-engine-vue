import { readFileSync, writeFileSync } from 'node:fs'
import { defineConfig } from 'bumpp'

// The scaffold templates install the material builder of the same release
const TEMPLATES = [
  'packages/tools/create-lowcode/template/vue2/package.json',
  'packages/tools/create-lowcode/template/vue3/package.json',
]

// One version for the repository and every package: `pnpm release` bumps
// them, commits, tags `v<version>` and pushes; the tag publishes to npm
// (.github/workflows/release.yml).
export default defineConfig({
  files: ['package.json', 'packages/*/*/package.json'],
  execute: ({ state }) => {
    for (const file of TEMPLATES) {
      const text = readFileSync(file, 'utf8')
      writeFileSync(
        file,
        text.replace(
          /("@cdlab996\/lowcode-material-builder": )"[^"]*"/,
          `$1"^${state.newVersion}"`,
        ),
      )
    }
  },
  // Commits the template changes with the manifests
  all: true,
})
