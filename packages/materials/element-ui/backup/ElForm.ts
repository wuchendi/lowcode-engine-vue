import type { ComponentMetadata } from '@alilc/lowcode-types'

const comps = [
  'ElInput',
  'ElSelect',
  'ElCascader',
  'ElRadio',
  'ElRadioGroup',
  'ElCheckbox',
  'ElCheckboxGroup',
  'ElSwitch',
  'ElUpload',
  'ElDatePicker',
  'ElRate',
  'ElButton',
]

const ElForm: ComponentMetadata = {
  title: '表单容器',
  group: '基础组件',
  priority: 1010,
  category: '数据录入',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/form',
  componentName: 'ElForm',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Form',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'model',
        title: '表单数据',
        setter: {
          componentName: 'JsonSetter',
        },
      },
      {
        name: 'rules',
        title: '校验规则',
        setter: {
          componentName: 'JsonSetter',
          initialValue: {},
        },
      },
      {
        name: 'inline',
        title: '行内表单模式',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'labelPosition',
        title: {
          label: '标签位置',
          tip: '表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '左对齐',
                value: 'left',
              },
              {
                title: '右对齐',
                value: 'right',
              },
              {
                title: '顶部对齐',
                value: 'top',
              },
            ],
          },
        },
      },
      {
        name: 'labelWidth',
        title: {
          label: '标签宽度',
          tip: '表单域标签的宽度，例如 50px, 作为 Form 直接子元素的 form-item 会继承该值。支持 auto',
        },
        setter: 'StringSetter',
      },
      {
        name: 'labelSuffix',
        title: '标签后缀',
        setter: 'StringSetter',
        defaultValue: '',
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
                title: '中等',
                value: 'medium',
              },
              {
                title: '小型',
                value: 'small',
              },
              {
                title: '迷你',
                value: 'mini',
              },
            ],
          },
          initialValue: '',
        },
      },
      {
        name: 'hideRequiredAsterisk',
        title: {
          label: '隐藏必填红色星号',
          tip: '隐藏必填字段的标签旁边的红色星号',
        },
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'showMessage',
        title: '显示校验错误信息',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'inlineMessage',
        title: '行内形式展示校验信息',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'statusIcon',
        title: '输入框中显示校验结果反馈图标',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'validateOnRuleChange',
        title: 'rules 改变后立即触发一次验证',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'disabled',
        title: '禁用',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
    ],
    supports: {
      style: true,
      loop: true,
      events: [
        {
          name: 'onValidate',
          template:
            'onValidate(value, result, err, ${extParams}) {\n // 任一表单项被校验后触发 \nconsole.log("onValidate", value, result, err);\n}\n',
        },
      ],
    },
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: ['ElFormItem', ...comps],
      },
    },
    advanced: {
      callbacks: {
        onNodeAdd: (dragment, currentNode) => {
          if (
            !dragment ||
            !dragment.componentMeta ||
            !dragment.componentMeta.npm ||
            !dragment.componentMeta.npm.package ||
            dragment.componentMeta.npm.package.indexOf('element-ui') === -1 ||
            comps.every((comp) => dragment.componentName.indexOf(comp) === -1)
          ) {
            return
          }

          // 为目标元素包裹一层 FormItem
          const layoutPNode = currentNode.document.createNode({
            componentName: 'ElFormItem',
            props: {
              label: '表单项',
              prop: '',
              labelWidth: '',
              required: false,
              rules: [],
              error: '',
              showMessage: true,
              size: '',
              disabled: false,
            },
            children: [dragment.exportSchema()],
          })

          // TODO: 处理单选框组、多选框组拖入后未被 FormItem 包裹问题
          dragment.replaceWith(layoutPNode.exportSchema())

          // 当前 dragment 还未添加入 node 子节点,需要 setTimeout 处理
          setTimeout(() => {
            currentNode.replaceChild(
              dragment,
              layoutPNode.exportSchema(),
              // 避免生成新的 nodeId
              { reserveSchemaNodeId: true },
            )
          }, 1)
        },
      },
    },
  },
  snippets: [
    {
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/form-1.png',
      title: '表单容器',
      schema: {
        componentName: 'ElForm',
        props: {
          rules: {},
          inline: false,
          labelSuffix: '',
          hideRequiredAsterisk: false,
          showMessage: true,
          inlineMessage: false,
          statusIcon: false,
          validateOnRuleChange: true,
          size: '',
          disabled: false,
        },
      },
    },
  ],
}

export default ElForm
