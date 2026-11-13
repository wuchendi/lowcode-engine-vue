import type { ComponentMetadata } from '@alilc/lowcode-types'

type TypeProps =
  | 'datetime'
  | 'date'
  | 'time'
  | 'year-month'
  | 'month-day'
  | 'datehour'

const meta: ComponentMetadata = {
  category: 'Vant 组件',
  componentName: 'van-datetime-picker',
  docUrl: 'https://vant-contrib.gitee.io/vant/v2/#/zh-CN/datetime-picker',
  npm: {
    package: 'vant',
    version: '2.12.53',
    exportName: 'DatetimePicker',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'type',
        title: '日历类型',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'datetime',
                value: 'datetime',
              },
              {
                title: 'date',
                value: 'date',
              },
              {
                title: 'time',
                value: 'time',
              },
              {
                title: 'year-month',
                value: 'year-month',
              },
              {
                title: 'month-day',
                value: 'month-day',
              },
              {
                title: 'datehour',
                value: 'datehour',
              },
            ],
          },
        },
        defaultValue: 'datetime',
      },
      {
        name: 'DatePicker Props',
        title: {
          label: '日期区间配置',
          tip: '只在范围选择下有效',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'min-date',
            title: {
              label: '最小可选时间',
              tip: '最小可选时间',
            },
            setter: 'DatePickerValueSetter',
            // 十年前
            defaultValue: new Date(new Date().getFullYear() - 10, 0, 1),
          },
          {
            name: 'max-date',
            title: {
              label: '最大可选时间',
              tip: '最大可选时间',
            },
            setter: 'DatePickerValueSetter',
            // 十年后
            defaultValue: new Date(new Date().getFullYear() + 10, 11, 31),
          },
        ],
        condition(target) {
          const propValue = target
            .getProps?.()
            .getPropValue('type') as TypeProps
          return ['datetime', 'date'].includes(propValue)
        },
      },
      {
        name: 'TimePicker Props',
        title: {
          label: '日期区间配置',
          tip: '只在范围选择下有效',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'minHour',
            title: {
              label: '可选的最小小时',
              tip: '可选的最小小时',
            },
            setter: [
              {
                componentName: 'NumberSetter',
              },
              {
                componentName: 'StringSetter',
              },
            ],
            defaultValue: 0,
          },
          {
            name: 'maxHour',
            title: {
              label: '可选的最大小时',
              tip: '可选的最大小时',
            },
            setter: [
              {
                componentName: 'NumberSetter',
              },
              {
                componentName: 'StringSetter',
              },
            ],
            defaultValue: 23,
          },
          {
            name: 'minMinute',
            title: {
              label: '可选的最小分钟',
              tip: '可选的最小分钟',
            },
            setter: [
              {
                componentName: 'NumberSetter',
              },
              {
                componentName: 'StringSetter',
              },
            ],
            defaultValue: 0,
          },
          {
            name: 'maxMinute',
            title: {
              label: '可选的最大分钟',
              tip: '可选的最大分钟',
            },
            setter: [
              {
                componentName: 'NumberSetter',
              },
              {
                componentName: 'StringSetter',
              },
            ],
            defaultValue: 59,
          },
        ],
        condition(target) {
          return !!(
            (target.getProps?.().getPropValue('type') as TypeProps) === 'time'
          )
        },
      },
      {
        name: 'title',
        title: '顶部栏标题',
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              title: '',
              value: [],
            },
          },
        ],
        defaultValue: '顶部栏标题',
      },
      {
        name: 'confirmButtonText',
        title: '确认按钮文字',
        setter: 'StringSetter',
        defaultValue: '确认',
      },
      {
        name: 'cancelButtonText',
        title: '取消按钮文字',
        setter: 'StringSetter',
        defaultValue: '取消',
      },
      {
        name: 'showToolbar',
        title: '是否显示顶部栏',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'loading',
        title: '是否显示加载状态',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'readonly',
        title: '是否为只读状态，只读状态下无法切换选项',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'filter',
        title: '选项过滤函数',
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'function beforeFilter(type, value, ${extParams}) {\n  return value;\n}\n',
          },
        },
      },
      {
        name: 'formatter',
        title: '选项格式化函数',
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'function beforeFilter(type, value, ${extParams}) {\n  return value;\n}\n',
          },
        },
      },
      {
        name: 'columnsOrder',
        title: '对象数组，配置每一列显示的数据',
        setter: 'JsonSetter',
        // setter: {
        //   componentName: 'ArraySetter',
        //   props: {
        //     itemSetter: {
        //       componentName: 'StringSetter',
        //       props: {},
        //     },
        //   },
        // },
      },
      // {
      //   name: 'columnsOrder',
      //   title: '对象数组，配置每一列显示的数据',
      //   propType: {
      //     type: 'arrayOf',
      //     value: 'string',
      //   },
      // },
      {
        name: 'itemHeight',
        title: '选项高度，支持 px vw vh rem 单位，默认 px',
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        defaultValue: '44px',
      },
      {
        name: 'visibleItemCount',
        title: '可见的选项个数',
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        defaultValue: 6,
      },
      {
        name: 'swipeDuration',
        title: '快速滑动时惯性滚动的时长，单位ms',
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        defaultValue: 1000,
      },
      {
        name: 'default',
        title: '自定义整个顶部栏的内容',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'confirm',
        title: '自定义确认按钮内容',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'cancel',
        title: '自定义取消按钮内容',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'option',
        title: '自定义选项内容',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'columns-top',
        title: '自定义选项上方内容',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'columns-bottom',
        title: '自定义选项下方内容',
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
      events: ['onChange', 'onConfirm', 'onCancel'],
      loop: true,
      condition: true,
      style: true,
    },
  },
  snippets: [
    {
      title: '时间选择',
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_time-picker.png',
      schema: {
        componentName: 'van-datetime-picker',
        props: {
          type: 'datetime',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showToolbar: true,
          itemHeight: 44,
          visibleItemCount: 6,
          swipeDuration: 1000,
        },
      },
    },
  ],
}

export default meta
