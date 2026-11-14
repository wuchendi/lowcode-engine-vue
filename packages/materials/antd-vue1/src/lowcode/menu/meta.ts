import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (menu); see https://1x.antdv.com/components/menu-cn/
const meta = {
  componentName: 'AMenu',
  title: '导航菜单',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://1x.antdv.com/components/menu-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'defaultOpenKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultOpenKeys',
            'en-US': 'defaultOpenKeys',
          },
          tip: '初始展开的 SubMenu 菜单项 key 数组',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'defaultSelectedKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultSelectedKeys',
            'en-US': 'defaultSelectedKeys',
          },
          tip: '初始选中的菜单项 key 数组',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'forceSubMenuRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'forceSubMenuRender',
            'en-US': 'forceSubMenuRender',
          },
          tip: '在子菜单展示之前就渲染进 DOM',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'inlineCollapsed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'inlineCollapsed',
            'en-US': 'inlineCollapsed',
          },
          tip: 'inline 时菜单是否收起状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'inlineIndent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'inlineIndent',
            'en-US': 'inlineIndent',
          },
          tip: 'inline 模式的菜单缩进宽度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 24,
      },
      {
        name: 'mode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单类型',
            'en-US': 'mode',
          },
          tip: '菜单类型，现在支持垂直、水平、和内嵌模式三种',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'vertical',
      },
      {
        name: 'multiple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许多选',
            'en-US': 'multiple',
          },
          tip: '是否允许多选',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'openKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'openKeys',
            'en-US': 'openKeys',
          },
          tip: '当前展开的 SubMenu 菜单项 key 数组',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'selectable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许选中',
            'en-US': 'selectable',
          },
          tip: '是否允许选中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model',
            'en-US': 'v-model',
          },
          tip: '当前选中的菜单项 key 数组',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'subMenuCloseDelay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '用户鼠标离开子菜单后关闭延时',
            'en-US': 'subMenuCloseDelay',
          },
          tip: '用户鼠标离开子菜单后关闭延时，单位：秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0.1,
      },
      {
        name: 'subMenuOpenDelay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '用户鼠标进入子菜单后开启延时',
            'en-US': 'subMenuOpenDelay',
          },
          tip: '用户鼠标进入子菜单后开启延时，单位：秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'theme',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '主题颜色',
            'en-US': 'theme',
          },
          tip: '主题颜色',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'light',
      },
      {
        name: 'overflowedIndicator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'overflowedIndicator',
            'en-US': 'overflowedIndicator',
          },
          tip: '自定义 Menu 折叠时的图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击 MenuItem 调用此函数',
          template:
            "onClick(extParams) {\n  // 点击 MenuItem 调用此函数\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onDeselect',
          description: '取消选中时调用，仅在 multiple 生效',
          template:
            "onDeselect(extParams) {\n  // 取消选中时调用，仅在 multiple 生效\n  console.log('onDeselect', extParams)\n}",
        },
        {
          name: 'onOpenChange',
          description: 'SubMenu 展开/关闭的回调',
          template:
            "onOpenChange(extParams) {\n  // SubMenu 展开/关闭的回调\n  console.log('onOpenChange', extParams)\n}",
        },
        {
          name: 'onSelect',
          description: '被选中时调用',
          template:
            "onSelect(extParams) {\n  // 被选中时调用\n  console.log('onSelect', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '导航菜单',
      screenshot: './screenshots/menu.webp',
      schema: {
        componentName: 'AMenu',
        props: {
          mode: 'horizontal',
        },
        children: [
          {
            componentName: 'AMenuItem',
            props: {
              key: '1',
            },
            children: '菜单一',
          },
          {
            componentName: 'AMenuItem',
            props: {
              key: '2',
            },
            children: '菜单二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
