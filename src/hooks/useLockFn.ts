import { useCallback, useRef } from 'react'

export default function useLockFn<P extends any[] = any[], V = any>(
  fn: (...args: P) => Promise<V>
): (...args: P) => Promise<V | undefined> {
  const lock = useRef(false)

  const asyncFn = useCallback(async function (...args: P) {
    return new Promise<V>((resolve, reject) => {
      if (lock.current) return
      lock.current = true
      fn(...args)
        .then((res) => {
          resolve(res)
        })
        .catch((err: Error) => {
          reject(err.message)
        })
        .finally(() => {
          lock.current = false
        })
    })
  }, [])

  return asyncFn
}
