/**
 * Self-hosted Monaco (monaco-editor's AMD build, copied by vite.config.mts).
 * Absolute: the language workers resolve it too.
 */
const VS = new URL('/runtime/monaco/vs', window.location.href).href

interface AmdRequire {
  (
    deps: string[],
    onLoad: (monaco: unknown) => void,
    onError: (error: unknown) => void,
  ): void
  config(options: { paths: Record<string, string> }): void
}

/**
 * Loads Monaco into `window.monaco`. Every copy of `@monaco-editor/loader`
 * (the code editors of the plugins and setters) reuses it instead of
 * loading the old Monaco of its default CDN.
 */
export function loadMonaco(): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `${VS}/loader.js`
    script.onerror = reject
    script.onload = () => {
      const require = (window as unknown as { require: AmdRequire }).require
      require.config({ paths: { vs: VS } })
      require(['vs/editor/editor.main'], (monaco) => {
        ;(window as unknown as { monaco: unknown }).monaco = monaco
        resolve()
      }, reject)
    }
    document.body.appendChild(script)
  })
}
