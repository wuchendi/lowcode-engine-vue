import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (collapse); see https://vant-ui.github.io/vant/v2/#/zh-CN/collapse
const meta = {
  componentName: 'VanCollapseItem',
  title: '折叠面板 CollapseItem',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/collapse',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '唯一标识符',
            'en-US': 'name',
          },
          tip: '唯一标识符，默认为索引值',
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
        defaultValue: 'index',
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题栏左侧图标名称或图片链接',
            'en-US': 'icon',
          },
          tip: '标题栏左侧图标名称或图片链接',
        },
        setter: 'CIconSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题栏大小',
            'en-US': 'size',
          },
          tip: '标题栏大小，可选值为 large',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题栏左侧内容',
            'en-US': 'title',
          },
          tip: '标题栏左侧内容',
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
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题栏右侧内容',
            'en-US': 'value',
          },
          tip: '标题栏右侧内容',
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
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题栏描述信息',
            'en-US': 'label',
          },
          tip: '标题栏描述信息',
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
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示内边框',
            'en-US': 'border',
          },
          tip: '是否显示内边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'isLink',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'isLink',
            'en-US': 'isLink',
          },
          tip: '是否展示标题栏右侧箭头并开启点击反馈',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用面板',
            'en-US': 'disabled',
          },
          tip: '是否禁用面板',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'lazyRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'lazyRender',
            'en-US': 'lazyRender',
          },
          tip: '是否在首次展开时才渲染面板内容',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'titleClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧标题额外类名',
            'en-US': 'titleClass',
          },
          tip: '左侧标题额外类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'valueClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '右侧内容额外类名',
            'en-US': 'valueClass',
          },
          tip: '右侧内容额外类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'labelClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '描述信息额外类名',
            'en-US': 'labelClass',
          },
          tip: '描述信息额外类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'right-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义右侧按钮',
            'en-US': 'right-icon',
          },
          tip: '自定义右侧按钮，默认是 arrow',
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
      nestingRule: {
        parentWhitelist: ['VanCollapse'],
      },
    },
  },
  snippets: [
    {
      title: '折叠面板 CollapseItem',
      screenshot: './screenshots/collapse-item.webp',
      schema: {
        componentName: 'VanCollapseItem',
        props: {},
        children: '折叠面板',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
