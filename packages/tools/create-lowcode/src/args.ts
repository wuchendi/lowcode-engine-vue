import { basename, resolve } from 'node:path'
import { parseArgs } from 'node:util'

export type VueVersion = 2 | 3

export interface CliOptions {
  dir: string | undefined
  vue: VueVersion | undefined
  force: boolean
  help: boolean
}

export function parseOptions(argv: string[]): CliOptions {
  const { positionals, values } = parseArgs({
    args: argv,
    allowPositionals: true,
    options: {
      vue: { type: 'string' },
      force: { type: 'boolean', default: false },
      help: { type: 'boolean', short: 'h', default: false },
    },
  })
  let vue: VueVersion | undefined
  if (values.vue !== undefined) {
    if (values.vue !== '2' && values.vue !== '3') {
      throw new Error(`--vue must be 2 or 3, got "${values.vue}"`)
    }
    vue = Number(values.vue) as VueVersion
  }
  return { dir: positionals[0], vue, force: values.force, help: values.help }
}

/** A valid npm package name from a directory path. */
export function toPackageName(dir: string) {
  return basename(resolve(dir))
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]+/, '')
    .replace(/[^a-z0-9-~._]+/g, '-')
}

export function isValidPackageName(name: string) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(name)
}
