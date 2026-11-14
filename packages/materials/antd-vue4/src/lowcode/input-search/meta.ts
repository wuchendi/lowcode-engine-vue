import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (input); see https://antdv.com/components/input-cn
const meta = {
  componentName: 'AInputSearch',
  title: '输入框 InputSearch',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/input-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'enterButton',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否有确认按钮',
            'en-US': 'enterButton',
          },
          tip: '是否有确认按钮，可设为按钮文字。该属性会与 addon 冲突。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '搜索 loading',
            'en-US': 'loading',
          },
          tip: '搜索 loading',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onSearch',
          description: '点击搜索或按下回车键时的回调',
          template:
            "onSearch(extParams) {\n  // 点击搜索或按下回车键时的回调\n  console.log('onSearch', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '输入框 InputSearch',
      screenshot: './screenshots/input-search.webp',
      schema: {
        componentName: 'AInputSearch',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
