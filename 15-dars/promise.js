
function showSlider () {
  console.log('Slider showed')
}
// Promise-ni statuslari: pending, fullfilled, rejected
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

const sleepResult = sleep(11000)

sleepResult
  .then((message) => {
    console.log('Then: ', message)
    showSlider()
  })
  .catch(error => {
    console.log('Error name: ', error.name)
    console.log('Error message:', error.message)
    console.log('Error stack:', error.stack)
  })
  .finally(() => {
    console.log('Finally!!!')
  })