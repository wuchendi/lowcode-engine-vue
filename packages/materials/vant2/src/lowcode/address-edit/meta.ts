import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (address-edit); see https://vant-ui.github.io/vant/v2/#/zh-CN/address-edit
const meta = {
  componentName: 'VanAddressEdit',
  title: '地址编辑',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/address-edit',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'areaList',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '地区列表',
            'en-US': 'areaList',
          },
          tip: '地区列表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'areaColumnsPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '地区选择列占位提示文字',
            'en-US': 'areaColumnsPlaceholder',
          },
          tip: '地区选择列占位提示文字',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'areaPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '地区输入框占位提示文字',
            'en-US': 'areaPlaceholder',
          },
          tip: '地区输入框占位提示文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'addressInfo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '收货人信息初始值',
            'en-US': 'addressInfo',
          },
          tip: '收货人信息初始值',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'searchResult',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '详细地址搜索结果',
            'en-US': 'searchResult',
          },
          tip: '详细地址搜索结果',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'showPostal',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示邮政编码',
            'en-US': 'showPostal',
          },
          tip: '是否显示邮政编码',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showDelete',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示删除按钮',
            'en-US': 'showDelete',
          },
          tip: '是否显示删除按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showSetDefault',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示默认地址栏',
            'en-US': 'showSetDefault',
          },
          tip: '是否显示默认地址栏',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showSearchResult',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示搜索结果',
            'en-US': 'showSearchResult',
          },
          tip: '是否显示搜索结果',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showArea',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示地区',
            'en-US': 'showArea',
          },
          tip: '是否显示地区',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showDetail',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示详细地址',
            'en-US': 'showDetail',
          },
          tip: '是否显示详细地址',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'disableArea',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用地区选择',
            'en-US': 'disableArea',
          },
          tip: '是否禁用地区选择',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'saveButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '保存按钮文字',
            'en-US': 'saveButtonText',
          },
          tip: '保存按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'deleteButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '删除按钮文字',
            'en-US': 'deleteButtonText',
          },
          tip: '删除按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'detailRows',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '详细地址输入框行数',
            'en-US': 'detailRows',
          },
          tip: '详细地址输入框行数',
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
        name: 'detailMaxlength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '详细地址最大长度',
            'en-US': 'detailMaxlength',
          },
          tip: '详细地址最大长度',
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
        defaultValue: '200',
      },
      {
        name: 'isSaving',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示保存按钮加载动画',
            'en-US': 'isSaving',
          },
          tip: '是否显示保存按钮加载动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'isDeleting',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示删除按钮加载动画',
            'en-US': 'isDeleting',
          },
          tip: '是否显示删除按钮加载动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'telValidator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '手机号格式校验函数',
            'en-US': 'telValidator',
          },
          tip: '手机号格式校验函数',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'telMaxlength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '手机号最大长度',
            'en-US': 'telMaxlength',
          },
          tip: '手机号最大长度',
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
      },
      {
        name: 'postalValidator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '邮政编码格式校验函数',
            'en-US': 'postalValidator',
          },
          tip: '邮政编码格式校验函数',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'validator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义校验函数',
            'en-US': 'validator',
          },
          tip: '自定义校验函数',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onSave',
          description: '点击保存按钮时触发',
          template:
            "onSave(extParams) {\n  // 点击保存按钮时触发\n  console.log('onSave', extParams)\n}",
        },
        {
          name: 'onFocus',
          description: '输入框聚焦时触发',
          template:
            "onFocus(extParams) {\n  // 输入框聚焦时触发\n  console.log('onFocus', extParams)\n}",
        },
        {
          name: 'onDelete',
          description: '确认删除地址时触发',
          template:
            "onDelete(extParams) {\n  // 确认删除地址时触发\n  console.log('onDelete', extParams)\n}",
        },
        {
          name: 'onCancel-delete',
          description: '取消删除地址时触发',
          template:
            "onCancelDelete(extParams) {\n  // 取消删除地址时触发\n  console.log('onCancelDelete', extParams)\n}",
        },
        {
          name: 'onSelect-search',
          description: '选中搜索结果时触发',
          template:
            "onSelectSearch(extParams) {\n  // 选中搜索结果时触发\n  console.log('onSelectSearch', extParams)\n}",
        },
        {
          name: 'onClick-area',
          description: '点击收件地区时触发',
          template:
            "onClickArea(extParams) {\n  // 点击收件地区时触发\n  console.log('onClickArea', extParams)\n}",
        },
        {
          name: 'onChange-area',
          description: '修改收件地区时触发',
          template:
            "onChangeArea(extParams) {\n  // 修改收件地区时触发\n  console.log('onChangeArea', extParams)\n}",
        },
        {
          name: 'onChange-detail',
          description: '修改详细地址时触发',
          template:
            "onChangeDetail(extParams) {\n  // 修改详细地址时触发\n  console.log('onChangeDetail', extParams)\n}",
        },
        {
          name: 'onChange-default',
          description: '切换是否使用默认地址时触发',
          template:
            "onChangeDefault(extParams) {\n  // 切换是否使用默认地址时触发\n  console.log('onChangeDefault', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '地址编辑',
      screenshot: './screenshots/address-edit.webp',
      schema: {
        componentName: 'VanAddressEdit',
        props: {},
        children: '地址编辑',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
