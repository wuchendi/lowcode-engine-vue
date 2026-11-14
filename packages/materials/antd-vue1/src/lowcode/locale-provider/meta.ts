import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (locale-provider); see https://1x.antdv.com/components/locale-provider-cn/
const meta = {
  componentName: 'ALocaleProvider',
  title: '国际化',
  group: 'Ant Design 组件',
  category: '其他',
  docUrl: 'https://1x.antdv.com/components/locale-provider-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'locale',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '语言包配置',
            'en-US': 'locale',
          },
          tip: '语言包配置，语言包可到 ant-design-vue/lib/locale-provider/ 目录下寻找',
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
      title: '国际化',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ALocaleProvider',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
