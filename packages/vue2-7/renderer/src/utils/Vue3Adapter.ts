import Vue, { h as createElement } from 'vue'
import type { AsyncComponent, Component } from 'vue/types/options'
import type { Slots } from 'vue/types/v3-setup-context'
import type { VNode } from 'vue/types/vnode'
import { toVNodeData } from '../core/vnode-data'

export function h(
  tag?:
    | string
    | Component<any, any, any, any>
    | AsyncComponent<any, any, any, any>
    | (() => Component),
  data?: Record<string, unknown>,
  children?: Slots,
) {
  if (typeof tag === 'string') {
    // Native elements ignore scopedSlots: render the default slot as children.
    return createElement(
      tag,
      toVNodeData(tag, data || {}),
      children?.default?.(),
    )
  }
  return createElement(tag, toVNodeData(tag, data || {}, children))
}

export function createTextVNode(text: string): VNode {
  /**
   * 使用 _v 方法创建文本节点
   *
   * 3.0 直接使用 vue 导出 createTextVNode 方法
   */
  return Vue.prototype._v(text)
}

export function toJS<T>(value: T): T {
  if (!value || typeof value !== 'object') {
    return value
  }
  if (Array.isArray(value)) {
    return value.map(toJS) as T
  }
  return JSON.parse(JSON.stringify(value))
  // if (isObservable(value)) {
  //   return toJSMobx(value);
  // }
  // return toJSMobx(value);
  // if (isObservable(value)) {
  //   return toJSMobx(value);
  // }
  // return Object.keys(value).reduce((previousValue, currentValue) => {
  //   // @ts-ignore
  //   previousValue[currentValue] = toJS(value[currentValue]);
  //   return previousValue;
  // }, {} as T);
}
