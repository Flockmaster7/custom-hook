import { useCallback, useState } from 'react'

export default function useUpdate() {
  const [forceUpdate, setForceUpdate] = useState(false)

  const update = useCallback(() => {
    setForceUpdate(!forceUpdate)
  }, [forceUpdate])

  return update
}
