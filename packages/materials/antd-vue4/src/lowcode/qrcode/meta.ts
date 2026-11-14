import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (qrcode); see https://antdv.com/components/qrcode-cn
const meta = {
  componentName: 'AQRCode',
  title: '二维码',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/qrcode-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '扫描后的地址',
            'en-US': 'value',
          },
          tip: '扫描后的地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '渲染类型',
            'en-US': 'type',
          },
          tip: '渲染类型',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'canvas',
                value: 'canvas',
              },
              {
                title: 'svg',
                value: 'svg',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'canvas',
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '二维码中图片的地址',
            'en-US': 'icon',
          },
          tip: '二维码中图片的地址（目前只支持图片地址）',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '二维码大小',
            'en-US': 'size',
          },
          tip: '二维码大小',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 160,
      },
      {
        name: 'iconSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '二维码中图片的大小',
            'en-US': 'iconSize',
          },
          tip: '二维码中图片的大小',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 40,
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '二维码颜色',
            'en-US': 'color',
          },
          tip: '二维码颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#000',
      },
      {
        name: 'bgColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '二维码背景颜色',
            'en-US': 'bgColor',
          },
          tip: '二维码背景颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: 'transparent',
      },
      {
        name: 'bordered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否有边框',
            'en-US': 'bordered',
          },
          tip: '是否有边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'errorLevel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '二维码纠错等级',
            'en-US': 'errorLevel',
          },
          tip: '二维码纠错等级',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'L',
                value: 'L',
              },
              {
                title: 'M',
                value: 'M',
              },
              {
                title: 'Q',
                value: 'Q',
              },
              {
                title: 'H',
                value: 'H',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'M',
      },
      {
        name: 'status',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '二维码状态',
            'en-US': 'status',
          },
          tip: '二维码状态',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'active',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onRefresh',
          description: '点击"点击刷新"的回调',
          template:
            'onRefresh(extParams) {\n  // 点击"点击刷新"的回调\n  console.log(\'onRefresh\', extParams)\n}',
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '二维码',
      screenshot: './screenshots/qrcode.webp',
      schema: {
        componentName: 'AQRCode',
        props: {
          value: '',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
