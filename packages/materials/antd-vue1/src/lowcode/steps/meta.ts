import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (steps); see https://1x.antdv.com/components/steps-cn/
const meta = {
  componentName: 'ASteps',
  title: '步骤条',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://1x.antdv.com/components/steps-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '步骤条类型',
            'en-US': 'type',
          },
          tip: '步骤条类型，有 default 和 navigation 两种',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定当前步骤',
            'en-US': 'v-model',
          },
          tip: '指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态, 1.5.0 后支持 v-model',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定步骤条方向',
            'en-US': 'direction',
          },
          tip: '指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'labelPlacement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定标签放置位置',
            'en-US': 'labelPlacement',
          },
          tip: '指定标签放置位置，默认水平放图标右侧，可选vertical放图标下方',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'progressDot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点状步骤条',
            'en-US': 'progressDot',
          },
          tip: '点状步骤条，可以设置为一个 作用域插槽,labelPlacement 将强制为vertical',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定大小',
            'en-US': 'size',
          },
          tip: '指定大小，目前支持普通（default）和迷你（small）',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'status',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定当前步骤的状态',
            'en-US': 'status',
          },
          tip: '指定当前步骤的状态，可选 wait process finish error',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'process',
      },
      {
        name: 'initial',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '起始序号',
            'en-US': 'initial',
          },
          tip: '起始序号，从 0 开始记数',
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
          description: '点击切换步骤时触发',
          template:
            "onChange(extParams) {\n  // 点击切换步骤时触发\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '步骤条',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ASteps',
        props: {
          current: 1,
        },
        children: [
          {
            componentName: 'AStepsStep',
            props: {
              title: '步骤一',
            },
          },
          {
            componentName: 'AStepsStep',
            props: {
              title: '步骤二',
            },
          },
          {
            componentName: 'AStepsStep',
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
