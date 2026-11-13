import { isElement } from '@cdlab996/lowcode-utils2.7'

// a range for test TextNode clientRect
let cycleRange: Range | undefined

export function getClientRects(node: Element | Text) {
  if (!node.parentNode) return []

  if (isElement(node)) {
    return [node.getBoundingClientRect()]
  }

  cycleRange ??= document.createRange()
  cycleRange.selectNode(node)
  return Array.from(cycleRange.getClientRects())
}
