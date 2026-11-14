import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tooltip); see https://1x.antdv.com/components/tooltip-cn/
const meta = {
  componentName: 'ATooltip',
  title: '文字提示',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/tooltip-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '提示文字',
            'en-US': 'title',
          },
          tip: '提示文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'arrowPointAtCenter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '箭头是否指向目标元素中心',
            'en-US': 'arrowPointAtCenter',
          },
          tip: '箭头是否指向目标元素中心',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'autoAdjustOverflow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '气泡被遮挡时自动调整位置',
            'en-US': 'autoAdjustOverflow',
          },
          tip: '气泡被遮挡时自动调整位置',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'defaultVisible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认是否显隐',
            'en-US': 'defaultVisible',
          },
          tip: '默认是否显隐',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'getPopupContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '浮层渲染父节点',
            'en-US': 'getPopupContainer',
          },
          tip: '浮层渲染父节点，默认渲染到 body 上',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'mouseEnterDelay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'mouseEnterDelay',
            'en-US': 'mouseEnterDelay',
          },
          tip: '鼠标移入后延时多少才显示 Tooltip，单位：秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'mouseLeaveDelay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'mouseLeaveDelay',
            'en-US': 'mouseLeaveDelay',
          },
          tip: '鼠标移出后延时多少才隐藏 Tooltip，单位：秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0.1,
      },
      {
        name: 'overlayClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '卡片类名',
            'en-US': 'overlayClassName',
          },
          tip: '卡片类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'overlayStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '卡片样式',
            'en-US': 'overlayStyle',
          },
          tip: '卡片样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '气泡框位置',
            'en-US': 'placement',
          },
          tip: '气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'top',
      },
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '触发行为',
            'en-US': 'trigger',
          },
          tip: '触发行为，可选 hover/focus/click/contextmenu',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'hover',
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '用于手动控制浮层显隐',
            'en-US': 'v-model',
          },
          tip: '用于手动控制浮层显隐',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'destroyTooltipOnHide',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'destroyTooltipOnHide',
            'en-US': 'destroyTooltipOnHide',
          },
          tip: '隐藏后是否销毁 tooltip',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'align',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'align',
            'en-US': 'align',
          },
          tip: '该值将合并到 placement 的配置中，设置参考 dom-align',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onVisibleChange',
          description: '显示隐藏的回调',
          template:
            "onVisibleChange(extParams) {\n  // 显示隐藏的回调\n  console.log('onVisibleChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '文字提示',
      screenshot: './screenshots/tooltip.webp',
      schema: {
        componentName: 'ATooltip',
        props: {
          title: '标题',
          content: '内容',
        },
        children: [
          {
            componentName: 'AButton',
            props: {},
            children: '文字提示',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
