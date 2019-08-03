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

export function debounce(f, ms) {
  let isCooldown = false
  return function() {
    if (isCooldown) return
    f.apply(this, arguments)
    isCooldown = true
    setTimeout(() => {
      isCooldown = false
    }, ms)
  }
}

export function deepEqual(x, y) {
  if (x === y) {
    return true
  } else if (
    typeof x === 'object' &&
    x != null &&
    (typeof y === 'object' && y != null)
  ) {
    if (Object.keys(x).length !== Object.keys(y).length) return false
    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) return false
      } else return false
    }
    return true
  } else return false
}
