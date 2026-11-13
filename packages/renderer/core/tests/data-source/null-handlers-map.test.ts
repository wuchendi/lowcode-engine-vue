import { afterEach, describe, expect, it, vi } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

// The designer host passes `requestHandlersMap: null` when no handler is
// registered; a default parameter does not cover null.
describe('requestHandlersMap: null', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
    vi.unstubAllGlobals()
  })

  it('renders the page and falls back to the built-in fetch handler', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    )
    vi.stubGlobal('fetch', fetchMock)

    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        dataSource: {
          list: [
            {
              id: 'info',
              isInit: true,
              type: 'fetch',
              options: { uri: '/mock/info.json', method: 'GET' },
            },
          ],
        },
        children: [{ componentName: 'div', id: 'content', children: 'hello' }],
      },
      components: { div: 'div' },
      requestHandlersMap: null as never,
    })

    expect(mounted.el.textContent).toContain('hello')
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
})
