import useSafeState from '@/hooks/useSafeState'
import useUnmount from '@/hooks/useUnmount'
import useUnmountedRef from '@/hooks/useUnmountedRef'
import React, { useEffect } from 'react'

const Child: React.FC = (props) => {
  useUnmount(() => {
    console.log('useUnmount测试，组件卸载时执行：Child销毁')
  })

  const [num, setNum] = useSafeState(1)

  const unmountRef = useUnmountedRef()

  setTimeout(() => {
    setNum(9)
  }, 5000)

  useEffect(() => {
    return () => {
      console.log('useUnmountedRef测试，Child组件是否卸载', unmountRef.current)
    }
  })

  return (
    <div>
      Child {num}
      <button onClick={() => setNum(num + 1)}>{num}</button>
    </div>
  )
}

export default Child
