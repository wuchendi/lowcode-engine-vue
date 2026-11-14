import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (popconfirm); see https://element.eleme.cn/#/zh-CN/component/popconfirm
const meta = {
  componentName: 'ElPopconfirm',
  title: '气泡确认框',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/popconfirm',
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
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'Primary',
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
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'Text',
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'icon',
            'en-US': 'icon',
          },
          tip: 'Icon',
        },
        setter: 'CIconSetter',
        supportVariable: true,
        defaultValue: 'el-icon-question',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onConfirm',
          description: '点击确认按钮时触发',
          template:
            "onConfirm(extParams) {\n  // 点击确认按钮时触发\n  console.log('onConfirm', extParams)\n}",
        },
        {
          name: 'onCancel',
          description: '点击取消按钮时触发',
          template:
            "onCancel(extParams) {\n  // 点击取消按钮时触发\n  console.log('onCancel', extParams)\n}",
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
