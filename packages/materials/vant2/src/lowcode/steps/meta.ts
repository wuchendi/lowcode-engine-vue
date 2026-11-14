import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (steps); see https://vant-ui.github.io/vant/v2/#/zh-CN/steps
const meta = {
  componentName: 'VanSteps',
  title: '步骤条',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/steps',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'active',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前步骤',
            'en-US': 'active',
          },
          tip: '当前步骤',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
        defaultValue: '0',
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示方向',
            'en-US': 'direction',
          },
          tip: '显示方向，可选值为 vertical',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'activeColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '激活状态颜色',
            'en-US': 'activeColor',
          },
          tip: '激活状态颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#07c160',
      },
      {
        name: 'inactiveColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '未激活状态颜色',
            'en-US': 'inactiveColor',
          },
          tip: '未激活状态颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#969799',
      },
      {
        name: 'activeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '激活状态底部图标',
            'en-US': 'activeIcon',
          },
          tip: '激活状态底部图标，可选值见 Icon 组件',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'checked',
      },
      {
        name: 'inactiveIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '未激活状态底部图标',
            'en-US': 'inactiveIcon',
          },
          tip: '未激活状态底部图标，可选值见 Icon 组件',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'finishIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '已完成步骤对应的底部图标',
            'en-US': 'finishIcon',
          },
          tip: '已完成步骤对应的底部图标，优先级高于 inactive-icon，可选值见 Icon 组件',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'iconPrefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标类名前缀',
            'en-US': 'iconPrefix',
          },
          tip: '图标类名前缀，同 Icon 组件的 class-prefix 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'van-icon',
      },
      {
        name: 'center',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否进行居中对齐',
            'en-US': 'center',
          },
          tip: '是否进行居中对齐，仅在竖向展示时有效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick-step',
          description: '点击步骤的标题或图标时触发',
          template:
            "onClickStep(extParams) {\n  // 点击步骤的标题或图标时触发\n  console.log('onClickStep', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '步骤条',
      screenshot: './screenshots/steps.webp',
      schema: {
        componentName: 'VanSteps',
        props: {
          active: 1,
        },
        children: [
          {
            componentName: 'VanStep',
            props: {},
            children: '步骤一',
          },
          {
            componentName: 'VanStep',
            props: {},
            children: '步骤二',
          },
          {
            componentName: 'VanStep',
            props: {},
            children: '步骤三',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
