import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (alert); see https://element-plus.org/zh-CN/component/alert.html
const meta = {
  componentName: 'ElAlert',
  title: '提示',
  group: 'Element 组件',
  category: '反馈组件',
  docUrl: 'https://element-plus.org/zh-CN/component/alert.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'title',
            'en-US': 'title',
          },
          tip: 'alert title.',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'type',
            'en-US': 'type',
          },
          tip: 'alert type.',
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
                title: 'info',
                value: 'info',
              },
              {
                title: 'error',
                value: 'error',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'info',
      },
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'description',
            'en-US': 'description',
          },
          tip: 'descriptive text.',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'closable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closable',
            'en-US': 'closable',
          },
          tip: 'whether alert can be dismissed.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'center',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'center',
            'en-US': 'center',
          },
          tip: 'whether content is placed in the center.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'closeText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeText',
            'en-US': 'closeText',
          },
          tip: 'customized close button text.',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showIcon',
            'en-US': 'showIcon',
          },
          tip: 'whether a type icon is displayed.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'effect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'effect',
            'en-US': 'effect',
          },
          tip: 'theme style.',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'light',
                value: 'light',
              },
              {
                title: 'dark',
                value: 'dark',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'light',
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'icon',
            'en-US': 'icon',
          },
          tip: 'content of the alert icon.',
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
          name: 'onClose',
          description: '关闭 Alert 时触发的事件',
          template:
            "onClose(...args, extParams) {\n  // 关闭 Alert 时触发的事件\n  console.log('onClose', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '提示',
      screenshot: './screenshots/alert.webp',
      schema: {
        componentName: 'ElAlert',
        props: {
          title: '提示信息',
          type: 'info',
        },
        children: '说明文字',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
