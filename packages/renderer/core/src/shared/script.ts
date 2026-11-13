import { createDefer } from './create-defer'

export function evaluate(script: string) {
  const scriptEl = document.createElement('script')
  scriptEl.text = script
  document.head.appendChild(scriptEl)
  document.head.removeChild(scriptEl)
}

export function load(url: string) {
  const node = document.createElement('script')

  node.onload = onload
  node.onerror = onload

  const i = createDefer()

  function onload(e: Event | string) {
    node.onload = null
    node.onerror = null
    if (typeof e !== 'string' && e.type === 'load') {
      i.resolve()
    } else {
      i.reject()
    }
  }

  node.src = url
  node.async = false

  document.head.appendChild(node)

  return i.promise()
}
