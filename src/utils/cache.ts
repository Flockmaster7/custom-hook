const getCache = <T>(key: string): T => {
  return JSON.parse(window.localStorage.getItem(key) as string)
}

const setCache = <T>(key: string, value: T) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

// const removeCache = (key: string) => {
//   window.localStorage.removeItem(key)
// }

// const clearCache = () => {
//   window.localStorage.clear()
// }

export { getCache, setCache }
