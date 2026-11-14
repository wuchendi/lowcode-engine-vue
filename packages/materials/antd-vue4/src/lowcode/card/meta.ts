import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (card); see https://antdv.com/components/card-cn
const meta = {
  componentName: 'ACard',
  title: '卡片',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/card-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'activeTabKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前激活页签的 key',
            'en-US': 'activeTabKey',
          },
          tip: '当前激活页签的 key',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'bodyStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '内容区域自定义样式',
            'en-US': 'bodyStyle',
          },
          tip: '内容区域自定义样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'bordered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否有边框',
            'en-US': 'bordered',
          },
          tip: '是否有边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'defaultActiveTabKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '初始化选中页签的 key',
            'en-US': 'defaultActiveTabKey',
          },
          tip: '初始化选中页签的 key，如果没有设置 activeTabKey',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '卡片右上角的操作区域',
            'en-US': 'extra',
          },
          tip: '卡片右上角的操作区域',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'headStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标题区域样式',
            'en-US': 'headStyle',
          },
          tip: '自定义标题区域样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'hoverable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '鼠标移过时可浮起',
            'en-US': 'hoverable',
          },
          tip: '鼠标移过时可浮起',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当卡片内容还在加载中时',
            'en-US': 'loading',
          },
          tip: '当卡片内容还在加载中时，可以用 loading 展示一个占位',
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
            'zh-CN': 'card 的尺寸',
            'en-US': 'size',
          },
          tip: 'card 的尺寸',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'tabList',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '页签标题列表',
            'en-US': 'tabList',
          },
          tip: '页签标题列表, 可以通过 customTab(v3.0) 插槽自定义 tab',
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
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '卡片标题',
            'en-US': 'title',
          },
          tip: '卡片标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '卡片类型',
            'en-US': 'type',
          },
          tip: '卡片类型，可设置为 inner 或 不设置',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'actions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '卡片操作组',
            'en-US': 'actions',
          },
          tip: '卡片操作组，位置在卡片底部',
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
        name: 'cover',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '卡片封面',
            'en-US': 'cover',
          },
          tip: '卡片封面',
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
        name: 'customTab',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'customTab',
            'en-US': 'customTab',
          },
          tip: '自定义 tabList tab 标签',
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
        name: 'tabBarExtraContent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tab bar 上额外的元素',
            'en-US': 'tabBarExtraContent',
          },
          tip: 'tab bar 上额外的元素',
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
          name: 'onTabChange',
          description: '页签切换的回调',
          template:
            "onTabChange(extParams) {\n  // 页签切换的回调\n  console.log('onTabChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '卡片',
      screenshot: './screenshots/card.webp',
      schema: {
        componentName: 'ACard',
        props: {
          title: '卡片标题',
        },
        children: [
          {
            componentName: 'div',
            props: {},
            children: '卡片内容',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
