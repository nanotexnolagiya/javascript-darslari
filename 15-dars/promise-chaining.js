const sleepSecond = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 1000)
})

function sleep (timeout) {
  const promise = new Promise((resolve, reject) => { // resolve: Function, reject: Function
    if (timeout > 10000) {
      reject(new Error('Rejected promise'))
    }
    setTimeout(() => {
      resolve('Successefully promise')
    }, timeout)
  })

  return promise
}

sleepSecond
  .then((result) => {
    console.log('Step 1', result)
    return sleep(result * 1000)
  })
  .then((result) => {
    console.log('Step 2', result)
    return sleep
  })
  .then(func => {
    func(1000).then(console.log)
  })