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

module.exports = { ROOT, DOCS, MATERIALS, LIBS: Object.keys(MATERIALS) }
