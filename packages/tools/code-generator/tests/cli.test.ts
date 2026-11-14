import { existsSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { strFromU8, unzipSync } from 'fflate'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { runCli } from '../src/run-cli'
import { packages, project } from './fixtures'

let dir: string
let logs: string[]
const io = () => ({
  cwd: dir,
  fetch: vi.fn(),
  log: (line: string) => logs.push(line),
  error: (line: string) => logs.push(line),
})

beforeEach(() => {
  dir = mkdtempSync(join(tmpdir(), 'lowcode-codegen-'))
  logs = []
  writeFileSync(join(dir, 'schema.json'), JSON.stringify(project))
  writeFileSync(join(dir, 'assets.json'), JSON.stringify({ packages }))
})

describe('lowcode-codegen', () => {
  it('writes the project into a directory', async () => {
    const code = await runCli(
      [
        'schema.json',
        '--vue',
        '3',
        '--assets',
        'assets.json',
        '--out',
        'app',
        '--no-format',
      ],
      io(),
    )
    expect(code).toBe(0)
    const pkg = JSON.parse(readFileSync(join(dir, 'app/package.json'), 'utf8'))
    expect(pkg.dependencies).toHaveProperty('vant')
    expect(existsSync(join(dir, 'app/src/pages/home.vue'))).toBe(true)
    expect(logs.join('\n')).toContain('Mystery')
  })

  it('writes a zip', async () => {
    const code = await runCli(
      [
        'schema.json',
        '--vue',
        '2',
        '--assets',
        'assets.json',
        '--zip',
        'app.zip',
        '--no-format',
      ],
      io(),
    )
    expect(code).toBe(0)
    const files = unzipSync(readFileSync(join(dir, 'app.zip')))
    expect(
      JSON.parse(strFromU8(files['package.json'])).dependencies.vue,
    ).toMatch(/^\^2\./)
  })

  it('accepts a single root schema', async () => {
    writeFileSync(
      join(dir, 'page.json'),
      JSON.stringify(project.componentsTree[1]),
    )
    const code = await runCli(
      ['page.json', '--vue', '3', '--out', 'one', '--no-format'],
      io(),
    )
    expect(code).toBe(0)
    expect(existsSync(join(dir, 'one/src/pages/about.vue'))).toBe(true)
  })

  it('refuses a directory that is not empty', async () => {
    const args = ['schema.json', '--vue', '3', '--out', 'app', '--no-format']
    expect(await runCli(args, io())).toBe(0)
    expect(await runCli(args, io())).toBe(1)
    expect(logs[logs.length - 1]).toContain('not empty')
  })

  it('needs --base for relative package URLs of an assets file', async () => {
    writeFileSync(
      join(dir, 'assets.json'),
      JSON.stringify({
        packages: [{ package: 'm', urls: ['/materials/m/index.js'] }],
      }),
    )
    const code = await runCli(
      ['schema.json', '--vue', '3', '--assets', 'assets.json', '--no-format'],
      io(),
    )
    expect(code).toBe(1)
    expect(logs[logs.length - 1]).toContain('--base')
  })

  it('reads manifests next to the package scripts from --base', async () => {
    writeFileSync(
      join(dir, 'assets.json'),
      JSON.stringify({
        packages: [{ package: packages[0].package, urls: ['/m/index.js'] }],
      }),
    )
    const cli = io()
    cli.fetch.mockResolvedValue({ ok: true, json: async () => ({ packages }) })
    const code = await runCli(
      [
        'schema.json',
        '--vue',
        '3',
        '--assets',
        'assets.json',
        '--base',
        'http://x.test/',
        '--no-format',
      ],
      cli,
    )
    expect(code).toBe(0)
    expect(cli.fetch).toHaveBeenCalledWith('http://x.test/m/assets.json')
    expect(existsSync(join(dir, 'lowcode-app/package.json'))).toBe(true)
  })

  it('reports usage errors', async () => {
    expect(await runCli([], io())).toBe(1)
    expect(await runCli(['schema.json', '--vue', '4'], io())).toBe(1)
  })
})
