Number.isInteger()

const arr = [1 ,2 ,3]

// arr.map(console.log)

const str = 'Dev Quiz'

Array.prototype.customMap = function (cb) {
  const arr = this
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr))
  }
  return result
}

console.log(arr.customMap((item) => item + 5))

// __proto__