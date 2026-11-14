import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (affix); see https://1x.antdv.com/components/affix-cn/
const meta = {
  componentName: 'AAffix',
  title: '固钉',
  group: 'Ant Design 组件',
  category: '其他',
  docUrl: 'https://1x.antdv.com/components/affix-cn/',
  devMode: 'proCode',
  configure: {
    props: [],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '固定状态改变时触发的回调函数',
          template:
            "onChange(extParams) {\n  // 固定状态改变时触发的回调函数\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '固钉',
      screenshot: './screenshots/affix.webp',
      schema: {
        componentName: 'AAffix',
        children: [
          {
            componentName: 'AButton',
            props: {},
            children: '固钉',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
