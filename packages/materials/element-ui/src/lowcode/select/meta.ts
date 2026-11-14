import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (select); see https://element.eleme.cn/#/zh-CN/component/select
const meta = {
  componentName: 'ElSelect',
  title: '选择器',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/select',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '绑定值',
            'en-US': 'v-model',
          },
          tip: '绑定值',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'BoolSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'multiple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否多选',
            'en-US': 'multiple',
          },
          tip: '是否多选',
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
            'zh-CN': '是否禁用',
            'en-US': 'disabled',
          },
          tip: '是否禁用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'valueKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'valueKey',
            'en-US': 'valueKey',
          },
          tip: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'value',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框尺寸',
            'en-US': 'size',
          },
          tip: '输入框尺寸',
        },
        setter: {
          componentName: 'RadioGroupSetter',
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
        supportVariable: true,
      },
      {
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可以清空选项',
            'en-US': 'clearable',
          },
          tip: '是否可以清空选项',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'collapseTags',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'collapseTags',
            'en-US': 'collapseTags',
          },
          tip: '多选时是否将选中值按文字的形式展示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'multipleLimit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'multipleLimit',
            'en-US': 'multipleLimit',
          },
          tip: '多选时用户最多可以选择的项目数，为 0 则不限制',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'name',
            'en-US': 'name',
          },
          tip: 'select input 的 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'autocomplete',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'autocomplete',
            'en-US': 'autocomplete',
          },
          tip: 'select input 的 autocomplete 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'off',
      },
      {
        name: 'autoComplete',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下个主版本弃用',
            'en-US': 'autoComplete',
          },
          tip: '下个主版本弃用',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'off',
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '占位符',
            'en-US': 'placeholder',
          },
          tip: '占位符',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'filterable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可搜索',
            'en-US': 'filterable',
          },
          tip: '是否可搜索',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'allowCreate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许用户创建新条目',
            'en-US': 'allowCreate',
          },
          tip: '是否允许用户创建新条目，需配合 filterable 使用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'filterMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义搜索方法',
            'en-US': 'filterMethod',
          },
          tip: '自定义搜索方法',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'remote',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为远程搜索',
            'en-US': 'remote',
          },
          tip: '是否为远程搜索',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'remoteMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '远程搜索方法',
            'en-US': 'remoteMethod',
          },
          tip: '远程搜索方法',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否正在从远程获取数据',
            'en-US': 'loading',
          },
          tip: '是否正在从远程获取数据',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loadingText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '远程加载时显示的文字',
            'en-US': 'loadingText',
          },
          tip: '远程加载时显示的文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'noMatchText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '搜索条件无匹配时显示的文字',
            'en-US': 'noMatchText',
          },
          tip: '搜索条件无匹配时显示的文字，也可以使用slot="empty"设置',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'noDataText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项为空时显示的文字',
            'en-US': 'noDataText',
          },
          tip: '选项为空时显示的文字，也可以使用slot="empty"设置',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Select 下拉框的类名',
            'en-US': 'popperClass',
          },
          tip: 'Select 下拉框的类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'reserveKeyword',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '多选且可搜索时',
            'en-US': 'reserveKeyword',
          },
          tip: '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'defaultFirstOption',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '在输入框按下回车',
            'en-US': 'defaultFirstOption',
          },
          tip: '在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'popperAppendToBody',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperAppendToBody',
            'en-US': 'popperAppendToBody',
          },
          tip: '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'automaticDropdown',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对于不可搜索的 Select',
            'en-US': 'automaticDropdown',
          },
          tip: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'prefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Select 组件头部内容',
            'en-US': 'prefix',
          },
          tip: 'Select 组件头部内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'empty',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '无选项时的列表',
            'en-US': 'empty',
          },
          tip: '无选项时的列表',
        },
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
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '选中值发生变化时触发',
          template:
            "onChange(extParams) {\n  // 选中值发生变化时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onVisible-change',
          description: '下拉框出现/隐藏时触发',
          template:
            "onVisibleChange(extParams) {\n  // 下拉框出现/隐藏时触发\n  console.log('onVisibleChange', extParams)\n}",
        },
        {
          name: 'onRemove-tag',
          description: '多选模式下移除tag时触发',
          template:
            "onRemoveTag(extParams) {\n  // 多选模式下移除tag时触发\n  console.log('onRemoveTag', extParams)\n}",
        },
        {
          name: 'onClear',
          description: '可清空的单选模式下用户点击清空按钮时触发',
          template:
            "onClear(extParams) {\n  // 可清空的单选模式下用户点击清空按钮时触发\n  console.log('onClear', extParams)\n}",
        },
        {
          name: 'onBlur',
          description: '当 input 失去焦点时触发',
          template:
            "onBlur(extParams) {\n  // 当 input 失去焦点时触发\n  console.log('onBlur', extParams)\n}",
        },
        {
          name: 'onFocus',
          description: '当 input 获得焦点时触发',
          template:
            "onFocus(extParams) {\n  // 当 input 获得焦点时触发\n  console.log('onFocus', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '选择器',
      screenshot: './screenshots/select.webp',
      schema: {
        componentName: 'ElSelect',
        props: {
          style: {
            width: '200px',
          },
          value: '',
        },
        children: [
          {
            componentName: 'ElOption',
            props: {
              label: '选项一',
              value: 'a',
            },
          },
          {
            componentName: 'ElOption',
            props: {
              label: '选项二',
              value: 'b',
            },
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
