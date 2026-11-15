import { describe, expect, it } from 'vitest'
import { fetchMaterialAssets, MaterialError } from '../src/utils/materials'

const respond =
  (body: unknown, status = 200) =>
  async () =>
    new Response(typeof body === 'string' ? body : JSON.stringify(body), {
      status,
    })

describe('fetchMaterialAssets', () => {
  it('reads the assets and resolves their URLs against the assets.json', async () => {
    const assets = await fetchMaterialAssets(
      'https://cdn.test/demo/dist/assets.json',
      respond({
        version: '1.0.0',
        packages: [
          {
            package: '@demo/x',
            library: 'DemoX',
            urls: ['./index.js', 'https://other.test/a.css'],
          },
        ],
        components: [
          {
            exportName: 'DemoXMeta',
            url: 'meta.js',
            package: { npm: '@demo/x' },
          },
          { componentName: 'Inline', title: 'Inline' },
        ],
      }),
    )
    expect(assets.packages[0].urls).toEqual([
      'https://cdn.test/demo/dist/index.js',
      'https://other.test/a.css',
    ])
    expect((assets.components[0] as { url: string }).url).toBe(
      'https://cdn.test/demo/dist/meta.js',
    )
    expect(assets.components[1]).toEqual({
      componentName: 'Inline',
      title: 'Inline',
    })
  })

  it('rejects what is not a material assets.json', async () => {
    for (const fetchJson of [
      respond('not json'),
      respond({ version: '1.0.0' }),
      respond({ packages: [], components: [] }, 404),
    ]) {
      await expect(
        fetchMaterialAssets('https://cdn.test/assets.json', fetchJson),
      ).rejects.toBeInstanceOf(MaterialError)
    }
  })
})
