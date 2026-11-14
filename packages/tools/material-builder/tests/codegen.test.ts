import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { buildMaterial } from '../src/build'
import { readCodegenManifest } from '../src/codegen'

describe('readCodegenManifest', () => {
  it('reads re-exported components, style imports and library versions', () => {
    const manifest = readCodegenManifest(
      `import 'vant/lib/index.css'
import '@scope/ui/dist/style.css'
import packagesInfo from '../package.json'
import './local.css'

export { Button as VanButton, Image as VanImage } from 'vant'
export { ElButton } from '@scope/ui'
export { default as Chart } from 'chart-lib/chart'
export { Local } from './local'
export const version = packagesInfo.version
`,
      {
        dependencies: { vant: '^4.8.10', '@scope/ui': '^2.0.0' },
        peerDependencies: { 'chart-lib': '^1.0.0' },
      },
    )
    expect(manifest).toEqual({
      exports: {
        VanButton: { package: 'vant', exportName: 'Button' },
        VanImage: { package: 'vant', exportName: 'Image' },
        ElButton: { package: '@scope/ui', exportName: 'ElButton' },
        Chart: { package: 'chart-lib/chart', exportName: 'default' },
      },
      styles: ['vant/lib/index.css', '@scope/ui/dist/style.css'],
      dependencies: {
        vant: '^4.8.10',
        '@scope/ui': '^2.0.0',
        'chart-lib': '^1.0.0',
      },
    })
  })
})

it('writes the manifest into assets.json', async () => {
  const root = fileURLToPath(new URL('./fixtures/codegen', import.meta.url))
  await buildMaterial({ root, clean: true })
  const assets = JSON.parse(await readFile(`${root}/dist/assets.json`, 'utf8'))
  expect(assets.packages.at(-1).codegen).toEqual({
    exports: { XButton: { package: 'vue', exportName: 'Transition' } },
    styles: [],
    dependencies: { vue: '^3.5.0' },
  })
}, 60_000)
