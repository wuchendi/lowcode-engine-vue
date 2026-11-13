/** Vue version the designer runs, from `?vue=2` / `?vue=3` (default 3). */
export type VueVersion = 2 | 3

export const vueVersion: VueVersion =
  new URLSearchParams(window.location.search).get('vue') === '2' ? 2 : 3

/** Runtime files served under `/runtime/vue{2,3}/` (see vite.config.ts). */
export const runtime = {
  vue: `/runtime/vue${vueVersion}/vue.js`,
  renderer: `/runtime/vue${vueVersion}/renderer.js`,
  simulator: `/runtime/vue${vueVersion}/simulator.js`,
  simulatorCss: `/runtime/vue${vueVersion}/simulator.css`,
}

/** localStorage key scoped to the Vue version. */
export const storageKey = (name: string) => `${name}:vue${vueVersion}`
