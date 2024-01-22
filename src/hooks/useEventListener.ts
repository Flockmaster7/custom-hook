import { useEffect } from 'react'

export default function useEventListener(
  eventName: keyof HTMLElementEventMap,
  handler: (ev: Event) => void,
  target: any
) {
  useEffect(() => {
    if (target.current) {
      target.current.addEventListener(eventName, handler)
    }

    return () => {
      if (target) {
        target.current.removeEventListener(eventName, handler)
      }
    }
  })
}
