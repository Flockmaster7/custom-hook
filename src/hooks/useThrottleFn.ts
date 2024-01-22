import { useCallback, useRef } from 'react'

export default function useThrottleFn(
  fn: (...args: any[]) => any,
  wait: number
) {
  const timer = useRef<any>(null)
  const throttleFn = useCallback(
    function (...args: any[]) {
      if (timer.current) return
      timer.current = setTimeout(() => {
        fn(...args)
        timer.current = null
      }, wait)
    },
    [fn, wait]
  )

  return throttleFn
}
