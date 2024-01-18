import Child from '@/components/Child'
import useGetState from '@/hooks/useGetState'
import useMount from '@/hooks/useMount'
import usePrevious from '@/hooks/usePrevious'
import React, { useEffect, useState } from 'react'

const Home: React.FC = (props) => {
  const [count, setCount] = useState(0)
  const [num, setNum, getNum] = useGetState(1000)
  const [showChild, setShowChild] = useState(true)

  useMount(() => {
    console.log('Home组件创建')
  })

  useEffect(() => {
    console.log((getNum as () => any)())
  }, [count])

  const preCount = usePrevious(count)

  console.log(preCount)

  return (
    <div>
      {showChild && <Child />}
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setNum(num + 1)}>{num}</button>

      <br />
      <button onClick={() => setShowChild(false)}>销毁Child</button>
    </div>
  )
}

export default Home
