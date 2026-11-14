import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (cascader); see https://antdv.com/components/cascader-cn
const meta = {
  componentName: 'ACascader',
  title: '级联选择',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/cascader-cn',
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
        name: 'autofocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动获取焦点',
            'en-US': 'autofocus',
          },
          tip: '自动获取焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'bordered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否有边框',
            'en-US': 'bordered',
          },
          tip: '是否有边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'clearIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义的选择框清空图标',
            'en-US': 'clearIcon',
          },
          tip: '自定义的选择框清空图标',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'changeOnSelect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'changeOnSelect',
            'en-US': 'changeOnSelect',
          },
          tip: '（单选时生效）当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示',
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
          tip: '选择后展示的渲染函数,可使用 #displayRender="{labels, selectedOptions}"',
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
        name: 'dropdownStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义浮层样式',
            'en-US': 'dropdownStyle',
          },
          tip: '自定义浮层样式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'expandIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义次级菜单展开图标',
            'en-US': 'expandIcon',
          },
          tip: '自定义次级菜单展开图标',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
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
          tip: '次级菜单的展开方式',
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
          tip: '自定义 options 中 label value children 的字段',
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
        name: 'maxTagCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最多显示多少个 tag',
            'en-US': 'maxTagCount',
          },
          tip: '最多显示多少个 tag，响应式模式会对性能产生损耗',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'maxTagPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '隐藏 tag 时显示的内容',
            'en-US': 'maxTagPlaceholder',
          },
          tip: '隐藏 tag 时显示的内容',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'multiple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '支持多选节点',
            'en-US': 'multiple',
          },
          tip: '支持多选节点',
        },
        setter: 'BoolSetter',
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
        name: 'open',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制浮层显隐',
            'en-US': 'open',
          },
          tip: '控制浮层显隐',
        },
        setter: 'BoolSetter',
        supportVariable: true,
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
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '浮层预设位置',
            'en-US': 'placement',
          },
          tip: '浮层预设位置',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'bottomLeft',
      },
      {
        name: 'showCheckedStrategy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '定义选中项回填的方式',
            'en-US': 'showCheckedStrategy',
          },
          tip: '定义选中项回填的方式。Cascader.SHOW_CHILD: 只显示选中的子节点。Cascader.SHOW_PARENT: 只显示父节点（当父节点下所有子节点都选中时）。',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'Cascader.SHOW_PARENT',
      },
      {
        name: 'removeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义的多选框清除图标',
            'en-US': 'removeIcon',
          },
          tip: '自定义的多选框清除图标',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'searchValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置搜索的值',
            'en-US': 'searchValue',
          },
          tip: '设置搜索的值，需要与 showSearch 配合使用',
        },
        setter: 'StringSetter',
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
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'status',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置校验状态',
            'en-US': 'status',
          },
          tip: '设置校验状态',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'error',
                value: 'error',
              },
              {
                title: 'warning',
                value: 'warning',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框大小',
            'en-US': 'size',
          },
          tip: '输入框大小',
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
        name: 'tagRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 tag 内容',
            'en-US': 'tagRender',
          },
          tip: '自定义 tag 内容，多选时生效',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'v-model:value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定选中项',
            'en-US': 'v-model:value',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [],
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
