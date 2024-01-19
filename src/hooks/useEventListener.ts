import { useEffect } from 'react'

export default function useEventListener(
  eventName: keyof HTMLElementEventMap,
  handler: (ev: Event) => void,
  el: any
) {
  useEffect(() => {
    console.log(eventName, handler, el)
    el.addEventListener(eventName, handler)

    return () => {
      el.removeEventListener(eventName, handler)
    }
  }, [])
}
