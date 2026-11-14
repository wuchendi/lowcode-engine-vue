import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { parseArgs } from 'node:util'
import type { IPublicTypeProjectSchema } from '@alilc/lowcode-types'
import { generateProject } from './index'
import type { AssetPackage } from './materials'
import { materialPackages } from './materials'
import { toZip } from './zip'

export const usage = `Usage: lowcode-codegen <schema.json> --vue <2|3> [options]

Options:
  --assets <file|url>  assets JSON of the materials (component imports)
  --base <url>         base URL of relative package URLs in the assets
  --name <name>        package name (default lowcode-app)
  --out <dir>          output directory (default ./<name>)
  --zip <file>         write a zip instead of a directory
  --no-format          do not format the files with prettier`

type Fetch = NonNullable<Parameters<typeof materialPackages>[1]>

export interface CliIO {
  cwd: string
  fetch: Fetch
  log: (line: string) => void
  error: (line: string) => void
}

const isUrl = (value: string) => /^[a-z][\w+.-]*:\/\//i.test(value)

async function readJson(
  source: string,
  io: CliIO,
): Promise<Record<string, unknown>> {
  if (isUrl(source)) {
    const response = await io.fetch(source)
    if (!response.ok) throw new Error(`Cannot fetch ${source}`)
    return (await response.json()) as Record<string, unknown>
  }
  return JSON.parse(await readFile(resolve(io.cwd, source), 'utf8'))
}

/** A project schema, or a root schema wrapped in one. */
function projectSchema(json: Record<string, unknown>) {
  if (Array.isArray(json.componentsTree)) {
    return json as unknown as IPublicTypeProjectSchema
  }
  if (typeof json.componentName === 'string') {
    return {
      version: '1.0.0',
      componentsMap: [],
      componentsTree: [json],
    } as unknown as IPublicTypeProjectSchema
  }
  throw new Error('The schema has no componentsTree nor componentName')
}

async function packagesOf(
  assets: string | undefined,
  base: string | undefined,
  io: CliIO,
) {
  if (!assets) return []
  const json = await readJson(assets, io)
  const list = (json.packages ?? []) as AssetPackage[]
  const baseUrl = base ?? (isUrl(assets) ? assets : undefined)
  if (!baseUrl) {
    const relative = list.some((pkg) =>
      [pkg.urls ?? []].flat().some((url) => !isUrl(url)),
    )
    if (relative && list.some((pkg) => !pkg.codegen)) {
      throw new Error(
        'The assets have relative package URLs: pass their base URL with --base',
      )
    }
  }
  return materialPackages(list, io.fetch, baseUrl ?? 'http://localhost/')
}

/** Runs `lowcode-codegen`; returns the exit code. */
export async function runCli(argv: string[], io: CliIO): Promise<number> {
  try {
    const { positionals, values } = parseArgs({
      args: argv,
      allowPositionals: true,
      allowNegative: true,
      options: {
        vue: { type: 'string' },
        assets: { type: 'string' },
        base: { type: 'string' },
        name: { type: 'string' },
        out: { type: 'string' },
        zip: { type: 'string' },
        format: { type: 'boolean', default: true },
        help: { type: 'boolean', short: 'h' },
      },
    })
    if (values.help) {
      io.log(usage)
      return 0
    }
    const vue = Number(values.vue)
    if (positionals.length !== 1 || (vue !== 2 && vue !== 3)) {
      io.error(usage)
      return 1
    }
    const name = values.name ?? 'lowcode-app'
    const outDir = resolve(io.cwd, values.out ?? name)
    if (!values.zip) {
      const existing = await readdir(outDir).catch(() => [])
      if (existing.length > 0) throw new Error(`${outDir} is not empty`)
    }

    const schema = projectSchema(await readJson(positionals[0], io))
    const packages = await packagesOf(values.assets, values.base, io)
    const { files, warnings } = await generateProject(schema, {
      vue,
      packages,
      name,
      format: values.format,
    })
    for (const warning of warnings) io.error(`warning: ${warning}`)

    if (values.zip) {
      const target = resolve(io.cwd, values.zip)
      await writeFile(target, toZip(files))
      io.log(`Wrote ${target}`)
    } else {
      for (const [path, content] of Object.entries(files)) {
        const target = join(outDir, path)
        await mkdir(dirname(target), { recursive: true })
        await writeFile(target, content)
      }
      io.log(`Wrote ${Object.keys(files).length} files to ${outDir}`)
    }
    return 0
  } catch (error) {
    io.error(error instanceof Error ? error.message : String(error))
    return 1
  }
}
