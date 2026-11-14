import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (input); see https://element.eleme.cn/#/zh-CN/component/input
const meta = {
  componentName: 'ElAutocomplete',
  title: '输入框 Autocomplete',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/input',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框占位文本',
            'en-US': 'placeholder',
          },
          tip: '输入框占位文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁用',
            'en-US': 'disabled',
          },
          tip: '禁用',
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
            'zh-CN': '输入建议对象中用于显示的键名',
            'en-US': 'valueKey',
          },
          tip: '输入建议对象中用于显示的键名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'value',
      },
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '必填值',
            'en-US': 'value',
          },
          tip: '必填值，输入绑定值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'debounce',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '获取输入建议的去抖延时',
            'en-US': 'debounce',
          },
          tip: '获取输入建议的去抖延时',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 300,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单弹出位置',
            'en-US': 'placement',
          },
          tip: '菜单弹出位置',
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
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'bottom-start',
      },
      {
        name: 'fetchSuggestions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '返回输入建议的方法',
            'en-US': 'fetchSuggestions',
          },
          tip: '返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperClass',
            'en-US': 'popperClass',
          },
          tip: 'Autocomplete 下拉列表的类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'triggerOnFocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'triggerOnFocus',
            'en-US': 'triggerOnFocus',
          },
          tip: '是否在输入框 focus 时显示建议列表',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'name',
          },
          tip: '原生属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'selectWhenUnmatched',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'selectWhenUnmatched',
            'en-US': 'selectWhenUnmatched',
          },
          tip: '在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框关联的label文字',
            'en-US': 'label',
          },
          tip: '输入框关联的label文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'prefixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框头部图标',
            'en-US': 'prefixIcon',
          },
          tip: '输入框头部图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'suffixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框尾部图标',
            'en-US': 'suffixIcon',
          },
          tip: '输入框尾部图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'hideLoading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否隐藏远程加载时的加载图标',
            'en-US': 'hideLoading',
          },
          tip: '是否隐藏远程加载时的加载图标',
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
          tip: '是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'highlightFirstItem',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'highlightFirstItem',
            'en-US': 'highlightFirstItem',
          },
          tip: '是否默认突出显示远程搜索建议中的第一项',
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
            'zh-CN': '输入框头部内容',
            'en-US': 'prefix',
          },
          tip: '输入框头部内容',
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
        name: 'suffix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框尾部内容',
            'en-US': 'suffix',
          },
          tip: '输入框尾部内容',
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
        name: 'prepend',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框前置内容',
            'en-US': 'prepend',
          },
          tip: '输入框前置内容',
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
        name: 'append',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框后置内容',
            'en-US': 'append',
          },
          tip: '输入框后置内容',
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
          name: 'onSelect',
          description: '点击选中建议项时触发',
          template:
            "onSelect(extParams) {\n  // 点击选中建议项时触发\n  console.log('onSelect', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '在 Input 值改变时触发',
          template:
            "onChange(extParams) {\n  // 在 Input 值改变时触发\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '输入框 Autocomplete',
      screenshot: './screenshots/autocomplete.webp',
      schema: {
        componentName: 'ElAutocomplete',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
