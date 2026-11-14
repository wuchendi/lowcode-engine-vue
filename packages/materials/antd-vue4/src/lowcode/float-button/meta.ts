import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (float-button); see https://antdv.com/components/float-button-cn
const meta = {
  componentName: 'AFloatButton',
  title: '悬浮按钮',
  group: 'Ant Design 组件',
  category: '其他',
  docUrl: 'https://antdv.com/components/float-button-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义图标',
            'en-US': 'icon',
          },
          tip: '自定义图标',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文字及其它内容',
            'en-US': 'description',
          },
          tip: '文字及其它内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'tooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '气泡卡片的内容',
            'en-US': 'tooltip',
          },
          tip: '气泡卡片的内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置按钮类型',
            'en-US': 'type',
          },
          tip: '设置按钮类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'shape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置按钮形状',
            'en-US': 'shape',
          },
          tip: '设置按钮形状',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'circle',
      },
      {
        name: 'onClick',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击按钮时的回调',
            'en-US': 'onClick',
          },
          tip: '点击按钮时的回调',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'href',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击跳转的地址',
            'en-US': 'href',
          },
          tip: '点击跳转的地址，指定此属性 button 的行为和 a 链接一致',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'target',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'target',
            'en-US': 'target',
          },
          tip: '相当于 a 标签的 target 属性，href 存在时生效',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'badge',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '带徽标数字的悬浮按钮',
            'en-US': 'badge',
          },
          tip: '带徽标数字的悬浮按钮（不支持 status 以及相关属性）',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '设置处理 click 事件的处理器',
          template:
            "onClick(extParams) {\n  // 设置处理 click 事件的处理器\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '悬浮按钮',
      screenshot: './screenshots/float-button.webp',
      schema: {
        componentName: 'AFloatButton',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
