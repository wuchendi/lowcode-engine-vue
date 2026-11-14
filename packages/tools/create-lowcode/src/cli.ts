#!/usr/bin/env node
import { relative, resolve } from 'node:path'
import { createInterface } from 'node:readline/promises'
import type { VueVersion } from './args'
import { isValidPackageName, parseOptions, toPackageName } from './args'
import { createProject, existingEntries } from './create'

const usage = `Usage: create-lowcode [dir] [--vue 2|3] [--force]

Creates a LowCode Engine material project.

  --vue 2|3   Vue version (2 = Vue 2.7)
  --force     Empty the directory if it is not empty`

const DEFAULT_DIR = 'lowcode-materials'

/** The package manager that runs this script, from npm's user agent. */
function packageManager() {
  const agent = process.env.npm_config_user_agent ?? ''
  return (
    ['pnpm', 'yarn', 'bun'].find((pm) => agent.startsWith(`${pm}/`)) ?? 'npm'
  )
}

function fail(message: string): never {
  console.error(`✖ ${message}`)
  process.exit(1)
}

async function main() {
  let options: ReturnType<typeof parseOptions>
  try {
    options = parseOptions(process.argv.slice(2))
  } catch (error) {
    console.error(usage)
    fail((error as Error).message)
  }
  if (options.help) {
    console.log(usage)
    return
  }

  const interactive = Boolean(process.stdin.isTTY && process.stdout.isTTY)
  const rl = interactive
    ? createInterface({ input: process.stdin, output: process.stdout })
    : undefined
  const ask = async (question: string, initial: string) =>
    rl
      ? (await rl.question(`${question} (${initial}): `)).trim() || initial
      : initial

  try {
    const dir = options.dir ?? (await ask('Project directory', DEFAULT_DIR))
    const vue: VueVersion =
      options.vue ??
      ((await ask('Vue version, 2 (2.7) or 3', '3')) === '2' ? 2 : 3)
    const targetDir = resolve(dir)

    let force = options.force
    if (!force && (await existingEntries(targetDir)).length) {
      if (!rl) fail(`${dir} is not empty; use --force to overwrite it`)
      const answer = await ask(
        `${dir} is not empty. Remove its files? y/N`,
        'N',
      )
      force = /^y(es)?$/i.test(answer)
      if (!force) fail('Cancelled')
    }

    let packageName = toPackageName(dir)
    while (!isValidPackageName(packageName)) {
      if (!rl) fail(`Cannot derive a package name from "${dir}"`)
      packageName = await ask('Package name', 'lowcode-materials')
    }

    await createProject({ targetDir, packageName, vue, force })

    const pm = packageManager()
    const cd = relative(process.cwd(), targetDir)
    console.log(`\n✔ Created ${packageName} (Vue ${vue === 2 ? '2.7' : '3'})\n`)
    if (cd) console.log(`  cd ${cd.includes(' ') ? `"${cd}"` : cd}`)
    console.log(`  ${pm} install`)
    console.log(`  ${pm === 'npm' || pm === 'bun' ? `${pm} run` : pm} dev\n`)
  } finally {
    rl?.close()
  }
}

main().catch((error) =>
  fail(error instanceof Error ? error.message : String(error)),
)
