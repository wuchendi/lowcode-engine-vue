import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (list); see https://1x.antdv.com/components/list-cn/
const meta = {
  componentName: 'AList',
  title: '列表',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/list-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'bordered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示边框',
            'en-US': 'bordered',
          },
          tip: '是否展示边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表底部',
            'en-US': 'footer',
          },
          tip: '列表底部',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'grid',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表栅格配置',
            'en-US': 'grid',
          },
          tip: '列表栅格配置',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表头部',
            'en-US': 'header',
          },
          tip: '列表头部',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'itemLayout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'itemLayout',
            'en-US': 'itemLayout',
          },
          tip: '设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loadMore',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载更多',
            'en-US': 'loadMore',
          },
          tip: '加载更多',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'locale',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认文案设置',
            'en-US': 'locale',
          },
          tip: '默认文案设置，目前包括空数据文案',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'pagination',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'pagination',
            'en-US': 'pagination',
          },
          tip: '对应的 pagination 配置, 设置 false 不显示',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'list 的尺寸',
            'en-US': 'size',
          },
          tip: 'list 的尺寸',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'split',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示分割线',
            'en-US': 'split',
          },
          tip: '是否展示分割线',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'dataSource',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表数据源',
            'en-US': 'dataSource',
          },
          tip: '列表数据源',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'renderItem',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义Item函数',
            'en-US': 'renderItem',
          },
          tip: '自定义Item函数，也可使用 slot="renderItem" 和 slot-scope="item, index"',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'rowKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '各项 key 的取值',
            'en-US': 'rowKey',
          },
          tip: '各项 key 的取值，可以是字符串或一个函数',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '列表',
      screenshot: './screenshots/list.webp',
      schema: {
        componentName: 'AList',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
