import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (descriptions); see https://element-plus.org/zh-CN/component/descriptions.html
const meta = {
  componentName: 'ElDescriptionsItem',
  title: '描述列表 DescriptionsItem',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/descriptions.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签文本',
            'en-US': 'label',
          },
          tip: '标签文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'span',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列的数量',
            'en-US': 'span',
          },
          tip: '列的数量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'rowspan',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rowspan',
            'en-US': 'rowspan',
          },
          tip: 'the number of rows a cell should span',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列的宽度',
            'en-US': 'width',
          },
          tip: '列的宽度，不同行相同列的宽度按最大值设定（如无 border ，宽度包含标签与内容）',
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
        name: 'minWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列的最小宽度',
            'en-US': 'minWidth',
          },
          tip: '列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列（如无 border，宽度包含标签与内容）',
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
        name: 'labelWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'labelWidth',
            'en-US': 'labelWidth',
          },
          tip: 'column label width, if not set, it will be the same as the width of the column. Higher priority than the label-width of Descriptions',
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
        name: 'align',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列的内容对齐方式',
            'en-US': 'align',
          },
          tip: '列的内容对齐方式（如无 border，对标签和内容均生效）',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'right',
                value: 'right',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'left',
      },
      {
        name: 'labelAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列的标签对齐方式',
            'en-US': 'labelAlign',
          },
          tip: '列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'right',
                value: 'right',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'className',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列的内容自定义类名',
            'en-US': 'className',
          },
          tip: '列的内容自定义类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'labelClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'labelClassName',
            'en-US': 'labelClassName',
          },
          tip: 'column label custom class name',
        },
        setter: 'StringSetter',
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
      nestingRule: {
        parentWhitelist: ['ElDescriptions'],
      },
    },
  },
  snippets: [
    {
      title: '描述列表 DescriptionsItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElDescriptionsItem',
        props: {},
        children: '描述列表',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
