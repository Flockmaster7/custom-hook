## :rocket:  react 自定义 hook   :rocket:

### :pencil:  ​前言

实现了一些 react 自定义 hook

### :airplane:  快速开始 ​

```shell
npm install
```

```shell
npm run dev
```

### :memo:  ​目录

- src
  - hooks    --------    自定义 hook
  - components    --------    hook 测试组件
  - pages    --------    hook 测试组件
  - utils    --------    工具方法

### :key:  自定义 hook

#### :pushpin:  一个只在组件初始化时执行的 Hook —— useMount

```typescript
useMount(fn: () => void): void
```

#### :pushpin:  在组件卸载（unmount）时执行的 Hook —— useUnmount

```typescript
useUnmount(fn: () => void): void
```

#### :pushpin:  获取当前组件是否已经卸载的 Hook —— useUnmountedRef

```typescript
useUnmountedRef(): React.MutableRefObject<boolean>
```

#### :pushpin:  状态存储在 localStorage 中的 Hook —— useLocalStorageState

```typescript
useLocalStorageState<T>(key: string, value?: T): [T, React.Dispatch<React.SetStateAction<T>>]
```

#### :pushpin:  保存上一次状态的 Hook —— useLocalStorageState

```typescript
usePrevious<T>(state: T): T
```

#### :pushpin:  在组件卸载后异步回调内的 setState 不再执行的hook —— useSafeState

```typescript
type SetState<T> = (state: T) => void

useSafeState<T>(initState: T): [T, SetState<T>]
```

#### :pushpin:  给 React.useState 增加了一个 getter 方法的hook，以获取当前最新值 —— useGetState

```typescript
type GetState<T> = () => T
type SetState<T> = (state: T) => void
type ReturnType<T> = [T, SetState<T>, GetState<T>]

useGetState<T>(initState: T): ReturnType<T>
```

#### :pushpin:  useEffect 支持异步函数的 hook，以获取当前最新值 —— useAsyncEffect

```typescript
useAsyncEffect<T>(effect: () => AsyncGenerator | Promise<T> | EffectCallback | void, deps: React.DependencyList): void
```

#### :pushpin:  处理防抖函数的 hook —— useDebounceFn

```typescript
useDebounceFn(fn: (...args: any[]) => any, wait: number): (...args: any[]) => void
```

#### :pushpin:  处理节流函数的 hook —— useThrottleFn

```typescript
useThrottleFn(fn: (...args: any[]) => any, wait: number): (...args: any[]) => void
```

#### :pushpin:  强制组件重新渲染的 hook —— useUpdate

```typescript
useUpdate(): void
```

#### :pushpin:  用于给一个异步函数增加竞态锁，防止并发执行的 hook —— useLockFn

```typescript
useLockFn<P extends any[] = any[], V = any>(fn: (...args: P) => Promise<V>): (...args: P) => Promise<V | undefined>
```

#### :pushpin:  具有深比较依赖的 useEffect hook —— useDeepCompareEffect

```typescript
useDeepCompareEffect(effect: React.EffectCallback, deps: React.DependencyList): void
```

#### :pushpin:  自动注册和卸载事件监听的 hook —— useEventListener

```typescript
useEventListener(eventName: keyof HTMLElementEventMap, handler: (ev: Event) => void, target: any): void
```

#### :pushpin:  监听目标元素外的点击事件的 hook —— useClickAway

```typescript
useClickAway(onClickAway: (event: Event) => void, target: any): void
```

#### :pushpin:  发布订阅模式的 hook —— useEvent

```typescript
interface EventType {
  [key: string]: FunctionType[]
}
type FunctionType = (...args: any[]) => void | any

useEvent(): MyEvent
```

