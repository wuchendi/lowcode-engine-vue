import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (badge); see https://antdv.com/components/badge-cn
const meta = {
  componentName: 'ABadgeRibbon',
  title: '徽标数 BadgeRibbon',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/badge-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义缎带的颜色',
            'en-US': 'color',
          },
          tip: '自定义缎带的颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '缎带的位置',
            'en-US': 'placement',
          },
          tip: '缎带的位置，start 和 end 随文字方向（RTL 或 LTR）变动',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'end',
      },
      {
        name: 'text',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '缎带中填入的内容',
            'en-US': 'text',
          },
          tip: '缎带中填入的内容',
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
      title: '徽标数 BadgeRibbon',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ABadgeRibbon',
        props: {
          text: '徽标数',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
