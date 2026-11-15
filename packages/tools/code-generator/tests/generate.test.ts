import { strFromU8, unzipSync } from 'fflate'
import { describe, expect, it } from 'vitest'
import { compileScript, compileTemplate, parse } from 'vue/compiler-sfc'
import { generateProject, toZip } from '../src'
import { packages, project } from './fixtures'

/** Compiles a generated SFC with Vue 3's compiler; returns its errors. */
function compileErrors(file: string, source: string) {
  const { descriptor, errors } = parse(source, { filename: file })
  if (errors.length) return errors.map(String)
  const script =
    descriptor.script || descriptor.scriptSetup
      ? compileScript(descriptor, { id: file })
      : undefined
  const template = compileTemplate({
    source: descriptor.template?.content ?? '',
    filename: file,
    id: file,
    // Parses the expressions, as production builds do
    compilerOptions: {
      prefixIdentifiers: true,
      bindingMetadata: script?.bindings,
    },
  })
  return template.errors.map(String)
}

describe('generateProject (Vue 3)', async () => {
  const { files, warnings } = await generateProject(project, {
    vue: 3,
    packages,
  })
  const home = files['src/pages/home.vue']

  it('writes a Vite project with one file per page and block', () => {
    expect(Object.keys(files).sort()).toEqual(
      [
        'README.md',
        'index.html',
        'package.json',
        'src/App.vue',
        'src/components/card.vue',
        'src/lowcode/index.js',
        'src/lowcode/project.js',
        'src/main.js',
        'src/pages/about.vue',
        'src/pages/home.vue',
        'pnpm-workspace.yaml',
        'src/router.js',
        'vite.config.js',
      ].sort(),
    )
    const pkg = JSON.parse(files['package.json'])
    // Vue and the router at the versions the materials target
    expect(pkg.dependencies).toMatchObject({
      vant: '^4.8.10',
      vue: '3.5.45',
      'vue-router': '5.5.1',
    })
    expect(pkg.devDependencies).toHaveProperty('@vitejs/plugin-vue')
    expect(files['src/main.js']).toContain("import 'vant/lib/index.css'")
    expect(files['src/App.vue']).toContain('<router-view')
    expect(files['src/router.js']).toContain("path: '/about'")
    // Material libraries may have build scripts pnpm would refuse to skip
    expect(files['pnpm-workspace.yaml']).toContain('strictDepBuilds: false')
    expect(files['vite.config.js']).not.toContain('less')
  })

  it('resolves webpack-style imports of less styles', async () => {
    const less = [
      {
        ...packages[0],
        codegen: { ...packages[0].codegen!, styles: ['vant/lib/index.less'] },
      },
    ]
    const { files } = await generateProject(project, { vue: 3, packages: less })
    expect(JSON.parse(files['package.json']).devDependencies).toHaveProperty(
      'less',
    )
    expect(files['vite.config.js']).toContain('find: /^~(?=[@\\w])/')
    expect(files['vite.config.js']).toContain('javascriptEnabled: true')
  })

  it('renders the node tree as a template', () => {
    expect(home).toContain('<div class="lc-page home" style="height: 100%">')
    expect(home).toMatch(
      /<VanButton[^>]*type="primary"[^>]*:round="true"[^>]*:text="text"/,
    )
    expect(home).toContain(
      '@click="(...args) => onClick(...args, { &quot;testKey&quot;: 123 })"',
    )
    expect(home).toContain('Click &quot;me&quot; &lt;now>')
    expect(home).toMatch(
      /<template v-if="visible">\s*<div v-for="\(row, i\) in list" :key="i">/,
    )
    expect(home).toContain('{{ row.name }}')
    expect(home).toMatch(
      /<template #title="scope">\s*<span>{{ scope.label }}<\/span>/,
    )
    expect(home).toContain("{{ i18n('hello') }}")
    expect(home).toContain('<Card />')
  })

  it('imports and registers the components and the page context', () => {
    expect(home).toContain(
      "import { Button as VanButton, Tabs as VanTabs } from 'vant'",
    )
    expect(home).toContain("import Card from '../components/card.vue'")
    expect(home).toMatch(/components: \{ VanButton, VanTabs, Card \}/)
    expect(home).toContain("import { createPageContext } from '../lowcode'")
    expect(home).toContain('mixins: [lowcode.mixin]')
    expect(home).toContain('lowcode.dataSourceMap.info.load()')
    expect(home).not.toContain('this.dataSourceMap')
    expect(home).toContain('<style>\nbody { margin: 0; }\n</style>')
  })

  it('generates an Options API component without source code', () => {
    const about = files['src/pages/about.vue']
    expect(about).toMatch(/data\(\) \{\s*return \{ count: 1 \}/)
    expect(about).toContain('add: function () { this.count += 1 }')
    expect(about).toContain(
      'mounted: function () { console.log(this.utils.format(this.count)) }',
    )
    // Vue's template compiler rejects function expressions as handlers
    expect(about).toContain('@click="() => { add() }"')
  })

  it('writes the project context', () => {
    expect(files['src/lowcode/project.js']).toContain(
      'format: function (v) { return String(v) }',
    )
    expect(files['src/lowcode/project.js']).toContain('API: "/api"')
    expect(files['src/lowcode/project.js']).toContain('"hello": "你好"')
  })

  it('reports what it cannot export', () => {
    expect(warnings).toEqual([
      expect.stringContaining('Mystery'),
      // The designer serves it; the generated app has to
      expect.stringContaining('"/mock/info.json"'),
    ])
  })

  it('emits single-file components Vue compiles', () => {
    for (const [file, source] of Object.entries(files)) {
      if (file.endsWith('.vue'))
        expect(compileErrors(file, source), file).toEqual([])
    }
  })
})

describe('generateProject (Vue 2.7)', async () => {
  const { files } = await generateProject(project, { vue: 2, packages })

  it('writes a Vue 2.7 project', () => {
    const pkg = JSON.parse(files['package.json'])
    expect(pkg.dependencies.vue).toBe('2.7.16')
    expect(pkg.dependencies['vue-router']).toBe('3.6.5')
    expect(pkg.devDependencies).toHaveProperty('@vitejs/plugin-vue2')
    expect(pkg.devDependencies).toHaveProperty('esbuild')
    expect(files['pnpm-workspace.yaml']).toContain('esbuild: true')
    expect(files['pnpm-workspace.yaml']).toContain('strictDepBuilds: false')
    expect(files['src/main.js']).toContain('new Vue(')
    expect(files['src/router.js']).toContain('Vue.use(Router)')
  })

  it('wraps a block in one root element', () => {
    expect(files['src/components/card.vue']).toMatch(
      /<template>\s*<div>\s*<span>card<\/span>\s*<\/div>/,
    )
  })
})

describe('formatting and zip', () => {
  it('formats the files with prettier', async () => {
    const { files, warnings } = await generateProject(project, {
      vue: 3,
      packages,
      format: true,
    })
    expect(warnings.filter((w) => w.includes('format'))).toEqual([])
    expect(files['src/main.js']).toMatch(/;\n/)
    for (const [file, source] of Object.entries(files)) {
      if (file.endsWith('.vue'))
        expect(compileErrors(file, source), file).toEqual([])
    }
  })

  it('zips the files', async () => {
    const { files } = await generateProject(project, { vue: 3, packages })
    const zip = toZip(files)
    expect(strFromU8(unzipSync(zip)['package.json'])).toBe(
      files['package.json'],
    )
  })
})

describe('file names', () => {
  it('names files after route-like file names', async () => {
    const schema = {
      ...project,
      componentsTree: [
        { componentName: 'Page', fileName: '/', children: [] },
        { componentName: 'Page', fileName: '/user/list', children: [] },
      ],
    } as unknown as typeof project
    const { files } = await generateProject(schema, { vue: 3, packages })
    expect(files['src/pages/index.vue']).toBeDefined()
    expect(files['src/pages/user-list.vue']).toBeDefined()
  })
})

describe('directives the designer canvas provides', () => {
  const schema = {
    ...project,
    componentsTree: [
      {
        componentName: 'Page',
        fileName: 'home',
        dataSource: {
          list: [
            {
              id: 'remote',
              type: 'fetch',
              options: { uri: 'https://example.com/a.json' },
            },
          ],
        },
        children: [
          {
            componentName: 'div',
            props: { 'v-loading': { type: 'JSExpression', value: 'true' } },
          },
        ],
      },
    ],
  } as unknown as typeof project

  it('registers v-loading from Element UI (Vue 2.7)', async () => {
    const { files, warnings } = await generateProject(schema, {
      vue: 2,
      packages,
    })
    expect(warnings).toEqual([])
    expect(JSON.parse(files['package.json']).dependencies).toHaveProperty(
      'element-ui',
    )
    expect(files['src/main.js']).toContain(
      "import 'element-ui/lib/theme-chalk/loading.css'",
    )
    expect(files['src/main.js']).toContain(
      "import loading from 'element-ui/lib/loading'",
    )
    expect(files['src/main.js']).toContain(
      'Vue.use((loading.default ?? loading).directive)',
    )
  })

  it('registers v-loading from Element Plus (Vue 3)', async () => {
    const { files, warnings } = await generateProject(schema, {
      vue: 3,
      packages,
    })
    expect(warnings).toEqual([])
    expect(JSON.parse(files['package.json']).dependencies).toHaveProperty(
      'element-plus',
    )
    expect(files['src/main.js']).toContain(
      "import 'element-plus/theme-chalk/el-loading.css'",
    )
    expect(files['src/main.js']).toContain(
      ".directive('loading', ElLoading.directive)",
    )
  })
})

describe('without componentsMap', () => {
  it('finds the components in the material manifests', async () => {
    const schema = {
      version: '1.0.0',
      componentsMap: [],
      componentsTree: [
        {
          componentName: 'Page',
          fileName: '/',
          children: [
            { componentName: 'VanButton', props: { type: 'primary' } },
          ],
        },
      ],
    } as unknown as typeof project
    const { files, warnings } = await generateProject(schema, {
      vue: 3,
      packages,
    })
    expect(warnings).toEqual([])
    expect(files['src/pages/index.vue']).toContain(
      "import { Button as VanButton } from 'vant'",
    )
  })
})

describe('componentsMap entries without a package', () => {
  it('keeps native tags and imports the low-code components', async () => {
    const schema = {
      version: '1.0.0',
      componentsMap: [
        { devMode: 'lowCode', componentName: 'span' },
        { devMode: 'lowCode', componentName: 'UserCard' },
      ],
      componentsTree: [
        {
          componentName: 'Page',
          fileName: '/',
          children: [{ componentName: 'UserCard', props: { name: 'vue' } }],
        },
        {
          componentName: 'Component',
          fileName: 'UserCard',
          children: [{ componentName: 'span', children: 'card' }],
        },
      ],
    } as unknown as typeof project
    const { files, warnings } = await generateProject(schema, {
      vue: 3,
      packages,
    })
    expect(warnings).toEqual([])
    expect(files['src/components/UserCard.vue']).toContain('<span>card</span>')
    expect(files['src/pages/index.vue']).toContain(
      "import UserCard from '../components/UserCard.vue'",
    )
  })
})

describe('sub-components in the manifests', () => {
  it('imports the library component and reads the sub-component', async () => {
    const schema = {
      version: '1.0.0',
      componentsMap: [],
      componentsTree: [
        {
          componentName: 'Page',
          fileName: '/',
          children: [
            {
              componentName: 'ASelect',
              children: [{ componentName: 'ASelectOption', children: 'a' }],
            },
          ],
        },
      ],
    } as unknown as typeof project
    const antd = [
      {
        package: '@cdlab996/lowcode-materials-antd-vue1',
        codegen: {
          exports: {
            ASelect: { package: 'ant-design-vue', exportName: 'Select' },
            ASelectOption: {
              package: 'ant-design-vue',
              exportName: 'Select',
              subName: 'Option',
            },
          },
          styles: [],
          dependencies: { 'ant-design-vue': '1.7.8' },
        },
      },
    ]
    const { files, warnings } = await generateProject(schema, {
      vue: 2,
      packages: antd,
    })
    expect(warnings).toEqual([])
    const page = files['src/pages/index.vue']
    expect(page).toContain("import { Select as ASelect } from 'ant-design-vue'")
    expect(page).toContain('const ASelectOption = ASelect.Option')
    expect(page).toMatch(/components: \{[^}]*ASelectOption/)
  })
})
