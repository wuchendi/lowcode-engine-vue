import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (splitter); see https://element-plus.org/zh-CN/component/splitter.html
const meta = {
  componentName: 'ElSplitter',
  title: '分隔面板 beta',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/splitter.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'layout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '分隔面板的布局方向',
            'en-US': 'layout',
          },
          tip: '分隔面板的布局方向',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'horizontal',
                value: 'horizontal',
              },
              {
                title: 'vertical',
                value: 'vertical',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'lazy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'lazy',
            'en-US': 'lazy',
          },
          tip: 'Whether to enable lazy mode',
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
          name: 'onResizeStart',
          description: '开始调整面板大小时触发，index 是拖拽条的索引。',
          template:
            "onResizeStart(...args, extParams) {\n  // 开始调整面板大小时触发，index 是拖拽条的索引。\n  console.log('onResizeStart', ...args)\n}",
        },
        {
          name: 'onResize',
          description: '调整面板大小时触发，index 是拖拽条的索引。',
          template:
            "onResize(...args, extParams) {\n  // 调整面板大小时触发，index 是拖拽条的索引。\n  console.log('onResize', ...args)\n}",
        },
        {
          name: 'onResizeEnd',
          description: '面板调整大小结束时触发，index 是拖拽条的索引。',
          template:
            "onResizeEnd(...args, extParams) {\n  // 面板调整大小结束时触发，index 是拖拽条的索引。\n  console.log('onResizeEnd', ...args)\n}",
        },
        {
          name: 'onCollapse',
          description:
            'Triggered when a panel is collapsed, index is the drag bar index',
          template:
            "onCollapse(...args, extParams) {\n  // Triggered when a panel is collapsed, index is the drag bar index\n  console.log('onCollapse', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '分隔面板 beta',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElSplitter',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
