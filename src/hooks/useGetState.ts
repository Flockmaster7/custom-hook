import { useRef, useState } from 'react'
import { ReturnType } from '@/types'

export default function useGetState<T>(initState: T): ReturnType<T> {
  const [selfState, setSelfState] = useState(initState)
  const newState = useRef(initState)

  const setState = (state: T) => {
    newState.current = state
    setSelfState(state)
  }

  const getState = () => {
    return newState.current
  }

  return [selfState, setState, getState]
}
