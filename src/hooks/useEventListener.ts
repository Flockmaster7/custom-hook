import { useEffect } from 'react'

export default function useEventListener(
  eventName: keyof HTMLElementEventMap,
  handler: (ev: Event) => void,
  target: any
) {
  useEffect(() => {
    target.current.addEventListener(eventName, handler)

    return () => {
      console.log(target.current)
      target.current.removeEventListener(eventName, handler)
    }
  }, [eventName, handler, target])
}
