export const mockHttp = () => {
  console.log('请求调用')
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({
          code: 200,
          data: [1, 2, 3, 4]
        })
      }, 2000)
    } catch (error) {
      reject(error)
    }
  })
}
