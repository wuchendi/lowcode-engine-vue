import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (dropdown-menu); see https://vant-ui.github.io/vant/#/zh-CN/dropdown-menu
const meta = {
  componentName: 'VanDropdownItem',
  title: '下拉菜单 DropdownItem',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/dropdown-menu',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前选中项对应的 value',
            'en-US': 'v-model',
          },
          tip: '当前选中项对应的 value',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单项标题',
            'en-US': 'title',
          },
          tip: '菜单项标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项数组',
            'en-US': 'options',
          },
          tip: '选项数组',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用菜单',
            'en-US': 'disabled',
          },
          tip: '是否禁用菜单',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'lazyRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'lazyRender',
            'en-US': 'lazyRender',
          },
          tip: '是否在首次展开时才渲染菜单内容',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'titleClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题额外类名',
            'en-US': 'titleClass',
          },
          tip: '标题额外类名',
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
        name: 'teleport',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定挂载的节点',
            'en-US': 'teleport',
          },
          tip: '指定挂载的节点，等同于 Teleport 组件的 to 属性',
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
          name: 'onChange',
          description: '点击选项导致 value 变化时触发',
          template:
            "onChange(extParams) {\n  // 点击选项导致 value 变化时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onOpen',
          description: '打开菜单栏时触发',
          template:
            "onOpen(extParams) {\n  // 打开菜单栏时触发\n  console.log('onOpen', extParams)\n}",
        },
        {
          name: 'onClose',
          description: '关闭菜单栏时触发',
          template:
            "onClose(extParams) {\n  // 关闭菜单栏时触发\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onOpened',
          description: '打开菜单栏且动画结束后触发',
          template:
            "onOpened(extParams) {\n  // 打开菜单栏且动画结束后触发\n  console.log('onOpened', extParams)\n}",
        },
        {
          name: 'onClosed',
          description: '关闭菜单栏且动画结束后触发',
          template:
            "onClosed(extParams) {\n  // 关闭菜单栏且动画结束后触发\n  console.log('onClosed', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      nestingRule: {
        parentWhitelist: ['VanDropdownMenu'],
      },
    },
  },
  snippets: [
    {
      title: '下拉菜单 DropdownItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanDropdownItem',
        props: {},
        children: '下拉菜单',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
