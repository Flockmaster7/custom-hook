const getCache = <T>(key: string): T | Error => {
  try {
    return JSON.parse(window.localStorage.getItem(key) as string)
  } catch (error: any) {
    return new Error(error.message)
  }
}

const setCache = <T>(key: string, value: T) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error: any) {
    return new Error(error.message)
  }
}

const removeCache = (key: string) => {
  try {
    window.localStorage.removeItem(key)
  } catch (error: any) {
    return new Error(error.message)
  }
}

// const clearCache = () => {
//   window.localStorage.clear()
// }

export { getCache, setCache, removeCache }
