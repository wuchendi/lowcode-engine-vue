import { join } from 'node:path'
import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import * as library from 'vant'
import { describe, expect, it } from 'vitest'
import { auditMetas } from '../../audit'

const metas = import.meta.glob<{ default: IPublicTypeComponentMetadata }>(
  '../src/lowcode/*/meta.ts',
  { eager: true },
)

describe('vant2 metas', () => {
  it('match the components of vant 2.13.9 and its docs', () => {
    // CommonJS builds put the components on `default`, ES builds on the namespace
    const lib = {
      ...(library as { default?: Record<string, unknown> }).default,
      ...library,
    } as Record<string, unknown>
    expect(
      auditMetas({
        dir: join(import.meta.dirname, '..'),
        metas,
        library: lib,
        vue: 2,
        docs: 'https://vant-ui.github.io/vant/v2/',
      }),
    ).toEqual([])
  })
})
