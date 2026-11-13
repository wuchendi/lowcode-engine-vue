import type { ComponentMetadata } from '@alilc/lowcode-types'

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

const ElCol: ComponentMetadata = {
  title: '栅格-列',
  group: '基础组件',
  category: 'Element 组件',
  priority: 1006,
  hidden: true,
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/layout',
  componentName: 'ElCol',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Col',
    destructuring: true,
  },
  configure: {
    props: [
      {
        type: 'group',
        name: '布局样式',
        display: 'block',
        items: [
          {
            name: 'span',
            title: {
              label: '占据列数',
              tip: '栅格占据的列数（0 - 24 列）',
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
            defaultValue: 6,
          },
          {
            name: 'offset',
            title: {
              label: '栅格左侧的间隔格数',
              tip: '栅格左侧的间隔格数',
            },
            setter: 'NumberSetter',
          },
          {
            name: 'push',
            title: {
              label: '向右移动',
              tip: '栅格向右移动格数',
            },
            setter: 'NumberSetter',
            defaultValue: 0,
          },
          {
            name: 'pull',
            title: {
              label: '向左移动',
              tip: '栅格向左移动格数',
            },
            setter: 'NumberSetter',
            defaultValue: 0,
          },
        ],
      },
    ],
    supports: {
      loop: true,
      condition: true,
      style: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['ElRow'],
      },
    },
    advanced: {
      getResizingHandlers: () => {
        return ['E']
      },
      // https://github.com/alibaba/lowcode-engine/issues/632
      callbacks: {
        onResizeStart: (e, currentNode) => {
          const parent = currentNode.parent
          if (parent) {
            const parentNode = parent.getDOMNode()
            if (parentNode) {
              // 通过 getBoundingClientRect 可以获取到 Node 渲染出来的 DOM 的相关信息，包括 x、y、width、height 等
              currentNode.parentRect = parentNode.getBoundingClientRect()
            }
          }
          currentNode.beforeSpan = currentNode.getPropValue('span') || 24
          currentNode.startRect = currentNode.getRect() // 节点的尺寸、位置信息
        },
        onResize: (e, currentNode) => {
          const { deltaX } = e
          const startWidth = currentNode.startRect
            ? currentNode.startRect.width
            : currentNode.beforeSpan * (currentNode.parentRect.width / 24)
          let width = startWidth + deltaX
          if (!currentNode.startRect) {
            currentNode.startRect = { width }
          }
          width = clamp(width, 0, currentNode.parentRect.width)
          const allowMoveX = Math.round(width - startWidth) // 实际被允许的x轴移动
          currentNode.moveColumn = Math.round(
            allowMoveX / (currentNode.parentRect.width / 24),
          )
          // 计算移动距离所占的列
          if (allowMoveX > 0) {
            currentNode.moveColumn++
          } else {
            currentNode.moveColumn--
          }
          currentNode.targetColumn = clamp(
            currentNode.beforeSpan + currentNode.moveColumn,
            1,
            24,
          )
          const dom = currentNode.getDOMNode()
          dom.style.width = `${Math.round(width)}px`
          dom.style.flex = 'none'
          dom.style.maxWidth = '100%'
        },
        onResizeEnd: (e, currentNode) => {
          currentNode.getDOMNode().style.cssText = ''
          currentNode.targetColumn = clamp(currentNode.targetColumn, 1, 24)
          currentNode.setPropValue('span', currentNode.targetColumn)
        },
      },
    },
  },
  snippets: [
    {
      screenshot:
        'https://helios-allpublic-1257616148.cos.ap-shanghai.myqcloud.com/img/card.png',
      title: '栅格-列',
      schema: {
        componentName: 'ElCol',
        children: [],
      },
    },
  ],
}

export default ElCol
