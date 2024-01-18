import useUnmount from '@/hooks/useUnmount'
import useUnmountedRef from '@/hooks/useUnmountedRef'
import React, { useEffect } from 'react'

const Child: React.FC = (props) => {
  useUnmount(() => {
    console.log('Child销毁')
  })

  const unmountRef = useUnmountedRef()

  useEffect(() => {
    return () => {
      console.log(unmountRef.current)
    }
  })

  return <div>Child</div>
}

export default Child
