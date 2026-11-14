import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (tag); see https://element-plus.org/zh-CN/component/tag.html
const meta = {
  componentName: 'ElCheckTag',
  title: '标签 CheckTag',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/tag.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:checked',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否选中',
            'en-US': 'v-model:checked',
          },
          tip: '是否选中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabled',
            'en-US': 'disabled',
          },
          tip: 'whether the check-tag is disabled',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'type',
            'en-US': 'type',
          },
          tip: 'type of CheckTag',
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
                title: 'info',
                value: 'info',
              },
              {
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'danger',
                value: 'danger',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'primary',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(event, extParams) {\n  console.log('onClick', event)\n}",
        },
        {
          name: 'onChange',
          description: '点击 Check Tag 时触发的事件',
          template:
            "onChange(...args, extParams) {\n  // 点击 Check Tag 时触发的事件\n  console.log('onChange', ...args)\n}",
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
      title: '标签 CheckTag',
      screenshot: './screenshots/check-tag.webp',
      schema: {
        componentName: 'ElCheckTag',
        props: {},
        children: '标签',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
