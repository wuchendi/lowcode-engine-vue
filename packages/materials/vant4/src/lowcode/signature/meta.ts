import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (signature); see https://vant-ui.github.io/vant/#/zh-CN/signature
const meta = {
  componentName: 'VanSignature',
  title: '签名',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/signature',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '导出图片类型',
            'en-US': 'type',
          },
          tip: '导出图片类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'png',
      },
      {
        name: 'penColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '笔触颜色',
            'en-US': 'penColor',
          },
          tip: '笔触颜色，默认黑色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#000',
      },
      {
        name: 'lineWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '线条宽度',
            'en-US': 'lineWidth',
          },
          tip: '线条宽度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 3,
      },
      {
        name: 'historySize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '撤销历史记录最大数量',
            'en-US': 'historySize',
          },
          tip: '撤销历史记录最大数量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 20,
      },
      {
        name: 'backgroundColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '背景颜色',
            'en-US': 'backgroundColor',
          },
          tip: '背景颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'tips',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tips',
            'en-US': 'tips',
          },
          tip: '当不支持 Canvas 的时候出现的提示文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'clearButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '清除按钮文案',
            'en-US': 'clearButtonText',
          },
          tip: '清除按钮文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'undoButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '撤销按钮文案',
            'en-US': 'undoButtonText',
          },
          tip: '撤销按钮文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'confirmButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮文案',
            'en-US': 'confirmButtonText',
          },
          tip: '确认按钮文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onStart',
          description: '开始签名时触发',
          template:
            "onStart(extParams) {\n  // 开始签名时触发\n  console.log('onStart', extParams)\n}",
        },
        {
          name: 'onEnd',
          description: '结束签名时触发',
          template:
            "onEnd(extParams) {\n  // 结束签名时触发\n  console.log('onEnd', extParams)\n}",
        },
        {
          name: 'onSigning',
          description: '签名过程中触发',
          template:
            "onSigning(extParams) {\n  // 签名过程中触发\n  console.log('onSigning', extParams)\n}",
        },
        {
          name: 'onSubmit',
          description: '点击确定按钮时触发',
          template:
            "onSubmit(extParams) {\n  // 点击确定按钮时触发\n  console.log('onSubmit', extParams)\n}",
        },
        {
          name: 'onClear',
          description: '点击取消按钮时触发',
          template:
            "onClear(extParams) {\n  // 点击取消按钮时触发\n  console.log('onClear', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '签名',
      screenshot: './screenshots/signature.webp',
      schema: {
        componentName: 'VanSignature',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
