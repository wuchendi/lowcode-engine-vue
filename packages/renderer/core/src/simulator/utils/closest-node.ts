import type { IPublicTypeNodeInstance } from '@alilc/lowcode-types'
import type { ComponentInstance } from '../../adapter'
import { getAdapter } from '../../adapter'
import {
  ComponentRecord,
  getCompRootData,
  isCompRootHTMLElement,
} from './comp-node'

export function getClosestNodeInstance(
  el: Element,
  specId: string | undefined,
): IPublicTypeNodeInstance<ComponentRecord> | null {
  if (!document.contains(el)) {
    console.warn('当前元素已经不存在', el)
    return null
  }
  return getClosestNodeInstanceByElement(el, specId)
}

export function getClosestNodeInstanceByComponent(
  instance: ComponentInstance | null,
  specId: string | undefined,
): IPublicTypeNodeInstance<ComponentRecord> | null {
  while (instance) {
    const el = instance.$el as Element
    if (el && isCompRootHTMLElement(el)) {
      const { nodeId, docId, instance } = getCompRootData(el)
      if (!specId || specId === nodeId) {
        return {
          docId,
          nodeId,
          instance: new ComponentRecord(
            docId,
            nodeId,
            getAdapter().instanceId(instance),
          ),
        }
      }
    }
    instance = instance.$parent
  }
  return null
}

export function getClosestNodeInstanceByElement(
  el: Element,
  specId: string | undefined,
): IPublicTypeNodeInstance<ComponentRecord> | null {
  while (el) {
    if (isCompRootHTMLElement(el)) {
      const { nodeId, docId, instance } = getCompRootData(el)
      if (!specId || specId === nodeId) {
        return {
          docId,
          nodeId,
          instance: new ComponentRecord(
            docId,
            nodeId,
            getAdapter().instanceId(instance),
          ),
        }
      }
    }
    el = el.parentElement as Element
  }
  return null
}
