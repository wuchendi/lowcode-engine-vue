import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (pagination); see https://vant-ui.github.io/vant/v2/#/zh-CN/pagination
const meta = {
  componentName: 'VanPagination',
  title: '分页',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/pagination',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前页码',
            'en-US': 'v-model',
          },
          tip: '当前页码',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'mode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示模式',
            'en-US': 'mode',
          },
          tip: '显示模式，可选值为 simple',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'multi',
      },
      {
        name: 'prevText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '上一页按钮文字',
            'en-US': 'prevText',
          },
          tip: '上一页按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'nextText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下一页按钮文字',
            'en-US': 'nextText',
          },
          tip: '下一页按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'pageCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '总页数',
            'en-US': 'pageCount',
          },
          tip: '总页数',
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
      },
      {
        name: 'totalItems',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '总记录数',
            'en-US': 'totalItems',
          },
          tip: '总记录数',
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
        name: 'itemsPerPage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '每页记录数',
            'en-US': 'itemsPerPage',
          },
          tip: '每页记录数',
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
        defaultValue: '10',
      },
      {
        name: 'showPageSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示的页码个数',
            'en-US': 'showPageSize',
          },
          tip: '显示的页码个数',
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
        defaultValue: '5',
      },
      {
        name: 'forceEllipses',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示省略号',
            'en-US': 'forceEllipses',
          },
          tip: '是否显示省略号',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'pagev',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义页码',
            'en-US': 'pagev',
          },
          tip: '自定义页码',
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
        name: 'prev-textv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义上一页按钮文字',
            'en-US': 'prev-textv',
          },
          tip: '自定义上一页按钮文字',
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
        name: 'next-textv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义下一页按钮文字',
            'en-US': 'next-textv',
          },
          tip: '自定义下一页按钮文字',
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
          name: 'onChange',
          description: '页码改变时触发',
          template:
            "onChange(extParams) {\n  // 页码改变时触发\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '分页',
      screenshot: './screenshots/pagination.webp',
      schema: {
        componentName: 'VanPagination',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
