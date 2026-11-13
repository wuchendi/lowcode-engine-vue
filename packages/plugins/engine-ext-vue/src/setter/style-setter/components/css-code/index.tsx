import { Button } from '@alifd/next'
import MonacoEditor from '@alilc/lowcode-plugin-base-monaco-editor'
import type {
  IEditorInstance,
  IGeneralManacoEditorProps,
} from '@alilc/lowcode-plugin-base-monaco-editor/es/helper'
import * as React from 'react'
import Icon from '../../components/icon'
import { parseToCssCode, parseToStyleData } from '../../utils'
import type { StyleData } from '../../utils/types'
import { intlLocal } from './locale'

interface CodeProps {
  styleData: StyleData
  onStyleDataChange: (val: StyleData) => void
}

const cssConfig = intlLocal()

type EditorDidMount = NonNullable<IGeneralManacoEditorProps['editorDidMount']>

const defaultEditorOption = {
  readOnly: false,
  // automaticLayout: true,
  folding: true, // 默认开启折叠代码功能
  wordWrap: 'off',
  formatOnPaste: true,
  fontSize: 12,
  tabSize: 2,
  scrollBeyondLastLine: false,
  fixedOverflowWidgets: false,
  snippetSuggestions: 'top',
  minimap: {
    enabled: false,
  },
  options: {
    lineNumbers: 'off',
    fixedOverflowWidgets: true,
    automaticLayout: true,
    glyphMargin: false,
    folding: false,
    lineDecorationsWidth: 0,
    lineNumbersMinChars: 0,
    hover: {
      enabled: false,
    },
  },
  scrollbar: {
    horizontal: 'auto',
  },
}

export default class CssCode extends React.Component<CodeProps> {
  state = {
    cssCode: parseToCssCode(this.props.styleData),
    isCanSave: true,
    height: '100px',
  }

  componentDidUpdate(prevProps: CodeProps) {
    if (prevProps.styleData !== this.props.styleData) {
      this.setState({
        cssCode: parseToCssCode(this.props.styleData),
      })
    }
  }

  styleSave = () => {
    const { cssCode } = this.state
    const { onStyleDataChange } = this.props
    const newStyleData = parseToStyleData(cssCode)
    // 检查是否和原来的styleData完全相同
    if (newStyleData) {
      onStyleDataChange(newStyleData)
      this.setState({
        isCanSave: true,
      })
    }
  }

  updateCode = (newCode: string) => {
    this.setState({
      cssCode: newCode,
    })
    const newStyleData = parseToStyleData(newCode)
    if (newStyleData) {
      this.setState({
        isCanSave: false,
      })
    }
  }
  // 高度缓存
  prevHeight = 80
  render() {
    const { cssCode, isCanSave, height } = this.state
    const handleEditorMount: EditorDidMount = (monaco, instance) => {
      // a single (not diff) editor
      const editor = instance as Extract<
        IEditorInstance,
        { onDidBlurEditorWidget: unknown }
      >
      editor.onDidBlurEditorWidget(() => {
        this.styleSave()
      })
      editor.onDidChangeModelDecorations(() => {
        updateEditorHeight()
        // 控制刷新频率
        requestAnimationFrame(updateEditorHeight)
      })
      const updateEditorHeight = () => {
        const padding = 20
        const lineHeight = editor.getOption(
          monaco.editor.EditorOption.lineHeight,
        )
        const lineCount = editor.getModel()?.getLineCount() || 1
        const height = lineCount * lineHeight + padding
        if (this.prevHeight !== height) {
          this.prevHeight = height
          this.setState({ height: `${height}px` })
          editor.layout()
        }
      }
      // 挂载时先适配高度
      updateEditorHeight()
    }

    return (
      <div>
        <div
          style={{
            marginBottom: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Icon type="icon-CSS" />
          <Button
            type="primary"
            onClick={this.styleSave}
            disabled={isCanSave}
            size="small"
          >
            {cssConfig.save}
          </Button>
        </div>
        {this.state.cssCode && (
          <MonacoEditor
            value={cssCode}
            {...defaultEditorOption}
            {...{ language: 'css' }}
            onChange={(newCode: string) => this.updateCode(newCode)}
            editorDidMount={handleEditorMount}
            height={height}
          />
        )}
      </div>
    )
  }
}
