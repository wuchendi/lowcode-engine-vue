import { common } from '@alilc/lowcode-engine'
import type {
  IPublicModelSettingField,
  IPublicModelSettingTopEntry,
  IPublicTypeCustomView,
  IPublicTypeTitleContent,
} from '@alilc/lowcode-types'
import type { ComponentType, Context, ReactNode } from 'react'

/**
 * Engine internals reached through `common.*Cabin`. The engine's public
 * typings do not describe them; these are the members this package uses.
 */

type IntlParams = Record<string, unknown>

export interface PopupPipe {
  send(content: ReactNode, title: ReactNode): void
  show(target: Element, actionKey?: string): void
}

export interface PopupContextValue {
  create(props: { width?: number; canCloseByOutSideClick?: boolean }): PopupPipe
}

interface EditorCabin {
  Title: ComponentType<{
    title: IPublicTypeTitleContent | undefined
    className?: string
    onClick?: () => void
  }>
  createIntl(messages: Record<string, Record<string, string>>): {
    intl(id: string, params?: IntlParams): string
    intlNode(id: string, params?: IntlParams): ReactNode
    getLocale(): string
    setLocale(locale: string): void
  }
  createSetterContent(
    setter: unknown,
    props: Record<string, unknown>,
  ): ReactNode
  shallowIntl(data: object): Record<string, unknown>
  /** mobx `observer`, as a legacy class decorator */
  observer<T>(target: T): T
  /** mobx `observable`, as a legacy property decorator */
  obx: PropertyDecorator & { ref: PropertyDecorator }
  /** mobx `computed`, as a legacy method decorator */
  computed: MethodDecorator
}

interface SkeletonCabin {
  createSettingFieldView(
    item: IPublicModelSettingField | IPublicTypeCustomView,
    field: IPublicModelSettingField | IPublicModelSettingTopEntry,
    index?: number,
  ): ReactNode
  PopupContext: Context<PopupContextValue>
}

interface DesignerCabin {
  isSettingField(item: unknown): item is IPublicModelSettingField
}

export const editorCabin: EditorCabin = common.editorCabin as never
export const skeletonCabin: SkeletonCabin = common.skeletonCabin as never
export const designerCabin: DesignerCabin = common.designerCabin as never
