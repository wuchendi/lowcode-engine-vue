// Snippet schemas: what a component looks like when dropped into the canvas.
const PREFIX = {
  'element-ui': 'El',
  'element-plus': 'El',
  vant2: 'Van',
  vant4: 'Van',
  antd1: 'A',
  antd4: 'A',
}
const TEXTUAL =
  /^(Alert|Avatar|Button|Link|Tag|Text|Radio|Checkbox|RadioButton|CheckboxButton|BreadcrumbItem|DropdownItem|MenuItem|Divider|TimelineItem|TypographyText|TypographyTitle|TypographyParagraph|TypographyLink|Title|Paragraph|Badge)$/

/** Components left out of the components pane (see the meta comment). */
exports.hidden = (lib, spec) =>
  lib.startsWith('antd') &&
  /^A(SelectOption|SelectOptGroup|TableColumn|TableColumnGroup|MenuSubMenu|MentionsOption|AutoCompleteOption|TreeNode|TreeSelectNode|CascaderPanel)$/.test(
    spec.componentName,
  )

/** Components showing a string prop (`text`) or a text slot: never a container. */
exports.textual = (spec) => {
  const base = spec.componentName.replace(/^(El|Van|A)(?=[A-Z])/, '')
  const textProp = spec.props.find((p) => p.name === 'text')
  const stringText =
    textProp &&
    [textProp.setter]
      .flat()
      .some((x) =>
        /StringSetter/.test(typeof x === 'string' ? x : x?.componentName),
      )
  return TEXTUAL.test(base) || !!stringText
}

exports.snippet = (lib, spec, specs) => {
  const P = PREFIX[lib]
  const base = spec.componentName.slice(P.length)
  const has = (name) => specs.has(P + name)
  const propNames = new Set(spec.props.map((p) => p.name))
  const node = (name, props = {}, children) =>
    has(name)
      ? {
          componentName: P + name,
          props,
          ...(children !== undefined ? { children } : {}),
        }
      : null
  const list = (...nodes) => nodes.filter(Boolean)
  const short = spec.title.split(/\s+/)[0]
  const vue3 = /plus|vant4|antd4/.test(lib)
  const antd = lib.startsWith('antd')
  const vant = lib.startsWith('vant')

  switch (base) {
    case 'Select':
      return antd
        ? {
            props: {
              style: { width: '200px' },
              options: [
                { value: 'a', label: '选项一' },
                { value: 'b', label: '选项二' },
              ],
            },
          }
        : {
            props: { style: { width: '200px' } },
            children: list(
              node('Option', { label: '选项一', value: 'a' }),
              node('Option', { label: '选项二', value: 'b' }),
            ),
          }
    case 'Tabs':
      if (vant)
        return {
          children: list(
            node('Tab', { title: '标签一' }, [
              { componentName: 'div', props: {}, children: '内容一' },
            ]),
            node('Tab', { title: '标签二' }, [
              { componentName: 'div', props: {}, children: '内容二' },
            ]),
          ),
        }
      if (antd)
        return {
          children: list(
            node(
              has('TabsTabPane') ? 'TabsTabPane' : 'TabPane',
              { tab: '标签一', key: '1' },
              '内容一',
            ),
            node(
              has('TabsTabPane') ? 'TabsTabPane' : 'TabPane',
              { tab: '标签二', key: '2' },
              '内容二',
            ),
          ),
        }
      return {
        children: list(
          node('TabPane', { label: '标签一', name: 'first' }, '内容一'),
          node('TabPane', { label: '标签二', name: 'second' }, '内容二'),
        ),
      }
    case 'Steps':
      if (vant)
        return {
          props: { active: 1 },
          children: list(
            node('Step', {}, '步骤一'),
            node('Step', {}, '步骤二'),
            node('Step', {}, '步骤三'),
          ),
        }
      return {
        props: antd ? { current: 1 } : { active: 1 },
        children: list(
          node(has('StepsStep') ? 'StepsStep' : 'Step', { title: '步骤一' }),
          node(has('StepsStep') ? 'StepsStep' : 'Step', { title: '步骤二' }),
          node(has('StepsStep') ? 'StepsStep' : 'Step', { title: '步骤三' }),
        ),
      }
    case 'Menu':
      return {
        props: { mode: 'horizontal' },
        children: list(
          node('MenuItem', antd ? { key: '1' } : { index: '1' }, '菜单一'),
          node('MenuItem', antd ? { key: '2' } : { index: '2' }, '菜单二'),
        ),
      }
    case 'Row':
      return {
        children: list(
          node('Col', { span: 12 }, [
            { componentName: 'div', props: {}, children: 'col-12' },
          ]),
          node('Col', { span: 12 }, [
            { componentName: 'div', props: {}, children: 'col-12' },
          ]),
        ),
      }
    case 'Form': {
      if (vant)
        return {
          children: list(
            node('Field', { label: '名称', placeholder: '请输入' }),
          ),
        }
      const item = has('FormItem')
        ? 'FormItem'
        : has('FormModelItem')
          ? 'FormModelItem'
          : null
      const input = node('Input', {})
      return item
        ? {
            props: {
              labelWidth: lib.startsWith('element') ? '80px' : undefined,
            },
            children: list(node(item, { label: '名称' }, list(input))),
          }
        : {}
    }
    case 'Collapse':
      return {
        props: vant ? (vue3 ? { modelValue: [] } : { value: [] }) : {},
        children: list(
          node(
            has('CollapseItem') ? 'CollapseItem' : 'CollapsePanel',
            antd
              ? { header: '面板一', key: '1' }
              : { title: '面板一', name: '1' },
            '内容一',
          ),
          node(
            has('CollapseItem') ? 'CollapseItem' : 'CollapsePanel',
            antd
              ? { header: '面板二', key: '2' }
              : { title: '面板二', name: '2' },
            '内容二',
          ),
        ),
      }
    case 'Timeline':
      return {
        children: list(
          node('TimelineItem', {}, '事件一'),
          node('TimelineItem', {}, '事件二'),
        ),
      }
    case 'Carousel':
    case 'Swipe':
      return {
        props: base === 'Carousel' && !antd ? { height: '150px' } : {},
        children: list(
          node(base === 'Swipe' ? 'SwipeItem' : 'CarouselItem', {}, [
            {
              componentName: 'div',
              props: { style: { height: '150px', background: '#99a9bf' } },
              children: '1',
            },
          ]),
          node(base === 'Swipe' ? 'SwipeItem' : 'CarouselItem', {}, [
            {
              componentName: 'div',
              props: { style: { height: '150px', background: '#d3dce6' } },
              children: '2',
            },
          ]),
        ),
      }
    case 'Breadcrumb':
      return {
        children: list(
          node('BreadcrumbItem', {}, '首页'),
          node('BreadcrumbItem', {}, '当前页'),
        ),
      }
    case 'Dropdown': {
      if (antd)
        return {
          props: {
            overlay: {
              type: 'JSSlot',
              value: list(
                node(
                  'Menu',
                  {},
                  list(
                    node('MenuItem', { key: '1' }, '菜单一'),
                    node('MenuItem', { key: '2' }, '菜单二'),
                  ),
                ),
              ),
            },
          },
          children: list(node('Button', {}, '下拉菜单')),
        }
      if (lib.startsWith('element'))
        return {
          props: {
            dropdown: {
              type: 'JSSlot',
              value: list(
                node(
                  'DropdownMenu',
                  {},
                  list(
                    node('DropdownItem', {}, '菜单一'),
                    node('DropdownItem', {}, '菜单二'),
                  ),
                ),
              ),
            },
          },
          children: list(node('Button', {}, '下拉菜单')),
        }
      return {}
    }
    case 'Popover':
    case 'Popconfirm':
    case 'Tooltip':
      if (lib === 'element-ui' && base !== 'Tooltip')
        return {
          props: {
            title: '标题',
            content: '内容',
            reference: {
              type: 'JSSlot',
              value: list(node('Button', {}, short)),
            },
          },
        }
      if (lib === 'element-plus' && base !== 'Tooltip')
        return {
          props: {
            title: '标题',
            content: '内容',
            reference: {
              type: 'JSSlot',
              value: list(node('Button', {}, short)),
            },
          },
        }
      if (vant)
        return {
          props: {
            reference: {
              type: 'JSSlot',
              value: list(node('Button', {}, short)),
            },
            actions: [{ text: '选项一' }, { text: '选项二' }],
          },
        }
      return {
        props: { title: '标题', content: '内容' },
        children: list(node('Button', {}, short)),
      }
    case 'Tour':
      return { props: { steps: [], open: false } }
    case 'Sku':
      return {
        props: {
          show: false,
          sku: {
            tree: [],
            list: [],
            price: '1.00',
            stock_num: 100,
            none_sku: true,
            hide_stock: false,
          },
          goods: { picture: 'https://img01.yzcdn.cn/vant/cat.jpeg' },
          goodsId: '1',
        },
      }
    case 'Mentions':
    case 'AutoComplete':
      return antd
        ? {
            props: {
              style: { width: '200px' },
              options: [
                { value: 'a', label: '选项一' },
                { value: 'b', label: '选项二' },
              ],
            },
          }
        : {}
    case 'Alert':
      return antd
        ? { props: { message: '提示信息', type: 'info' } }
        : { props: { title: '提示信息', type: 'info' }, children: '说明文字' }
    case 'Icon':
      return antd
        ? { props: { type: 'smile' } }
        : vant
          ? { props: { name: 'chat-o', size: '24px' } }
          : { props: { size: 24 }, children: '★' }
    case 'Badge':
      return antd
        ? { props: { count: 5 }, children: list(node('Button', {}, '消息')) }
        : vant
          ? {
              props: { content: '5' },
              children: list(node('Button', { text: '消息' })),
            }
          : { props: { value: 5 }, children: list(node('Button', {}, '消息')) }
    case 'Affix':
    case 'Sticky':
      return { children: list(node('Button', {}, short)) }
    case 'Space':
      return {
        children: list(
          node('Button', {}, '按钮一'),
          node('Button', {}, '按钮二'),
        ),
      }
    case 'Card':
      return {
        props: antd || !vant ? { title: '卡片标题' } : {},
        children: list({
          componentName: 'div',
          props: {},
          children: '卡片内容',
        }),
      }
    case 'Layout':
      return antd
        ? {
            children: list(
              node('LayoutHeader', {}, 'Header'),
              node('LayoutContent', {}, 'Content'),
              node('LayoutFooter', {}, 'Footer'),
            ),
          }
        : {}
    case 'Container':
      return {
        children: list(
          node('Header', {}, 'Header'),
          node('Main', {}, 'Main'),
          node('Footer', {}, 'Footer'),
        ),
      }
    case 'Calendar':
      return vant
        ? {
            props: {
              poppable: false,
              showConfirm: false,
              style: { height: '400px' },
            },
          }
        : {}
    case 'GoodsAction':
    case 'ActionBar':
      return {
        children: list(
          node(base === 'ActionBar' ? 'ActionBarIcon' : 'GoodsActionIcon', {
            icon: 'chat-o',
            text: '客服',
          }),
          node(base === 'ActionBar' ? 'ActionBarButton' : 'GoodsActionButton', {
            type: 'danger',
            text: '立即购买',
          }),
        ),
      }
    case 'RadioGroup':
      return {
        props: vue3
          ? antd
            ? { value: 'a' }
            : { modelValue: 'a' }
          : { value: 'a' },
        children: list(
          node(
            'Radio',
            antd || vant ? { value: 'a' } : { label: 'a' },
            '选项一',
          ),
          node(
            'Radio',
            antd || vant ? { value: 'b' } : { label: 'b' },
            '选项二',
          ),
        ),
      }
    case 'CheckboxGroup':
      return {
        props: vue3
          ? antd
            ? { value: [] }
            : { modelValue: [] }
          : { value: [] },
        children: list(
          node(
            'Checkbox',
            antd || vant
              ? vant
                ? { name: 'a' }
                : { value: 'a' }
              : { label: 'a' },
            '选项一',
          ),
          node(
            'Checkbox',
            antd || vant
              ? vant
                ? { name: 'b' }
                : { value: 'b' }
              : { label: 'b' },
            '选项二',
          ),
        ),
      }
    case 'Table':
      if (lib.startsWith('element')) {
        return {
          props: {
            data: [
              { name: '张三', age: 18 },
              { name: '李四', age: 20 },
            ],
          },
          children: list(
            node('TableColumn', { prop: 'name', label: '姓名' }),
            node('TableColumn', { prop: 'age', label: '年龄' }),
          ),
        }
      }
      if (antd)
        return {
          props: {
            columns: [
              { title: '姓名', dataIndex: 'name' },
              { title: '年龄', dataIndex: 'age' },
            ],
            dataSource: [
              { key: '1', name: '张三', age: 18 },
              { key: '2', name: '李四', age: 20 },
            ],
          },
        }
      return {}
    case 'Tabbar':
      return {
        children: list(
          node('TabbarItem', { icon: 'home-o' }, '首页'),
          node('TabbarItem', { icon: 'user-o' }, '我的'),
        ),
      }
    case 'Grid':
      return {
        children: list(
          node('GridItem', { icon: 'photo-o', text: '文字' }),
          node('GridItem', { icon: 'photo-o', text: '文字' }),
          node('GridItem', { icon: 'photo-o', text: '文字' }),
        ),
      }
    case 'CellGroup':
      return {
        children: list(
          node('Cell', { title: '单元格', value: '内容' }),
          node('Cell', { title: '单元格', value: '内容' }),
        ),
      }
    case 'Sidebar':
      return {
        children: list(
          node('SidebarItem', { title: '标签一' }),
          node('SidebarItem', { title: '标签二' }),
        ),
      }
    case 'DropdownMenu':
      return {
        children: list(
          node('DropdownItem', {
            title: '筛选',
            options: [
              { text: '全部', value: 0 },
              { text: '新款', value: 1 },
            ],
          }),
        ),
      }
    case 'Option':
    case 'SelectOption':
    case 'AutoCompleteOption':
    case 'MentionsOption':
      return antd
        ? { props: { value: 'option' }, children: '选项' }
        : { props: { label: '选项', value: 'option' } }
    case 'TabPane':
      return {
        props: antd ? { tab: '标签' } : { label: '标签', name: 'tab' },
        children: '内容',
      }
    case 'Tab':
      return {
        props: { title: '标签' },
        children: [{ componentName: 'div', props: {}, children: '内容' }],
      }
    case 'Col':
      return {
        props: { span: 12 },
        children: [{ componentName: 'div', props: {}, children: 'col' }],
      }
    case 'Image':
      return {
        props: {
          src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          ...(vant
            ? { width: '100px', height: '100px' }
            : { style: { width: '100px', height: '100px' } }),
        },
      }
    case 'Avatar':
      return { children: 'U' }
    case 'Input':
    case 'InputNumber':
    case 'DatePicker':
    case 'TimePicker':
    case 'Cascader':
    case 'Autocomplete':
    case 'AutoComplete':
    case 'ColorPicker':
    case 'Slider':
    case 'TreeSelect':
      return lib.startsWith('element') || antd
        ? { props: base === 'Slider' ? { style: { width: '200px' } } : {} }
        : {}
    default:
      break
  }
  const stringy = (name) => {
    const setter = spec.props.find((p) => p.name === name)?.setter
    const list = [setter]
      .flat()
      .map((x) => (typeof x === 'string' ? x : x?.componentName))
    return list.some((x) =>
      /StringSetter|RadioGroupSetter|SelectSetter/.test(x),
    )
  }
  if (propNames.has('text') && stringy('text'))
    return { props: { text: short } }
  if (propNames.has('title') && stringy('title') && !spec.defaultSlot && vant)
    return { props: { title: short } }
  if (TEXTUAL.test(base) && !stringy('text'))
    return { props: {}, children: short }
  if (spec.defaultSlot) return { props: {}, children: short }
  return { props: {} }
}

void 0
