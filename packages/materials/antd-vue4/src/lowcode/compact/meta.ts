import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (space); see https://antdv.com/components/space-cn
const meta = {
  componentName: 'ACompact',
  title: '间距 Compact',
  group: 'Ant Design 组件',
  category: '布局',
  docUrl: 'https://antdv.com/components/space-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'block',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '将宽度调整为父元素宽度的选项',
            'en-US': 'block',
          },
          tip: '将宽度调整为父元素宽度的选项',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定排列方向',
            'en-US': 'direction',
          },
          tip: '指定排列方向',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '子组件大小',
            'en-US': 'size',
          },
          tip: '子组件大小',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'middle',
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
      title: '间距 Compact',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ACompact',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
