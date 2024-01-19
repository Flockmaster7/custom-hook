import { EffectCallback, useEffect } from 'react'

export default function useAsyncEffect<T>(
  effect: () => AsyncGenerator | Promise<T> | EffectCallback | void,
  deps: React.DependencyList
) {
  useEffect(() => {
    effect()
  }, deps)
}
