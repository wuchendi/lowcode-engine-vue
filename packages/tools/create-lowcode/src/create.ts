import {
  cp,
  mkdir,
  readdir,
  readFile,
  rename,
  rm,
  writeFile,
} from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { VueVersion } from './args'

const TEMPLATE_DIR = fileURLToPath(new URL('../template', import.meta.url))

/** Template files stored under another name so tools leave them alone. */
const RENAMED: Record<string, string> = {
  _gitignore: '.gitignore',
  '_biome.json': 'biome.json',
}

export interface CreateProjectOptions {
  /** Absolute path of the project directory. */
  targetDir: string
  packageName: string
  vue: VueVersion
  /** Empty a non-empty directory instead of failing. */
  force?: boolean
}

/** Entries of `dir` other than `.git`; empty when it does not exist. */
export async function existingEntries(dir: string) {
  const entries = await readdir(dir).catch(() => [])
  return entries.filter((name) => name !== '.git')
}

export async function createProject({
  targetDir,
  packageName,
  vue,
  force = false,
}: CreateProjectOptions) {
  const entries = await existingEntries(targetDir)
  if (entries.length && !force) {
    throw new Error(`${targetDir} is not empty; use --force to overwrite it`)
  }
  for (const name of entries) {
    await rm(join(targetDir, name), { recursive: true, force: true })
  }
  await mkdir(targetDir, { recursive: true })

  for (const part of ['common', `vue${vue}`]) {
    await cp(join(TEMPLATE_DIR, part), targetDir, { recursive: true })
  }
  for (const [from, to] of Object.entries(RENAMED)) {
    await rename(join(targetDir, from), join(targetDir, to))
  }

  const pkgPath = join(targetDir, 'package.json')
  const pkg = JSON.parse(await readFile(pkgPath, 'utf8'))
  await writeFile(
    pkgPath,
    `${JSON.stringify({ name: packageName, ...pkg }, null, 2)}\n`,
  )
}
