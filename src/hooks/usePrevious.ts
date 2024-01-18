import { useEffect, useRef } from 'react'

export default function usePrevious<T>(state: T) {
  const preState = useRef(state)

  useEffect(() => {
    preState.current = state
  }, [state])

  return preState.current
}
