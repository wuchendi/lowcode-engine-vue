import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (page-header); see https://element.eleme.cn/#/zh-CN/component/page-header
const meta = {
  componentName: 'ElPageHeader',
  title: '页头',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/page-header',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题',
            'en-US': 'title',
          },
          tip: '标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '内容',
            'en-US': 'content',
          },
          tip: '内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onBack',
          description: '点击左侧区域触发',
          template:
            "onBack(extParams) {\n  // 点击左侧区域触发\n  console.log('onBack', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '页头',
      screenshot: './screenshots/page-header.webp',
      schema: {
        componentName: 'ElPageHeader',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
