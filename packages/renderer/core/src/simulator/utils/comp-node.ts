import type { ComponentInstance } from '../../adapter'
import { isObject } from './check'

const SYMBOL_VDID = Symbol('_LCDocId')
const SYMBOL_VNID = Symbol('_LCNodeId')
const SYMBOL_VInstance = Symbol('_LCVueInstance')
const SYMBOL_RECORD_FLAG = Symbol('_LCVueCompRecord')

export interface CompRootHTMLElement extends HTMLElement {
  [SYMBOL_VDID]: string
  [SYMBOL_VNID]: string
  [SYMBOL_VInstance]: ComponentInstance
}

export interface CompRootData {
  docId: string
  nodeId: string
  instance: ComponentInstance
}

export class ComponentRecord {
  [SYMBOL_RECORD_FLAG] = true
  constructor(
    public did: string,
    public nid: string,
    public cid: number,
  ) {}
}

export function isCompRootHTMLElement(
  el: Element | null | undefined,
): el is CompRootHTMLElement {
  return isObject(el) && SYMBOL_VDID in el
}

export function isComponentRecord(el: unknown): el is ComponentRecord {
  return isObject(el) && SYMBOL_RECORD_FLAG in el
}

export function getCompRootData(el: CompRootHTMLElement): CompRootData {
  return {
    docId: el[SYMBOL_VDID],
    nodeId: el[SYMBOL_VNID],
    instance: el[SYMBOL_VInstance],
  }
}

/** Marks `el` as the root element of a component instance. */
export function setCompRootData(
  el: HTMLElement,
  data: CompRootData,
): asserts el is CompRootHTMLElement {
  const root = el as CompRootHTMLElement
  root[SYMBOL_VDID] = data.docId
  root[SYMBOL_VNID] = data.nodeId
  root[SYMBOL_VInstance] = data.instance
}
