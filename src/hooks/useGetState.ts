import { useState } from 'react'
type GetState<T> = () => T

export default function useGetState<T>(initState: T): any {
  const [state, setState] = useState(initState)

  const getState = () => {
    return
  }

  return [state, setState, getState]
}
