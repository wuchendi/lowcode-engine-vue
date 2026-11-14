const PARSERS: Record<string, string> = {
  vue: 'vue',
  js: 'babel',
  json: 'json',
  html: 'html',
  css: 'css',
}

/** Formats the files with prettier (loaded on demand); keeps a file as is when it fails. */
export async function formatFiles(
  files: Record<string, string>,
  warn: (message: string) => void,
): Promise<Record<string, string>> {
  const [prettier, babel, estree, html, postcss] = await Promise.all([
    import('prettier/standalone'),
    import('prettier/plugins/babel'),
    import('prettier/plugins/estree'),
    import('prettier/plugins/html'),
    import('prettier/plugins/postcss'),
  ])
  const plugins = [babel, estree, html, postcss]
  const result: Record<string, string> = {}
  for (const [path, content] of Object.entries(files)) {
    const parser = PARSERS[path.split('.').pop() ?? '']
    if (!parser) {
      result[path] = content
      continue
    }
    try {
      result[path] = await prettier.format(content, {
        parser,
        plugins,
        singleQuote: true,
      })
    } catch (error) {
      warn(
        `Could not format ${path}: ${error instanceof Error ? error.message.split('\n')[0] : error}`,
      )
      result[path] = content
    }
  }
  return result
}
