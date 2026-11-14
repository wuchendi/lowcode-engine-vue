import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (layout); see https://1x.antdv.com/components/layout-cn/
const meta = {
  componentName: 'ALayoutSider',
  title: '布局 Sider',
  group: 'Ant Design 组件',
  category: '布局',
  docUrl: 'https://1x.antdv.com/components/layout-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'breakpoint',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '触发响应式布局的断点',
            'en-US': 'breakpoint',
          },
          tip: '触发响应式布局的断点',
        },
        setter: [
          {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: 'xs',
                  value: 'xs',
                },
                {
                  title: 'sm',
                  value: 'sm',
                },
                {
                  title: 'md',
                  value: 'md',
                },
                {
                  title: 'lg',
                  value: 'lg',
                },
                {
                  title: 'xl',
                  value: 'xl',
                },
                {
                  title: 'xxl',
                  value: 'xxl',
                },
              ],
            },
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前收起状态',
            'en-US': 'v-model',
          },
          tip: '当前收起状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'collapsedWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '收缩宽度',
            'en-US': 'collapsedWidth',
          },
          tip: '收缩宽度，设置为 0 会出现特殊 trigger',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 80,
      },
      {
        name: 'collapsible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可收起',
            'en-US': 'collapsible',
          },
          tip: '是否可收起',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'defaultCollapsed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否默认收起',
            'en-US': 'defaultCollapsed',
          },
          tip: '是否默认收起',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'reverseArrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '翻转折叠提示箭头的方向',
            'en-US': 'reverseArrow',
          },
          tip: '翻转折叠提示箭头的方向，当 Sider 在右边时可以使用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        defaultValue: 'dark',
      },
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 trigger',
            'en-US': 'trigger',
          },
          tip: '自定义 trigger，设置为 null 时隐藏 trigger',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '宽度',
            'en-US': 'width',
          },
          tip: '宽度',
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
        defaultValue: '200',
      },
      {
        name: 'zeroWidthTriggerStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zeroWidthTriggerStyle',
            'en-US': 'zeroWidthTriggerStyle',
          },
          tip: '指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式',
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
          name: 'onCollapse',
          description:
            '展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发',
          template:
            "onCollapse(extParams) {\n  // 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发\n  console.log('onCollapse', extParams)\n}",
        },
        {
          name: 'onBreakpoint',
          description: '触发响应式布局断点时的回调',
          template:
            "onBreakpoint(extParams) {\n  // 触发响应式布局断点时的回调\n  console.log('onBreakpoint', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '布局 Sider',
      screenshot: './screenshots/layout-sider.webp',
      schema: {
        componentName: 'ALayoutSider',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
