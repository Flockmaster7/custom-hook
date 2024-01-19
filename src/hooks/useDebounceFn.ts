import { useRef } from 'react'

export default function useDebounceFn(
  fn: (...args: any[]) => any,
  wait: number
) {
  const timer = useRef<any>(null)
  return function (...args: any[]) {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      fn(...args)
    }, wait)
  }
}
