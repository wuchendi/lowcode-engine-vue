import { describe, expect, it, vi } from 'vitest'
import { materialPackages } from '../src/materials'

const codegen = {
  exports: { VanButton: { package: 'vant', exportName: 'Button' } },
  styles: ['vant/lib/index.css'],
  dependencies: { vant: '^4.8.10' },
}

describe('materialPackages', () => {
  it('keeps manifests of the assets and reads the others next to the package script', async () => {
    const fetch = vi.fn(async (url: string) => ({
      ok: true,
      json: async () => ({
        packages: [{ package: 'other' }, { package: 'mat-b', codegen }],
        url,
      }),
    }))
    const packages = await materialPackages(
      [
        { package: 'mat-a', urls: ['/materials/a/index.js'], codegen },
        {
          package: 'mat-b',
          urls: ['/materials/b/index.css', '/materials/b/index.js'],
        },
        { package: 'react', library: 'React' },
      ],
      fetch,
      'http://designer.test/index.html',
    )
    expect(packages).toEqual([
      { package: 'mat-a', codegen },
      { package: 'mat-b', codegen },
      { package: 'react' },
    ])
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      'http://designer.test/materials/b/assets.json',
    )
  })

  it('ignores a manifest that cannot be read', async () => {
    const fetch = vi.fn(async () => ({ ok: false, json: async () => ({}) }))
    const packages = await materialPackages(
      [{ package: 'mat', urls: '/m/index.js' }],
      fetch,
      'http://designer.test/',
    )
    expect(packages).toEqual([{ package: 'mat' }])
  })
})
