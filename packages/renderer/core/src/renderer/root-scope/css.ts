import { onBeforeUnmount, watch } from 'vue'
import type { RendererProps } from '../base'

export function useRootCss(rendererProps: RendererProps) {
  // The style element managed by this page
  let style: HTMLStyleElement | null = null

  const removeStyle = () => {
    style?.parentElement?.removeChild(style)
    style = null
  }

  // 处理 css
  const apply = ([id, css]: [string | undefined, string | undefined]) => {
    if (style && style.getAttribute('data-id') !== (id ?? null)) {
      removeStyle()
    }
    if (id) {
      style = document.querySelector(`style[data-id="${id}"]`)
    }
    if (css) {
      if (!style) {
        style = document.createElement('style')
        if (id) {
          style.setAttribute('data-id', id)
        }
        const head = document.head || document.getElementsByTagName('head')[0]
        head.appendChild(style)
      }
      if (style.innerHTML !== css) {
        style.innerHTML = css
      }
    } else if (style) {
      removeStyle()
    }
  }

  watch(
    () =>
      [rendererProps.__schema?.id, rendererProps.__schema?.css] as [
        string | undefined,
        string | undefined,
      ],
    apply,
    { immediate: true },
  )

  onBeforeUnmount(removeStyle)
}
