const { join, resolve } = require('node:path')

const ROOT = resolve(__dirname, '../..')

/** Fetched docs (`.cache` is ignored). */
const DOCS = join(ROOT, '.cache/material-docs')

/** Material package of each documented library. */
const MATERIALS = {
  'element-ui': join(ROOT, 'packages/materials/element-ui'),
  vant2: join(ROOT, 'packages/materials/vant2'),
  antd1: join(ROOT, 'packages/materials/antd-vue1'),
  'element-plus': join(ROOT, 'packages/materials/element-plus'),
  vant4: join(ROOT, 'packages/materials/vant4'),
  antd4: join(ROOT, 'packages/materials/antd-vue4'),
}

/** The component library of each material: npm package and Vue version. */
const LIBRARIES = {
  'element-ui': { pkg: 'element-ui', vue: 2 },
  vant2: { pkg: 'vant', vue: 2 },
  antd1: { pkg: 'ant-design-vue', vue: 2 },
  'element-plus': { pkg: 'element-plus', vue: 3 },
  vant4: { pkg: 'vant', vue: 3 },
  antd4: { pkg: 'ant-design-vue', vue: 3 },
}

module.exports = {
  ROOT,
  DOCS,
  MATERIALS,
  LIBRARIES,
  LIBS: Object.keys(MATERIALS),
}
