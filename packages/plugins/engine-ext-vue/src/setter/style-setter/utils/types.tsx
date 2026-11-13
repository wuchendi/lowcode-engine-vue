/** CSS properties of the node (camelCase keys). */
export type StyleData = Record<string, string | number | undefined>

/** A change of one CSS property; `null` or `undefined` removes it. */
export interface StyleChange {
  styleKey: string
  value: string | number | null | undefined
}

export interface RadioItem {
  value: string
  icon?: string
  title?: string
  tips?: string
}

export type onStyleChange = (styleDataList: StyleChange[]) => void
