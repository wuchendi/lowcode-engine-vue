import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElInput: ComponentMetadata = {
  title: '输入框',
  group: '基础组件',
  category: '数据录入',
  priority: 998,
  componentName: 'ElInput',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Input',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'v-model',
        title: '绑定值',
        setter: 'StringSetter',
      },
      {
        name: 'type',
        title: '类型',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '文本',
                value: 'text',
              },
              {
                title: '多行文本',
                value: 'textarea',
              },
              {
                title: '密码',
                value: 'password',
              },
              {
                title: '数字',
                value: 'number',
              },
              {
                title: '邮箱',
                value: 'email',
              },
              {
                title: 'URL',
                value: 'url',
              },
              {
                title: '电话',
                value: 'tel',
              },
            ],
          },
        },
        defaultValue: 'text',
        extraProps: {
          setValue(target, value) {
            if (!/text/.test(value)) {
              target.parent.setPropValue('showWordLimit', false)
              target.parent.setPropValue('maxlength', '')
            }
          },
        },
      },
      {
        name: 'rows',
        title: {
          label: '输入框行数',
          tip: '输入框行数，只对 type="textarea" 有效',
        },
        setter: 'StringSetter',
        defaultValue: 2,
        condition(target) {
          return target.getProps().getPropValue('type') === 'textarea'
        },
      },
      {
        name: 'autosize',
        title: {
          label: '自适应内容高度',
          tip: '自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
        },
        setter: [
          {
            componentName: 'BoolSetter',
            initialValue: false,
          },
          {
            componentName: 'JsonSetter',
            initialValue: { minRows: 2, maxRows: 6 },
          },
        ],
        condition(target) {
          return target.getProps().getPropValue('type') === 'textarea'
        },
      },
      {
        name: 'placeholder',
        title: '占位符',
        setter: 'StringSetter',
      },
      {
        name: 'prefixIcon',
        title: '前缀图标',
        setter: 'CIconSetter',
      },
      {
        name: 'suffixIcon',
        title: '后缀图标',
        setter: 'CIconSetter',
      },
      {
        name: 'size',
        title: '尺寸',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '默认',
                value: '',
              },
              {
                title: '中',
                value: 'medium',
              },
              {
                title: '小',
                value: 'small',
              },
              {
                title: '迷你',
                value: 'mini',
              },
            ],
          },
        },
        defaultValue: '',
      },
      {
        name: 'resize',
        title: '用户缩放',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'none',
                value: 'none',
              },
              {
                title: 'both',
                value: 'both',
              },
              {
                title: 'horizontal',
                value: 'horizontal',
              },
              {
                title: 'vertical',
                value: 'vertical',
              },
            ],
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
        name: 'clearable',
        title: '可清空',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'showWordLimit',
        title: '显示字数统计',
        setter: 'BoolSetter',
        defaultValue: false,
        condition(target) {
          let type = target.getProps().getPropValue('type')
          if (/text/.test(type)) {
            return true
          } else {
            return false
          }
        },
        extraProps: {
          setValue(target, value) {
            // 切换到以周为日期单位后调整显示格式
            if (value) {
              target.parent.setPropValue('maxlength', 30)
            } else {
              target.parent.setPropValue('maxlength', '')
            }
          },
        },
      },
      {
        name: 'maxlength',
        title: '最大输入长度',
        setter: 'NumberSetter',
      },
      {
        name: 'minlength',
        title: '最小输入长度',
        setter: 'NumberSetter',
      },
      {
        name: '自定义插槽',
        display: 'accordion',
        type: 'group',
        items: [
          // {
          //   name: 'prefix',
          //   title: '头部内容',
          //   setter: {
          //     componentName: 'SlotSetter',
          //     initialValue: {
          //       type: 'JSSlot',
          //       title: '输入框头部内容插槽',
          //       value: [],
          //     },
          //   },
          // },
          // {
          //   name: 'suffix',
          //   title: '尾部内容',
          //   setter: {
          //     componentName: 'SlotSetter',
          //     initialValue: {
          //       type: 'JSSlot',
          //       title: '输入框尾部内容插槽',
          //       value: [],
          //     },
          //   },
          // },
          {
            name: 'prepend',
            title: '前置内容',
            setter: {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                title: '输入框前置内容插槽',
                value: [],
              },
            },
          },
          {
            name: 'append',
            title: '后置内容',
            setter: {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                title: '输入框后置内容插槽',
                value: [],
              },
            },
          },
        ],
        condition(target) {
          return target.getProps().getPropValue('type') === 'text'
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
          {
            name: 'form',
            title: 'form',
            setter: 'StringSetter',
          },
          {
            name: 'autofocus',
            title: 'autofocus',
            setter: 'BoolSetter',
            defaultValue: false,
          },
          {
            name: 'autocomplete',
            title: '原生属性，自动补全',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: 'on',
                    value: 'on',
                  },
                  {
                    title: 'off',
                    value: 'off',
                  },
                ],
              },
            },
            defaultValue: 'off',
          },
          {
            name: 'max',
            title: 'max',
            setter: 'NumberSetter',
          },
          {
            name: 'min',
            title: 'min',
            setter: 'NumberSetter',
          },
          {
            name: 'step',
            title: 'step',
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
          name: 'onInput',
          template:
            'onInput(value, ${extParams}){\n//在 Input 值改变时触发\nconsole.log("onInput", value);\n}\n',
        },
        {
          name: 'onClear',
          template:
            'onClear(${extParams}){\n//在点击由 clearable 属性生成的清空按钮时触发\nconsole.log("onClear");\n}\n',
        },
        {
          name: 'onChange',
          template:
            'onChange(value, ${extParams}){\n//仅在输入框失去焦点或用户按下回车时触发\nconsole.log("onChange", value);\n}\n',
        },
        {
          name: 'onBlur',
          template:
            'onBlur(ev, ${extParams}){\n//在 Input 失去焦点时触发\nconsole.log("onBlur");\n}\n',
        },
        {
          name: 'onFocus',
          template:
            'onFocus(ev, ${extParams}){\n//在 Input 获得焦点时触发\nconsole.log("onFocus");\n}\n',
        },
      ],
    },
  },
  snippets: [
    {
      screenshot:
        'https://helios-allpublic-1257616148.cos.ap-shanghai.myqcloud.com/img/input.png',
      title: '输入框',
      schema: {
        componentName: 'ElInput',
        props: {
          type: 'text',
          showWordLimit: false,
          placeholder: '请输入',
          clearable: false,
          'show-password': false,
          disabled: false,
          rows: 2,
          autosize: false,
          autocomplete: 'off',
          autofocus: false,
          tabindex: '',
          'validate-event': true,
          prefixIcon: '',
        },
      },
    },
  ],
}

export default ElInput
