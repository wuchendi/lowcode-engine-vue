import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (button); see https://1x.antdv.com/components/button-cn/
const meta = {
  componentName: 'AButton',
  title: '按钮',
  group: 'Ant Design 组件',
  category: '通用',
  docUrl: 'https://1x.antdv.com/components/button-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮失效状态',
            'en-US': 'disabled',
          },
          tip: '按钮失效状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'ghost',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '幽灵属性',
            'en-US': 'ghost',
          },
          tip: '幽灵属性，使按钮背景透明',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'htmlType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'htmlType',
            'en-US': 'htmlType',
          },
          tip: '设置 button 原生的 type 值，可选值请参考 HTML 标准',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'button',
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置按钮的图标类型',
            'en-US': 'icon',
          },
          tip: '设置按钮的图标类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置按钮载入状态',
            'en-US': 'loading',
          },
          tip: '设置按钮载入状态',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'shape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置按钮形状',
            'en-US': 'shape',
          },
          tip: '设置按钮形状，可选值为 circle、 round 或者不设',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'circle',
                value: 'circle',
              },
              {
                title: 'round',
                value: 'round',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置按钮大小',
            'en-US': 'size',
          },
          tip: '设置按钮大小，可选值为 small large 或者不设',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'large',
                value: 'large',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置按钮类型',
            'en-US': 'type',
          },
          tip: '设置按钮类型，可选值为 primary dashed danger link 或者不设',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'primary',
                value: 'primary',
              },
              {
                title: 'dashed',
                value: 'dashed',
              },
              {
                title: 'danger',
                value: 'danger',
              },
              {
                title: 'link',
                value: 'link',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'block',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'block',
            'en-US': 'block',
          },
          tip: '将按钮宽度调整为其父宽度的选项',
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
          name: 'onClick',
          description: '点击按钮时的回调',
          template:
            "onClick(extParams) {\n  // 点击按钮时的回调\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '按钮',
      screenshot: './screenshots/button.webp',
      schema: {
        componentName: 'AButton',
        props: {},
        children: '按钮',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
