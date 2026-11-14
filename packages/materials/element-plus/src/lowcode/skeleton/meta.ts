import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (skeleton); see https://element-plus.org/zh-CN/component/skeleton.html
const meta = {
  componentName: 'ElSkeleton',
  title: '骨架屏',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/skeleton.html',
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
          tip: '是否显示加载结束后的 DOM 结构',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        defaultValue: 3,
      },
      {
        name: 'throttle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '渲染延迟',
            'en-US': 'throttle',
          },
          tip: '渲染延迟（以毫秒为单位）数字代表延迟显示, 也可以设置为延迟隐藏, 例如 { leading: 500, trailing: 500 } 当需要控制初始加载值时，您可以设置 { initVal: true }',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'template',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'template',
            'en-US': 'template',
          },
          tip: '渲染 skeleton 模板的内容',
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
