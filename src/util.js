export function delay(data, time = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, time)
  })
}
export function formatDate(date) {
  let d = date
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes(),
  ].map(component => component.slice(-2))

  // join the components into date
  return d.slice(0, 3).join('.') + ', ' + d.slice(3).join(':')
}
