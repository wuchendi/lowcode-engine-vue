export interface Defer<T = unknown> {
  resolve(value?: T | PromiseLike<T>): void
  reject(reason?: unknown): void
  promise(): Promise<T>
}

export function createDefer<T = unknown>(): Defer<T> {
  const r = {} as Defer<T>
  const promise = new Promise<T>((resolve, reject) => {
    r.resolve = resolve as Defer<T>['resolve']
    r.reject = reject
  })

  r.promise = () => promise

  return r
}
