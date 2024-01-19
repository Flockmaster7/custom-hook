import { useRef, useState } from 'react'

type GetState<T> = () => T
type SetState<T> = (state: T) => void
type ReturnType<T> = [T, SetState<T>, GetState<T>]

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
