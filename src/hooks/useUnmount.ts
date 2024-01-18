import { useEffect } from 'react'

export default function useUnmount(fn: () => void) {
  useEffect(() => {
    return () => {
      fn()
    }
  }, [])
}
