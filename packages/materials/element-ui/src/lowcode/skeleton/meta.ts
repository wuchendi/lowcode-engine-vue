import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (skeleton); see https://element.eleme.cn/#/zh-CN/component/skeleton
const meta = {
  componentName: 'ElSkeleton',
  title: '骨架屏',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/skeleton',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'animated',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使用动画',
            'en-US': 'animated',
          },
          tip: '是否使用动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'count',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '渲染多少个 template',
            'en-US': 'count',
          },
          tip: '渲染多少个 template, 建议使用尽可能小的数字',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'loading',
            'en-US': 'loading',
          },
          tip: '是否显示 skeleton 骨架屏',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'rows',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '骨架屏段落数量',
            'en-US': 'rows',
          },
          tip: '骨架屏段落数量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 4,
      },
      {
        name: 'throttle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '延迟占位 DOM 渲染的时间',
            'en-US': 'throttle',
          },
          tip: '延迟占位 DOM 渲染的时间, 单位是毫秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'template',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '用来展示自定义占位符',
            'en-US': 'template',
          },
          tip: '用来展示自定义占位符',
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
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '骨架屏',
      screenshot: './screenshots/skeleton.webp',
      schema: {
        componentName: 'ElSkeleton',
        props: {},
        children: '骨架屏',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
