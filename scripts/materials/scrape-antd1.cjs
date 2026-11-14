// node scripts/materials/scrape-antd1.cjs
// ant-design-vue 1.x has no Markdown docs in a tagged tree: reads the API
// tables of 1x.antdv.com into <docs>/antd1/<component>.md.
const { chromium } = require('@playwright/test')
const { writeFileSync, mkdirSync } = require('node:fs')
const { join } = require('node:path')
const { DOCS } = require('./paths.cjs')

const out = join(DOCS, 'antd1')
;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://1x.antdv.com/components/button-cn/', {
    waitUntil: 'networkidle',
    timeout: 120000,
  })
  await page.waitForSelector('table', { timeout: 60000 })
  const links = await page.evaluate(() => [
    ...new Set(
      [...document.querySelectorAll('a[href*="/components/"]')]
        .map((a) => a.getAttribute('href'))
        .filter((h) => /\/components\/[\w-]+-cn\/?$/.test(h)),
    ),
  ])
  mkdirSync(out, { recursive: true })
  const done = []
  for (const href of links) {
    const name = href.match(/components\/([\w-]+)-cn/)[1]
    try {
      await page.goto(new URL(href, 'https://1x.antdv.com').href, {
        waitUntil: 'networkidle',
        timeout: 60000,
      })
      await page.waitForSelector('h1', { timeout: 30000 })
      await page.waitForTimeout(500)
      const md = await page.evaluate(() => {
        const root =
          document.querySelector('.markdown')?.parentElement || document.body
        const out = []
        const cell = (el) =>
          el.innerText.replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim()
        for (const el of root.querySelectorAll('h1, h2, h3, h4, table')) {
          if (el.closest('.code-box')) continue
          if (el.tagName === 'TABLE') {
            const rows = [...el.querySelectorAll('tr')].map((tr) =>
              [...tr.children].map(cell),
            )
            if (!rows.length) continue
            out.push(
              '| ' + rows[0].join(' | ') + ' |',
              '| ' + rows[0].map(() => '---').join(' | ') + ' |',
            )
            for (const r of rows.slice(1)) out.push('| ' + r.join(' | ') + ' |')
            out.push('')
          } else {
            out.push(
              '#'.repeat(Number(el.tagName[1])) +
                ' ' +
                el.innerText.replace(/\s+/g, ' ').replace(/#\s*$/, '').trim(),
              '',
            )
          }
        }
        return out.join('\n')
      })
      writeFileSync(join(out, `${name}.md`), md)
      done.push(name)
    } catch (e) {
      console.error('failed', name, e.message.split('\n')[0])
    }
  }
  console.log(JSON.stringify({ links: links.length, done: done.length }))
  await browser.close()
})()
