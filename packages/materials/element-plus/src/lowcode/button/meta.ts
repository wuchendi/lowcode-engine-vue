import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (button); see https://element-plus.org/zh-CN/component/button.html
const meta = {
  componentName: 'ElButton',
  title: '按钮',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/button.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '尺寸',
            'en-US': 'size',
          },
          tip: '尺寸',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'large',
                value: 'large',
              },
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'small',
                value: 'small',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮类型',
            'en-US': 'type',
          },
          tip: '按钮类型，在设置color时，后者优先。',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'primary',
                value: 'primary',
              },
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'danger',
                value: 'danger',
              },
              {
                title: 'info',
                value: 'info',
              },
              {
                title: 'text',
                value: 'text',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'plain',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为朴素按钮',
            'en-US': 'plain',
          },
          tip: '是否为朴素按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'text',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'text',
            'en-US': 'text',
          },
          tip: "determine whether it's a text button",
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'bg',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'bg',
            'en-US': 'bg',
          },
          tip: 'determine whether the text button background color is always on',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'link',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'link',
            'en-US': 'link',
          },
          tip: "determine whether it's a link button",
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'round',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为圆角按钮',
            'en-US': 'round',
          },
          tip: '是否为圆角按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'circle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为圆形按钮',
            'en-US': 'circle',
          },
          tip: '是否为圆形按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'dashed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'dashed',
            'en-US': 'dashed',
          },
          tip: "determine whether it's a dashed button",
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
            'zh-CN': '是否为加载中状态',
            'en-US': 'loading',
          },
          tip: '是否为加载中状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loadingIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义加载中状态图标组件',
            'en-US': 'loadingIcon',
          },
          tip: '自定义加载中状态图标组件',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'Loading',
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮是否为禁用状态',
            'en-US': 'disabled',
          },
          tip: '按钮是否为禁用状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标组件',
            'en-US': 'icon',
          },
          tip: '图标组件',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'autofocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'autofocus',
            'en-US': 'autofocus',
          },
          tip: '原生 autofocus 属性',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'nativeType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生 type 属性',
            'en-US': 'nativeType',
          },
          tip: '原生 type 属性',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'button',
                value: 'button',
              },
              {
                title: 'submit',
                value: 'submit',
              },
              {
                title: 'reset',
                value: 'reset',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'button',
      },
      {
        name: 'autoInsertSpace',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '两个中文字符之间自动插入空格',
            'en-US': 'autoInsertSpace',
          },
          tip: '两个中文字符之间自动插入空格(仅当文本长度为 2 且所有字符均为中文时才生效)',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义按钮颜色',
            'en-US': 'color',
          },
          tip: '自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色自 2.13.7 起，支持 link/text 按钮。',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'dark',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'dark 模式',
            'en-US': 'dark',
          },
          tip: 'dark 模式, 意味着自动设置 color 为 dark 模式的颜色',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tag',
            'en-US': 'tag',
          },
          tip: 'custom element tag',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'button',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(event, extParams) {\n  console.log('onClick', event)\n}",
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
        componentName: 'ElButton',
        props: {},
        children: '按钮',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
