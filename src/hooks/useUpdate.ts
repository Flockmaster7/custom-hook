import { useEffect, useState } from 'react'

export default function useUpdate() {
  const [forceUpdate, setForceUpdate] = useState(false)
  useEffect(() => {
    setForceUpdate(true)
  }, [])
}
