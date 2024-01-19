import { useRef } from 'react'

export default function useLockFn<P extends any[] = any[], V = any>(
  fn: (...args: P) => Promise<V>
): (...args: P) => Promise<V | undefined> {
  const lock = useRef(false)
  return async function (...args) {
    return new Promise((resolve, reject) => {
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
  }
}
