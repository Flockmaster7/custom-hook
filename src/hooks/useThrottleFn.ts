import { useRef } from 'react'

export default function useThrottleFn(
  fn: (...args: any[]) => any,
  wait: number
) {
  const timer = useRef<any>(null)
  return function (...args: any[]) {
    if (timer.current) return
    timer.current = setTimeout(() => {
      fn(...args)
      timer.current = null
    }, wait)
  }
}
