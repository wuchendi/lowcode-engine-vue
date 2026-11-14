import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (descriptions); see https://element-plus.org/zh-CN/component/descriptions.html
const meta = {
  componentName: 'ElDescriptions',
  title: '描述列表',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/descriptions.html',
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
                title: 'large',
                value: 'large',
              },
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'small',
                value: 'small',
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
        name: 'labelWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'labelWidth',
            'en-US': 'labelWidth',
          },
          tip: 'label width of every column',
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
      title: '描述列表',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElDescriptions',
        props: {},
        children: '描述列表',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
