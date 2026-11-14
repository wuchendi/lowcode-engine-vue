import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (descriptions); see https://element.eleme.cn/#/zh-CN/component/descriptions
const meta = {
  componentName: 'ElDescriptions',
  title: '描述列表',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/descriptions',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否带有边框',
            'en-US': 'border',
          },
          tip: '是否带有边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'column',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'column',
            'en-US': 'column',
          },
          tip: '一行 Descriptions Item 的数量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 3,
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '排列的方向',
            'en-US': 'direction',
          },
          tip: '排列的方向',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'vertical',
                value: 'vertical',
              },
              {
                title: 'horizontal',
                value: 'horizontal',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表的尺寸',
            'en-US': 'size',
          },
          tip: '列表的尺寸',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'medium',
                value: 'medium',
              },
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'mini',
                value: 'mini',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题文本',
            'en-US': 'title',
          },
          tip: '标题文本，显示在左上方',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '操作区文本',
            'en-US': 'extra',
          },
          tip: '操作区文本，显示在右上方',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'colon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示冒号',
            'en-US': 'colon',
          },
          tip: '是否显示冒号',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'labelClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标签类名',
            'en-US': 'labelClassName',
          },
          tip: '自定义标签类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'contentClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义内容类名',
            'en-US': 'contentClassName',
          },
          tip: '自定义内容类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'labelStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标签样式',
            'en-US': 'labelStyle',
          },
          tip: '自定义标签样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'contentStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义内容样式',
            'en-US': 'contentStyle',
          },
          tip: '自定义内容样式',
        },
        setter: 'JsonSetter',
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
      title: '描述列表',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElDescriptions',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
