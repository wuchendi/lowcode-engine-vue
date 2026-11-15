import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (popconfirm); see https://element-plus.org/zh-CN/component/popconfirm.html
const meta = {
  componentName: 'ElPopconfirm',
  title: '气泡确认框',
  group: 'Element 组件',
  category: '反馈组件',
  docUrl: 'https://element-plus.org/zh-CN/component/popconfirm.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题',
            'en-US': 'title',
          },
          tip: '标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'effect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'effect',
            'en-US': 'effect',
          },
          tip: 'Tooltip theme, built-in theme: dark / light',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'light',
                value: 'light',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'light',
      },
      {
        name: 'confirmButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮文字',
            'en-US': 'confirmButtonText',
          },
          tip: '确认按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'cancelButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '取消按钮文字',
            'en-US': 'cancelButtonText',
          },
          tip: '取消按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'confirmButtonType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮类型',
            'en-US': 'confirmButtonType',
          },
          tip: '确认按钮类型',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
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
        defaultValue: 'primary',
      },
      {
        name: 'cancelButtonType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '取消按钮类型',
            'en-US': 'cancelButtonType',
          },
          tip: '取消按钮类型',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
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
        defaultValue: 'text',
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义图标',
            'en-US': 'icon',
          },
          tip: '自定义图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'QuestionFilled',
      },
      {
        name: 'iconColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Icon 颜色',
            'en-US': 'iconColor',
          },
          tip: 'Icon 颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#f90',
      },
      {
        name: 'hideIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否隐藏 Icon',
            'en-US': 'hideIcon',
          },
          tip: '是否隐藏 Icon',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'hideAfter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭时的延迟',
            'en-US': 'hideAfter',
          },
          tip: '关闭时的延迟',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 200,
      },
      {
        name: 'teleported',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'teleported',
            'en-US': 'teleported',
          },
          tip: '是否将 popover 的下拉列表插入至 body 元素',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'persistent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'persistent',
            'en-US': 'persistent',
          },
          tip: '当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹层宽度',
            'en-US': 'width',
          },
          tip: '弹层宽度，最小宽度 150px',
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
        defaultValue: '150',
      },
      {
        name: 'reference',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'reference',
            'en-US': 'reference',
          },
          tip: '触发 Popconfirm 显示的 HTML 元素',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'actions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'actions',
            'en-US': 'actions',
          },
          tip: 'content of the Popconfirm footer',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onConfirm',
          description: '点击确认按钮时触发',
          template:
            "onConfirm(...args, extParams) {\n  // 点击确认按钮时触发\n  console.log('onConfirm', ...args)\n}",
        },
        {
          name: 'onCancel',
          description: '点击取消按钮时触发',
          template:
            "onCancel(...args, extParams) {\n  // 点击取消按钮时触发\n  console.log('onCancel', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '气泡确认框',
      screenshot: './screenshots/popconfirm.webp',
      schema: {
        componentName: 'ElPopconfirm',
        props: {
          title: '标题',
          content: '内容',
          reference: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'ElButton',
                props: {},
                children: '气泡确认框',
              },
            ],
          },
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
