const IDENT = /[A-Za-z0-9_$]/
const IDENT_START = /[A-Za-z_$]/
const DIGIT = /[0-9]/
// Keywords after which a `/` starts a regex literal rather than a division
const REGEX_KEYWORDS = new Set([
  'return',
  'typeof',
  'case',
  'in',
  'of',
  'delete',
  'void',
  'instanceof',
  'new',
  'throw',
  'do',
  'else',
  'yield',
  'await',
])

/**
 * Replaces the `this` token in executable code with `name`, leaving string
 * literals, template text, comments and regex literals untouched. Template
 * substitutions (`${ ... }`, nested to any depth) are treated as code.
 */
export function rewriteThis(source: string, name: string): string {
  const len = source.length
  let out = ''
  let i = 0
  let regexAllowed = true
  // One entry per open template substitution: unmatched `{` count inside it
  const templates: number[] = []

  const copyUntil = (end: number) => {
    out += source.slice(i, end)
    i = end
  }

  // Copies template text from `i` (just after "`" or "}") up to and including
  // the closing "`" or the next "${"; returns true if a substitution opened
  const scanTemplateText = () => {
    let j = i
    while (j < len) {
      const ch = source[j]
      if (ch === '\\') {
        j += 2
      } else if (ch === '`') {
        copyUntil(j + 1)
        return false
      } else if (ch === '$' && source[j + 1] === '{') {
        copyUntil(j + 2)
        templates.push(0)
        return true
      } else {
        j++
      }
    }
    copyUntil(len)
    return false
  }

  while (i < len) {
    const ch = source[i]
    const next = source[i + 1]

    if (ch === '/' && next === '/') {
      const end = source.indexOf('\n', i)
      copyUntil(end === -1 ? len : end)
    } else if (ch === '/' && next === '*') {
      const end = source.indexOf('*/', i + 2)
      copyUntil(end === -1 ? len : end + 2)
    } else if (ch === '/' && regexAllowed) {
      let j = i + 1
      let inClass = false
      while (j < len && source[j] !== '\n') {
        const c = source[j]
        if (c === '\\') j++
        else if (c === '[') inClass = true
        else if (c === ']') inClass = false
        else if (c === '/' && !inClass) break
        j++
      }
      j++
      while (j < len && IDENT.test(source[j])) j++
      copyUntil(Math.min(j, len))
      regexAllowed = false
    } else if (ch === '"' || ch === "'") {
      let j = i + 1
      while (j < len && source[j] !== ch && source[j] !== '\n') {
        if (source[j] === '\\') j++
        j++
      }
      copyUntil(Math.min(j + 1, len))
      regexAllowed = false
    } else if (ch === '`') {
      i++
      out += ch
      regexAllowed = scanTemplateText()
    } else if (
      ch === '}' &&
      templates.length > 0 &&
      templates[templates.length - 1] === 0
    ) {
      templates.pop()
      i++
      out += ch
      regexAllowed = scanTemplateText()
    } else if (IDENT_START.test(ch) || DIGIT.test(ch)) {
      let j = i + 1
      while (j < len && IDENT.test(source[j])) j++
      const word = source.slice(i, j)
      i = j
      if (word === 'this') {
        out += name
        regexAllowed = false
      } else {
        out += word
        regexAllowed = REGEX_KEYWORDS.has(word)
      }
    } else {
      if (ch === '{' && templates.length > 0) templates[templates.length - 1]++
      else if (ch === '}' && templates.length > 0)
        templates[templates.length - 1]--
      if (!/\s/.test(ch))
        regexAllowed = !(ch === ')' || ch === ']' || ch === '}')
      out += ch
      i++
    }
  }
  return out
}
