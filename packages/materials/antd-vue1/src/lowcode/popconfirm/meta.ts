import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (popconfirm); see https://1x.antdv.com/components/popconfirm-cn/
const meta = {
  componentName: 'APopconfirm',
  title: '气泡确认框',
  group: 'Ant Design 组件',
  category: '反馈',
  docUrl: 'https://1x.antdv.com/components/popconfirm-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'cancelText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '取消按钮文字',
            'en-US': 'cancelText',
          },
          tip: '取消按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'okText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮文字',
            'en-US': 'okText',
          },
          tip: '确认按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'okType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮类型',
            'en-US': 'okType',
          },
          tip: '确认按钮类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'primary',
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认框的描述',
            'en-US': 'title',
          },
          tip: '确认框的描述',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'icon',
            'en-US': 'icon',
          },
          tip: '自定义弹出气泡 Icon 图标',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabled',
            'en-US': 'disabled',
          },
          tip: '点击 Popconfirm 子元素是否弹出气泡确认框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onCancel',
          description: '点击取消的回调',
          template:
            "onCancel(extParams) {\n  // 点击取消的回调\n  console.log('onCancel', extParams)\n}",
        },
        {
          name: 'onConfirm',
          description: '点击确认的回调',
          template:
            "onConfirm(extParams) {\n  // 点击确认的回调\n  console.log('onConfirm', extParams)\n}",
        },
        {
          name: 'onVisibleChange',
          description: '显示隐藏的回调',
          template:
            "onVisibleChange(extParams) {\n  // 显示隐藏的回调\n  console.log('onVisibleChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '气泡确认框',
      screenshot: './screenshots/popconfirm.webp',
      schema: {
        componentName: 'APopconfirm',
        props: {
          title: '标题',
          content: '内容',
        },
        children: [
          {
            componentName: 'AButton',
            props: {},
            children: '气泡确认框',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
