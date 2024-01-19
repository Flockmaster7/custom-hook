import { useEffect, useRef, useState } from 'react'
import isEqual from 'lodash/fp/isEqual'

export default function useDeepCompareEffect(
  effect: React.EffectCallback,
  deps: React.DependencyList
) {
  const dependence = useRef(deps)

  const [isChange, setIsChange] = useState(false)

  if (!isEqual(dependence.current, deps)) {
    dependence.current = deps
    setIsChange((pre) => !pre)
  }

  useEffect(() => {
    effect()
  }, [isChange])
}
