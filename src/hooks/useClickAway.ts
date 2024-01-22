import { useEffect } from 'react'

export default function useClickAway(
  onClickAway: (event: Event) => void,
  target: any
) {
  useEffect(() => {
    const handlerClick = (e: Event) => {
      if (target.current && !target.current.contains(e.target)) {
        onClickAway(e)
      }
    }
    document.addEventListener('click', handlerClick)
    return () => {
      document.removeEventListener('click', handlerClick)
    }
  })
}
