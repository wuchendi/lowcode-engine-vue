import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (icon); see https://1x.antdv.com/components/icon-cn/
const meta = {
  componentName: 'AIcon',
  title: '图标 Icon',
  group: 'Ant Design 组件',
  category: '通用',
  docUrl: 'https://1x.antdv.com/components/icon-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标类型',
            'en-US': 'type',
          },
          tip: '图标类型。遵循图标的命名规范',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'theme',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标主题风格',
            'en-US': 'theme',
          },
          tip: '图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'filled',
                value: 'filled',
              },
              {
                title: 'outlined',
                value: 'outlined',
              },
              {
                title: 'twoTone',
                value: 'twoTone',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'outlined',
      },
      {
        name: 'spin',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否有旋转动画',
            'en-US': 'spin',
          },
          tip: '是否有旋转动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'rotate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标旋转角度',
            'en-US': 'rotate',
          },
          tip: '图标旋转角度（1.4.0 后新增，IE9 无效）',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'component',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制如何渲染图标',
            'en-US': 'component',
          },
          tip: '控制如何渲染图标，通常是一个渲染根标签为  的 Vue 组件，会使 type 属性失效',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'twoToneColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '仅适用双色图标',
            'en-US': 'twoToneColor',
          },
          tip: '仅适用双色图标。设置双色图标的主要颜色',
        },
        setter: 'ColorSetter',
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
      title: '图标 Icon',
      screenshot: './screenshots/icon.webp',
      schema: {
        componentName: 'AIcon',
        props: {
          type: 'smile',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
