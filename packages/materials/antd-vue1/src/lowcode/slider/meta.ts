import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (slider); see https://1x.antdv.com/components/slider-cn/
const meta = {
  componentName: 'ASlider',
  title: '滑动输入条',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/slider-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置初始取值',
            'en-US': 'defaultValue',
          },
          tip: '设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '值为 true 时',
            'en-US': 'disabled',
          },
          tip: '值为 true 时，滑块为禁用状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'dots',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否只能拖拽到刻度上',
            'en-US': 'dots',
          },
          tip: '是否只能拖拽到刻度上',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'included',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'marks 不为空对象时有效',
            'en-US': 'included',
          },
          tip: 'marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'marks',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '刻度标记',
            'en-US': 'marks',
          },
          tip: '刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最大值',
            'en-US': 'max',
          },
          tip: '最大值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 100,
      },
      {
        name: 'min',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最小值',
            'en-US': 'min',
          },
          tip: '最小值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'range',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '双滑块模式',
            'en-US': 'range',
          },
          tip: '双滑块模式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'reverse',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '反向坐标轴',
            'en-US': 'reverse',
          },
          tip: '反向坐标轴',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'step',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '步长',
            'en-US': 'step',
          },
          tip: '步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'tipFormatter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tipFormatter',
            'en-US': 'tipFormatter',
          },
          tip: 'Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip。',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
        defaultValue: 'IDENTITY',
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置当前取值',
            'en-US': 'v-model',
          },
          tip: '设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]',
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
        name: 'vertical',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '值为 true 时',
            'en-US': 'vertical',
          },
          tip: '值为 true 时，Slider 为垂直方向',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'tooltipPlacement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tooltipPlacement',
            'en-US': 'tooltipPlacement',
          },
          tip: '设置 Tooltip 展示位置。参考 Tooltip。',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'tooltipVisible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '值为true时',
            'en-US': 'tooltipVisible',
          },
          tip: '值为true时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'getTooltipPopupContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tooltip 渲染父节点',
            'en-US': 'getTooltipPopupContainer',
          },
          tip: 'Tooltip 渲染父节点，默认渲染到 body 上。',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onAfterChange',
          description: '与 mouseup 触发时机一致，把当前值作为参数传入。',
          template:
            "onAfterChange(extParams) {\n  // 与 mouseup 触发时机一致，把当前值作为参数传入。\n  console.log('onAfterChange', extParams)\n}",
        },
        {
          name: 'onChange',
          description:
            '当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入。',
          template:
            "onChange(extParams) {\n  // 当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入。\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '滑动输入条',
      screenshot: './screenshots/slider.webp',
      schema: {
        componentName: 'ASlider',
        props: {
          style: {
            width: '200px',
          },
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
