// node scripts/materials/capture.cjs <vue> <pc|mobile> <group,...> [component]
// Thumbnails of every snippet into packages/materials/<m>/screenshots, taken
// from a running designer ($DESIGNER_URL, default http://localhost:5577).
const { chromium } = require('@playwright/test')
const { mkdirSync, writeFileSync } = require('node:fs')
const { join } = require('node:path')
const { ROOT } = require('./paths.cjs')

const DESIGNER_URL = process.env.DESIGNER_URL || 'http://localhost:5577'
const DIRS = {
  2: {
    'Element 组件': ['element-ui', 'El'],
    'Vant 组件': ['vant2', 'Van'],
    'Ant Design 组件': ['antd-vue1', 'A'],
  },
  3: {
    'Element 组件': ['element-plus', 'El'],
    'Vant 组件': ['vant4', 'Van'],
    'Ant Design 组件': ['antd-vue4', 'A'],
  },
}
const folderOf = (name, prefix) =>
  name
    .slice(prefix.length)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
;(async () => {
  const [v, client, groupsArg, only] = [
    Number(process.argv[2]),
    process.argv[3],
    process.argv[4],
    process.argv[5],
  ]
  const groups = groupsArg.split(',')
  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 2,
  })
  await context.addInitScript(() =>
    localStorage.setItem(
      'ali-lowcode-config',
      JSON.stringify({ locale: 'zh-CN' }),
    ),
  )
  const page = await context.newPage()
  let frame
  const setup = async () => {
    for (let attempt = 1; ; attempt++) {
      try {
        await page.goto(
          `${DESIGNER_URL}/?vue=${v}${client === 'pc' ? '&client=pc' : ''}`,
          { waitUntil: 'domcontentloaded', timeout: 90000 },
        )
        break
      } catch (e) {
        if (attempt === 3) throw e
      }
    }
    await page.waitForSelector('iframe.lc-simulator-content-frame', {
      timeout: 90000,
    })
    frame = await (
      await page.$('iframe.lc-simulator-content-frame')
    ).contentFrame()
    await frame.waitForSelector('.lc-page', { timeout: 90000 })
    await page.waitForTimeout(3000)
    await page.addStyleTag({
      content:
        '.lc-borders, .lc-bem-tools, .lc-insertion, .lc-ghost-group { display: none !important; }',
    })
    await page.evaluate(() => {
      const doc = window.AliLowCodeEngine.project.currentDocument
      const list = []
      doc.root.children.forEach((c) => list.push(c))
      for (const c of list) c.remove()
    })
    await page.waitForTimeout(800)
  }
  await setup()
  const metas = await page.evaluate(
    ([groups, only]) => {
      const out = []
      for (const [
        name,
        meta,
      ] of window.AliLowCodeEngine.material.getComponentMetasMap()) {
        const m = meta.getMetadata()
        if (
          !groups.includes(m.group) ||
          !m.snippets?.length ||
          (only && !only.split(',').includes(name))
        )
          continue
        out.push({
          name,
          group: m.group,
          modal: !!m.configure?.component?.isModal,
          schema: m.snippets[0].schema,
        })
      }
      return out
    },
    [groups, only || null],
  )
  const thumbPage = await context.newPage()
  await thumbPage.setContent('<canvas id="c"></canvas>')
  const results = { captured: 0, skipped: [] }
  for (const meta of metas) {
    const [dir, prefix] = DIRS[v][meta.group]
    if (meta.modal) {
      results.skipped.push(`${meta.name} (modal)`)
      continue
    }
    let errored = false
    const onError = () => {
      errored = true
    }
    page.on('pageerror', onError)
    // a fixed-width box: block components lay out as in a form column
    const boxed = {
      componentName: 'div',
      props: {
        className: 'capture-box',
        style: { width: '200px', padding: '4px', display: 'inline-block' },
      },
      children: [meta.schema],
    }
    const id = await page
      .evaluate((schema) => {
        const d = window.AliLowCodeEngine.project.currentDocument
        return d.insertNode(d.root, schema, undefined, true)?.id
      }, boxed)
      .catch(() => null)
    await page.waitForTimeout(900)
    const rect = await frame.evaluate(() => {
      const page = document.querySelector('.capture-box')
      if (!page) return null
      let box = null
      for (const el of page.querySelectorAll(':scope > *')) {
        if (el.matches('.lc-container-placeholder')) continue
        const r = el.getBoundingClientRect()
        if (!r.width || !r.height) continue
        box = box
          ? {
              left: Math.min(box.left, r.left),
              top: Math.min(box.top, r.top),
              right: Math.max(box.right, r.right),
              bottom: Math.max(box.bottom, r.bottom),
            }
          : { left: r.left, top: r.top, right: r.right, bottom: r.bottom }
      }
      return box
    })
    const iframeBox = await page
      .locator('iframe.lc-simulator-content-frame')
      .boundingBox()
    if (rect && iframeBox && !errored) {
      const pad = 8
      const clip = {
        x: iframeBox.x + rect.left - pad,
        y: iframeBox.y + rect.top - pad,
        width: Math.min(rect.right - rect.left + pad * 2, 400),
        height: Math.min(rect.bottom - rect.top + pad * 2, 300),
      }
      clip.x = Math.max(clip.x, iframeBox.x)
      clip.y = Math.max(clip.y, iframeBox.y)
      const png = await page.screenshot({ clip })
      const webp = await thumbPage.evaluate(
        async (src) => {
          const img = new Image()
          img.src = src
          await img.decode()
          // the bounds of what is drawn: white margins go
          const t = document.createElement('canvas')
          t.width = img.width
          t.height = img.height
          const tg = t.getContext('2d')
          tg.fillStyle = '#fff'
          tg.fillRect(0, 0, t.width, t.height)
          tg.drawImage(img, 0, 0)
          const px = tg.getImageData(0, 0, t.width, t.height).data
          let x0 = t.width,
            y0 = t.height,
            x1 = -1,
            y1 = -1
          for (let y = 0; y < t.height; y++)
            for (let x = 0; x < t.width; x++) {
              const i = (y * t.width + x) * 4
              if (px[i] + px[i + 1] + px[i + 2] < 750) {
                if (x < x0) x0 = x
                if (x > x1) x1 = x
                if (y < y0) y0 = y
                if (y > y1) y1 = y
              }
            }
          const W = 240,
            H = 160,
            c = document.getElementById('c')
          c.width = W
          c.height = H
          const g = c.getContext('2d')
          g.fillStyle = '#fff'
          g.fillRect(0, 0, W, H)
          const w0 = x1 - x0 + 1,
            h0 = y1 - y0 + 1
          if (x1 < 0 || w0 * h0 < 40) return null
          const scale = Math.min((W - 24) / w0, (H - 24) / h0, 3)
          const w = w0 * scale,
            h = h0 * scale
          g.drawImage(t, x0, y0, w0, h0, (W - w) / 2, (H - h) / 2, w, h)
          return c.toDataURL('image/webp', 0.85)
        },
        `data:image/png;base64,${png.toString('base64')}`,
      )
      if (webp) {
        const shots = join(ROOT, 'packages/materials', dir, 'screenshots')
        mkdirSync(shots, { recursive: true })
        writeFileSync(
          join(shots, `${folderOf(meta.name, prefix)}.webp`),
          Buffer.from(webp.split(',')[1], 'base64'),
        )
        results.captured++
      } else results.skipped.push(`${meta.name} (blank)`)
    } else {
      results.skipped.push(
        `${meta.name} (${errored ? 'error' : 'nothing visible'})`,
      )
    }
    page.off('pageerror', onError)
    await page
      .evaluate(
        (id) =>
          window.AliLowCodeEngine.project.currentDocument
            .getNodeById(id)
            ?.remove(),
        id,
      )
      .catch(() => {})
    await page.waitForTimeout(250)
    if (errored) await setup()
  }
  console.log(JSON.stringify(results))
  await browser.close()
})()
