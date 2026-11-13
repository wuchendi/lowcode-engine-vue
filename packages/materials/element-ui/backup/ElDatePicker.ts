// import { cloneDeep } from 'lodash';
import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElDatePicker: ComponentMetadata = {
  title: '日期选择器',
  group: '基础组件',
  category: '数据录入',
  priority: 995,
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/date-picker',
  componentName: 'ElDatePicker',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'DatePicker',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'v-model',
        title: '绑定值',
        setter: 'DateSetter',
      },
      {
        name: 'type',
        title: '显示类型',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '年',
                value: 'year',
              },
              {
                title: '月',
                value: 'month',
              },
              {
                title: '周',
                value: 'week',
              },
              {
                title: '日',
                value: 'date',
              },
              {
                title: '多个日期',
                value: 'dates',
              },
              {
                title: '日期范围',
                value: 'daterange',
              },
              {
                title: '月份范围',
                value: 'monthrange',
              },
              {
                title: '日期和时间',
                value: 'datetime',
              },
              {
                title: '日期和时间范围',
                value: 'datetimerange',
              },
            ],
          },
        },
        defaultValue: 'date',
        extraProps: {
          setValue(target, value) {
            // 切换到以周为日期单位后调整显示格式
            if (value === 'week') {
              target.parent.setPropValue('format', 'yyyy 第 WW 周')
            } else {
              target.parent.setPropValue('format', '')
            }

            // 处理切换成范围选择器后组件无法选中问题
            const { node } = target
            node.replaceWith(node.exportSchema())
          },
        },
      },
      {
        name: 'readonly',
        title: '只读',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: '禁用',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'editable',
        title: '文本框可输入',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'clearable',
        title: '显示清除按钮',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      // {
      //   name: 'align',
      //   title: '对齐方式',
      //   setter: {
      //     componentName: 'SelectSetter',
      //     props: {
      //       options: [
      //         {
      //           title: 'left',
      //           value: 'left',
      //         },
      //         {
      //           title: 'center',
      //           value: 'center',
      //         },
      //         {
      //           title: 'right',
      //           value: 'right',
      //         },
      //       ],
      //     },
      //   },
      // },
      {
        name: 'size',
        title: '尺寸',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'medium',
                value: 'medium',
              },
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'mini',
                value: 'mini',
              },
            ],
          },
        },
      },
      {
        name: 'placeholder',
        title: {
          label: '占位内容',
          tip: '非范围选择的占位内容',
        },
        setter: 'StringSetter',
        defaultValue: '请选择',
      },
      {
        name: 'format',
        title: {
          docUrl:
            'https://element.eleme.cn/2.14/#/zh-CN/component/date-picker#ri-qi-ge-shi',
          label: '显示格式',
          tip: 'format | 显示在输入框中的格式, 默认是 yyyy-MM-dd',
        },
        setter: 'StringSetter',
      },
      {
        name: 'valueFormat',
        title: {
          docUrl:
            'https://element.eleme.cn/2.14/#/zh-CN/component/date-picker#ri-qi-ge-shi',
          label: '绑定值格式',
          tip: 'value-format | 可选，绑定值的格式。不指定则绑定值为 Date 对象',
        },
        setter: 'StringSetter',
        defaultValue: '',
      },
      {
        name: 'defaultValue',
        title: {
          label: '默认显示时间',
          tip: 'default-value | 可选，选择器打开时默认显示的时间',
        },
        setter: 'DateSetter',
      },
      {
        name: 'popperClass',
        title: {
          label: '下拉框类名',
          tip: 'DatePicker 下拉框的类名',
        },
        setter: 'StringSetter',
      },
      {
        name: 'prefixIcon',
        title: {
          label: '头部图标',
          tip: '自定义头部图标的类名',
        },
        setter: 'CIconSetter',
        defaultValue: 'el-icon-date',
      },
      {
        name: 'clearIcon',
        title: {
          label: '清空图标',
          tip: '自定义清空图标的类名',
        },
        setter: 'CIconSetter',
        defaultValue: 'el-icon-circle-close',
      },
      {
        name: 'validateEvent',
        title: {
          label: '触发表单校验',
          tip: '输入时是否触发表单的校验',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'appendToBody',
        title: {
          label: '插入至 body 元素',
          tip: 'DetePicker 自身是否插入至 body 元素上',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: '范围选择相关属性',
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'rangeSeparator',
            title: '分隔符',
            setter: 'StringSetter',
            defaultValue: '-',
          },
          {
            name: 'defaultTime',
            title: {
              label: '具体时刻',
              tip: '日期范围默认情况下，起始日期和结束日期的时间部分均为当天的 0 点 0 分 0 秒。通过 default-time 可以分别指定二者的具体时刻。default-time 接受一个数组，其中的值为形如 12:00:00 的字符串，第一个值控制起始日期的时刻，第二个值控制结束日期的时刻。',
            },
            setter: {
              componentName: 'JsonSetter',
              initialValue: ['00:00:00', '23:59:59'],
            },
          },
          {
            name: 'unlinkPanels',
            title: {
              label: '取消联动',
              tip: '在范围选择器里取消两个日期面板之间的联动',
            },
            setter: 'BoolSetter',
            defaultValue: false,
          },
          {
            name: 'startPlaceholder',
            title: '开始占位内容',
            setter: 'StringSetter',
            defaultValue: '',
          },
          {
            name: 'endPlaceholder',
            title: '结束占位内容',
            setter: 'StringSetter',
            defaultValue: '',
          },
        ],
      },
      {
        display: 'accordion',
        name: 'pickerOptions',
        title: {
          label: '高级配置',
          tip: 'picker-options | 快捷选项、禁用状态等高级配置',
          docUrl:
            'https://element.eleme.cn/2.14/#/zh-CN/component/date-picker#picker-options',
        },
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'shortcuts',
                  title: '快捷选项',
                  setter: 'ExpressionSetter',
                },
                {
                  name: 'disabledDate',
                  title: '设置禁用状态',
                  setter: {
                    componentName: 'FunctionSetter',
                    props: {
                      template:
                        'function disabledDate(time,${extParams}) {\n//设置禁用状态，参数为当前日期，要求返回 Boolean \n return time.getTime() < Date.now();;\n}\n',
                    },
                  },
                },
                {
                  name: 'cellClassName',
                  title: '设置日期的 className',
                  setter: {
                    componentName: 'FunctionSetter',
                  },
                },
                {
                  name: 'firstDayOfWeek',
                  title: '周起始日',
                  setter: {
                    componentName: 'SelectSetter',
                    props: {
                      options: [
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
                        {
                          title: '周日',
                          value: 7,
                        },
                      ],
                    },
                  },
                },
                {
                  name: 'onPick',
                  title: {
                    label: '选中日期后的回调',
                    tip: '选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效',
                  },
                  setter: {
                    componentName: 'FunctionSetter',
                  },
                  condition(target) {
                    let type = target.getProps().getPropValue('type')
                    return type === 'daterange' || type === 'datetimerange'
                  },
                },
              ],
            },
          },
        },
      },
      {
        name: '原生属性',
        title: {
          label: '原生属性',
          tip: '原生 HTML 属性',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'name',
            title: 'name',
            setter: 'StringSetter',
          },
        ],
      },
    ],
    supports: {
      style: true,
      loop: true,
      events: [
        {
          name: 'onChange',
          template:
            'onChange(value, ${extParams}){\nconsole.log("用户确认选定的值时触发", value);\n}\n',
        },
        {
          name: 'onFocus',
          template:
            'onHide(el, ${extParams}){\nconsole.log("当 input 失去焦点时触发");\n}\n',
        },
        {
          name: 'onBlur',
          template:
            'onAfterEnter(el, ${extParams}){\nconsole.log("当 input 获得焦点时触发");\n}\n',
        },
      ],
    },
  },
  snippets: [
    {
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_date-picker.png',
      title: '日期选择器',
      schema: {
        componentName: 'ElDatePicker',
        props: {
          clearable: true,
          type: 'datetimerange',
          format: 'yyyy-MM-dd',
          align: 'center',
          rangeSeparator: '-',
          prefixIcon: 'el-icon-date',
          clearIcon: 'el-icon-circle-close',
          validateEvent: true,
          appendToBody: true,
        },
      },
    },
  ],
}

export default ElDatePicker
