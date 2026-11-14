import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (sku); see https://vant-ui.github.io/vant/v2/#/zh-CN/sku
const meta = {
  componentName: 'VanSku',
  title: '商品规格',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/sku',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示商品规格弹窗',
            'en-US': 'v-model',
          },
          tip: '是否显示商品规格弹窗',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'sku',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品 sku 数据',
            'en-US': 'sku',
          },
          tip: '商品 sku 数据',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'goods',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品信息',
            'en-US': 'goods',
          },
          tip: '商品信息',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'goodsId',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品 id',
            'en-US': 'goodsId',
          },
          tip: '商品 id',
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
        name: 'priceTag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示在价格后面的标签',
            'en-US': 'priceTag',
          },
          tip: '显示在价格后面的标签',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'hideStock',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示商品剩余库存',
            'en-US': 'hideStock',
          },
          tip: '是否显示商品剩余库存',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'hideQuotaText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示限购提示',
            'en-US': 'hideQuotaText',
          },
          tip: '是否显示限购提示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'hideSelectedText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否隐藏已选提示',
            'en-US': 'hideSelectedText',
          },
          tip: '是否隐藏已选提示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'stockThreshold',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '库存阈值',
            'en-US': 'stockThreshold',
          },
          tip: '库存阈值。低于这个值会把库存数高亮显示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'showAddCartBtn',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示加入购物车按钮',
            'en-US': 'showAddCartBtn',
          },
          tip: '是否显示加入购物车按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'buyText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '购买按钮文字',
            'en-US': 'buyText',
          },
          tip: '购买按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'addCartText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加入购物车按钮文字',
            'en-US': 'addCartText',
          },
          tip: '加入购物车按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'quota',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '限购数',
            'en-US': 'quota',
          },
          tip: '限购数，0 表示不限购',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'quotaUsed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '已经购买过的数量',
            'en-US': 'quotaUsed',
          },
          tip: '已经购买过的数量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'resetStepperOnHide',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '隐藏时重置选择的商品数量',
            'en-US': 'resetStepperOnHide',
          },
          tip: '隐藏时重置选择的商品数量',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'resetSelectedSkuOnHide',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '隐藏时重置已选择的 sku',
            'en-US': 'resetSelectedSkuOnHide',
          },
          tip: '隐藏时重置已选择的 sku',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disableStepperInput',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用步进器输入',
            'en-US': 'disableStepperInput',
          },
          tip: '是否禁用步进器输入',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'closeOnClickOverlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在点击遮罩层后关闭',
            'en-US': 'closeOnClickOverlay',
          },
          tip: '是否在点击遮罩层后关闭',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'stepperTitle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数量选择组件左侧文案',
            'en-US': 'stepperTitle',
          },
          tip: '数量选择组件左侧文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'customStepperConfig',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '步进器相关自定义配置',
            'en-US': 'customStepperConfig',
          },
          tip: '步进器相关自定义配置',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'messageConfig',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '留言相关配置',
            'en-US': 'messageConfig',
          },
          tip: '留言相关配置',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'getContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定挂载的节点',
            'en-US': 'getContainer',
          },
          tip: '指定挂载的节点，用法示例',
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
        name: 'initialSku',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认选中的 sku',
            'en-US': 'initialSku',
          },
          tip: '默认选中的 sku，具体参考高级用法',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'showSoldoutSku',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示售罄的 sku',
            'en-US': 'showSoldoutSku',
          },
          tip: '是否展示售罄的 sku，默认展示并置灰',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'disableSoldoutSku',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用售罄的 sku',
            'en-US': 'disableSoldoutSku',
          },
          tip: '是否禁用售罄的 sku',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'safeAreaInsetBottom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启底部安全区适配',
            'en-US': 'safeAreaInsetBottom',
          },
          tip: '是否开启底部安全区适配',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'startSaleNum',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '起售数量',
            'en-US': 'startSaleNum',
          },
          tip: '起售数量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'properties',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品属性',
            'en-US': 'properties',
          },
          tip: '商品属性',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'skuProperties',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '规格属性 v2.13.7',
            'en-US': 'skuProperties',
          },
          tip: '规格属性 v2.13.7',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'previewOnClickImage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在点击商品图片时自动预览',
            'en-US': 'previewOnClickImage',
          },
          tip: '是否在点击商品图片时自动预览',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showHeaderImage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示头部图片',
            'en-US': 'showHeaderImage',
          },
          tip: '是否展示头部图片',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'lazyLoad',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启图片懒加载',
            'en-US': 'lazyLoad',
          },
          tip: '是否开启图片懒加载，须配合 Lazyload 组件使用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'sku-header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品信息展示区',
            'en-US': 'sku-header',
          },
          tip: '商品信息展示区，包含商品图片、名称、价格等信息',
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
        name: 'sku-header-price',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 sku 头部价格展示',
            'en-US': 'sku-header-price',
          },
          tip: '自定义 sku 头部价格展示',
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
        name: 'sku-header-origin-price',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 sku 头部原价展示',
            'en-US': 'sku-header-origin-price',
          },
          tip: '自定义 sku 头部原价展示',
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
        name: 'sku-header-extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '额外 sku 头部区域',
            'en-US': 'sku-header-extra',
          },
          tip: '额外 sku 头部区域',
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
        name: 'sku-header-image-extrav',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'sku-header-image-extrav',
            'en-US': 'sku-header-image-extrav',
          },
          tip: '自定义 sku 头部图片额外的展示',
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
        name: 'sku-body-top',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'sku 展示区上方的内容',
            'en-US': 'sku-body-top',
          },
          tip: 'sku 展示区上方的内容，无默认展示内容，按需使用',
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
        name: 'sku-group',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品 sku 展示区',
            'en-US': 'sku-group',
          },
          tip: '商品 sku 展示区',
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
        name: 'extra-sku-group',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '额外商品 sku 展示区',
            'en-US': 'extra-sku-group',
          },
          tip: '额外商品 sku 展示区，一般用不到',
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
        name: 'sku-stepper',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品数量选择区',
            'en-US': 'sku-stepper',
          },
          tip: '商品数量选择区',
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
        name: 'sku-messages',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品留言区',
            'en-US': 'sku-messages',
          },
          tip: '商品留言区',
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
        name: 'before-sku-messagesv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品留言之前的区域',
            'en-US': 'before-sku-messagesv',
          },
          tip: '商品留言之前的区域',
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
        name: 'after-sku-messagesv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品留言之后的区域',
            'en-US': 'after-sku-messagesv',
          },
          tip: '商品留言之后的区域',
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
        name: 'sku-actions-top',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '操作按钮区顶部内容',
            'en-US': 'sku-actions-top',
          },
          tip: '操作按钮区顶部内容，无默认展示内容，按需使用',
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
        name: 'sku-actions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '操作按钮区',
            'en-US': 'sku-actions',
          },
          tip: '操作按钮区',
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
          name: 'onAdd-cart',
          description: '点击添加购物车回调',
          template:
            "onAddCart(extParams) {\n  // 点击添加购物车回调\n  console.log('onAddCart', extParams)\n}",
        },
        {
          name: 'onBuy-clicked',
          description: '点击购买回调',
          template:
            "onBuyClicked(extParams) {\n  // 点击购买回调\n  console.log('onBuyClicked', extParams)\n}",
        },
        {
          name: 'onStepper-change',
          description: '购买数量变化时触发',
          template:
            "onStepperChange(extParams) {\n  // 购买数量变化时触发\n  console.log('onStepperChange', extParams)\n}",
        },
        {
          name: 'onSku-selected',
          description: '切换规格类目时触发',
          template:
            "onSkuSelected(extParams) {\n  // 切换规格类目时触发\n  console.log('onSkuSelected', extParams)\n}",
        },
        {
          name: 'onSku-prop-selected',
          description: '切换商品属性时触发',
          template:
            "onSkuPropSelected(extParams) {\n  // 切换商品属性时触发\n  console.log('onSkuPropSelected', extParams)\n}",
        },
        {
          name: 'onOpen-preview',
          description: '打开商品图片预览时触发',
          template:
            "onOpenPreview(extParams) {\n  // 打开商品图片预览时触发\n  console.log('onOpenPreview', extParams)\n}",
        },
        {
          name: 'onClose-preview',
          description: '关闭商品图片预览时触发',
          template:
            "onClosePreview(extParams) {\n  // 关闭商品图片预览时触发\n  console.log('onClosePreview', extParams)\n}",
        },
        {
          name: 'onSku-reset',
          description: '规格和属性被重置时触发',
          template:
            "onSkuReset(extParams) {\n  // 规格和属性被重置时触发\n  console.log('onSkuReset', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isModal: true,
    },
  },
  snippets: [
    {
      title: '商品规格',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanSku',
        props: {
          show: false,
          sku: {
            tree: [],
            list: [],
            price: '1.00',
            stock_num: 100,
            none_sku: true,
            hide_stock: false,
          },
          goods: {
            picture: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          },
          goodsId: '1',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
