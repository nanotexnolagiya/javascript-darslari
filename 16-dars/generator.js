// yield two way, gen.throw

const { sleep } = require('../15-dars/async-await')

function* getOther () {
  yield 123
}

function *fetchVideo(videoLength) {
  try {
    const res = yield 10 + videoLength
    yield res * 20 + videoLength
    yield 30
  } catch (error) {
    console.log(error)
  }
}

const genFetchVideo = fetchVideo(12)

const firstValue = genFetchVideo.next()
// firstValue.value.then(console.log)
// genFetchVideo.throw(new Error('Error'))
const secondValue = genFetchVideo.next(10)
// console.log('Next', secondValue.value.next())
const thirdValue = genFetchVideo.next()
const fourValue = genFetchVideo.next()

console.log('Gen', ...fetchVideo(12))

// for (let item of genFetchVideo) {
//   console.log(item)
// }