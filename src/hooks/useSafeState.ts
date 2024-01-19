import { useState } from 'react'
import useUnmountedRef from './useUnmountedRef'
import { SetState } from '@/types'

export default function useSafeState<T>(initState: T): [T, SetState<T>] {
  const [selfState, setSelfState] = useState(initState)
  const isUnmount = useUnmountedRef()

  const setState = (newState: T) => {
    if (!isUnmount.current) {
      setSelfState(newState)
    } else console.warn('useSafeState测试，组件已经卸载，无法修改状态')
  }

  return [selfState, setState]
}
