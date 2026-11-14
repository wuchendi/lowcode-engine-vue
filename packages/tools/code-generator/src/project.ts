import type { VueVersion } from './types'
import { toCode } from './value'

/**
 * Versions written into generated projects. Vue and its router are the exact
 * versions the materials target (Vue 2: the last Vue 2 releases); the build
 * tools are floors, not the latest patches: pnpm's minimumReleaseAge rejects
 * releases from the last day, so a range only a fresh release satisfies fails
 * to install.
 */
export const VERSIONS = {
  vue3: '3.5.45',
  vue2: '2.7.16',
  router3: '3.6.5',
  router4: '4.6.4',
  vite: '^8.0.0',
  pluginVue: '^6.0.0',
  pluginVue2: '^2.3.4',
  esbuild: '^0.28.0',
  less: '^4.0.0',
  sass: '^1.80.0',
}

interface AppDirective {
  package: string
  version: string
  style: string
  import: string
  /** Registration on `Vue` (Vue 2.7) or on the app (Vue 3). */
  register: string
}

/**
 * Directives the designer canvas gets from the material libraries; the
 * generated app registers them itself.
 */
export const APP_DIRECTIVES: Record<
  string,
  Record<VueVersion, AppDirective>
> = {
  'v-loading': {
    2: {
      package: 'element-ui',
      version: '^2.15.0',
      style: 'element-ui/lib/theme-chalk/loading.css',
      // The package entry would bundle the whole library
      import: "import loading from 'element-ui/lib/loading'",
      // A CommonJS module: Node's interop puts its exports on `default`
      register: 'Vue.use((loading.default ?? loading).directive)',
    },
    3: {
      package: 'element-plus',
      version: '^2.4.0',
      style: 'element-plus/theme-chalk/el-loading.css',
      import: "import { ElLoading } from 'element-plus'",
      register: ".directive('loading', ElLoading.directive)",
    },
  },
}

export interface PageEntry {
  /** File name of the page, also its route. */
  name: string
  /** Component name, e.g. `Home`. */
  component: string
}

export interface ProjectInput {
  vue: VueVersion
  name: string
  pages: PageEntry[]
  dependencies: Record<string, string>
  styles: string[]
  /** Directives of `APP_DIRECTIVES` the templates use. */
  directives: string[]
}

export function projectFiles(input: ProjectInput): Record<string, string> {
  const { vue, pages } = input
  const directives = input.directives.map((name) => APP_DIRECTIVES[name][vue])
  const styles = [...input.styles]
  for (const directive of directives) {
    if (!styles.includes(directive.style)) styles.push(directive.style)
  }
  const withRouter = pages.length > 1
  const devDependencies: Record<string, string> = { vite: VERSIONS.vite }
  if (vue === 3) devDependencies['@vitejs/plugin-vue'] = VERSIONS.pluginVue
  else {
    devDependencies['@vitejs/plugin-vue2'] = VERSIONS.pluginVue2
    devDependencies.esbuild = VERSIONS.esbuild
  }
  const less = styles.some((s) => s.endsWith('.less'))
  if (less) devDependencies.less = VERSIONS.less
  if (styles.some((s) => /\.s[ac]ss$/.test(s)))
    devDependencies.sass = VERSIONS.sass
  const dependencies: Record<string, string> = {
    vue: vue === 3 ? VERSIONS.vue3 : VERSIONS.vue2,
    ...(withRouter
      ? { 'vue-router': vue === 3 ? VERSIONS.router4 : VERSIONS.router3 }
      : {}),
    ...Object.fromEntries(directives.map((d) => [d.package, d.version])),
    ...input.dependencies,
  }
  const pkg = {
    name: input.name,
    version: '0.1.0',
    private: true,
    type: 'module',
    scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' },
    dependencies: sortKeys(dependencies),
    devDependencies: sortKeys(devDependencies),
  }
  const plugin = vue === 3 ? '@vitejs/plugin-vue' : '@vitejs/plugin-vue2'
  const files: Record<string, string> = {
    'package.json': `${JSON.stringify(pkg, null, 2)}\n`,
    'vite.config.js': viteConfig(plugin, less),
    'index.html': `<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>${input.name}</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.js"></script>\n  </body>\n</html>\n`,
    'src/main.js': mainSource(vue, withRouter, styles, directives),
    'src/App.vue': withRouter
      ? '<template>\n  <router-view />\n</template>\n'
      : `<template>\n  <${pages[0].component} />\n</template>\n\n<script>\nimport ${pages[0].component} from './pages/${pages[0].name}.vue'\n\nexport default {\n  components: { ${pages[0].component} },\n}\n</script>\n`,
    'README.md': `# ${input.name}\n\nGenerated from a LowCode Engine project (Vue ${vue === 3 ? '3' : '2.7'}).\n\n\`\`\`bash\npnpm install\npnpm dev\n\`\`\`\n`,
  }
  if (withRouter) files['src/router.js'] = routerSource(vue, pages)
  // Material libraries may have build scripts (e.g. core-js) that pnpm
  // refuses to skip silently
  files['pnpm-workspace.yaml'] =
    vue === 3
      ? 'strictDepBuilds: false\n'
      : 'strictDepBuilds: false\n\n# @vitejs/plugin-vue2 compiles `lang="ts"` with esbuild\nallowBuilds:\n  esbuild: true\n\npeerDependencyRules:\n  allowedVersions:\n    # @vitejs/plugin-vue2 declares Vite up to 7; it builds with Vite 8\n    "@vitejs/plugin-vue2>vite": "8"\n'
  return files
}

function viteConfig(plugin: string, less: boolean) {
  const lines = [
    `import vue from '${plugin}'`,
    "import { defineConfig } from 'vite'",
    '',
    'export default defineConfig({',
    '  plugins: [vue()],',
  ]
  if (less) {
    lines.push(
      '  resolve: {',
      '    // Less styles of UI libraries import packages as `~pkg`',
      "    alias: [{ find: /^~(?=[@\\w])/, replacement: '' }],",
      '  },',
      '  css: { preprocessorOptions: { less: { javascriptEnabled: true } } },',
    )
  }
  lines.push('})', '')
  return lines.join('\n')
}

function sortKeys(record: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(record).sort(([a], [b]) => a.localeCompare(b)),
  )
}

function mainSource(
  vue: VueVersion,
  withRouter: boolean,
  styles: string[],
  directives: AppDirective[],
) {
  const lines = styles.map((style) => `import '${style}'`)
  lines.push(...directives.map((d) => d.import))
  if (vue === 3) {
    lines.push("import { createApp } from 'vue'", "import App from './App.vue'")
    if (withRouter) lines.push("import router from './router'")
    const register = directives.map((d) => d.register).join('')
    lines.push(
      '',
      `createApp(App)${register}${withRouter ? '.use(router)' : ''}.mount('#app')`,
    )
  } else {
    lines.push("import Vue from 'vue'", "import App from './App.vue'")
    if (withRouter) lines.push("import router from './router'")
    lines.push('', ...directives.map((d) => d.register))
    lines.push(
      `new Vue({${withRouter ? ' router,' : ''} render: (h) => h(App) }).$mount('#app')`,
    )
  }
  return `${lines.join('\n')}\n`
}

function routerSource(vue: VueVersion, pages: PageEntry[]) {
  const imports = pages.map(
    (p) => `import ${p.component} from './pages/${p.name}.vue'`,
  )
  const routes = [
    `  { path: '/', component: ${pages[0].component} },`,
    ...pages.map((p) => `  { path: '/${p.name}', component: ${p.component} },`),
  ]
  if (vue === 3) {
    return `import { createRouter, createWebHashHistory } from 'vue-router'\n${imports.join('\n')}\n\nconst routes = [\n${routes.join('\n')}\n]\n\nexport default createRouter({ history: createWebHashHistory(), routes })\n`
  }
  return `import Vue from 'vue'\nimport Router from 'vue-router'\n${imports.join('\n')}\n\nVue.use(Router)\n\nconst routes = [\n${routes.join('\n')}\n]\n\nexport default new Router({ routes })\n`
}

interface UtilSchema {
  name: string
  type?: string
  content?: {
    package?: string
    exportName?: string
    destructuring?: boolean
    subName?: string
    version?: string
    type?: string
    value?: string
  }
}

/** `src/lowcode/project.js`: utils, constants and i18n messages of the project. */
export function projectContextSource(
  schema: {
    utils?: unknown[]
    constants?: unknown
    i18n?: Record<string, unknown>
  },
  dependencies: Record<string, string>,
  warn: (message: string) => void,
) {
  const imports: string[] = []
  const utils: string[] = []
  for (const util of (schema.utils ?? []) as UtilSchema[]) {
    const content = util.content ?? {}
    if (util.type === 'npm' && content.package) {
      const exportName = content.exportName ?? util.name
      const local = `__${util.name}`
      imports.push(
        content.destructuring === false
          ? `import ${local} from '${content.package}'`
          : `import { ${exportName} as ${local} } from '${content.package}'`,
      )
      utils.push(
        `  ${util.name}: ${local}${content.subName ? `.${content.subName}` : ''},`,
      )
      if (content.version) dependencies[content.package] = content.version
    } else if (content.type === 'JSFunction' && content.value) {
      utils.push(`  ${util.name}: ${content.value},`)
    } else {
      warn(`Util "${util.name}" is not exported`)
    }
  }
  const messages = schema.i18n ?? {}
  const locales = Object.keys(messages)
  const locale = locales.includes('zh-CN') ? 'zh-CN' : (locales[0] ?? 'zh-CN')
  return [
    ...imports,
    ...(imports.length ? [''] : []),
    `export const utils = {\n${utils.join('\n')}\n}`,
    '',
    `export const constants = ${toCode(schema.constants ?? {})}`,
    '',
    `export const messages = ${JSON.stringify(messages, null, 2)}`,
    '',
    `export const locale = '${locale}'`,
    '',
  ].join('\n')
}
