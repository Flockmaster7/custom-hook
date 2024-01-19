export type GetState<T> = () => T
export type SetState<T> = (state: T) => void
export type ReturnType<T> = [T, SetState<T>, GetState<T>]
