import MonacoEditor from '@alilc/lowcode-plugin-base-monaco-editor'
import type {
  IPublicApiMaterial,
  IPublicTypeRootSchema,
} from '@alilc/lowcode-types'
import type { Monaco } from '@monaco-editor/loader'
import type { editor as Editor } from 'monaco-editor'
import PropTypes from 'prop-types'
import type { MutableRefObject } from 'react'
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import '@alilc/lowcode-plugin-base-monaco-editor/lib/style'

import type { IEditorInstance } from '@alilc/lowcode-plugin-base-monaco-editor/lib/helper'
import { generate } from 'short-uuid'
import { isFunction } from '../../utils'
import type { FunctionEventParams } from './insert'
import { insertFunction } from './insert'
import { parseCode } from './parse'
import type { VueVersion } from './types'
import { loadVueTypes } from './types'

export type { FunctionEventParams } from './insert'

export interface JsEditorProps {
  jsCode?: string
  material: IPublicApiMaterial
  /** Vue version the code targets; selects the type declarations. */
  vue: VueVersion
}

export interface JsEditorInst {
  code: MutableRefObject<string>
  monaco: MutableRefObject<Monaco>
  addFunction(params: FunctionEventParams): void
  focusByFunctionName(name: string): void
  transformSchema(
    rawSchema: IPublicTypeRootSchema,
  ): IPublicTypeRootSchema | void
}

function getLibraryMap(material: IPublicApiMaterial) {
  const packages = material.getAssets()?.packages ?? []
  const packageMap: Record<string, string> = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
  }
  packages.forEach(({ package: _pkg, library }) => {
    if (_pkg) {
      packageMap[_pkg] = library
    }
  })
  return packageMap
}

const JsEditor = forwardRef<JsEditorInst, JsEditorProps>((props, ref) => {
  const monacoRef = useRef<Monaco>()
  const editorRef = useRef<Editor.ICodeEditor>()
  const codeRef = useRef<string>(props.jsCode || '')

  const [instance] = useState<JsEditorInst>(() => ({
    code: codeRef as MutableRefObject<string>,
    monaco: monacoRef as MutableRefObject<Monaco>,
    transformSchema(
      rawSchema: IPublicTypeRootSchema,
    ): IPublicTypeRootSchema | void {
      const code = codeRef.current
      const {
        state: _state,
        methods: _methods,
        lifeCycles: _lifeCycles,
        ...rest
      } = rawSchema
      const transformed: IPublicTypeRootSchema = { ...rest }
      const libraryMap = getLibraryMap(props.material)
      const { state, methods, lifeCycles, setupBindings } = parseCode(
        transformed.id || (transformed.id = generate()),
        code,
        libraryMap,
      )

      if (Object.keys(state).length > 0) transformed.state = state
      if (Object.keys(methods).length > 0) transformed.methods = methods
      if (Object.keys(lifeCycles).length > 0)
        transformed.lifeCycles = lifeCycles

      const meta = transformed.meta ?? (transformed.meta = {})
      meta.originCode = code
      // Bindings of setup(), for the designer's binding dialogs
      if (
        setupBindings.methods.length > 0 ||
        Object.keys(setupBindings.state).length > 0
      ) {
        meta.setupBindings = setupBindings
      } else {
        meta.setupBindings = undefined
      }
      return transformed
    },
    focusByFunctionName(name: string) {
      const { current: monacoEditor } = editorRef
      const model = monacoEditor?.getModel()
      const matchedResult =
        model &&
        'findMatches' in model &&
        model.findMatches(
          `^\\s*(?:async\\s+)?(?:function\\s+)?${name}\\s*\\([\\s\\S]*\\)[\\s\\S]*\\{`,
          false,
          true,
          false,
          null,
          false,
        )?.[0]
      if (matchedResult) {
        setTimeout(() => {
          if (monacoEditor) {
            monacoEditor.revealLineInCenter(matchedResult.range.startLineNumber)
            monacoEditor.setPosition({
              column: matchedResult.range.endColumn,
              lineNumber: matchedResult.range.endLineNumber,
            })
            monacoEditor.focus()
          }
        }, 100)
      }
    },
    addFunction(params: FunctionEventParams) {
      const model = editorRef.current?.getModel()
      if (!model) return
      model.setValue(insertFunction(codeRef.current, params))
      params.functionName && this.focusByFunctionName(params.functionName)
    },
  }))

  // Another page opened: its code replaces the edited one
  useEffect(() => {
    codeRef.current = props.jsCode || ''
  }, [props.jsCode])

  useEffect(() => {
    if (isFunction(ref)) {
      ref(instance)
    } else if (ref) {
      ref.current = instance
    }
  }, [])

  const initEditor = useCallback((monaco: Monaco, editor: IEditorInstance) => {
    editorRef.current = editor as Editor.ICodeEditor
    monacoRef.current = monaco

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
      noSuggestionDiagnostics: true,
    })

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ESNext,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.ESNext,
      noEmit: true,
      esModuleInterop: true,
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      allowJs: true,
      typeRoots: ['node_modules/@types'],
    })

    // Declarations are registered as models: in the designer page extra libs
    // (`addExtraLib`) do not reach the TypeScript worker, models always do
    void loadVueTypes(props.vue).then((libs) => {
      for (const lib of libs) {
        const uri = monaco.Uri.parse(lib.path)
        if (!monaco.editor.getModel(uri)) {
          monaco.editor.createModel(lib.content, 'typescript', uri)
        }
      }
    })
  }, [])

  return (
    <MonacoEditor
      language="typescript"
      value={props.jsCode}
      height="100%"
      editorDidMount={initEditor}
      onChange={(code) => (codeRef.current = code)}
    ></MonacoEditor>
  )
})

JsEditor.displayName = 'JsEditor'
JsEditor.propTypes = {
  jsCode: PropTypes.string,
  vue: PropTypes.oneOf<2 | 3>([2, 3]).isRequired,
}

export default JsEditor
