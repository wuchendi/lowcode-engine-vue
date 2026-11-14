import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (slider); see https://element-plus.org/zh-CN/component/slider.html
const meta = {
  componentName: 'ElSlider',
  title: '滑块',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/slider.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model',
            'en-US': 'v-model',
          },
          tip: 'binding value',
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
        defaultValue: 0,
      },
      {
        name: 'min',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'min',
            'en-US': 'min',
          },
          tip: 'minimum value',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'max',
            'en-US': 'max',
          },
          tip: 'maximum value',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 100,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabled',
            'en-US': 'disabled',
          },
          tip: 'whether Slider is disabled',
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
            'zh-CN': 'step',
            'en-US': 'step',
          },
          tip: "step size, can be a number or 'mark' ^(2.13.6) to restrict values to marks. When set to 'mark', the marks attribute must be set",
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
        defaultValue: '1',
      },
      {
        name: 'showInput',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showInput',
            'en-US': 'showInput',
          },
          tip: "whether to display an input box, works when range is false and step is not 'mark'",
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showInputControls',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showInputControls',
            'en-US': 'showInputControls',
          },
          tip: 'whether to display control buttons when show-input is true',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'size',
            'en-US': 'size',
          },
          tip: 'size of the slider wrapper, will not work in vertical mode',
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
        name: 'inputSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'inputSize',
            'en-US': 'inputSize',
          },
          tip: 'size of the input box, when set size, the default is the value of size',
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
        name: 'showStops',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showStops',
            'en-US': 'showStops',
          },
          tip: 'whether to display breakpoints',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showTooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showTooltip',
            'en-US': 'showTooltip',
          },
          tip: 'whether to display tooltip value',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'formatTooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'formatTooltip',
            'en-US': 'formatTooltip',
          },
          tip: 'format to display tooltip value',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'range',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'range',
            'en-US': 'range',
          },
          tip: 'whether to select a range',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'vertical',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'vertical',
            'en-US': 'vertical',
          },
          tip: 'vertical mode',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'height',
            'en-US': 'height',
          },
          tip: 'slider height, required in vertical mode',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'ariaLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ariaLabel',
            'en-US': 'ariaLabel',
          },
          tip: 'native aria-label attribute',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'rangeStartLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rangeStartLabel',
            'en-US': 'rangeStartLabel',
          },
          tip: 'when range is true, screen reader label for the start of the range',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'rangeEndLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rangeEndLabel',
            'en-US': 'rangeEndLabel',
          },
          tip: 'when range is true, screen reader label for the end of the range',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'formatValueText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'formatValueText',
            'en-US': 'formatValueText',
          },
          tip: 'format to display the aria-valuenow attribute for screen readers',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'tooltipClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tooltipClass',
            'en-US': 'tooltipClass',
          },
          tip: 'custom class name for the tooltip',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'placement',
            'en-US': 'placement',
          },
          tip: 'position of Tooltip',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'top',
                value: 'top',
              },
              {
                title: 'top-start',
                value: 'top-start',
              },
              {
                title: 'top-end',
                value: 'top-end',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
              {
                title: 'bottom-start',
                value: 'bottom-start',
              },
              {
                title: 'bottom-end',
                value: 'bottom-end',
              },
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'left-start',
                value: 'left-start',
              },
              {
                title: 'left-end',
                value: 'left-end',
              },
              {
                title: 'right',
                value: 'right',
              },
              {
                title: 'right-start',
                value: 'right-start',
              },
              {
                title: 'right-end',
                value: 'right-end',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'top',
      },
      {
        name: 'marks',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'marks',
            'en-US': 'marks',
          },
          tip: 'marks, type of key must be number and must in closed interval [min, max], each mark can custom style',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'validateEvent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'validateEvent',
            'en-US': 'validateEvent',
          },
          tip: 'whether to trigger form validation',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'persistent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'persistent',
            'en-US': 'persistent',
          },
          tip: 'when slider tooltip inactive and persistent is false , tooltip will be destroyed. persistent always be false when show-tooltip  is false',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description:
            'triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released)',
          template:
            "onChange(...args, extParams) {\n  // triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released)\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onInput',
          description:
            "triggers when the data changes (It'll be emitted in real time during sliding)",
          template:
            "onInput(...args, extParams) {\n  // triggers when the data changes (It'll be emitted in real time during sliding)\n  console.log('onInput', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '滑块',
      screenshot: './screenshots/slider.webp',
      schema: {
        componentName: 'ElSlider',
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
