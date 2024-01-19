import { getCache, removeCache, setCache } from '@/utils/cache'
import { useEffect, useState } from 'react'

export default function useLocalStorageState<T>(
  key: string,
  value?: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const initState = () => {
    if (getCache<T>(key)) {
      return getCache<T>(key)
    } else {
      if (value) setCache<T>(key, value)
      return value
    }
  }

  const [selfState, setSelfState] = useState<T>(initState as () => T)

  const setState = (newState: React.SetStateAction<T>) => {
    setCache(key, newState)
    setSelfState(newState)
  }

  return [selfState, setState]
}
