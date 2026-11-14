const COMPONENT_NAME = /^[A-Z][A-Za-z0-9]*$/

interface ComponentRoot {
  componentName: string
  fileName?: string
  title?: unknown
  lifeCycles?: Record<string, unknown>
  [key: string]: unknown
}

/** Message key of why a component cannot be named `name`, or null. */
export function componentNameError(
  name: string,
  taken: string[],
): 'ComponentNameInvalid' | 'ComponentNameTaken' | null {
  if (!COMPONENT_NAME.test(name)) return 'ComponentNameInvalid'
  if (taken.includes(name)) return 'ComponentNameTaken'
  return null
}

/** An empty low-code component named `name`. */
export function newComponentSchema(name: string) {
  return {
    componentName: 'Component',
    fileName: name,
    props: {},
    title: name,
    children: [],
  }
}

/** Names of the props the component declares (`initProps`). */
export function declaredPropNames(root: ComponentRoot): string[] {
  const initProps = root.lifeCycles?.initProps as
    | { type?: string; value?: string }
    | undefined
  if (!initProps?.value) return []
  try {
    const props = new Function(`return (${initProps.value})`)()
    if (Array.isArray(props)) return props.filter((p) => typeof p === 'string')
    return props && typeof props === 'object' ? Object.keys(props) : []
  } catch {
    return []
  }
}

/**
 * The engine assets description of a low-code component: its schema, a
 * snippet and a setter for each declared prop.
 */
export function componentDescription(root: ComponentRoot, group: string) {
  const name = root.fileName ?? root.componentName
  const title = typeof root.title === 'string' && root.title ? root.title : name
  return {
    componentName: name,
    title,
    group,
    category: group,
    devMode: 'lowCode' as const,
    schema: { componentsTree: [root] },
    snippets: [{ title, schema: { componentName: name } }],
    configure: {
      props: declaredPropNames(root).map((prop) => ({
        name: prop,
        title: prop,
        setter: [
          'StringSetter',
          'NumberSetter',
          'BoolSetter',
          'JsonSetter',
          'VariableSetter',
        ],
      })),
      component: { isContainer: false },
    },
  }
}
