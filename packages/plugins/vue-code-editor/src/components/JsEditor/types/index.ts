export interface ExtraLib {
  path: string
  content: string
}

/** Vue version the edited code targets. */
export type VueVersion = 2 | 3

/** Type declarations of Vue and vue-router for the editor. */
export async function loadVueTypes(version: VueVersion): Promise<ExtraLib[]> {
  if (version === 2) return (await import('./vue2')).default
  const [{ default: vue }, { default: vueRouter }] = await Promise.all([
    import('./vue'),
    import('./vue-router'),
  ])
  return [
    { path: 'file:///vue.d.ts', content: vue },
    { path: 'file:///vue-router.d.ts', content: vueRouter },
  ]
}
