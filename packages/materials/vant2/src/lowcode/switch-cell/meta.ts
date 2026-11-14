import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (switch-cell); see https://vant-ui.github.io/vant/v2/#/zh-CN/switch-cell
const meta = {
  componentName: 'VanSwitchCell',
  title: '开关单元格',
  group: 'Vant 组件',
  category: '废弃',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/switch-cell',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '开关状态',
            'en-US': 'v-model',
          },
          tip: '开关状态',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'false',
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧标题',
            'en-US': 'title',
          },
          tip: '左侧标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示单元格内边框',
            'en-US': 'border',
          },
          tip: '是否展示单元格内边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'cellSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '单元格大小',
            'en-US': 'cellSize',
          },
          tip: '单元格大小，可选值为 large',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为加载状态',
            'en-US': 'loading',
          },
          tip: '是否为加载状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为禁用状态',
            'en-US': 'disabled',
          },
          tip: '是否为禁用状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '开关尺寸',
            'en-US': 'size',
          },
          tip: '开关尺寸',
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
        defaultValue: '24px',
      },
      {
        name: 'activeColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '开关时的背景色',
            'en-US': 'activeColor',
          },
          tip: '开关时的背景色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#1989fa',
      },
      {
        name: 'inactiveColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '开关时的背景色',
            'en-US': 'inactiveColor',
          },
          tip: '开关时的背景色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: 'white',
      },
      {
        name: 'activeValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '打开时的值',
            'en-US': 'activeValue',
          },
          tip: '打开时的值',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'true',
      },
      {
        name: 'inactiveValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭时的值',
            'en-US': 'inactiveValue',
          },
          tip: '关闭时的值',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'false',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '开关状态切换回调',
          template:
            "onChange(extParams) {\n  // 开关状态切换回调\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '开关单元格',
      screenshot: './screenshots/switch-cell.webp',
      schema: {
        componentName: 'VanSwitchCell',
        props: {
          title: '开关单元格',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
