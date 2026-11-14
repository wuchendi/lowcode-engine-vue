import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (input-number); see https://1x.antdv.com/components/input-number-cn/
const meta = {
  componentName: 'AInputNumber',
  title: '数字输入框',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/input-number-cn/',
  devMode: 'proCode',
  configure: {
    props: [],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '变化回调',
          template:
            "onChange(extParams) {\n  // 变化回调\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onPressEnter',
          description: '按下回车的回调',
          template:
            "onPressEnter(extParams) {\n  // 按下回车的回调\n  console.log('onPressEnter', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '数字输入框',
      screenshot: './screenshots/input-number.webp',
      schema: {
        componentName: 'AInputNumber',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
