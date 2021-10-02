/**
 * Promise.all
 * Promise.allSettled {status:"fulfilled", value:qiymat}
 * Promise.race
 */

const { sleep } = require('./async-await')

const promiseAll = Promise.all([
  sleep(1000, []),
  sleep(1200, {}),
  sleep(500, 123),
  new Promise((resolve, reject) => reject(new Error('Xatolik')))
])

promiseAll
  .then(data => {
    console.log('Data', data)
  }).catch(console.log)

const promiseSettled = Promise.allSettled([
  sleep(1000, []),
  sleep(1200, {}),
  sleep(500, 123),
  new Promise((resolve, reject) => reject(new Error('Xatolik')))
])

promiseSettled
  .then(data => {
    console.log('Data allSettled', data)
  }).catch(console.log)

const promiseRace = Promise.race([
  sleep(1000, []),
  sleep(1200, {}),
  sleep(500, 123),
  new Promise((resolve, reject) => reject(new Error('Xatolik')))
])

promiseRace
  .then(data => {
    console.log('Data race', data)
  }).catch(err => console.log('Race error', err))