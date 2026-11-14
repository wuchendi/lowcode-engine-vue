import { Tab } from '@alifd/next'
import MonacoEditor from '@alilc/lowcode-plugin-base-monaco-editor'
import type {
  IPublicApiEvent,
  IPublicApiMaterial,
  IPublicApiProject,
  IPublicApiSkeleton,
  IPublicTypeRootSchema,
} from '@alilc/lowcode-types'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'
import { isJSExpression, isJSFunction } from '@alilc/lowcode-utils'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { JsEditor, SaveIcon } from '../components'
import { isObject, isString } from '../utils'
import './index.less'
import type { JsEditorInst } from '../components/JsEditor/JsEditor'
import type { VueVersion } from '../components/JsEditor/types'
import { defaultCode, defaultSetupCode, defaultStateCode } from '../config'

interface CodeEditorPaneProps {
  project: IPublicApiProject
  event: IPublicApiEvent
  skeleton: IPublicApiSkeleton
  material: IPublicApiMaterial
  vue: VueVersion
}

enum TAB_KEY {
  JS = 'js_tab',
  CSS = 'css_tab',
}

function getIndentStr(indent: number) {
  let indentStr = ''
  while (indent--) {
    indentStr += ' '
  }
  return indentStr
}

function guessValueType(val: unknown) {
  if (isString(val)) {
    return 'String'
  } else if (Array.isArray(val)) {
    return 'Array'
  } else if (isObject(val)) {
    return 'Object'
  }
  return 'null'
}

function guessStrValueType(val: string) {
  if (val === 'true' || val === 'false') {
    return 'Boolean'
  } else if (!isNaN(Number(val))) {
    return 'Number'
  } else if (val[0] === '/' && val[val.length - 1] === '/') {
    return 'RegExp'
  } else {
    try {
      return guessValueType(JSON.parse(val))
    } catch {
      return 'String'
    }
  }
}

function parseSchemaToCode(
  schema: Record<string, unknown>,
  indent: number,
): string {
  const indentStr = [getIndentStr(indent)]
  const code: string[] = []
  for (const name in schema) {
    const schemaItem = schema[name]
    if (isJSExpression(schemaItem)) {
      code.push(`${indentStr[0]}${name}: ${schemaItem.value},`)
    } else if (isJSFunction(schemaItem)) {
      code.push(
        `${indentStr[0]}${schemaItem.value
          .replace(/^function\s*/, '')
          .replace(/\n\s*/g, `$&${indentStr[0]}`)},`,
      )
    } else {
      const type = isString(schemaItem)
        ? guessStrValueType(schemaItem)
        : guessValueType(schemaItem)
      code.push(
        `${indentStr[0]}${name}: ${
          type === 'String' ? JSON.stringify(schemaItem) : schemaItem
        },`,
      )
    }
  }
  return code.join('\n')
}

function parsePropsToCode(
  schema: Record<string, unknown>,
  indent: number,
): string {
  const indentStr = [getIndentStr(indent)]
  const code: string[] = []

  for (const name in schema) {
    const schemaItem = schema[name]
    if (isJSExpression(schemaItem)) {
      code.push(`${indentStr[0]}${name}: {`)
      indentStr.unshift(indentStr[0] + '  ')
      code.push(`${indentStr[0]}type: ${guessValueType(schemaItem.value)},`)
      code.push(`${indentStr[0]}default: ${schemaItem.value},`)
      indentStr.shift()
      code.push(`${indentStr[0]}},`)
    } else if (isJSFunction(schemaItem)) {
      code.push(`${indentStr[0]}${name}: {`)
      indentStr.unshift(indentStr[0] + '  ')
      code.push(`${indentStr[0]}type: Function,`)
      code.push(
        `${indentStr[0]}default${schemaItem.value
          .replace(/^function[^(]*/, '')
          .replace(/\n\s*/g, `$&${indentStr[0]}`)},`,
      )
      indentStr.shift()
      code.push(`${indentStr[0]}},`)
    } else if (schemaItem != null && schemaItem !== '') {
      const type = isString(schemaItem)
        ? guessStrValueType(schemaItem)
        : guessValueType(schemaItem)
      code.push(`${indentStr[0]}${name}: {`)
      indentStr.unshift(indentStr[0] + '  ')
      code.push(`${indentStr[0]}type: ${type},`)
      code.push(`${indentStr[0]}default: ${schemaItem}`)
      indentStr.shift()
      code.push(`${indentStr[0]}},`)
    } else {
      code.push(`${indentStr[0]}${name}: {},`)
    }
  }
  return code.join('\n')
}

export const CodeEditorPane = ({
  project,
  material,
  event,
  vue,
}: CodeEditorPaneProps) => {
  const editor = useRef<JsEditorInst | null>(null)
  const [currentTab, setCurrentTab] = useState(TAB_KEY.JS)
  const [schema, setSchema] = useState<IPublicTypeRootSchema | null>(() => {
    return project.currentDocument
      ? (project.currentDocument.exportSchema(
          IPublicEnumTransformStage.Render,
        ) ?? null)
      : null
  })
  const jsCode = useMemo<string>(() => {
    if (!schema) return ''
    const originCode = schema.meta?.originCode
    if (isString(originCode)) {
      return originCode
    }
    // A page with Options API data keeps showing it; a new page starts with
    // the Composition API
    if (!schema.state && !schema.methods && !schema.lifeCycles) {
      return defaultSetupCode
    }
    return defaultCode
      .replace(
        /\s*props: {(\s*\/\*@{props:(\d+)}\*\/)\s*},/,
        (matched, placeholder, indent) => {
          const code = schema.props
            ? '\n' + parsePropsToCode(schema.props, Number(indent))
            : ''
          return code.trim() ? matched.replace(placeholder, code) : ''
        },
      )
      .replace(
        /\s*data: \(\) => \({(\s*\/\*@{data:(\d+)}\*\/)\s*}\),/,
        (matched, placeholder, indent) => {
          const code = schema.state
            ? '\n' + parseSchemaToCode(schema.state, Number(indent))
            : defaultStateCode
          return code.trim() ? matched.replace(placeholder, code) : ''
        },
      )
      .replace(
        /\s*methods: {(\s*\/\*@{methods:(\d+)}\*\/)\s*},/,
        (matched, placeholder, indent) => {
          const code = schema.methods
            ? '\n' + parseSchemaToCode(schema.methods, Number(indent))
            : ''
          return code.trim() ? matched.replace(placeholder, code) : ''
        },
      )
      .replace(/\s*\/\*@{lifeCycles:(\d+)}\*\//, (_, indent) => {
        const code = schema.lifeCycles
          ? '\n' + parseSchemaToCode(schema.lifeCycles, Number(indent))
          : ''
        return code.trim() ? code : ''
      })
      .trimStart()
  }, [schema])
  const cssCode = useRef<string>(schema?.css ?? '')

  const doSave = useCallback(() => {
    const currentSchema = project.currentDocument
      ? project.currentDocument.exportSchema(IPublicEnumTransformStage.Render)
      : schema
    if (!currentSchema) {
      throw new Error('schema is empty')
    }
    const newSchema =
      editor.current?.transformSchema(currentSchema) ?? currentSchema
    newSchema.css = cssCode.current
    if (project.currentDocument) {
      project.currentDocument.importSchema(newSchema)
    }
    project.simulatorHost?.renderer?.rerender()
    setSchema(newSchema)
  }, [])

  // Show the code of the page being edited
  useEffect(() => {
    return project.onChangeDocument((doc) => {
      const next = doc.exportSchema(IPublicEnumTransformStage.Render) ?? null
      cssCode.current = next?.css ?? ''
      setSchema(next)
    })
  }, [project])

  useEffect(() => {
    return event.on('common:codeEditor.addFunction', (data) => {
      setCurrentTab(TAB_KEY.JS)
      setTimeout(() => editor.current?.addFunction(data), 100)
    })
  }, [event])

  return (
    <div className=":uno: flex flex-1 items-center text-15px w-full h-full vue-code-pane">
      <Tab
        className=":uno: h-full flex flex-col"
        shape="wrapped"
        size="small"
        accessKey={currentTab}
        onChange={(key) => setCurrentTab(key as TAB_KEY)}
        extra={<SaveIcon onClick={doSave}></SaveIcon>}
      >
        <Tab.Item key={TAB_KEY.JS} title="index.js">
          <JsEditor
            material={material}
            ref={editor}
            jsCode={jsCode}
            vue={vue}
          ></JsEditor>
        </Tab.Item>
        <Tab.Item key={TAB_KEY.CSS} title="index.css">
          <MonacoEditor
            language="css"
            value={cssCode.current}
            height="100%"
            onChange={(code) => (cssCode.current = code)}
          ></MonacoEditor>
        </Tab.Item>
      </Tab>
    </div>
  )
}

CodeEditorPane.displayName = 'CodeEditorPane'
