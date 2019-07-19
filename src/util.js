export function delay(data, time = 3000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, time)
  })
}
