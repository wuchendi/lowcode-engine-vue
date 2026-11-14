import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (backtop); see https://element.eleme.cn/#/zh-CN/component/backtop
const meta = {
  componentName: 'ElBacktop',
  title: '回到顶部',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/backtop',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'target',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '触发滚动的对象',
            'en-US': 'target',
          },
          tip: '触发滚动的对象',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'visibilityHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '滚动高度达到此参数值才出现',
            'en-US': 'visibilityHeight',
          },
          tip: '滚动高度达到此参数值才出现',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 200,
      },
      {
        name: 'right',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制其显示位置',
            'en-US': 'right',
          },
          tip: '控制其显示位置, 距离页面右边距',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 40,
      },
      {
        name: 'bottom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制其显示位置',
            'en-US': 'bottom',
          },
          tip: '控制其显示位置, 距离页面底部距离',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 40,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击按钮触发的事件',
          template:
            "onClick(extParams) {\n  // 点击按钮触发的事件\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '回到顶部',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElBacktop',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
