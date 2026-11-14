import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (layout); see https://element-plus.org/zh-CN/component/layout.html
const meta = {
  componentName: 'ElCol',
  title: '布局 Col',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/layout.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'span',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '栅格占据的列数',
            'en-US': 'span',
          },
          tip: '栅格占据的列数',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 24,
      },
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '栅格左侧的间隔格数',
            'en-US': 'offset',
          },
          tip: '栅格左侧的间隔格数',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'push',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '栅格向右移动格数',
            'en-US': 'push',
          },
          tip: '栅格向右移动格数',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'pull',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '栅格向左移动格数',
            'en-US': 'pull',
          },
          tip: '栅格向左移动格数',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'xs',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'xs',
            'en-US': 'xs',
          },
          tip: '&lt;768px 响应式栅格数或者栅格属性对象',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'sm',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'sm',
            'en-US': 'sm',
          },
          tip: '≥768px 响应式栅格数或者栅格属性对象',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'md',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'md',
            'en-US': 'md',
          },
          tip: '≥992px 响应式栅格数或者栅格属性对象',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'lg',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'lg',
            'en-US': 'lg',
          },
          tip: '≥1200px 响应式栅格数或者栅格属性对象',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'xl',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'xl',
            'en-US': 'xl',
          },
          tip: '≥1920px 响应式栅格数或者栅格属性对象',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义元素标签',
            'en-US': 'tag',
          },
          tip: '自定义元素标签',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'div',
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
      title: '布局 Col',
      screenshot: './screenshots/col.webp',
      schema: {
        componentName: 'ElCol',
        props: {
          span: 12,
        },
        children: [
          {
            componentName: 'div',
            props: {},
            children: 'col',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
