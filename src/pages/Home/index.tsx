import Child from '@/components/Child'
import useGetState from '@/hooks/useGetState'
import useLocalStorageState from '@/hooks/useLocalStorageState'
import useMount from '@/hooks/useMount'
import usePrevious from '@/hooks/usePrevious'
import React, { useEffect, useState } from 'react'

const Home: React.FC = (props) => {
  const [count, setCount] = useState(0)
  const [num, setNum, getNum] = useGetState(1000)
  const [showChild, setShowChild] = useState(true)

  useMount(() => {
    console.log('useMount测试，Home组件创建，只执行一次')
  })

  useEffect(() => {
    console.log('useGetState测试，获取最新num：', getNum())
  }, [count])

  const preCount = usePrevious(count)
  console.log('usePrevious测试，获取上一次的state：', preCount)

  const [a, setA] = useLocalStorageState<number>('a', 1)

  return (
    <div>
      {showChild && <Child />}
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setNum(num + 1)}>{num}</button>

      <br />
      <button onClick={() => setShowChild(false)}>销毁Child</button>
      <br />
      <button onClick={() => setA(a + 1)}>
        useLocalStorageState hook测试 {a}
      </button>
    </div>
  )
}

export default Home
