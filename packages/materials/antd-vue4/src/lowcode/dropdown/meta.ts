import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (dropdown); see https://antdv.com/components/dropdown-cn
const meta = {
  componentName: 'ADropdown',
  title: '下拉菜单',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://antdv.com/components/dropdown-cn',
  devMode: 'proCode',
  configure: {
    props: [
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
      {
        name: 'arrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉框箭头是否显示',
            'en-US': 'arrow',
          },
          tip: '下拉框箭头是否显示',
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
        name: 'destroyPopupOnHide',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'destroyPopupOnHide',
            'en-US': 'destroyPopupOnHide',
          },
          tip: '关闭后是否销毁 Dropdown',
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
            'zh-CN': '菜单是否禁用',
            'en-US': 'disabled',
          },
          tip: '菜单是否禁用',
        },
        setter: 'BoolSetter',
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
        name: 'overlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单',
            'en-US': 'overlay',
          },
          tip: '菜单',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'overlayClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉根元素的类名称',
            'en-US': 'overlayClassName',
          },
          tip: '下拉根元素的类名称',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'overlayStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉根元素的样式',
            'en-US': 'overlayStyle',
          },
          tip: '下拉根元素的样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
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
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'bottomLeft',
      },
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '触发下拉的行为',
            'en-US': 'trigger',
          },
          tip: '触发下拉的行为, 移动端不支持 hover',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'v-model:open',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单是否显示',
            'en-US': 'v-model:open',
          },
          tip: '菜单是否显示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onOpenChange',
          description:
            '菜单显示状态改变时调用，参数为 visible。点击菜单按钮导致的消失不会触发',
          template:
            "onOpenChange(extParams) {\n  // 菜单显示状态改变时调用，参数为 visible。点击菜单按钮导致的消失不会触发\n  console.log('onOpenChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '下拉菜单',
      screenshot: './screenshots/dropdown.webp',
      schema: {
        componentName: 'ADropdown',
        props: {
          overlay: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'AMenu',
                props: {},
                children: [
                  {
                    componentName: 'AMenuItem',
                    props: {
                      key: '1',
                    },
                    children: '菜单一',
                  },
                  {
                    componentName: 'AMenuItem',
                    props: {
                      key: '2',
                    },
                    children: '菜单二',
                  },
                ],
              },
            ],
          },
        },
        children: [
          {
            componentName: 'AButton',
            props: {},
            children: '下拉菜单',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
