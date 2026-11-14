import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { expect, test, vi } from 'vitest'

const builds = vi.hoisted(() => ({ count: 0 }))

vi.mock('vite', async (importOriginal) => {
  const vite = await importOriginal<typeof import('vite')>()
  return {
    ...vite,
    build: (...args: Parameters<typeof vite.build>) => {
      builds.count++
      return vite.build(...args)
    },
  }
})

const { buildMaterial } = await import('../src/build')

test('builds once when the plain output is minified as well', async () => {
  const root = fileURLToPath(
    new URL('./fixtures/no-sourcemap', import.meta.url),
  )
  await buildMaterial({ root, clean: true })
  // The library and its meta, without a second (identical) `.min` pass
  expect(builds.count).toBe(2)
  for (const name of ['index', 'meta']) {
    expect(await readFile(`${root}/dist/${name}.min.js`, 'utf8')).toBe(
      await readFile(`${root}/dist/${name}.js`, 'utf8'),
    )
  }
  const assets = JSON.parse(
    await readFile(`${root}/dist/assets.min.json`, 'utf8'),
  )
  expect(JSON.stringify(assets)).toContain('index.min.js')
}, 60_000)
