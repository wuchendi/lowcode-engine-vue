import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (pagination); see https://antdv.com/components/pagination-cn
const meta = {
  componentName: 'APagination',
  title: '分页',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://antdv.com/components/pagination-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:current',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前页数',
            'en-US': 'v-model:current',
          },
          tip: '当前页数',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'defaultPageSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认的每页条数',
            'en-US': 'defaultPageSize',
          },
          tip: '默认的每页条数',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 10,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁用分页',
            'en-US': 'disabled',
          },
          tip: '禁用分页',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'hideOnSinglePage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '只有一页时是否隐藏分页器',
            'en-US': 'hideOnSinglePage',
          },
          tip: '只有一页时是否隐藏分页器',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'itemRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '用于自定义页码的结构',
            'en-US': 'itemRender',
          },
          tip: '用于自定义页码的结构，可用于优化 SEO',
        },
        setter: [
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'v-model:pageSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '每页条数',
            'en-US': 'v-model:pageSize',
          },
          tip: '每页条数',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'pageSizeOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定每页可以显示多少条',
            'en-US': 'pageSizeOptions',
          },
          tip: '指定每页可以显示多少条',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'responsive',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当 size 未指定时',
            'en-US': 'responsive',
          },
          tip: '当 size 未指定时，根据屏幕宽度自动调整尺寸',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'showLessItems',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示较少页面内容',
            'en-US': 'showLessItems',
          },
          tip: '是否显示较少页面内容',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showQuickJumper',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可以快速跳转至某页',
            'en-US': 'showQuickJumper',
          },
          tip: '是否可以快速跳转至某页',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showSizeChanger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showSizeChanger',
            'en-US': 'showSizeChanger',
          },
          tip: '是否展示 pageSize 切换器，当 total 大于 50 时默认为 true',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'showTotal',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showTotal',
            'en-US': 'showTotal',
          },
          tip: '用于显示数据总量和当前数据顺序',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'simple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当添加该属性时',
            'en-US': 'simple',
          },
          tip: '当添加该属性时，显示为简单分页',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当为「small」时',
            'en-US': 'size',
          },
          tip: '当为「small」时，是小尺寸分页',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'total',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数据总数',
            'en-US': 'total',
          },
          tip: '数据总数',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description:
            '页码或 pageSize 改变的回调，参数是改变后的页码及每页条数',
          template:
            "onChange(extParams) {\n  // 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onShowSizeChange',
          description: 'pageSize 变化的回调',
          template:
            "onShowSizeChange(extParams) {\n  // pageSize 变化的回调\n  console.log('onShowSizeChange', extParams)\n}",
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
        componentName: 'APagination',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
