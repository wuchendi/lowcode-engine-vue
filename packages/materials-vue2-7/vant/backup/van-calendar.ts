import type { ComponentMetadata } from '@alilc/lowcode-types'

type TypeProps = 'single' | 'multiple' | 'range'

const meta: ComponentMetadata = {
  category: 'Vant 组件',
  componentName: 'van-calendar',
  docUrl: 'https://vant-contrib.gitee.io/vant/v2/#/zh-CN/calendar',
  npm: {
    package: 'vant',
    version: '2.12.53',
    exportName: 'Calendar',
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
                title: '单日选择',
                value: 'single',
              },
              {
                title: '多日选择',
                value: 'multiple',
              },
              {
                title: '范围选择',
                value: 'range',
              },
            ],
          },
        },
        defaultValue: 'single',
      },
      {
        name: 'Range Props',
        title: {
          label: '日期区间配置',
          tip: '只在范围选择下有效',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'maxRange',
            title: '最大可选天数',
            setter: [
              {
                componentName: 'NumberSetter',
              },
              {
                componentName: 'StringSetter',
              },
            ],
          },
          {
            name: 'rangePrompt',
            title: '范围选择提示文案',
            setter: 'StringSetter',
          },
          {
            name: 'allowSameDay',
            title: '是否允许日期范围的起止时间为同一天',
            setter: 'BoolSetter',
            defaultValue: false,
          },
        ],
        condition(target) {
          return !!(
            (target.getProps?.().getPropValue('type') as TypeProps) === 'range'
          )
        },
      },
      {
        name: 'Multiple Props',
        title: {
          label: '多日选择配置',
          tip: '只在范围选择下有效',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'maxRange',
            title: '最大可选天数',
            setter: [
              {
                componentName: 'NumberSetter',
              },
              {
                componentName: 'StringSetter',
              },
            ],
          },
          {
            name: 'rangePrompt',
            title: '范围选择提示文案',
            setter: 'StringSetter',
          },
        ],
        condition(target) {
          return !!(
            (target.getProps?.().getPropValue('type') as TypeProps) ===
            'multiple'
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
      },
      {
        name: 'color',
        title: '主题色',
        setter: 'ColorSetter',
      },
      {
        name: 'minDate',
        title: '可选日期最小值',
        setter: 'DatePickerValueSetter',
      },
      {
        name: 'maxDate',
        title: '可选日期最大值',
        setter: 'DatePickerValueSetter',
        /**
         * TODO: 添加会卡度，不加默认为单前时间，待处理
         */
        defaultValue: new Date(new Date().setMonth(new Date().getMonth() + 6)),
      },
      {
        name: 'defaultDate',
        title: '默认选中日期',
        // Date | Date[] | null
        setter: 'DatePickerValueSetter',
      },
      {
        name: 'rowHeight',
        title: '日期行高',
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'StringSetter',
          },
        ],
      },
      {
        name: 'formatter',
        title: '日期格式化函数',
        setter: 'FunctionSetter',
      },
      {
        name: 'poppable',
        title: '是否以弹层的形式展示日历',
        setter: 'BoolSetter',
        defaultValue: true,
        extraProps: {
          setValue(target) {
            const parentType: TypeProps = target.parent.getPropValue('type')
            const typeList: TypeProps[] = ['single', 'multiple', 'range']
            const index = typeList.findIndex((item) => item === parentType)
            /**
             * 不处理会导致渲染失败
             */
            target.parent.setPropValue('type', typeList[(index + 1) % 3])
            setTimeout(() => {
              target.parent.setPropValue('type', parentType)
            }, 1)
          },
        },
      },
      {
        name: 'Poppable Props',
        title: {
          label: '弹出式日历配置',
          tip: '只在弹出式日历下有效',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'v-model',
            title: '是否显示日历弹窗',
            setter: 'BoolSetter',
          },
          {
            name: 'position',
            title: '弹出位置',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: 'top',
                    value: 'top',
                  },
                  {
                    title: 'right',
                    value: 'right',
                  },
                  {
                    title: 'left',
                    value: 'left',
                  },
                  {
                    title: 'bottom',
                    value: 'bottom',
                  },
                ],
              },
            },
            defaultValue: 'bottom',
          },
          {
            name: 'round',
            title: '是否显示圆角弹窗',
            setter: 'BoolSetter',
            defaultValue: true,
          },
          {
            name: 'closeOnPopstate',
            title: '是否在页面回退时自动关闭',
            setter: 'BoolSetter',
            defaultValue: true,
          },
          {
            name: 'closeOnClickOverlay',
            title: '是否在点击遮罩层后关闭',
            setter: 'BoolSetter',
            defaultValue: true,
          },
          {
            name: 'safeAreaInsetBottom',
            title: '是否开启底部安全区适配',
            setter: 'BoolSetter',
            defaultValue: true,
          },
        ],
        condition(target) {
          return !!target.getProps?.().getPropValue('poppable')
        },
      },
      {
        name: 'lazyRender',
        title: '是否开启懒渲染',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'showMark',
        title: '是否显示月份背景水印',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'showTitle',
        title: '是否展示日历标题',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'showSubtitle',
        title: '是否展示日历副标题',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'showConfirm',
        title: '是否展示确认按钮',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'readonly',
        title: '是否完全只读',
        setter: 'BoolSetter',
      },
      {
        name: 'confirmText',
        title: {
          label: '确认按钮文字',
          tip: '只在弹出式日历下有效',
        },
        setter: 'StringSetter',
        defaultValue: '确认',
      },
      {
        name: 'confirmDisabledText',
        title: {
          label: '确认按钮禁用时文字',
          tip: '只在弹出式日历下有效',
        },
        setter: 'StringSetter',
        defaultValue: '确认',
      },
      {
        name: 'firstDayOfWeek',
        title: '设置周起始日',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '周日',
                value: 0,
              },
              {
                title: '周一',
                value: 1,
              },
              {
                title: '周二',
                value: 2,
              },
              {
                title: '周三',
                value: 3,
              },
              {
                title: '周四',
                value: 4,
              },
              {
                title: '周五',
                value: 5,
              },
              {
                title: '周六',
                value: 6,
              },
            ],
          },
        },
        defaultValue: 0,
      },
      {
        name: 'footer',
        title: '自定义底部栏',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'top-info',
        title: '自定义日期上方信息',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'bottom-info',
        title: '自定义日期下方信息',
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
      events: [
        'onSelect',
        'onConfirm',
        'onOpen',
        'onClose',
        'onOpened',
        'onClosed',
        'onUnselect',
        'onMonth-show',
      ],
      loop: true,
      condition: true,
      style: true,
    },
  },
  snippets: [
    {
      title: '日历',
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_date-picker.png',
      schema: {
        componentName: 'van-calendar',
        props: {
          'v-model': true,
          position: 'bottom',
          round: true,
          closeOnPopstate: true,
          closeOnClickOverlay: true,
          safeAreaInsetBottom: true,
        },
      },
    },
  ],
}

export default meta
