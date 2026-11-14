export interface JSExpression {
  type: 'JSExpression'
  value: string
}
export interface JSFunction {
  type: 'JSFunction'
  value: string
}
export interface I18nData {
  type: 'i18n'
  key: string
  params?: Record<string, unknown>
}
export interface JSSlot {
  type: 'JSSlot'
  value?: unknown
  params?: string[]
  name?: string
}

const typed =
  <T>(type: string) =>
  (value: unknown): value is T =>
    !!value &&
    typeof value === 'object' &&
    (value as { type?: unknown }).type === type

export const isJSExpression = typed<JSExpression>('JSExpression')
export const isJSFunction = typed<JSFunction>('JSFunction')
export const isI18nData = typed<I18nData>('i18n')
export const isJSSlot = typed<JSSlot>('JSSlot')

export const isPlainObject = (
  value: unknown,
): value is Record<string, unknown> =>
  !!value && typeof value === 'object' && !Array.isArray(value)

const IDENTIFIER = /^[A-Za-z_$][\w$]*$/

export interface CodeOptions {
  /** Code of a schema expression. */
  expression?: (code: string) => string
  /** Code of a schema function. */
  fn?: (code: string) => string
}

/** A schema value as JavaScript code. */
export function toCode(value: unknown, options: CodeOptions = {}): string {
  const { expression = (code) => code, fn = (code) => code } = options
  if (isJSExpression(value)) return expression(value.value)
  if (isJSFunction(value)) return fn(value.value)
  if (isI18nData(value)) {
    const params = value.params ? `, ${toCode(value.params, options)}` : ''
    const key = value.key.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
    return `i18n('${key}'${params})`
  }
  if (Array.isArray(value)) {
    return `[${value.map((item) => toCode(item, options)).join(', ')}]`
  }
  if (isPlainObject(value)) {
    const entries = Object.entries(value).map(
      ([key, item]) =>
        `${IDENTIFIER.test(key) ? key : JSON.stringify(key)}: ${toCode(item, options)}`,
    )
    return entries.length ? `{ ${entries.join(', ')} }` : '{}'
  }
  return value === undefined ? 'undefined' : JSON.stringify(value)
}

/** `home-page` -> `HomePage`. */
export function pascalCase(name: string) {
  return name
    .replace(/[^\w$]+(.)?/g, (_, char: string | undefined) =>
      char ? char.toUpperCase() : '',
    )
    .replace(/^./, (char) => char.toUpperCase())
}
