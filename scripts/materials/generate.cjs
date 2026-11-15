// node scripts/materials/generate.cjs <lib> [--write]
// Generates the metas of every documented component of a library from the
// docs fetched by fetch-docs.cjs and parsed by parse.cjs. Without --write it
// only prints the summary.
const { execFileSync } = require('node:child_process')
const { createRequire } = require('node:module')
const {
  readFileSync,
  writeFileSync,
  mkdirSync,
  rmSync,
  existsSync,
} = require('node:fs')
const { join } = require('node:path')
const recipes = require('./recipes.cjs')

const [lib, ...flags] = process.argv.slice(2)
const write = flags.includes('--write')
const { DOCS, MATERIALS } = require('./paths.cjs')
if (!MATERIALS[lib])
  throw new Error(
    `Unknown library ${lib}: ${Object.keys(MATERIALS).join(', ')}`,
  )
const dir = MATERIALS[lib]
const req = createRequire(join(dir, 'package.json'))
const docs = JSON.parse(readFileSync(join(DOCS, lib, 'parsed.json'), 'utf8'))

const LIBS = {
  'element-ui': {
    pkg: 'element-ui',
    entry: 'element-ui/lib/element-ui.common.js',
    vue: 2,
    prefix: 'El',
    group: 'Element 组件',
    css: "import 'element-ui/lib/theme-chalk/index.css'",
    doc: (p) => `https://element.eleme.cn/#/zh-CN/component/${p}`,
  },
  'element-plus': {
    pkg: 'element-plus',
    vue: 3,
    prefix: 'El',
    exportPrefix: 'El',
    group: 'Element 组件',
    css: "import 'element-plus/dist/index.css'",
    // Vue 3 has no global registration: the renderer registers these
    directives: { loading: 'vLoading' },
    doc: (p) => `https://element-plus.org/zh-CN/component/${p}.html`,
  },
  vant2: {
    pkg: 'vant',
    entry: 'vant/lib/index.js',
    vue: 2,
    prefix: 'Van',
    group: 'Vant 组件',
    css: "import 'vant/lib/index.css'",
    doc: (p) => `https://vant-ui.github.io/vant/v2/#/zh-CN/${p}`,
  },
  vant4: {
    pkg: 'vant',
    entry: 'vant/lib/index.js',
    vue: 3,
    prefix: 'Van',
    group: 'Vant 组件',
    css: "import 'vant/lib/index.css'",
    doc: (p) => `https://vant-ui.github.io/vant/#/zh-CN/${p}`,
  },
  antd1: {
    pkg: 'ant-design-vue',
    vue: 2,
    prefix: 'A',
    group: 'Ant Design 组件',
    css: "import 'ant-design-vue/dist/antd.css'",
    doc: (p) => `https://1x.antdv.com/components/${p}-cn/`,
    subs: true,
  },
  antd4: {
    pkg: 'ant-design-vue',
    vue: 3,
    prefix: 'A',
    group: 'Ant Design 组件',
    css: "import 'ant-design-vue/dist/reset.css'",
    doc: (p) => `https://antdv.com/components/${p}-cn`,
  },
}
const L = LIBS[lib]

// ---------- browser globals for the libraries ----------
const { JSDOM } = req('jsdom')
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
  pretendToBeVisual: true,
})
for (const key of Object.getOwnPropertyNames(dom.window)) {
  if (key in globalThis) continue
  try {
    globalThis[key] = dom.window[key]
  } catch {}
}
globalThis.window = dom.window
globalThis.document = dom.window.document
globalThis.navigator = dom.window.navigator
dom.window.matchMedia = () => ({
  matches: false,
  addListener() {},
  removeListener() {},
  addEventListener() {},
  removeEventListener() {},
})
globalThis.matchMedia = dom.window.matchMedia
const origLog = console.log
console.log = () => {}
console.warn = () => {}
const library = req(L.entry || L.pkg)
console.log = origLog

// ---------- runtime components ----------
const isComponent = (v) =>
  (v &&
    typeof v === 'object' &&
    (typeof v.render === 'function' ||
      typeof v.setup === 'function' ||
      v.template ||
      ((v.mixins || v.props) && v.name))) ||
  // Functional components (Ant Design 4's TreeSelectNode)
  (typeof v === 'function' && /^[A-Z]/.test(v.displayName || ''))
const norm = (s) => s.replace(/[^a-z0-9]/gi, '').toLowerCase()
const camel = (s) => s.replace(/-(\w)/g, (_, c) => c.toUpperCase())
const pascal = (s) => camel(s).replace(/^\w/, (c) => c.toUpperCase())

function propsOf(comp, seen = new Set()) {
  if (!comp || seen.has(comp)) return {}
  seen.add(comp)
  const out = {}
  for (const m of comp.mixins || []) Object.assign(out, propsOf(m, seen))
  if (comp.extends) Object.assign(out, propsOf(comp.extends, seen))
  const p = comp.props
  if (Array.isArray(p)) for (const n of p) out[camel(n)] = {}
  else if (p) for (const [k, v] of Object.entries(p)) out[camel(k)] = v
  return out
}

const runtime = new Map() // normalized key -> { exportName, subName, comp }
const addRuntime = (key, entry, weak) => {
  const k = norm(key)
  if (!runtime.has(k) || (!weak && runtime.get(k).weak))
    runtime.set(k, { ...entry, weak })
}
for (const [name, value] of Object.entries(library)) {
  if (!/^[A-Z]/.test(name) || !isComponent(value)) continue
  addRuntime(name, { exportName: name, comp: value })
  if (L.exportPrefix)
    addRuntime(
      name.replace(new RegExp('^' + L.exportPrefix), ''),
      { exportName: name, comp: value },
      true,
    )
  if (L.subs) {
    for (const [sub, sv] of Object.entries(value)) {
      if (!/^[A-Z]/.test(sub) || !isComponent(sv) || sv === value) continue
      addRuntime(name + sub, { exportName: name, subName: sub, comp: sv })
      addRuntime(sub, { exportName: name, subName: sub, comp: sv }, true)
      for (const [sub2, sv2] of Object.entries(sv)) {
        if (/^[A-Z]/.test(sub2) && isComponent(sv2) && sv2 !== sv)
          addRuntime(name + sub + sub2, {
            exportName: name,
            subName: `${sub}.${sub2}`,
            comp: sv2,
          })
      }
    }
  }
}

// ---------- nav: titles and categories ----------
function navOf() {
  const nav = {}
  const put = (page, title, category) => {
    nav[page.replace(/^\//, '').replace(/\/.*$/, '')] = { title, category }
  }
  if (lib === 'element-ui') {
    const cat = {
      Basic: '基础组件',
      Form: '表单组件',
      Data: '数据展示',
      Notice: '反馈组件',
      Navigation: '导航组件',
      Others: '其他',
    }
    const zh = JSON.parse(
      readFileSync(join(DOCS, lib, 'nav.config.json'), 'utf8'),
    )['zh-CN']
    for (const g of zh)
      for (const gr of g.groups || [])
        for (const it of gr.list)
          put(it.path, it.title, cat[gr.groupName] || '其他')
  } else if (lib === 'element-plus') {
    const cat = {
      basic: '基础组件',
      configuration: '配置组件',
      form: '表单组件',
      data: '数据展示',
      navigation: '导航组件',
      feedback: '反馈组件',
      others: '其他',
    }
    const groups = JSON.parse(
      readFileSync(join(DOCS, lib, 'component.json'), 'utf8'),
    )
    for (const [k, g] of Object.entries(groups))
      for (const it of g.children || []) put(it.link, null, cat[k] || '其他')
  } else if (lib.startsWith('vant')) {
    const src = readFileSync(
      join(DOCS, lib, lib === 'vant2' ? 'vant.config.js' : 'vant.config.mjs'),
      'utf8',
    )
    const start = src.indexOf("'zh-CN'")
    const end = src.indexOf("'en-US'", start)
    const zh = src.slice(start, end > start ? end : undefined)
    for (const m of zh.matchAll(
      /title:\s*'([^']+)',\s*items:\s*\[([\s\S]*?)\]\s*,?\s*\}/g,
    )) {
      for (const it of m[2].matchAll(
        /path:\s*'([^']+)',\s*title:\s*'([^']+)'/g,
      ))
        put(it[1], it[2], m[1])
    }
  }
  return nav
}
const nav = navOf()
const antd4Types = lib.startsWith('antd')
  ? Object.fromEntries(
      JSON.parse(readFileSync(join(DOCS, 'antd4', 'parsed.json'), 'utf8')).map(
        (p) => [p.page, p.front?.type],
      ),
    )
  : {}

// ---------- doc rows -> meta ----------
/** Native attributes the docs list and the components forward to their inner element. */
const NATIVE_ATTRS = new Set([
  'placeholder',
  'maxlength',
  'minlength',
  'readonly',
  'disabled',
  'autofocus',
  'autocomplete',
  'name',
  'rows',
  'max',
  'min',
  'step',
  'multiple',
  'capture',
  'accept',
  'alt',
  'referrerpolicy',
  'referrerPolicy',
  'inputmode',
  'inputAlign',
  'tabindex',
  'form',
  'resize',
  'id',
])
const KIND_WORDS =
  /\b(attributes?|props?|events?|slots?|methods?|exposes?|api)\b|属性|事件|插槽|方法|参数/gi
const zhOf = (title) => {
  // `表单 (支持 v-model，1.5.0 新增)`: the notes in parentheses go
  const clean = (title || '').replace(/\s*[（(][^)）]*[)）]/g, '').trim()
  return (
    clean.replace(/^[A-Za-z][\w.\s-]*?\s+(?=[^\x00-\x7f])/, '').trim() || clean
  )
}

function modelName(raw) {
  const parts = raw.split(/[\s/()（）,，]+/).filter(Boolean)
  const vm = parts.find((p) => p === 'v-model' || p.startsWith('v-model:'))
  return { vmodel: vm, base: parts.find((p) => !p.startsWith('v-model')) || vm }
}

function parseDefault(raw, kind) {
  const d = (raw || '').trim().replace(/^['"`]|['"`]$/g, '')
  if (!d || /^[—–-]+$/.test(d) || /^(undefined|null)$/.test(d)) return undefined
  if (kind === 'bool')
    return d === 'true' ? true : d === 'false' ? false : undefined
  if (kind === 'number')
    return /^-?\d+(\.\d+)?$/.test(d) ? Number(d) : undefined
  if (kind === 'string') return /^[\w#.%\-\s]{1,30}$/.test(d) ? d : undefined
  return undefined
}

function setterOf(name, row, runtimeProp) {
  const t = (row.type || '').toLowerCase()
  const types = new Set()
  if (/bool/.test(t)) types.add('bool')
  if (/number/.test(t)) types.add('number')
  if (/string|date|css/.test(t)) types.add('string')
  if (/func|=>|\(\)/.test(t)) types.add('function')
  if (/object|array|\[\]|record|\{|map/.test(t)) types.add('json')
  if (/vnode|slot|component|render/.test(t)) types.add('slot')
  if (!types.size && runtimeProp) {
    const rt = [runtimeProp.type ?? runtimeProp].flat()
    for (const x of rt) {
      if (x === Boolean) types.add('bool')
      else if (x === Number) types.add('number')
      else if (x === String) types.add('string')
      else if (x === Function) types.add('function')
      else if (x === Object || x === Array) types.add('json')
    }
  }
  if (!types.size) types.add('string')
  const options = (row.options || []).filter(
    (o) => (o && !/\s/.test(o.trim())) || /^[\w-]+$/.test(o),
  )
  const setters = []
  if (
    options.length > 1 &&
    (types.has('string') || types.has('number') || /enum/.test(t))
  ) {
    setters.push({
      componentName: options.length <= 4 ? 'RadioGroupSetter' : 'SelectSetter',
      props: {
        options: options.map((o) => ({
          title: o,
          value:
            types.has('number') && /^\d+$/.test(o) && !types.has('string')
              ? Number(o)
              : o,
        })),
      },
    })
  } else if (types.has('string')) {
    setters.push(
      /color/i.test(name)
        ? 'ColorSetter'
        : name === 'icon' && /element|vant/.test(lib)
          ? 'CIconSetter'
          : 'StringSetter',
    )
  }
  if (types.has('number')) setters.push('NumberSetter')
  if (types.has('bool')) setters.push('BoolSetter')
  if (types.has('json')) setters.push('JsonSetter')
  if (types.has('function')) setters.push('FunctionSetter')
  if (types.has('slot') && !setters.length)
    setters.push({
      componentName: 'SlotSetter',
      initialValue: { type: 'JSSlot', value: [] },
    })
  const kind =
    setters[0] === 'BoolSetter'
      ? 'bool'
      : setters[0] === 'NumberSetter'
        ? 'number'
        : 'string'
  const asConfig = (x) => (typeof x === 'string' ? { componentName: x } : x)
  return {
    setter: setters.length === 1 ? setters[0] : setters.map(asConfig),
    kind,
  }
}

function label(desc, name) {
  const first = (desc || '').split(/[，。,；;（(：:\n]/)[0].trim()
  return first && first.length <= 14 && /[一-鿿]/.test(first) ? first : name
}

const ALIASES = {
  dropdownmenuitem: 'DropdownItem',
  menugroup: 'MenuItemGroup',
  formitem: 'FormItem',
  tablecolumn: 'TableColumn',
}
/** Aliases on one docs page: the TreeNode of tree-select is TreeSelect's. */
const PAGE_ALIASES =
  lib === 'antd4' ? { 'tree-select': { treenode: 'TreeSelectNode' } } : {}
const specs = new Map() // material componentName -> spec
const skipped = []
const keyOf = (heading) =>
  heading
    .replace(/\^\([^)]*\)/g, '')
    .replace(/[（(][^)）]*[)）]/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/\b\d+\.\d+(\.\d+)?\+?/g, '')
    .replace(KIND_WORDS, '')
    .trim()
// `tab` documents Tabs and Tab: the container is the main component
const mainKeyOf = (page) => {
  const plural = pascal(page.page) + 's'
  return page.sections.some((x) => norm(keyOf(x.heading)) === norm(plural)) &&
    runtime.has(norm(plural))
    ? plural
    : pascal(page.page)
}
/** Runtime component -> the page documenting it as its main component. */
const home = new Map()
for (const page of docs) {
  const key = mainKeyOf(page)
  // bare sub-component names (`Grid` of Card.Grid) do not make a home; the
  // unprefixed names of prefixed exports (`Table` of ElTable) do
  const found = [
    runtime.get(norm(key)),
    L.exportPrefix && runtime.get(norm(L.exportPrefix + key)),
  ].find((entry) => entry && !entry.weak)
  if (found && !home.has(found.comp)) home.set(found.comp, page.page)
}
for (const page of docs) {
  const mainKey = mainKeyOf(page)
  let lastKey = ''
  const hasNamed = page.sections.some(
    (x) =>
      x.kind === 'props' &&
      keyOf(x.heading) &&
      !/^api$/i.test(keyOf(x.heading)) &&
      runtime.has(norm(ALIASES[norm(keyOf(x.heading))] || keyOf(x.heading))),
  )
  const sections = page.sections.flatMap((x) =>
    /\//.test(keyOf(x.heading))
      ? keyOf(x.heading)
          .split('/')
          .map((part) => ({
            ...x,
            heading:
              part.trim() +
              (x.kind === 'events'
                ? ' Events'
                : x.kind === 'slots'
                  ? ' Slots'
                  : ''),
          }))
      : [x],
  )
  for (const s of sections) {
    if (!['props', 'events', 'slots'].includes(s.kind)) continue
    // a `Props` table next to named ones describes a config object
    if (
      s.kind === 'props' &&
      hasNamed &&
      !keyOf(s.heading) &&
      /^props?$/i.test(s.heading.trim())
    ) {
      skipped.push(`${page.page}:${s.heading} (config)`)
      continue
    }
    let key = keyOf(s.heading)
    key = PAGE_ALIASES[page.page]?.[norm(key)] || ALIASES[norm(key)] || key
    // `Tree props` on the tree-select page documents TreeSelect
    if (
      key &&
      norm(mainKey).startsWith(norm(key)) &&
      norm(mainKey).length - norm(key).length > 1 &&
      runtime.has(norm(mainKey))
    )
      key = mainKey
    if (!key && s.kind !== 'props' && lastKey) key = lastKey
    if (!key || /^api$/i.test(key)) key = mainKey
    if (s.kind === 'props') lastKey = key
    const found =
      (norm(key) !== norm(mainKey) && runtime.get(norm(mainKey + key))) ||
      runtime.get(norm(key)) ||
      (key.includes('.') ? runtime.get(norm(key.split('.').pop())) : undefined)
    if (!found) {
      skipped.push(`${page.page}:${s.heading}`)
      continue
    }
    // a component's own page documents it; other pages only reference it
    if (home.has(found.comp) && home.get(found.comp) !== page.page) {
      skipped.push(
        `${page.page}:${s.heading} (documented on ${home.get(found.comp)})`,
      )
      continue
    }
    const componentName =
      L.prefix +
      found.exportName.replace(
        new RegExp('^' + (L.exportPrefix || '\\0')),
        '',
      ) +
      (found.subName ? found.subName.replace('.', '') : '')
    let spec = specs.get(componentName)
    if (!spec) {
      const isMain =
        !found.subName &&
        (norm(found.exportName) === norm(mainKey) ||
          norm(found.exportName.replace(/^El/, '')) === norm(mainKey))
      const navEntry = nav[page.page] || {}
      const pageZh =
        zhOf(navEntry.title || page.titleZh || page.title) || mainKey
      spec = {
        componentName,
        page: page.page,
        ...found,
        isMain,
        title: isMain
          ? pageZh
          : `${pageZh} ${found.subName ? found.subName.split('.').pop() : found.exportName.replace(/^El/, '')}`,
        category:
          navEntry.category ||
          (lib.startsWith('antd') ? antd4Types[page.page] || '其他' : '其他'),
        props: [],
        events: [],
        slots: [],
        defaultSlot: false,
        runtimeProps: propsOf(found.comp),
        emits: Array.isArray(found.comp.emits)
          ? found.comp.emits
          : Object.keys(found.comp.emits || {}),
        dropped: [],
      }
      specs.set(componentName, spec)
    }
    for (const row of s.rows) {
      if (/deprecated|废弃/i.test(row.name + ' ' + row.desc.slice(0, 20)))
        continue
      row.name = row.name
        .replace(/\^\([^)]*\)/g, '')
        .replace(/\*/g, '')
        .replace(/\s+v?\d+(\.\d+)+\+?$/, '')
        .trim()
      if (s.kind === 'props') {
        const { vmodel, base } = modelName(row.name)
        const propName = camel(base || '')
        let model = vmodel
        // Vue 3 libraries without modelValue bind `v-model:<prop>` (Ant Design Vue: `value(v-model)`)
        if (
          model === 'v-model' &&
          L.vue === 3 &&
          !('modelValue' in spec.runtimeProps) &&
          base &&
          base !== 'v-model' &&
          camel(base) in spec.runtimeProps
        )
          model = `v-model:${camel(base)}`
        const target = model
          ? model === 'v-model'
            ? L.vue === 2
              ? found.comp.model?.prop || 'value'
              : 'modelValue'
            : camel(model.slice(8))
          : propName
        if (
          !target ||
          /^(class|style|key|ref)$/.test(target) ||
          spec.props.some((p) => p.name === (model || target))
        )
          continue
        const declared =
          target in spec.runtimeProps || propName in spec.runtimeProps
        const rp = spec.runtimeProps[target] ?? spec.runtimeProps[propName]
        if (
          !declared &&
          /slot|vnode/i.test(row.type) &&
          /^[\w-]+$/.test(row.name)
        ) {
          // documented as a prop, rendered from a slot
          if (!spec.slots.includes(propName)) {
            spec.slots.push(propName)
            spec.props.push({
              name: propName,
              title: {
                label: {
                  type: 'i18n',
                  'zh-CN': label(row.desc, propName),
                  'en-US': propName,
                },
                tip: row.desc || undefined,
              },
              setter: {
                componentName: 'SlotSetter',
                initialValue: { type: 'JSSlot', value: [] },
              },
            })
          }
          continue
        }
        if (
          !declared &&
          !(
            model &&
            ('value' in spec.runtimeProps || 'modelValue' in spec.runtimeProps)
          ) &&
          !NATIVE_ATTRS.has(target)
        ) {
          spec.dropped.push(row.name)
          continue
        }
        const { setter, kind } = setterOf(target, row, rp)
        const prop = {
          name: model || target,
          title: {
            label: {
              type: 'i18n',
              'zh-CN': label(row.desc, model || target),
              'en-US': model || target,
            },
            tip: row.desc || undefined,
          },
          setter,
          supportVariable: true,
        }
        const dv = parseDefault(row.default, kind)
        if (dv !== undefined) prop.defaultValue = dv
        spec.props.push(prop)
      } else if (s.kind === 'events') {
        const name = row.name.replace(/\(.*$/, '').trim().split(/\s+/)[0]
        if (!name || name.startsWith('update:')) continue
        const evName = L.vue === 3 ? camel(name) : name
        const key = 'on' + evName[0].toUpperCase() + evName.slice(1)
        if (spec.events.some((e) => e.name === key)) continue
        const params = (row.type || row.default || '')
          .replace(/[^\w,\s]/g, ' ')
          .trim()
        const fn = camel('on-' + name.replace(/[^\w-]/g, '-'))
        spec.events.push({
          name: key,
          description: row.desc,
          template: `${fn}(${params ? '...args, ' : ''}extParams) {\n  // ${row.desc || name}\n  console.log('${fn}', ${params ? '...args' : 'extParams'})\n}`,
        })
      } else if (s.kind === 'slots') {
        const name = row.name.replace(/[`\s]|\(.*$/g, '').split(/[/|]/)[0]
        if (!name || name === '-') continue
        if (name === 'default' || name === '—') {
          // a scoped default slot customizes rendering, it does not hold children
          if (!/参数|scope|\{|params|parameter/i.test(row.desc + row.type))
            spec.defaultSlot = true
          continue
        }
        if (
          spec.slots.includes(name) ||
          spec.props.some((p) => p.name === name)
        )
          continue
        spec.slots.push(name)
        spec.props.push({
          name,
          title: {
            label: {
              type: 'i18n',
              'zh-CN': label(row.desc, name),
              'en-US': name,
            },
            tip: row.desc || undefined,
          },
          setter: {
            componentName: 'SlotSetter',
            initialValue: { type: 'JSSlot', value: [] },
          },
        })
      }
    }
  }
}

// ---------- nesting, modals, snippets ----------
const CHILD =
  /(Item|Option|OptGroup|Pane|Panel|Step|Col|Column|Tab|Link|Meta|Node|Button|Anchor|Swipe|SubMenu|Submenu|ItemGroup|Divider)$/
/** Components living in a slot of their main component: no parent rule. */
const SLOT_CHILD = /(DropdownMenu)$/
for (const spec of specs.values()) {
  const siblings = [...specs.values()].filter(
    (o) => o !== spec && o.page === spec.page,
  )
  const main = siblings.find((o) => o.isMain)
  const containers = siblings.filter(
    (o) =>
      o.isMain || /(Group|SubMenu|Submenu|ItemGroup)$/.test(o.componentName),
  )
  const child =
    CHILD.test(spec.componentName) &&
    (!/Group$/.test(spec.componentName) ||
      /(ItemGroup|OptGroup|OptionGroup)$/.test(spec.componentName))
  spec.parents =
    !spec.isMain && main && child && !SLOT_CHILD.test(spec.componentName)
      ? containers.filter((o) => o !== spec).map((o) => o.componentName)
      : undefined
  // Element dropdown items belong to the dropdown menu
  if (
    /DropdownItem$/.test(spec.componentName) &&
    specs.has(spec.componentName.replace(/Item$/, 'Menu'))
  )
    spec.parents = [spec.componentName.replace(/Item$/, 'Menu')]
  // the Element dropdown menu goes into the `dropdown` slot of its dropdown
  if (/^ElDropdownMenu$/.test(spec.componentName)) spec.parents = ['Slot']
  // Column groups only exist inside their table (Ant Design reads them as data)
  if (/TableColumnGroup$/.test(spec.componentName)) {
    spec.parents = [spec.componentName.replace(/ColumnGroup$/, '')]
  }
  spec.isModal =
    /(Dialog|Drawer|Modal|Popup|ActionSheet|ShareSheet|ImagePreview|Overlay|Tour|Sku)$/.test(
      spec.componentName,
    )
}

const CLICKABLE = /(Button|Link|Tag)$/
function metaOf(spec) {
  if (
    CLICKABLE.test(spec.componentName) &&
    !spec.events.some((e) => e.name === 'onClick')
  ) {
    spec.events.unshift({
      name: 'onClick',
      description: '点击时触发',
      template:
        "onClick(event, extParams) {\n  console.log('onClick', event)\n}",
    })
  }
  const recipe = recipes.snippet(lib, spec, specs) || {}
  // props the component requires
  const required = Object.entries(spec.runtimeProps).filter(
    ([, def]) => def && typeof def === 'object' && def.required,
  )
  for (const [name, def] of required) {
    recipe.props ||= {}
    if (name in recipe.props) continue
    const doc = spec.props.find(
      (p) =>
        p.name === name ||
        (p.name.startsWith('v-model') &&
          (name === 'value' ||
            name === 'modelValue' ||
            p.name === `v-model:${name}`)),
    )
    const type = [def.type].flat()[0]
    recipe.props[name] =
      doc?.defaultValue ??
      (type === Number
        ? 50
        : type === Boolean
          ? false
          : type === Array
            ? []
            : type === Object
              ? {}
              : name === 'action'
                ? '#'
                : '')
  }
  const component = {}
  if (spec.defaultSlot && !recipes.textual(spec)) component.isContainer = true
  if (spec.isModal) component.isModal = true
  if (spec.parents?.length)
    component.nestingRule = { parentWhitelist: spec.parents }
  const meta = {
    componentName: spec.componentName,
    title: spec.title,
    group: L.group,
    category: spec.category,
    docUrl: L.doc(spec.page),
    devMode: 'proCode',
    configure: {
      props: spec.props,
      supports: {
        style: true,
        className: true,
        events: spec.events,
        loop: true,
        condition: true,
      },
      component,
    },
    snippets: [
      {
        title: spec.title,
        screenshot: spec.screenshot,
        schema: { componentName: spec.componentName, ...recipe },
      },
    ],
  }
  return meta
}

const out = [...specs.values()].sort((a, b) =>
  a.componentName.localeCompare(b.componentName),
)
const covered = new Set(out.map((x) => x.page))
const summary = {
  lib,
  components: out.length,
  uncovered: docs
    .filter(
      (p) =>
        p.sections.some((x) => x.kind === 'props') &&
        !out.some((o) => o.page === p.page && o.isMain),
    )
    .map((p) => p.page),
  props: out.reduce((n, s) => n + s.props.length, 0),
  events: out.reduce((n, s) => n + s.events.length, 0),
  dropped: out
    .filter((s) => s.dropped.length)
    .map((s) => `${s.componentName}: ${s.dropped.join(', ')}`),
  skipped,
}

if (write) {
  const lowcode = join(dir, 'src', 'lowcode')
  rmSync(lowcode, { recursive: true, force: true })
  const shots = join(dir, 'screenshots')
  mkdirSync(shots, { recursive: true })
  writeFileSync(
    join(shots, 'fallback.svg'),
    readFileSync(join(__dirname, 'fallback.svg')),
  )
  for (const spec of out) {
    const name = spec.componentName
      .replace(new RegExp('^' + L.prefix), '')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
    const folder = join(lowcode, name)
    mkdirSync(folder, { recursive: true })
    spec.screenshot = existsSync(join(shots, `${name}.webp`))
      ? `./screenshots/${name}.webp`
      : './screenshots/fallback.svg'
    writeFileSync(
      join(folder, 'meta.ts'),
      `import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'\n\n// Generated from the ${L.pkg} docs (${spec.page}); see ${L.doc(spec.page)}\nconst meta = ${JSON.stringify(metaOf(spec), null, 2)} as IPublicTypeComponentMetadata\n\nexport default meta\n`,
    )
  }
  // entry: the library components under the material names
  const top = out.filter((s) => !s.subName)
  const subs = out.filter((s) => s.subName)
  const lines = [L.css, "import packagesInfo from '../package.json'"]
  if (subs.length)
    lines.push(
      `import { ${[...new Set(subs.map((s) => s.exportName))].sort().join(', ')} } from '${L.pkg}'`,
    )
  lines.push(
    '',
    'export {',
    ...top.map(
      (s) =>
        `  ${s.exportName === s.componentName ? s.exportName : `${s.exportName} as ${s.componentName}`},`,
    ),
    `} from '${L.pkg}'`,
  )
  for (const s of subs)
    lines.push(`export const ${s.componentName} = ${s.exportName}.${s.subName}`)
  // Directives for `v-<name>` props (see the material builder README)
  const directives = Object.entries(L.directives ?? {})
  if (directives.length) {
    lines.splice(
      2,
      0,
      `import { ${directives.map(([, exported]) => exported).join(', ')} } from '${L.pkg}'`,
    )
    lines.push(
      '',
      `export const directives = { ${directives.map(([name, exported]) => `${name}: ${exported}`).join(', ')} }`,
    )
  }
  lines.push(
    '',
    'console.log(',
    "  `%c ${packagesInfo.name} %c v`.concat(packagesInfo.version, ' '),",
    "  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #5584ff; font-weight: bold;',",
    "  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',",
    ')',
    '',
  )
  writeFileSync(join(dir, 'src', 'index.ts'), lines.join('\n'))
  // The repository's formatting
  execFileSync('pnpm', ['exec', 'biome', 'check', '--write', dir], {
    stdio: 'ignore',
  })
}
console.log(JSON.stringify(summary))
