import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import snippets from './snippets'

const meta: IPublicTypeComponentMetadata = {
  title: '徽章(徽标数)',
  group: 'Antd 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/anchor-cn/',
  componentName: 'ABadge',
  // npm: {
  //   destructuring: true,
  //   componentName: 'ABadge',
  // },
  configure: {
    props: [
      {
        name: 'default',
        title: '自定义渲染',
        setter: {
          componentName: 'SlotSetter',

          initialValue: {
            type: 'JSSlot',
            params: ['slotProps'],
            value: [],
          },
        },
      },
      {
        name: 'color',
        title: { label: '圆点颜色', tip: '自定义小圆点的颜色' },
        setter: {
          componentName: 'ColorSetter',
          // componentName: 'StyleSetter',
        },
      },
      {
        name: 'count',
        title: {
          label: '展示数字',
          tip: '展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              title: '',
              value: [],
            },
          },
        ],
      },
      {
        name: 'dot',
        title: {
          label: '展示圆点',
          tip: '不展示数字，只有一个小红点',
        },
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      // {
      //   name: 'offset',
      //   title: {
      //     label: '圆点偏移',
      //     tip: '设置状态点的位置偏移 [number, number]',
      //   },
      //   setter: {
      //     componentName: 'NumberSetter',
      //   },
      //   // TODO: 无法设置数组类型
      //   // propType: { type: 'arrayOf', value: 'number' },
      // },
      {
        name: 'overflowCount',
        title: { label: '封顶值', tip: '展示封顶的数字值' },
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        name: 'showZero',
        title: {
          label: '展示零值',
          tip: '当数值为 0 时，是否展示 Badge',
        },
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'status',
        title: { label: '状态', tip: '设置 Badge 为状态点' },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'processing',
                value: 'processing',
              },
              {
                title: 'default',
                value: 'default',
              },
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
      },
      {
        name: 'text',
        title: {
          label: '状态文本',
          tip: '在设置了 `status` 的前提下有效，设置状态点的文本',
        },
        condition(target) {
          return !!target.getProps().getPropValue('status')
        },
        setter: {
          componentName: 'StringSetter',
        },
      },
      // {
      //   name: 'numberStyle',
      //   title: {
      //     label: '设置状态点的样式',
      //     tip: '设置状态点的样式',
      //   },
      //   setter: {
      //     componentName: 'StyleSetter',
      //   },
      // },
      {
        name: 'title',
        title: {
          label: '悬浮提示',
          tip: '设置鼠标放在状态点上时显示的文字',
        },
        setter: {
          componentName: 'StringSetter',
        },
      },
    ],
    supports: {
      style: true,
    },
  },
  snippets,
}

export default meta
