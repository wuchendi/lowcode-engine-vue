export type ResponseType = 'blob' | 'arrayBuffer' | 'formData' | 'text' | 'json'

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS'

export type RequestParams = Record<string, unknown>

export type RequestHandler = (
  options: Record<string, unknown>,
  context?: unknown,
) => Promise<unknown>

export type RequestHandlersMap = Record<string, RequestHandler>

export interface RequestOptions {
  uri: string
  params: RequestParams
  method: RequestMethod
  isCors: boolean
  timeout: number
  headers: Record<string, string>
  responseType?: ResponseType
}

export enum DataSourceStatus {
  /** 初始状态，尚未加载 */
  Initial = 'init',
  /** 正在加载 */
  Loading = 'loading',
  /** 已加载(无错误) */
  Loaded = 'loaded',
  /** 加载出错了 */
  Error = 'error',
}
