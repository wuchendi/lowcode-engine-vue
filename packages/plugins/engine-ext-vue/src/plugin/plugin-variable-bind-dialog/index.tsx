import { Button, Dialog, Icon, Input, Tree } from '@alifd/next'
import type { TreeProps } from '@alifd/next/types/tree'
import { event, project } from '@alilc/lowcode-engine'
import MonacoEditor from '@alilc/lowcode-plugin-base-monaco-editor'
import type { IEditorInstance } from '@alilc/lowcode-plugin-base-monaco-editor/es/helper'
import type {
  IPublicModelSettingField,
  IPublicTypeProjectSchema,
  IPublicTypeRootSchema,
  PluginConfig,
  PluginProps,
} from '@alilc/lowcode-types'
import React, { Component } from 'react'
import { intl } from '../../locale'
import { currentRoot, rootMethods, rootState } from '../../utils'
import './index.less'

const defaultEditorProps = {
  width: '100%',
  height: '200px',
}

const defaultEditorOption = {
  options: {
    readOnly: false,
    automaticLayout: true,
    folding: false, // 默认开启折叠代码功能
    lineNumbers: 'off',
    wordWrap: 'on',
    formatOnPaste: true,
    fontSize: 12,
    tabSize: 2,
    scrollBeyondLastLine: false,
    fixedOverflowWidgets: false,
    snippetSuggestions: 'top',
    minimap: {
      enabled: false,
    },
    scrollbar: {
      vertical: 'auto',
      horizontal: 'auto',
      verticalScrollbarSize: 0,
    },
  },
}

interface VariableTreeNode {
  label: string
  key: string
  children?: VariableTreeNode[]
}

/** A category of the variable list. */
interface VariableGroup {
  name: string
  childrens?: VariableTreeNode[]
  /** Scope key of the variables of an extra category (`this.<key>.<path>`). */
  key?: string
  getChildren?: () => VariableTreeNode[] | undefined
}

/** `props` of the dialog's skeleton config. */
interface VariableBindDialogOptions {
  /** Extra categories of the variable list. */
  extraDataMap?: Record<string, VariableGroup>
  getSchema?: () => IPublicTypeProjectSchema
  /** Maximum length of a bound expression; 0 for no limit. */
  maxTextSize?: number
}

type VariableBindDialogProps = PluginProps & {
  config: PluginConfig & {
    props: PluginConfig['props'] & VariableBindDialogOptions
  }
  autoSave?: boolean
}

interface VariableBindDialogState {
  visiable: boolean
  isOverFlowMaxSize: boolean
  helpText: string
  jsCode: string
  searchValue: string
  variableListMap: Record<string, VariableGroup>
  selParentVariable: string | null
  childrenVariableList: VariableTreeNode[]
  field: IPublicModelSettingField | null
  minimize: boolean
  autoExpandParent: boolean
  expandedKeys: string[]
  maxTextSize: number
}

type CodeEditor = Extract<IEditorInstance, { executeEdits: unknown }>

export default class VariableBindDialog extends Component<
  VariableBindDialogProps,
  VariableBindDialogState
> {
  state: VariableBindDialogState = {
    visiable: false,
    isOverFlowMaxSize: false,
    helpText: intl('VariableHelp').replace(/\n/g, '<br>'),
    jsCode: '',
    searchValue: '',
    variableListMap: {}, // 变量列表
    selParentVariable: null, // 选中的父级变量
    childrenVariableList: [], // 子级变量列表
    field: null, // 编辑器全局变量
    minimize: false, // 是否最小化
    autoExpandParent: true,
    expandedKeys: [],
    maxTextSize: 0, // 绑定变量最大字符数
  }

  private monocoEditor: CodeEditor | null = null

  private matchedKeys: string[] | null = null

  get extraDataMap() {
    return this.props.config.props?.extraDataMap
  }

  componentDidMount() {
    event.on(
      'common:variableBindDialog.openDialog',
      ({ field }: { field: IPublicModelSettingField }) => {
        this.setState({ field }, () => {
          this.initCode()
          this.openDialog()
        })
      },
    )
  }

  /** The root being edited; `getSchema` of the config can replace it. */
  rootSchema = (): IPublicTypeRootSchema | undefined => {
    const custom = this.props.config?.props?.getSchema?.()
    return custom ? custom.componentsTree[0] : currentRoot(project as never)
  }

  initCode = () => {
    const fieldValue = this.state.field?.getValue()
    const jsCode = fieldValue?.value ?? ''

    const { maxTextSize } = this.props.config?.props || {}

    this.setState({
      jsCode,
      searchValue: '',
      variableListMap: {}, // 变量列表
      selParentVariable: null, // 选中的父级变量
      childrenVariableList: [], // 子级变量列表
      minimize: false, // 是否最小化
      isOverFlowMaxSize: false,
      // 配置的最大文本长度，默认为0，不控制
      maxTextSize: maxTextSize ? maxTextSize : 0,
    })
  }

  /**
   * 获取methods数据源
   * @param  {String}
   * @return {Array}
   */
  getMethods(): VariableTreeNode[] {
    return rootMethods(this.rootSchema()).map((key) => ({
      label: key,
      key,
    }))
  }

  /**
   * 获取AutoComplete数据源
   * @param  {String}
   * @return {Array}
   */
  getVarableList(): VariableTreeNode[] {
    const stateMap = rootState(this.rootSchema())
    const dataSourceMap: Record<string, unknown> = {}

    for (const key in stateMap) {
      if (Object.prototype.hasOwnProperty.call(stateMap, key) && key) {
        let valueString: unknown = stateMap[key]
        let value: unknown

        try {
          valueString = JSON.stringify(valueString)
          value = JSON.parse(valueString as string)
        } catch (e) {
          // console.error(`Error evaluating valueString: ${e}`);
          value = valueString
        }

        // Every variable is listed, also the ones without a literal value
        // (e.g. computed refs returned by setup())
        if (value !== undefined) {
          dataSourceMap[key] = value
        }
      }
    }
    const treeList: VariableTreeNode[] = []
    this.walkNode(dataSourceMap, treeList, '')
    return treeList
  }

  /**
   * 通过子节点id查找节点path
   * @param tree
   * @param func
   * @param field
   * @param path
   * @returns
   */
  treeFindPath(
    tree: VariableTreeNode[] | undefined,
    func: (node: VariableTreeNode) => boolean,
    field: keyof VariableTreeNode,
    path: unknown[] = [],
  ): unknown[] {
    if (!tree) return []
    for (const data of tree) {
      path.push(data[field])
      if (func(data)) return path
      if (data.children) {
        const findChildren = this.treeFindPath(data.children, func, field, path)
        if (findChildren.length) return findChildren
      }
      path.pop()
    }
    return []
  }

  /**
   * 循环遍历节点
   * @param dataSourceMap
   * @param treeList
   * @param parentKey key (path) of the parent node
   */
  walkNode(
    dataSourceMap: object,
    treeList: VariableTreeNode[],
    parentKey: string,
  ) {
    for (const [label, value] of Object.entries(dataSourceMap)) {
      const key = parentKey ? `${parentKey}.${label}` : label
      const treeData: VariableTreeNode = { label, key }
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        treeData.children = []
        this.walkNode(value, treeData.children, key)
      }
      treeList.push(treeData)
    }
  }

  /**
   * 获取数据源面板中的数据
   * @param  {String}
   * @return {Array}
   */
  getDataSource(): VariableTreeNode[] {
    const stateMap = this.rootSchema()?.dataSource
    const list = stateMap?.list || []
    const dataSource: VariableTreeNode[] = []

    for (const item of list) {
      if (item && item.id) {
        // dataSource.push(`this.state.${item.id}`);
        dataSource.push({
          label: `${item.id}`,
          key: item.id,
        })
      }
    }

    return dataSource
  }

  openDialog = () => {
    this.setState(
      {
        visiable: true,
      },
      () => {
        const methods = this.getMethods()
        const stateVaroableList = this.getVarableList()
        const dataSource = this.getDataSource()

        this.setState({
          variableListMap: {
            stateVaroableList: {
              name: intl('StateProps'),
              childrens: stateVaroableList,
            },
            methods: {
              name: intl('CustomMethods'),
              childrens: methods,
            },
            dataSource: {
              name: intl('DataSources'),
              childrens: dataSource,
            },
            ...this.extraDataMap,
          },
        })
      },
    )
  }

  closeDialog = () => {
    this.setState({
      visiable: false,
      minimize: false,
    })
  }

  onSelectItem = (value: string) => {
    const editor = this.monocoEditor
    const position = editor?.getPosition()
    if (!editor || !position) return
    const { lineNumber, column } = position
    editor.executeEdits('insert-code', [
      {
        range: {
          startLineNumber: lineNumber,
          startColumn: column,
          endLineNumber: lineNumber,
          endColumn: column,
        },
        text: value,
      },
    ])
  }

  updateCode = (newCode: string) => {
    let isOverFlowMaxSize = false
    if (this.state.maxTextSize) {
      isOverFlowMaxSize = newCode?.length > this.state.maxTextSize
    }
    this.setState(
      {
        jsCode: newCode,
        isOverFlowMaxSize,
      },
      this.autoSave,
    )
  }

  autoSave = () => {
    const { autoSave } = this.props
    if (autoSave) {
      this.save()
    }
  }

  editorDidMount = (editor: IEditorInstance) => {
    if ('executeEdits' in editor) this.monocoEditor = editor
  }

  /** Binds the expression to the field. */
  save = () => {
    const { field, jsCode } = this.state
    if (!field) return
    const fieldValue = field.getValue()
    field.setValue({
      type: 'JSExpression',
      value: jsCode,
      mock:
        Object.prototype.toString.call(fieldValue) === '[object Object]'
          ? fieldValue.mock
          : fieldValue,
    })
  }

  onOk = () => {
    this.save()
    this.closeDialog()
  }

  removeTheBinding = () => {
    const { field } = this.state
    if (!field) return
    const fieldValue = field.getValue()
    const value =
      Object.prototype.toString.call(fieldValue) === '[object Object]'
        ? fieldValue.mock
        : fieldValue
    field.setValue(value)
    this.closeDialog()
  }

  renderBottom = () => {
    const { jsCode } = this.state
    return (
      <div className="variable-bind-dialog-bottom">
        <div className="bottom-left-container">
          {jsCode && jsCode.length > 0 && (
            <Button type="normal" warning onClick={this.removeTheBinding}>
              {intl('RemoveBinding')}
            </Button>
          )}
        </div>

        <div className="bottom-right-container">
          <Button
            type="primary"
            onClick={this.onOk}
            disabled={this.isBtnDisable()}
          >
            {intl('Ok')}
          </Button>
          &nbsp;&nbsp;
          <Button type="normal" onClick={this.closeDialog}>
            {intl('Cancel')}
          </Button>
        </div>
      </div>
    )
  }

  handleExpand = (keys: string[]) => {
    this.setState({
      expandedKeys: keys,
      autoExpandParent: false,
    })
  }

  onVariableSearchChange = (input: string | number) => {
    let value = String(input)
    this.setState({
      searchValue: value,
    })

    const { variableListMap, selParentVariable } = this.state
    const selectedVariable =
      selParentVariable === null
        ? undefined
        : variableListMap[selParentVariable]
    if (!selectedVariable) {
      return
    }
    value = value.trim()
    if (!value) {
      this.matchedKeys = null
      return
    }

    const matchedKeys: string[] = []
    const loop = (data: VariableTreeNode[] = []) =>
      data.forEach((item) => {
        if (item.label.indexOf(value) > -1) {
          matchedKeys.push(item.key)
        }
        if (item.children && item.children.length) {
          loop(item.children)
        }
      })
    loop(selectedVariable.childrens)
    this.setState({
      expandedKeys: [...matchedKeys],
      autoExpandParent: true,
    })
    this.matchedKeys = matchedKeys
  }

  onVariableItemClick = (key: string) => {
    const { variableListMap } = this.state

    let childrenVariableList: VariableTreeNode[] | undefined
    if (this.extraDataMap?.[key] && this.extraDataMap[key]?.getChildren?.()) {
      childrenVariableList = this.extraDataMap[key].getChildren()
    } else {
      childrenVariableList = variableListMap[key].childrens
    }

    this.setState({
      selParentVariable: key,
      childrenVariableList: childrenVariableList ?? [],
      // matchedKeys
    })
  }

  minimizeClick = (state: boolean) => {
    this.setState({
      minimize: state,
      visiable: !state,
    })
  }

  onSelectTreeNode = (selectedKeys: string[]) => {
    const { selParentVariable, childrenVariableList } = this.state

    const key = selectedKeys[0]
    if (key === undefined) return
    let selectLabel: string | undefined
    if (selParentVariable == 'stateVaroableList') {
      const pathList = this.treeFindPath(
        childrenVariableList,
        (data) => data.key === key,
        'label',
      )
      // selectLabel = `this.state.${pathList.join('.')}`;
      /**
       * NOTE: 为了兼容 Vue 框架，使用 this.xxx 代替 this.state.xxx
       * 在 Vue 中访问 this.state.xxx 会导致语法错误
       */
      selectLabel = `this.${pathList.join('.')}`
    } else if (selParentVariable == 'methods') {
      selectLabel = `this.${key}()`
    } else if (selParentVariable == 'dataSource') {
      // selectLabel = `this.state.${label}`;
      /**
       * NOTE: 为了兼容 Vue 框架，使用 this.xxx 代替 this.state.xxx
       * 在 Vue 中访问 this.state.xxx 会导致语法错误
       */
      selectLabel = `this.${key}`
    } else {
      const fondKey = Object.keys(this.extraDataMap || {}).find(
        (k) => k === selParentVariable,
      )
      if (fondKey) {
        const propKey = this.extraDataMap?.[fondKey].key
        const pathList = this.treeFindPath(
          childrenVariableList,
          (data) => data.key === key,
          'label',
        )
        selectLabel = `this.${propKey}.${pathList.join('.')}`
      }
    }
    if (selectLabel) this.onSelectItem(selectLabel)
  }

  renderTitle = () => {
    return (
      <div className="variable-dialog-title">
        <span>{intl('VariableBinding')}</span>
        <img
          style={{ width: '12px' }}
          src="https://img.alicdn.com/imgextra/i1/O1CN01NlC5mY1bTvrlW3blw_!!6000000003467-55-tps-200-200.svg"
          onClick={() => this.minimizeClick(true)}
        />
      </div>
    )
  }

  renderErrorMessage = () => {
    const { isOverFlowMaxSize, maxTextSize } = this.state
    return isOverFlowMaxSize ? (
      <span className="error-message">
        {intl('ExpressionTooLong', { max: maxTextSize })}
      </span>
    ) : null
  }

  isBtnDisable = () => {
    const { jsCode, isOverFlowMaxSize } = this.state

    return jsCode === undefined || jsCode?.length == 0 || isOverFlowMaxSize
  }

  render() {
    const {
      visiable,
      variableListMap,
      selParentVariable,
      childrenVariableList,
      helpText,
      jsCode,
      searchValue,
      minimize,
      expandedKeys,
      autoExpandParent,
      isOverFlowMaxSize,
    } = this.state

    const filterTreeNode: TreeProps['filterTreeNode'] = (node) =>
      !!node.props.eventKey && !!this.matchedKeys?.includes(node.props.eventKey)

    return (
      <div>
        {minimize ? (
          <div className="vs-variable-minimize">
            <img
              onClick={() => this.minimizeClick(false)}
              src="https://img.alicdn.com/imgextra/i2/O1CN01HzeCND1vl948xPEWm_!!6000000006212-55-tps-200-200.svg"
            />
            <span
              onClick={() => this.minimizeClick(false)}
              className="vs-variable-minimize-title"
            >
              {intl('VariableBinding')}
            </span>
            <img
              onClick={this.closeDialog}
              src="https://img.alicdn.com/imgextra/i2/O1CN017cO64O1DzwlxwDSKW_!!6000000000288-55-tps-200-200.svg"
            />
          </div>
        ) : (
          ''
        )}

        <Dialog
          visible={!minimize && visiable}
          title={this.renderTitle()}
          onClose={this.closeDialog}
          footer={this.renderBottom()}
          popupContainer={
            document.getElementById('engine-popup-container')
              ? 'engine-popup-container'
              : undefined
          }
        >
          <div className="variable-dialog-body">
            <div className="dialog-left-container">
              <div className="dialog-small-title">{intl('VariableList')}</div>

              <div className="vs-variable-selector-inner">
                <ul className="vs-variable-selector-category vs-variable-selector-ul">
                  {Object.keys(variableListMap).map((key) => {
                    return (
                      <li
                        onClick={() => this.onVariableItemClick(key)}
                        className={
                          selParentVariable === key ? 'active' : undefined
                        }
                        key={key}
                      >
                        {variableListMap[key].name}
                      </li>
                    )
                  })}
                </ul>
                <div className="vs-variable-selector-items-container">
                  <div className="ve-search-control">
                    <Input
                      innerAfter={
                        <Icon type="search" size="xs" style={{ margin: 4 }} />
                      }
                      placeholder={intl('Search')}
                      value={searchValue}
                      aria-label={intl('Search')}
                      style={{ width: '100%' }}
                      onChange={this.onVariableSearchChange}
                    />
                  </div>
                  {/* <ul className="vs-variable-selector-items vs-variable-selector-ul"> */}
                  <ul className="tree-container">
                    {/* {childrenVariableList &&
                      childrenVariableList.map((item) => (
                        <li onClick={() => this.onSelectItem(item)} key={item}>
                          {item}
                        </li>
                      ))} */}

                    <Tree
                      dataSource={childrenVariableList}
                      onSelect={this.onSelectTreeNode}
                      defaultExpandAll
                      filterTreeNode={filterTreeNode}
                      expandedKeys={expandedKeys}
                      autoExpandParent={autoExpandParent}
                      onExpand={this.handleExpand}
                    />
                  </ul>
                </div>
              </div>
            </div>

            <div className="dialog-right-container">
              <div className="dialog-small-title">
                {intl('Bind')} {this.renderErrorMessage()}
              </div>
              <div
                id="jsEditorDom"
                className={
                  isOverFlowMaxSize
                    ? 'editor-context editor-context-error'
                    : 'editor-context'
                }
              >
                <div className="editor-type-tag">=</div>
                <MonacoEditor
                  value={jsCode}
                  {...defaultEditorProps}
                  {...defaultEditorOption}
                  {...{ language: 'javascript' }}
                  onChange={this.updateCode}
                  editorDidMount={(_monaco, editor) =>
                    this.editorDidMount(editor)
                  }
                />
              </div>

              <div className="dialog-help-tip-input">
                <p className="vs-variable-content-desc-title">
                  {intl('Usage')}
                </p>
                <p dangerouslySetInnerHTML={{ __html: helpText }} />
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}
