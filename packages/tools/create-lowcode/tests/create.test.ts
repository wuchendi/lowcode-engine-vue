import { existsSync } from 'node:fs'
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import { parseOptions, toPackageName } from '../src/args'
import { createProject } from '../src/create'

let dir: string

beforeEach(async () => {
  dir = await mkdtemp(join(tmpdir(), 'create-lowcode-'))
})

afterEach(async () => {
  await rm(dir, { recursive: true, force: true })
})

const read = (...path: string[]) => readFile(join(dir, ...path), 'utf8')
const readJson = async (...path: string[]) => JSON.parse(await read(...path))

describe('createProject', () => {
  test('generates a Vue 3 material project', async () => {
    const target = join(dir, 'my-materials')
    await createProject({
      targetDir: target,
      packageName: 'my-materials',
      vue: 3,
    })

    const pkg = await readJson('my-materials', 'package.json')
    expect(pkg.name).toBe('my-materials')
    expect(pkg.devDependencies).toHaveProperty('@vitejs/plugin-vue')
    expect(pkg.devDependencies.vue).toMatch(/^\^3\./)
    expect(await read('my-materials', 'vite.config.ts')).toContain(
      "from '@vitejs/plugin-vue'",
    )
    for (const file of [
      '.gitignore',
      'biome.json',
      'README.md',
      'tsconfig.json',
      'src/index.ts',
      'src/x-button/x-button.vue',
      'src/x-button/meta.ts',
    ]) {
      expect(existsSync(join(target, file)), file).toBe(true)
    }
    expect(existsSync(join(target, '_gitignore'))).toBe(false)
    expect(existsSync(join(target, '_biome.json'))).toBe(false)
    expect(existsSync(join(target, 'pnpm-workspace.yaml'))).toBe(false)
  })

  test('generates a Vue 2.7 material project', async () => {
    const target = join(dir, 'legacy')
    await createProject({
      targetDir: target,
      packageName: '@acme/legacy',
      vue: 2,
    })

    const pkg = await readJson('legacy', 'package.json')
    expect(pkg.name).toBe('@acme/legacy')
    expect(pkg.devDependencies).toHaveProperty('@vitejs/plugin-vue2')
    expect(pkg.devDependencies).toHaveProperty('esbuild')
    expect(pkg.devDependencies.vue).toMatch(/^\^2\.7\./)
    expect(await read('legacy', 'vite.config.ts')).toContain(
      "from '@vitejs/plugin-vue2'",
    )
    expect(
      (await readJson('legacy', 'tsconfig.json')).vueCompilerOptions,
    ).toEqual({ target: 2.7 })
    expect(await read('legacy', 'pnpm-workspace.yaml')).toContain(
      'esbuild: true',
    )
  })

  test('refuses a non-empty directory without force', async () => {
    await writeFile(join(dir, 'keep.txt'), 'x')
    await expect(
      createProject({ targetDir: dir, packageName: 'x', vue: 3 }),
    ).rejects.toThrow(/not empty/)
    expect(existsSync(join(dir, 'keep.txt'))).toBe(true)
    expect(existsSync(join(dir, 'package.json'))).toBe(false)
  })

  test('empties a non-empty directory with force, keeping .git', async () => {
    await writeFile(join(dir, 'old.txt'), 'x')
    await mkdir(join(dir, '.git'))
    await createProject({
      targetDir: dir,
      packageName: 'x',
      vue: 3,
      force: true,
    })
    expect(existsSync(join(dir, 'old.txt'))).toBe(false)
    expect(existsSync(join(dir, '.git'))).toBe(true)
    expect(existsSync(join(dir, 'package.json'))).toBe(true)
  })

  test('accepts a directory that only holds .git', async () => {
    await mkdir(join(dir, '.git'))
    await createProject({ targetDir: dir, packageName: 'x', vue: 2 })
    expect(existsSync(join(dir, 'package.json'))).toBe(true)
  })
})

describe('parseOptions', () => {
  test('reads the directory and flags', () => {
    expect(parseOptions(['my-dir', '--vue', '2', '--force'])).toEqual({
      dir: 'my-dir',
      vue: 2,
      force: true,
      help: false,
    })
    expect(parseOptions([])).toEqual({
      dir: undefined,
      vue: undefined,
      force: false,
      help: false,
    })
  })

  test('rejects an unknown Vue version', () => {
    expect(() => parseOptions(['--vue', '4'])).toThrow(/--vue/)
  })
})

describe('toPackageName', () => {
  test('turns a directory name into a package name', () => {
    expect(toPackageName('My Materials')).toBe('my-materials')
    expect(toPackageName('/work/.Hidden_Dir')).toBe('hidden_dir')
    expect(toPackageName('a@b!c')).toBe('a-b-c')
  })
})
