import { parse, parseExpressionAt } from 'acorn'
import MagicString from 'magic-string'

export interface AstNode {
  type: string
  start: number
  end: number
  [key: string]: any
}

/** Visits every node; `enter` returns `false` to skip the children. */
export function walk(
  node: AstNode,
  enter: (node: AstNode, parent: AstNode | null) => boolean | void,
  parent: AstNode | null = null,
) {
  if (enter(node, parent) === false) return
  for (const key of Object.keys(node)) {
    const value = node[key]
    const children = Array.isArray(value) ? value : [value]
    for (const child of children) {
      if (child && typeof child.type === 'string') walk(child, enter, node)
    }
  }
}

export function parseModule(code: string) {
  return parse(code, {
    ecmaVersion: 'latest',
    sourceType: 'module',
  }) as unknown as AstNode
}

/**
 * A schema expression for a template: `this.a.b` becomes `a.b` (templates
 * read the instance without `this`). Returns `null` when it does not parse.
 */
export function templateExpression(expr: string): string | null {
  const source = `(${expr})`
  let ast: AstNode
  try {
    ast = parseExpressionAt(source, 0, {
      ecmaVersion: 'latest',
    }) as unknown as AstNode
  } catch {
    return null
  }
  const s = new MagicString(source)
  // Vue templates take arrow functions only: `function (a) {}` -> `(a) => {}`
  if (ast.type === 'FunctionExpression' && !ast.generator) {
    const params = ast.params.map((p: AstNode) => source.slice(p.start, p.end))
    s.overwrite(
      ast.start,
      ast.body.start,
      `${ast.async ? 'async ' : ''}(${params.join(', ')}) => `,
    )
  }
  walk(ast, (node) => {
    if (
      node.type === 'MemberExpression' &&
      node.object.type === 'ThisExpression' &&
      !node.computed
    ) {
      s.remove(node.object.start, node.property.start)
    }
  })
  return s.toString().slice(1, -1).trim()
}

/** Instance context provided by the generated page context. */
export const CONTEXT_KEYS = [
  'dataSourceMap',
  'reloadDataSource',
  'utils',
  'constants',
  'i18n',
]

/**
 * In `setup()` (which has no `this`), rewrites `this.<context>` to
 * `<target>.<context>`; arrow functions keep `this`, other functions are
 * skipped. Returns whether anything was rewritten.
 */
export function rewriteSetupContext(
  s: MagicString,
  setupBody: AstNode,
  target: string,
): boolean {
  let rewritten = false
  walk(setupBody, (node) => {
    if (
      node !== setupBody &&
      (node.type === 'FunctionExpression' ||
        node.type === 'FunctionDeclaration')
    ) {
      return false
    }
    if (
      node.type === 'MemberExpression' &&
      node.object.type === 'ThisExpression' &&
      !node.computed &&
      CONTEXT_KEYS.includes(node.property.name)
    ) {
      s.overwrite(node.object.start, node.object.end, target)
      rewritten = true
    }
  })
  return rewritten
}
