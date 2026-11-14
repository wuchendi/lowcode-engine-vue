import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (cascader); see https://1x.antdv.com/components/cascader-cn/
const meta = {
  componentName: 'ACascader',
  title: '级联选择',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/cascader-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'allowClear',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否支持清除',
            'en-US': 'allowClear',
          },
          tip: '是否支持清除',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'autoFocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动获取焦点',
            'en-US': 'autoFocus',
          },
          tip: '自动获取焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'changeOnSelect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当此项为 true 时',
            'en-US': 'changeOnSelect',
          },
          tip: '当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认的选中项',
            'en-US': 'defaultValue',
          },
          tip: '默认的选中项',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
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
        name: 'displayRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选择后展示的渲染函数',
            'en-US': 'displayRender',
          },
          tip: '选择后展示的渲染函数,可使用 slot="displayRender" 和 slot-scope="{labels, selectedOptions}"',
        },
        setter: [
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'expandTrigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '次级菜单的展开方式',
            'en-US': 'expandTrigger',
          },
          tip: "次级菜单的展开方式，可选 'click' 和 'hover'",
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'click',
      },
      {
        name: 'fieldNames',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fieldNames',
            'en-US': 'fieldNames',
          },
          tip: '自定义 options 中 label name children 的字段',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'getPopupContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单渲染父节点',
            'en-US': 'getPopupContainer',
          },
          tip: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'loadData',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '用于动态加载选项',
            'en-US': 'loadData',
          },
          tip: '用于动态加载选项，无法与 showSearch 一起使用',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'notFoundContent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当下拉列表为空时显示的内容',
            'en-US': 'notFoundContent',
          },
          tip: '当下拉列表为空时显示的内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'Not Found',
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可选项数据源',
            'en-US': 'options',
          },
          tip: '可选项数据源',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
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
        name: 'popupClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义浮层类名',
            'en-US': 'popupClassName',
          },
          tip: '自定义浮层类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popupStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义浮层样式',
            'en-US': 'popupStyle',
          },
          tip: '自定义浮层样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'popupPlacement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '浮层预设位置',
            'en-US': 'popupPlacement',
          },
          tip: '浮层预设位置：bottomLeft bottomRight topLeft topRight',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'bottomLeft',
      },
      {
        name: 'popupVisible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制浮层显隐',
            'en-US': 'popupVisible',
          },
          tip: '控制浮层显隐',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'showSearch',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '在选择框中显示搜索框',
            'en-US': 'showSearch',
          },
          tip: '在选择框中显示搜索框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框大小',
            'en-US': 'size',
          },
          tip: '输入框大小，可选 large default small',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'suffixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义的选择框后缀图标',
            'en-US': 'suffixIcon',
          },
          tip: '自定义的选择框后缀图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定选中项',
            'en-US': 'v-model',
          },
          tip: '指定选中项',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
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
        name: 'render',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'render',
            'en-US': 'render',
          },
          tip: '用于渲染 filter 后的选项,可使用 slot="showSearchRender" 和 slot-scope="{inputValue, path}"',
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
          description: '选择完成后的回调',
          template:
            "onChange(extParams) {\n  // 选择完成后的回调\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onPopupVisibleChange',
          description: '显示/隐藏浮层的回调',
          template:
            "onPopupVisibleChange(extParams) {\n  // 显示/隐藏浮层的回调\n  console.log('onPopupVisibleChange', extParams)\n}",
        },
        {
          name: 'onSearch',
          description: '输入框变化时的回调',
          template:
            "onSearch(extParams) {\n  // 输入框变化时的回调\n  console.log('onSearch', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '级联选择',
      screenshot: './screenshots/cascader.webp',
      schema: {
        componentName: 'ACascader',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
