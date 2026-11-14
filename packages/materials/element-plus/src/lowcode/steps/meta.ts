import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (steps); see https://element-plus.org/zh-CN/component/steps.html
const meta = {
  componentName: 'ElSteps',
  title: '步骤条',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/steps.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'space',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '每个 step 的间距',
            'en-US': 'space',
          },
          tip: '每个 step 的间距，不填写将自适应间距。支持百分比。',
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
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示方向',
            'en-US': 'direction',
          },
          tip: '显示方向',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'vertical',
                value: 'vertical',
              },
              {
                title: 'horizontal',
                value: 'horizontal',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'active',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置当前激活步骤',
            'en-US': 'active',
          },
          tip: '设置当前激活步骤',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'processStatus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置当前步骤的状态',
            'en-US': 'processStatus',
          },
          tip: '设置当前步骤的状态',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'wait',
                value: 'wait',
              },
              {
                title: 'process',
                value: 'process',
              },
              {
                title: 'finish',
                value: 'finish',
              },
              {
                title: 'error',
                value: 'error',
              },
              {
                title: 'success',
                value: 'success',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'process',
      },
      {
        name: 'finishStatus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置结束步骤的状态',
            'en-US': 'finishStatus',
          },
          tip: '设置结束步骤的状态',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'wait',
                value: 'wait',
              },
              {
                title: 'process',
                value: 'process',
              },
              {
                title: 'finish',
                value: 'finish',
              },
              {
                title: 'error',
                value: 'error',
              },
              {
                title: 'success',
                value: 'success',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'finish',
      },
      {
        name: 'alignCenter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进行居中对齐',
            'en-US': 'alignCenter',
          },
          tip: '进行居中对齐',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'simple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否应用简洁风格',
            'en-US': 'simple',
          },
          tip: '是否应用简洁风格',
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
          name: 'onChange',
          description: '当活动步骤发生变化时触发',
          template:
            "onChange(extParams) {\n  // 当活动步骤发生变化时触发\n  console.log('onChange', extParams)\n}",
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
      title: '步骤条',
      screenshot: './screenshots/steps.webp',
      schema: {
        componentName: 'ElSteps',
        props: {
          active: 1,
        },
        children: [
          {
            componentName: 'ElStep',
            props: {
              title: '步骤一',
            },
          },
          {
            componentName: 'ElStep',
            props: {
              title: '步骤二',
            },
          },
          {
            componentName: 'ElStep',
            props: {
              title: '步骤三',
            },
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
