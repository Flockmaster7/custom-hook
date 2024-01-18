import { useEffect, useRef } from 'react'

export default function useUnmountedRef() {
  const unmountRef = useRef(false)

  useEffect(() => {
    unmountRef.current = false

    return () => {
      unmountRef.current = true
    }
  }, [])

  return unmountRef
}
