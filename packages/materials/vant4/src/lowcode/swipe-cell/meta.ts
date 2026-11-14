import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (swipe-cell); see https://vant-ui.github.io/vant/#/zh-CN/swipe-cell
const meta = {
  componentName: 'VanSwipeCell',
  title: '滑动单元格',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/swipe-cell',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标识符',
            'en-US': 'name',
          },
          tip: '标识符，通常为一个唯一的字符串或数字，可以在事件参数中获取到',
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
        name: 'leftWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定左侧滑动区域宽度',
            'en-US': 'leftWidth',
          },
          tip: '指定左侧滑动区域宽度，单位为 px',
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
        defaultValue: 'auto',
      },
      {
        name: 'rightWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定右侧滑动区域宽度',
            'en-US': 'rightWidth',
          },
          tip: '指定右侧滑动区域宽度，单位为 px',
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
        defaultValue: 'auto',
      },
      {
        name: 'threshold',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '滑动触发阈值',
            'en-US': 'threshold',
          },
          tip: '滑动触发阈值（滑动距离与滑动区域宽度的比例）',
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
        defaultValue: '0.15',
      },
      {
        name: 'beforeClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭前的回调函数',
            'en-US': 'beforeClose',
          },
          tip: '关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用滑动',
            'en-US': 'disabled',
          },
          tip: '是否禁用滑动',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'stopPropagation',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否阻止滑动事件冒泡',
            'en-US': 'stopPropagation',
          },
          tip: '是否阻止滑动事件冒泡',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'left',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧滑动区域的内容',
            'en-US': 'left',
          },
          tip: '左侧滑动区域的内容',
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
        name: 'right',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '右侧滑动区域的内容',
            'en-US': 'right',
          },
          tip: '右侧滑动区域的内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(extParams) {\n  // 点击时触发\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onOpen',
          description: '打开时触发',
          template:
            "onOpen(extParams) {\n  // 打开时触发\n  console.log('onOpen', extParams)\n}",
        },
        {
          name: 'onClose',
          description: '关闭时触发',
          template:
            "onClose(extParams) {\n  // 关闭时触发\n  console.log('onClose', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '滑动单元格',
      screenshot: './screenshots/swipe-cell.webp',
      schema: {
        componentName: 'VanSwipeCell',
        props: {},
        children: '滑动单元格',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
