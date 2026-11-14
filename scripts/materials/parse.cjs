// node scripts/materials/parse.cjs [lib...]
// Parses the API tables of the fetched docs into <docs>/<lib>/parsed.json:
// [{ page, title, sections: [{ heading, kind, rows: [{ name, desc, type, options, default }] }] }]
const {
  readFileSync,
  readdirSync,
  writeFileSync,
  existsSync,
} = require('node:fs')
const { join } = require('node:path')

const { DOCS: root, LIBS } = require('./paths.cjs')

function splitRow(line) {
  const cells = []
  let cur = ''
  let tick = false
  const s = line.trim().replace(/^\|/, '').replace(/\|$/, '')
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '\\' && s[i + 1] === '|') {
      cur += '|'
      i++
      continue
    }
    if (c === '`') tick = !tick
    if (c === '|' && !tick) {
      cells.push(cur.trim())
      cur = ''
      continue
    }
    cur += c
  }
  cells.push(cur.trim())
  return cells
}

const strip = (s) =>
  (s || '')
    .replace(/<[^>]+>/g, '')
    .replace(/\^\[([^\]]*)\]/g, '$1 ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/&nbsp;/g, ' ')
    .trim()

function kindOf(header) {
  const h = header.map((x) => strip(x).toLowerCase())
  const first = h[0] || ''
  if (/方法|method/.test(first)) return 'methods'
  if (/事件|event/.test(first)) return 'events'
  if (
    /插槽|slot/.test(first) ||
    (/^(name|名称)$/.test(first) &&
      h.length <= 3 &&
      !h.some((x) => /类型|type/.test(x)))
  )
    return 'slots'
  if (/参数|属性|attribute|^name$|^prop|^property|^名称$/.test(first))
    return 'props'
  return null
}

/** Kind given by the section heading, `undefined` when it does not tell. */
function kindOfHeading(heading) {
  const h = heading.toLowerCase()
  if (
    /样式变量|css ?variables|主题|theme|数据结构|类型定义|\btypes?\b|typing|config ?provider/.test(
      h,
    )
  )
    return null
  if (/方法|methods?\b|exposes?\b|instance/.test(h)) return 'methods'
  if (/事件|\bevents?\b/.test(h)) return 'events'
  if (/插槽|\bslots?\b/.test(h)) return 'slots'
  return undefined
}

/** `'a' | 'b'` literals, `可选值为 a b` hints, an options column. */
function optionsOf(type, desc, optionsCell) {
  const fromCell = strip(optionsCell || '')
  let found = []
  if (fromCell && !/^[—-]$/.test(fromCell)) {
    found = fromCell
      .split(/[\/,，、|]/)
      .map((x) => x.trim().replace(/^['"`]|['"`]$/g, ''))
      .filter((x) => x && !/^[—-]$/.test(x) && x.length < 40)
  }
  if (!found.length) {
    const literals = [...(type || '').matchAll(/['"]([^'"]*)['"]/g)].map(
      (m) => m[1],
    )
    if (literals.length > 1) found = literals
  }
  if (!found.length) {
    const m = (desc || '').match(/可选值(?:为|有|：|:)\s*([^，。；;]+)/)
    if (m) {
      found = [...m[1].matchAll(/`([^`]+)`/g)].map((x) =>
        x[1].replace(/^['"]|['"]$/g, ''),
      )
      if (!found.length)
        found = m[1]
          .split(/[\s、,，]+|或者?/)
          .map((x) => x.trim().replace(/^['"]|['"]$/g, ''))
          .filter((x) => /^[\w-]+$/.test(x))
    }
  }
  return [...new Set(found)]
}

function parseMarkdown(md) {
  const lines = md.split('\n')
  const titleLine = lines.find((l) => /^#\s+/.test(l)) || ''
  const fm = md.match(/^---\n([\s\S]*?)\n---/)
  const front = {}
  if (fm)
    for (const l of fm[1].split('\n')) {
      const m = l.match(/^(\w+):\s*(.*)$/)
      if (m) front[m[1]] = m[2].trim()
    }
  const title =
    (front.subtitle ? `${front.title} ${front.subtitle}` : '') ||
    titleLine.replace(/^#\s+/, '').trim()
  const sections = []
  let heading = ''
  let inCode = false
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i]
    if (/^```/.test(l.trim())) {
      inCode = !inCode
      continue
    }
    if (inCode) continue
    const h = l.match(/^(#{2,4})\s+(.*)$/)
    if (h) {
      heading = strip(h[2]).replace(/\s+/g, ' ')
      continue
    }
    if (/^\s*\|/.test(l) && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1] || '')) {
      const header = splitRow(l)
      const byHeading = kindOfHeading(heading)
      let kind = byHeading === undefined ? kindOf(header) : byHeading
      const rows = []
      let j = i + 2
      for (; j < lines.length && /^\s*\|/.test(lines[j]); j++)
        rows.push(splitRow(lines[j]))
      i = j - 1
      if (rows.length && rows.every((r) => /\(\)?\s*$|\(/.test(strip(r[0]))))
        kind = 'methods'
      if (!kind) continue
      const col = (re) =>
        header.findIndex((x) => re.test(strip(x).toLowerCase()))
      const ci = {
        desc: col(/说明|描述|description/),
        type: col(/类型|type/),
        opts: col(/可选值|accepted/),
        def: col(/默认|default/),
      }
      sections.push({
        heading,
        kind,
        header: header.map(strip),
        rows: rows
          .map((r) => {
            const type =
              ci.type >= 0
                ? strip(r[ci.type])
                    .replace(/`/g, '')
                    .replace(/(^|\s)_|_(\s|$)/g, '$1$2')
                    .replace(/^_|_$/g, '')
                    .trim()
                : ''
            const desc = ci.desc >= 0 ? strip(r[ci.desc]).replace(/`/g, '') : ''
            return {
              name: strip(r[0])
                .replace(/`/g, '')
                .replace(/\s*\d+\.\d+(\.\d+)?\s*$/, '')
                .trim(),
              desc,
              type,
              options: optionsOf(
                ci.type >= 0 ? strip(r[ci.type]) : '',
                ci.desc >= 0 ? strip(r[ci.desc]) : '',
                ci.opts >= 0 ? r[ci.opts] : '',
              ),
              default:
                ci.def >= 0
                  ? strip(r[ci.def]).replace(/`/g, '').replace(/^_|_$/g, '')
                  : '',
            }
          })
          .filter((r) => r.name && !/^[—-]+$/.test(r.name)),
      })
    }
  }
  return { title, front, sections }
}

/** Chinese descriptions of the element-plus site: heading id -> name -> description. */
function zhDescriptions(html) {
  const out = {}
  const re =
    /<h3 id="([^"]+)"[^>]*>([\s\S]*?)<\/h3>\s*<div class="vp-table"><table>([\s\S]*?)<\/table>/g
  let m
  while ((m = re.exec(html))) {
    const heading = strip(m[2])
      .replace(/\s*​\s*$/, '')
      .trim()
    const rows = {}
    for (const tr of m[3].matchAll(/<tr>([\s\S]*?)<\/tr>/g)) {
      const tds = [...tr[1].matchAll(/<td>([\s\S]*?)<\/td>/g)].map((x) => x[1])
      if (tds.length < 2) continue
      const name = strip(
        tds[0].replace(/<span class="vp-tag[^"]*">[\s\S]*?<\/span>/g, ''),
      ).trim()
      rows[name] = strip(tds[1])
    }
    out[heading.toLowerCase()] = rows
  }
  const title = strip((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '')
  return { title, sections: out }
}

const only = process.argv.slice(2)
for (const lib of only.length ? only : LIBS) {
  const dir = join(root, lib)
  const pages = []
  for (const f of readdirSync(dir)
    .filter((x) => x.endsWith('.md'))
    .sort()) {
    const page = f.replace(/\.md$/, '')
    const parsed = parseMarkdown(readFileSync(join(dir, f), 'utf8'))
    if (lib === 'element-plus' && existsSync(join(dir, 'zh', `${page}.html`))) {
      const zh = zhDescriptions(
        readFileSync(join(dir, 'zh', `${page}.html`), 'utf8'),
      )
      parsed.titleZh = zh.title.replace(/\s*​.*$/, '')
      for (const s of parsed.sections) {
        const rows = zh.sections[s.heading.toLowerCase()] || {}
        for (const r of s.rows) {
          r.descEn = r.desc
          r.desc = rows[r.name] || r.desc
        }
      }
    }
    pages.push({ page, ...parsed })
  }
  writeFileSync(join(dir, 'parsed.json'), JSON.stringify(pages, null, 1))
  const withApi = pages.filter((p) =>
    p.sections.some((s) => s.kind === 'props'),
  )
  console.log(
    lib,
    'pages',
    pages.length,
    'with props tables',
    withApi.length,
    'sections',
    pages.reduce((n, p) => n + p.sections.length, 0),
  )
}
