import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (alert); see https://element.eleme.cn/#/zh-CN/component/alert
const meta = {
  componentName: 'ElAlert',
  title: '警告',
  group: 'Element 组件',
  category: '反馈组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/alert',
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
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '主题',
            'en-US': 'type',
          },
          tip: '主题',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
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
            'zh-CN': '辅助性文字',
            'en-US': 'description',
          },
          tip: '辅助性文字。也可通过默认 slot 传入',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'closable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可关闭',
            'en-US': 'closable',
          },
          tip: '是否可关闭',
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
            'zh-CN': '文字是否居中',
            'en-US': 'center',
          },
          tip: '文字是否居中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'closeText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭按钮自定义文本',
            'en-US': 'closeText',
          },
          tip: '关闭按钮自定义文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示图标',
            'en-US': 'showIcon',
          },
          tip: '是否显示图标',
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
            'zh-CN': '选择提供的主题',
            'en-US': 'effect',
          },
          tip: '选择提供的主题',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClose',
          description: '关闭alert时触发的事件',
          template:
            "onClose(extParams) {\n  // 关闭alert时触发的事件\n  console.log('onClose', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '警告',
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
