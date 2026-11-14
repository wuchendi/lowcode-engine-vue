import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (empty); see https://antdv.com/components/empty-cn
const meta = {
  componentName: 'AEmpty',
  title: '空状态',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/empty-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义描述内容',
            'en-US': 'description',
          },
          tip: '自定义描述内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'image',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置显示图片',
            'en-US': 'image',
          },
          tip: '设置显示图片，为 string 时表示自定义图片地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'false',
      },
      {
        name: 'imageStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片样式',
            'en-US': 'imageStyle',
          },
          tip: '图片样式',
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
    component: {},
  },
  snippets: [
    {
      title: '空状态',
      screenshot: './screenshots/empty.webp',
      schema: {
        componentName: 'AEmpty',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
