// node scripts/materials/fetch-docs.cjs [lib...]
// Downloads the docs of the library versions the materials install into
// .cache/material-docs/<lib> (set GITHUB_TOKEN to raise the API rate limit).
// ant-design-vue 1.x is read from its site by scrape-antd1.cjs instead.
const {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} = require('node:fs')
const { join } = require('node:path')
const { DOCS, LIBS, MATERIALS } = require('./paths.cjs')

/** Repository, tag, docs pattern and extra files of each library. */
const SOURCES = {
  'element-ui': {
    pkg: 'element-ui',
    repo: 'ElemeFE/element',
    tag: (v) => `v${v}`,
    docs: /^examples\/docs\/zh-CN\/([^/]+)\.md$/,
    files: { 'nav.config.json': 'examples/nav.config.json' },
  },
  vant2: {
    pkg: 'vant',
    repo: 'youzan/vant',
    tag: (v) => `v${v}`,
    docs: /^src\/([^/]+)\/README\.zh-CN\.md$/,
    files: { 'vant.config.js': 'vant.config.js' },
  },
  vant4: {
    pkg: 'vant',
    repo: 'youzan/vant',
    tag: (v) => `v${v}`,
    docs: /^packages\/vant\/src\/([^/]+)\/README\.zh-CN\.md$/,
    files: { 'vant.config.mjs': 'packages/vant/vant.config.mjs' },
  },
  antd4: {
    pkg: 'ant-design-vue',
    repo: 'vueComponent/ant-design-vue',
    tag: (v) => v,
    docs: /^components\/([^/]+)\/index\.zh-CN\.md$/,
    files: {},
  },
  'element-plus': {
    pkg: 'element-plus',
    repo: 'element-plus/element-plus',
    tag: (v) => v,
    docs: /^docs\/en-US\/component\/([^/]+)\.md$/,
    files: {
      'component.json': 'docs/.vitepress/crowdin/en-US/pages/component.json',
    },
    // The English docs have the API tables, the site the Chinese texts
    zh: (page) => `https://element-plus.org/zh-CN/component/${page}.html`,
  },
}

function versionOf(lib, pkg) {
  const manifest = JSON.parse(
    readFileSync(join(MATERIALS[lib], 'package.json'), 'utf8'),
  )
  return (
    manifest.dependencies?.[pkg] ??
    manifest.devDependencies?.[pkg] ??
    manifest.peerDependencies?.[pkg]
  )
}

async function get(url, json) {
  const headers = {}
  if (json && process.env.GITHUB_TOKEN) {
    headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }
  const response = await fetch(url, { headers })
  if (!response.ok) throw new Error(`${response.status} ${url}`)
  return json ? response.json() : response.text()
}

async function fetchLibrary(lib) {
  const source = SOURCES[lib]
  const ref = source.tag(versionOf(lib, source.pkg))
  const out = join(DOCS, lib)
  mkdirSync(out, { recursive: true })
  const raw = (path) =>
    `https://raw.githubusercontent.com/${source.repo}/${ref}/${path}`
  const tree = await get(
    `https://api.github.com/repos/${source.repo}/git/trees/${ref}?recursive=1`,
    true,
  )
  const pages = tree.tree
    .map((entry) => [entry.path, entry.path.match(source.docs)?.[1]])
    .filter(([, page]) => page)
  const files = [
    ...pages.map(([path, page]) => [`${page}.md`, raw(path)]),
    ...Object.entries(source.files).map(([name, path]) => [name, raw(path)]),
    ...(source.zh
      ? pages.map(([, page]) => [`zh/${page}.html`, source.zh(page)])
      : []),
  ]
  if (source.zh) mkdirSync(join(out, 'zh'), { recursive: true })
  for (const [name, url] of files) {
    const target = join(out, name)
    if (!existsSync(target)) writeFileSync(target, await get(url))
  }
  console.log(lib, ref, `${pages.length} pages`)
}

;(async () => {
  const only = process.argv.slice(2)
  for (const lib of only.length ? only : LIBS) {
    if (lib === 'antd1') console.log('antd1: run scrape-antd1.cjs')
    else await fetchLibrary(lib)
  }
})()
