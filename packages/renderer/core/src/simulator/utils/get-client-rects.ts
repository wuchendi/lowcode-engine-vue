import { isElement } from '../../shared'

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
