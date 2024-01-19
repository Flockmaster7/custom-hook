import Child from '@/components/Child'
import useDebounceFn from '@/hooks/useDebounceFn'
import useGetState from '@/hooks/useGetState'
import useLocalStorageState from '@/hooks/useLocalStorageState'
import useMount from '@/hooks/useMount'
import usePrevious from '@/hooks/usePrevious'
import useThrottleFn from '@/hooks/useThrottleFn'
import React, { useEffect, useState } from 'react'
import useAsyncEffect from '@/hooks/useAsyncEffect'
import useUpdate from '@/hooks/useUpdate'
import useLockFn from '@/hooks/useLockFn'
import { mockHttp } from '@/utils/mock'

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

  const testDebounce = useDebounceFn(() => {
    console.log('useDebounceFn测试')
  }, 1000)

  const testThrottle = useThrottleFn(() => {
    console.log('useThrottleFn测试')
  }, 1000)

  useAsyncEffect(async () => {
    const res = await mockHttp()
    console.log('useAsyncEffect测试', res)
  }, [])

  useUpdate()
  useEffect(() => {
    console.log('useUpdate测试，强制刷新')
  }, [])

  const lockMockHttp = useLockFn(mockHttp)
  const getData = async () => {
    const data = await lockMockHttp()
    console.log('useLockFn测试', data)
  }

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
      <br />

      <button onClick={testDebounce}>useDebounceFn测试</button>
      <button onClick={testThrottle}>useThrottleFn测试</button>

      <br />
      <button onClick={getData}>测试useLockFn</button>
    </div>
  )
}

export default Home
