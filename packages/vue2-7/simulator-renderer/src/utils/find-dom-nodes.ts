import type { ComponentInstance } from '../interface'
import { isEmptyNode } from './check-node'

export function findDOMNodes(
  instance: ComponentInstance,
): (Element | Text)[] | null {
  const el: Element | Text | Comment = instance.$el
  // Vue 2 components have a single root; a comment root means nothing rendered.
  if (!el || isEmptyNode(el)) return null
  return [el as Element | Text]
}
