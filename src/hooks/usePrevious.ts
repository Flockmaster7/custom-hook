import { useCallback, useRef } from 'react'

export default function usePrevious<T>(state: T) {
  const nowState = useRef(state)
  const preState = useRef(nowState.current)

  const fn = useCallback(() => {
    if (state !== nowState.current) {
      preState.current = nowState.current
      nowState.current = state
    }
  }, [state])

  fn()

  return preState.current
}
