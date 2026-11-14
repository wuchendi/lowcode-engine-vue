import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (pagination); see https://element-plus.org/zh-CN/component/pagination.html
const meta = {
  componentName: 'ElPagination',
  title: '分页',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/pagination.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'size',
            'en-US': 'size',
          },
          tip: 'pagination size',
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
        defaultValue: 'default',
      },
      {
        name: 'background',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'background',
            'en-US': 'background',
          },
          tip: 'whether the buttons have a background color',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'v-model:page-size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model:page-size',
            'en-US': 'v-model:page-size',
          },
          tip: 'item count of each page',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'defaultPageSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultPageSize',
            'en-US': 'defaultPageSize',
          },
          tip: 'default initial value of page size, not setting is the same as setting 10',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'total',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'total',
            'en-US': 'total',
          },
          tip: 'total item count',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'pageCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'pageCount',
            'en-US': 'pageCount',
          },
          tip: 'total page count. Set either total or page-count and pages will be displayed; if you need page-sizes, total is required',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'pagerCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'pagerCount',
            'en-US': 'pagerCount',
          },
          tip: 'number of pagers. Pagination collapses when the total page count exceeds this value',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 7,
      },
      {
        name: 'v-model:current-page',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model:current-page',
            'en-US': 'v-model:current-page',
          },
          tip: 'current page number',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'defaultCurrentPage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultCurrentPage',
            'en-US': 'defaultCurrentPage',
          },
          tip: 'default initial value of current-page, not setting is the same as setting 1',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'layout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'layout',
            'en-US': 'layout',
          },
          tip: 'layout of Pagination, elements separated with a comma',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'pageSizes',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'pageSizes',
            'en-US': 'pageSizes',
          },
          tip: 'options of item count per page',
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
        name: 'appendSizeTo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'appendSizeTo',
            'en-US': 'appendSizeTo',
          },
          tip: 'which element the size dropdown appends to',
        },
        setter: 'StringSetter',
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
          tip: "custom class name for the page size Select's dropdown",
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popperStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperStyle',
            'en-US': 'popperStyle',
          },
          tip: "custom style for the page size Select's dropdown",
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'prevText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'prevText',
            'en-US': 'prevText',
          },
          tip: 'text for the prev button',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'prevIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'prevIcon',
            'en-US': 'prevIcon',
          },
          tip: 'icon for the prev button, has a lower priority than prev-text',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'ArrowLeft',
      },
      {
        name: 'nextText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'nextText',
            'en-US': 'nextText',
          },
          tip: 'text for the next button',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'nextIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'nextIcon',
            'en-US': 'nextIcon',
          },
          tip: 'icon for the next button, has a lower priority than next-text',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'ArrowRight',
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabled',
            'en-US': 'disabled',
          },
          tip: 'whether Pagination is disabled',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'teleported',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'teleported',
            'en-US': 'teleported',
          },
          tip: 'whether Pagination select dropdown is teleported to the body',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'hideOnSinglePage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'hideOnSinglePage',
            'en-US': 'hideOnSinglePage',
          },
          tip: "whether to hide when there's only one page",
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onSizeChange',
          description: 'triggers when page-size changes',
          template:
            "onSizeChange(...args, extParams) {\n  // triggers when page-size changes\n  console.log('onSizeChange', ...args)\n}",
        },
        {
          name: 'onCurrentChange',
          description: 'triggers when current-page changes',
          template:
            "onCurrentChange(...args, extParams) {\n  // triggers when current-page changes\n  console.log('onCurrentChange', ...args)\n}",
        },
        {
          name: 'onChange',
          description: 'triggers when current-page or page-size changes',
          template:
            "onChange(...args, extParams) {\n  // triggers when current-page or page-size changes\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onPrevClick',
          description:
            'triggers when the prev button is clicked and current page changes',
          template:
            "onPrevClick(...args, extParams) {\n  // triggers when the prev button is clicked and current page changes\n  console.log('onPrevClick', ...args)\n}",
        },
        {
          name: 'onNextClick',
          description:
            'triggers when the next button is clicked and current page changes',
          template:
            "onNextClick(...args, extParams) {\n  // triggers when the next button is clicked and current page changes\n  console.log('onNextClick', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '分页',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElPagination',
        props: {},
        children: '分页',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
