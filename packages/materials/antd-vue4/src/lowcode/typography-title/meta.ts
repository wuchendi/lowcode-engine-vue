import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (typography); see https://antdv.com/components/typography-cn
const meta = {
  componentName: 'ATypographyTitle',
  title: '排版 TypographyTitle',
  group: 'Ant Design 组件',
  category: '通用',
  docUrl: 'https://antdv.com/components/typography-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'code',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '添加代码样式',
            'en-US': 'code',
          },
          tip: '添加代码样式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'v-model:content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model:content',
            'en-US': 'v-model:content',
          },
          tip: '当使用 ellipsis 或 editable 时，使用 content 代替 children',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'copyable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可拷贝',
            'en-US': 'copyable',
          },
          tip: '是否可拷贝，为对象时可进行各种自定义',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'delete',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '添加删除线样式',
            'en-US': 'delete',
          },
          tip: '添加删除线样式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁用文本',
            'en-US': 'disabled',
          },
          tip: '禁用文本',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'editable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可编辑',
            'en-US': 'editable',
          },
          tip: '是否可编辑，为对象时可对编辑进行控制',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'ellipsis',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动溢出省略',
            'en-US': 'ellipsis',
          },
          tip: '自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'level',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '重要程度',
            'en-US': 'level',
          },
          tip: '重要程度，相当于 h1、h2、h3、h4、h5',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'mark',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '添加标记样式',
            'en-US': 'mark',
          },
          tip: '添加标记样式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文本类型',
            'en-US': 'type',
          },
          tip: '文本类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'underline',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '添加下划线样式',
            'en-US': 'underline',
          },
          tip: '添加下划线样式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
      title: '排版 TypographyTitle',
      screenshot: './screenshots/typography-title.webp',
      schema: {
        componentName: 'ATypographyTitle',
        props: {},
        children: '排版',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
