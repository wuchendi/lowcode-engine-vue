import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (float-button); see https://antdv.com/components/float-button-cn
const meta = {
  componentName: 'AFloatButtonGroup',
  title: '悬浮按钮 FloatButtonGroup',
  group: 'Ant Design 组件',
  category: '其他',
  docUrl: 'https://antdv.com/components/float-button-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'shape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'shape',
            'en-US': 'shape',
          },
          tip: '设置包含的 FloatButton 按钮形状',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'circle',
      },
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '触发方式',
            'en-US': 'trigger',
          },
          tip: '触发方式（有触发方式为菜单模式）',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'v-model:open',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '受控展开',
            'en-US': 'v-model:open',
          },
          tip: '受控展开',
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
          name: 'onOpenChange',
          description: '展开收起时的回调',
          template:
            "onOpenChange(extParams) {\n  // 展开收起时的回调\n  console.log('onOpenChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '悬浮按钮 FloatButtonGroup',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AFloatButtonGroup',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
