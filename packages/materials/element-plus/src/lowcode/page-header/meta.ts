import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (page-header); see https://element-plus.org/zh-CN/component/page-header.html
const meta = {
  componentName: 'ElPageHeader',
  title: '页头',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/page-header.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'icon',
            'en-US': 'icon',
          },
          tip: 'Page Header 的图标 Icon 组件',
        },
        setter: 'CIconSetter',
        supportVariable: true,
        defaultValue: 'Back',
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'title',
            'en-US': 'title',
          },
          tip: 'Page Header 的主标题，默认是 Back (内置 a11y)',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'content',
            'en-US': 'content',
          },
          tip: 'Page Header 的内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'extra',
            'en-US': 'extra',
          },
          tip: 'extra',
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
        name: 'breadcrumb',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'breadcrumb',
            'en-US': 'breadcrumb',
          },
          tip: 'content as breadcrumb',
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
          name: 'onBack',
          description: 'triggers when right side is clicked',
          template:
            "onBack(...args, extParams) {\n  // triggers when right side is clicked\n  console.log('onBack', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '页头',
      screenshot: './screenshots/page-header.webp',
      schema: {
        componentName: 'ElPageHeader',
        props: {},
        children: '页头',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
