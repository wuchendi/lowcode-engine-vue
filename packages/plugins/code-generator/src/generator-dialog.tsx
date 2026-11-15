import { Button, Dialog, Message } from '@alifd/next'
import MonacoEditor from '@alilc/lowcode-plugin-base-monaco-editor'
import '@alilc/lowcode-plugin-base-monaco-editor/lib/style'
import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'
import type {
  AssetPackage,
  GeneratedProject,
  VueVersion,
} from '@cdlab996/lowcode-code-generator'
import {
  generateProject,
  materialPackages,
  toZip,
} from '@cdlab996/lowcode-code-generator'
import React, { useState } from 'react'
import type { Intl } from './locale'

const LANGUAGES: Record<string, string> = {
  vue: 'html',
  js: 'javascript',
  json: 'json',
  css: 'css',
  html: 'html',
  md: 'markdown',
  yaml: 'yaml',
}

const styles = {
  root: { display: 'flex', flexDirection: 'column', gap: 12, height: '70vh' },
  warnings: { margin: 0, paddingLeft: 16 },
  body: { display: 'flex', flex: 1, minHeight: 0, border: '1px solid #e6e6e6' },
  files: {
    width: 260,
    margin: 0,
    padding: '8px 0',
    overflow: 'auto',
    listStyle: 'none',
    borderRight: '1px solid #e6e6e6',
  },
  file: {
    padding: '4px 12px',
    cursor: 'pointer',
    fontSize: 12,
    whiteSpace: 'nowrap',
  },
  active: { background: '#e8f2ff', color: '#0079f2' },
  code: { flex: 1, minWidth: 0 },
} satisfies Record<string, React.CSSProperties>

function download(files: Record<string, string>, name: string) {
  const blob = new Blob([toZip(files) as BlobPart], { type: 'application/zip' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${name}.zip`
  link.click()
  // Revoking right away can cancel the download
  setTimeout(() => URL.revokeObjectURL(url))
}

export interface GeneratorButtonProps {
  ctx: IPublicModelPluginContext
  vue: VueVersion
  name: string
  intl: Intl
}

/** 出码: generates the project of the current schema, previews it and downloads it. */
export function GeneratorButton({
  ctx,
  vue,
  name,
  intl,
}: GeneratorButtonProps) {
  const [loading, setLoading] = useState(false)
  const [project, setProject] = useState<GeneratedProject | null>(null)
  const [current, setCurrent] = useState('')

  const generate = async () => {
    setLoading(true)
    try {
      const assets = (ctx.material.getAssets()?.packages ??
        []) as AssetPackage[]
      const result = await generateProject(
        ctx.project.exportSchema(IPublicEnumTransformStage.Save),
        { vue, packages: await materialPackages(assets), name, format: true },
      )
      const paths = Object.keys(result.files)
      setCurrent(
        paths.find((path) => path.startsWith('src/pages/')) ?? paths[0] ?? '',
      )
      setProject(result)
    } catch (error) {
      Message.error(
        intl('GenerateFailed', {
          message: error instanceof Error ? error.message : String(error),
        }),
      )
    } finally {
      setLoading(false)
    }
  }

  const paths = project ? Object.keys(project.files).sort() : []
  return (
    <>
      <Button loading={loading} onClick={() => void generate()}>
        {intl('Generate')}
      </Button>
      <Dialog
        title={intl('DialogTitle', { version: vue === 2 ? '2.7' : '3' })}
        visible={!!project}
        style={{ width: '90vw' }}
        onClose={() => setProject(null)}
        footer={
          <Button
            type="primary"
            onClick={() => project && download(project.files, name)}
          >
            {intl('DownloadZip')}
          </Button>
        }
      >
        {project && (
          <div className="lowcode-code-generator" style={styles.root}>
            {project.warnings.length > 0 && (
              <Message type="warning" title={intl('Warnings')}>
                <ul style={styles.warnings}>
                  {project.warnings.map((warning) => (
                    <li key={warning}>{warning}</li>
                  ))}
                </ul>
              </Message>
            )}
            <div style={styles.body}>
              <ul className="lowcode-code-generator-files" style={styles.files}>
                {paths.map((path) => (
                  <li
                    key={path}
                    style={
                      path === current
                        ? { ...styles.file, ...styles.active }
                        : styles.file
                    }
                    onClick={() => setCurrent(path)}
                  >
                    {path}
                  </li>
                ))}
              </ul>
              <div style={styles.code}>
                <MonacoEditor
                  key={current}
                  value={project.files[current] ?? ''}
                  language={
                    LANGUAGES[current.split('.').pop() ?? ''] ?? 'plaintext'
                  }
                  height="100%"
                  // The wrapper too: the editor's 100% refers to it
                  style={{ height: '100%' }}
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    // Follows the dialog size (it animates while opening)
                    automaticLayout: true,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </>
  )
}
