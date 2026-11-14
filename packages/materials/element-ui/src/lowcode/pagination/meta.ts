import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (pagination); see https://element.eleme.cn/#/zh-CN/component/pagination
const meta = {
  componentName: 'ElPagination',
  title: '分页',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/pagination',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'small',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使用小型分页样式',
            'en-US': 'small',
          },
          tip: '是否使用小型分页样式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'background',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为分页按钮添加背景色',
            'en-US': 'background',
          },
          tip: '是否为分页按钮添加背景色',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'pageSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '每页显示条目个数',
            'en-US': 'pageSize',
          },
          tip: '每页显示条目个数，支持 .sync 修饰符',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 10,
      },
      {
        name: 'total',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '总条目数',
            'en-US': 'total',
          },
          tip: '总条目数',
        },
        setter: 'NumberSetter',
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
          tip: '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'pagerCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '页码按钮的数量',
            'en-US': 'pagerCount',
          },
          tip: '页码按钮的数量，当总页数超过该值时会折叠',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 7,
      },
      {
        name: 'currentPage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前页数',
            'en-US': 'currentPage',
          },
          tip: '当前页数，支持 .sync 修饰符',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'layout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '组件布局',
            'en-US': 'layout',
          },
          tip: '组件布局，子组件名用逗号分隔',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'sizes',
                value: 'sizes',
              },
              {
                title: 'prev',
                value: 'prev',
              },
              {
                title: 'pager',
                value: 'pager',
              },
              {
                title: 'next',
                value: 'next',
              },
              {
                title: 'jumper',
                value: 'jumper',
              },
              {
                title: '->',
                value: '->',
              },
              {
                title: 'total',
                value: 'total',
              },
              {
                title: 'slot',
                value: 'slot',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'pageSizes',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '每页显示个数选择器的选项设置',
            'en-US': 'pageSizes',
          },
          tip: '每页显示个数选择器的选项设置',
        },
        setter: [
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
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperClass',
            'en-US': 'popperClass',
          },
          tip: '每页显示个数选择器的下拉框类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'prevText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '替代图标显示的上一页文字',
            'en-US': 'prevText',
          },
          tip: '替代图标显示的上一页文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'nextText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '替代图标显示的下一页文字',
            'en-US': 'nextText',
          },
          tip: '替代图标显示的下一页文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用',
            'en-US': 'disabled',
          },
          tip: '是否禁用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'hideOnSinglePage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '只有一页时是否隐藏',
            'en-US': 'hideOnSinglePage',
          },
          tip: '只有一页时是否隐藏',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onSize-change',
          description: 'pageSize 改变时会触发',
          template:
            "onSizeChange(extParams) {\n  // pageSize 改变时会触发\n  console.log('onSizeChange', extParams)\n}",
        },
        {
          name: 'onCurrent-change',
          description: 'currentPage 改变时会触发',
          template:
            "onCurrentChange(extParams) {\n  // currentPage 改变时会触发\n  console.log('onCurrentChange', extParams)\n}",
        },
        {
          name: 'onPrev-click',
          description: '用户点击上一页按钮改变当前页后触发',
          template:
            "onPrevClick(extParams) {\n  // 用户点击上一页按钮改变当前页后触发\n  console.log('onPrevClick', extParams)\n}",
        },
        {
          name: 'onNext-click',
          description: '用户点击下一页按钮改变当前页后触发',
          template:
            "onNextClick(extParams) {\n  // 用户点击下一页按钮改变当前页后触发\n  console.log('onNextClick', extParams)\n}",
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
        componentName: 'ElPagination',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
