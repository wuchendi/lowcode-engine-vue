import type { ExtraLib } from './index'

// Vue 2.7 and vue-router 3 typings, read at build time. Each file keeps its
// path under node_modules so their relative imports resolve in Monaco.
const vue = import.meta.glob('/node_modules/vue-2-7/types/*.d.ts', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>
const vueRouter = import.meta.glob('/node_modules/vue-router-3/types/*.d.ts', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function packageLibs(name: string, files: Record<string, string>): ExtraLib[] {
  const libs = Object.entries(files).map(([path, content]) => ({
    path: `file:///node_modules/${name}/types/${path.split('/').pop()}`,
    content,
  }))
  libs.push({
    path: `file:///node_modules/${name}/index.d.ts`,
    content: `export * from './types/index'\nexport { default } from './types/index'\n`,
  })
  return libs
}

const libs: ExtraLib[] = [
  ...packageLibs('vue', vue),
  ...packageLibs('vue-router', vueRouter),
]

export default libs
