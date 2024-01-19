import { useEffect, useMemo, useRef } from 'react'
import isEqual from 'lodash/fp/isEqual'

export default function useDeepCompareEffect(
  effect: React.EffectCallback,
  deps: React.DependencyList
) {
  const dependence = useRef(deps)

  isEqual(deps)

  const isDependenceChange = useMemo(() => {}, deps)

  useEffect(() => {
    effect()
  }, [isDependenceChange])
}
