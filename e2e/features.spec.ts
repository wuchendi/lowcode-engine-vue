import type { Page } from '@playwright/test'
import { expect, test } from '@playwright/test'
import { clearPage, collectErrors, openDesigner } from './designer'

const MESSAGES = {
  'zh-CN': { 'e2e.hello': '你好' },
  'en-US': { 'e2e.hello': 'Hello' },
}

/** A page with a button showing the project message `e2e.hello`. */
async function i18nPage(page: Page) {
  await clearPage(page)
  await page.evaluate((messages) => {
    const { project } = window.AliLowCodeEngine
    project.setI18n(messages)
    const doc = project.currentDocument
    doc.insertNode(doc.root, {
      componentName: 'VanButton',
      props: {
        children: { type: 'JSExpression', value: "this.i18n('e2e.hello')" },
      },
    })
  }, MESSAGES)
}

for (const vue of [2, 3] as const) {
  test.describe(`Vue ${vue}`, () => {
    test('shows the loading mask of a node with v-loading', async ({
      page,
    }) => {
      const errors = collectErrors(page)
      const frame = await openDesigner(page, vue)
      await clearPage(page)
      await page.evaluate(() => {
        const doc = window.AliLowCodeEngine.project.currentDocument
        doc.insertNode(doc.root, {
          componentName: 'VanButton',
          props: { text: 'Loading' },
        })
        doc.insertNode(doc.root, {
          componentName: 'VanButton',
          props: { text: 'After' },
        })
      })
      const setLoading = (value: boolean) =>
        page.evaluate((value) => {
          const doc = window.AliLowCodeEngine.project.currentDocument
          doc.root.children.get(0).setPropValue('v-loading', value)
        }, value)
      // The directive of Element UI / Element Plus, on a Vant component that
      // is already rendered without it
      const mask = frame.locator('.lc-page .el-loading-mask')
      await expect(frame.locator('.lc-page .van-button')).toHaveCount(2)
      await setLoading(true)
      await expect(mask).toBeVisible()
      await setLoading(false)
      await expect(mask).toBeHidden()
      await setLoading(true)
      await expect(mask).toBeVisible()
      await expect(frame.locator('.lc-page .van-button')).toHaveCount(2)
      expect(errors).toEqual([])
    })

    test('adds v-loading to a rendered node inside a component', async ({
      page,
    }) => {
      const errors = collectErrors(page)
      const frame = await openDesigner(page, vue)
      await clearPage(page)
      await page.evaluate(() => {
        const doc = window.AliLowCodeEngine.project.currentDocument
        doc.insertNode(doc.root, {
          componentName: 'VanTabs',
          children: [
            {
              componentName: 'VanTab',
              props: { title: 'Tab' },
              children: [{ componentName: 'VanButton', props: { text: 'In' } }],
            },
          ],
        })
      })
      await expect(frame.locator('.lc-page .van-button')).toBeVisible()
      // The tab pane gains a directive it was rendered without: Vue patches
      // directives by index, so the vnode must not be patched in place
      for (const value of [true, false, true]) {
        await page.evaluate((value) => {
          const doc = window.AliLowCodeEngine.project.currentDocument
          const tab = doc.root.children.get(0).children.get(0)
          tab.setPropValue('v-loading', value)
        }, value)
        // Element UI keeps the mask in the DOM, hidden
        const mask = frame.locator('.lc-page .el-loading-mask')
        if (value) await expect(mask).toBeVisible()
        else await expect(mask).toBeHidden()
      }
      await expect(frame.locator('.lc-page .van-button')).toBeVisible()
      expect(errors).toEqual([])
    })

    test('opens the context menu of a canvas node', async ({ page }) => {
      const frame = await openDesigner(page, vue)
      await clearPage(page)
      await page.evaluate(() => {
        const doc = window.AliLowCodeEngine.project.currentDocument
        doc.insertNode(doc.root, {
          componentName: 'VanButton',
          props: { text: 'Context' },
        })
      })
      const button = frame.locator('.lc-page .van-button')
      await expect(button).toBeVisible()
      await button.click({ button: 'right' })
      const menu = page.locator('.engine-context-menu').last()
      await expect(menu).toBeVisible()
      await menu
        .locator('.engine-context-menu-item', { hasText: '删除' })
        .click()
      await expect(button).toHaveCount(0)
    })

    test('switches the canvas locale', async ({ page }) => {
      const frame = await openDesigner(page, vue)
      await i18nPage(page)
      const button = frame.locator('.lc-page .van-button')
      await expect(button).toContainText('你好')
      await page.locator('.lowcode-canvas-locale').click()
      await page.getByRole('option', { name: 'English' }).click()
      await expect(button).toContainText('Hello')
    })

    test('previews in the canvas locale with the project messages', async ({
      page,
    }) => {
      await openDesigner(page, vue)
      await i18nPage(page)
      await page.locator('.lowcode-canvas-locale').click()
      await page.getByRole('option', { name: 'English' }).click()
      const [preview] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('.lc-top-area button', { hasText: '预览' }).click(),
      ])
      // Vue 2 replaces the mount element: look in the whole page
      const content = preview.locator('body')
      await expect(content).toContainText('Hello')
      await preview.getByRole('link', { name: '中文' }).click()
      await expect(content).toContainText('你好')
    })

    test('resets the project to the sample', async ({ page }) => {
      const frame = await openDesigner(page, vue)
      await clearPage(page)
      await page.evaluate(() => {
        const doc = window.AliLowCodeEngine.project.currentDocument
        doc.insertNode(doc.root, {
          componentName: 'VanButton',
          props: { text: 'Mine' },
        })
      })
      await page
        .locator('.lc-top-area button', { hasText: '保存到本地' })
        .click()
      await expect(frame.locator('.lc-page')).toContainText('Mine')

      await page.locator('.lc-top-area button', { hasText: '重置' }).click()
      await Promise.all([
        page.waitForEvent('load'),
        page.locator('.next-dialog-footer button', { hasText: '确定' }).click(),
      ])
      const reset = await openDesigner(page, vue)
      await expect(reset.locator('.lc-page')).not.toContainText('Mine')
      // The sample page: its data source text (Vue 2), its buttons showing the
      // sample messages (Vue 3)
      await expect(reset.locator('.lc-page')).toContainText(
        vue === 2 ? 'Hello AliLowCode' : '主按钮',
      )
    })
  })
}

for (const vue of [2, 3] as const) {
  test(`Vue ${vue}: loads JSONP data sources in the canvas and the preview`, async ({
    page,
  }) => {
    // A saved project: a page loading /mock/info.jsonp.js
    await page.addInitScript((vue) => {
      if (localStorage.getItem(`projectSchema:vue${vue}`)) return
      localStorage.setItem(
        `projectSchema:vue${vue}`,
        JSON.stringify({
          version: '1.0.0',
          componentsMap: [],
          componentsTree: [
            {
              componentName: 'Page',
              id: 'page',
              fileName: 'index',
              props: {},
              dataSource: {
                list: [
                  {
                    id: 'jsonpInfo',
                    type: 'jsonp',
                    isInit: true,
                    options: {
                      uri: '/mock/info.jsonp.js',
                      jsonpCallbackFunction: 'lowcodeMockInfo',
                    },
                  },
                ],
              },
              children: [
                {
                  componentName: 'VanButton',
                  id: 'button',
                  props: {
                    children: {
                      type: 'JSExpression',
                      value: "this.jsonpInfo ? this.jsonpInfo.text : 'loading'",
                    },
                  },
                },
              ],
            },
          ],
        }),
      )
    }, vue)
    const frame = await openDesigner(page, vue)
    await expect(frame.locator('.lc-page .van-button')).toContainText(
      'Hello JSONP',
    )
    const [preview] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('.lc-top-area button', { hasText: '预览' }).click(),
    ])
    await expect(preview.locator('body')).toContainText('Hello JSONP')
  })
}

const MATERIAL = 'https://materials.example.test/demo/assets.json'

/**
 * A third-party material: one component greeting `name`, for Vue 2 and 3.
 * Served to every page of the context (the preview opens in a popup).
 */
async function serveMaterial(page: Page) {
  const context = page.context()
  await context.route(MATERIAL, (route) =>
    route.fulfill({
      json: {
        version: '1.0.0',
        packages: [
          {
            package: '@demo/hello',
            version: '1.0.0',
            library: 'DemoHello',
            urls: ['./index.js'],
          },
        ],
        components: [
          {
            componentName: 'DemoHello',
            title: 'Hello',
            group: 'Demo',
            npm: {
              package: '@demo/hello',
              version: '1.0.0',
              exportName: 'DemoHello',
              destructuring: true,
            },
            props: [{ name: 'name', title: 'name', setter: 'StringSetter' }],
            snippets: [
              {
                title: 'Hello',
                schema: {
                  componentName: 'DemoHello',
                  props: { name: 'World' },
                },
              },
            ],
          },
        ],
      },
    }),
  )
  await context.route('https://materials.example.test/demo/index.js', (route) =>
    route.fulfill({
      contentType: 'text/javascript',
      body: `window.DemoHello = { DemoHello: {
        name: 'DemoHello',
        props: ['name'],
        render(h) {
          const create = typeof h === 'function' ? h : window.Vue.h
          return create('span', { class: 'demo-hello' }, 'Hello ' + this.name)
        },
      } }`,
    }),
  )
}

for (const vue of [2, 3] as const) {
  test(`Vue ${vue}: adds a material by its assets.json and keeps it`, async ({
    page,
  }) => {
    await serveMaterial(page)
    let frame = await openDesigner(page, vue)
    await clearPage(page)
    await page.evaluate(() =>
      window.AliLowCodeEngine.skeleton.showPanel('materialsPane'),
    )
    const pane = page.locator('.lowcode-materials-pane')
    await pane.locator('input').fill(MATERIAL)
    await pane.getByRole('button', { name: '添加物料' }).click()
    await expect(pane).toContainText(MATERIAL)

    await page.evaluate(() => {
      const doc = window.AliLowCodeEngine.project.currentDocument
      doc.insertNode(doc.root, {
        componentName: 'DemoHello',
        props: { name: 'World' },
      })
    })
    await expect(frame.locator('.demo-hello')).toHaveText('Hello World')

    // Saved with the project: loaded again before the page renders
    await page.locator('.lc-top-area button', { hasText: '保存到本地' }).click()
    await page.reload()
    frame = await openDesigner(page, vue)
    await expect(frame.locator('.demo-hello')).toHaveText('Hello World')

    const [preview] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('.lc-top-area button', { hasText: '预览' }).click(),
    ])
    await expect(preview.locator('.demo-hello')).toHaveText('Hello World')
  })
}
