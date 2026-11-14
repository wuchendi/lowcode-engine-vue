import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (alert); see https://antdv.com/components/alert-cn
const meta = {
  componentName: 'AAlert',
  title: '警告提示',
  group: 'Ant Design 组件',
  category: '反馈',
  docUrl: 'https://antdv.com/components/alert-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'action',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义操作项',
            'en-US': 'action',
          },
          tip: '自定义操作项',
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
        name: 'afterClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭动画结束后触发的回调函数',
            'en-US': 'afterClose',
          },
          tip: '关闭动画结束后触发的回调函数',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'banner',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否用作顶部公告',
            'en-US': 'banner',
          },
          tip: '是否用作顶部公告',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'closable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认不显示关闭按钮',
            'en-US': 'closable',
          },
          tip: '默认不显示关闭按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'closeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义关闭 Icon',
            'en-US': 'closeIcon',
          },
          tip: '自定义关闭 Icon',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'closeText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义关闭按钮',
            'en-US': 'closeText',
          },
          tip: '自定义关闭按钮',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '警告提示的辅助性文字介绍',
            'en-US': 'description',
          },
          tip: '警告提示的辅助性文字介绍',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义图标',
            'en-US': 'icon',
          },
          tip: '自定义图标，showIcon 为 true 时有效',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'message',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '警告提示内容',
            'en-US': 'message',
          },
          tip: '警告提示内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示辅助图标',
            'en-US': 'showIcon',
          },
          tip: '是否显示辅助图标',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定警告提示的样式',
            'en-US': 'type',
          },
          tip: '指定警告提示的样式，有四种选择 success、info、warning、error',
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
          name: 'onClose',
          description: '关闭时触发的回调函数',
          template:
            "onClose(extParams) {\n  // 关闭时触发的回调函数\n  console.log('onClose', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '警告提示',
      screenshot: './screenshots/alert.webp',
      schema: {
        componentName: 'AAlert',
        props: {
          message: '提示信息',
          type: 'info',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
