import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

import { it } from 'vitest'
import { mountRenderer } from './mount-renderer'

it('debug', async () => {
  const m = await mountRenderer({
    schema: {
      componentName: 'Page',
      id: 'page',
      children: [{ componentName: 'div', id: 'div', children: 'hello' }],
    },
    components: { div: 'div' },
  })
  require('node:fs').writeFileSync(
    '/tmp/gn15/dbg.html',
    document.body.innerHTML,
  )
  m.destroy()
})
