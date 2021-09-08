"use strict"
/** 
Object.keys()
Object.values()
Object.entries()
Object.seal()
Object.assign()
Object.freeze()
Object.defineProperty()
Object.hasOwnProperty()
Object.getOwnPropertyDescriptor()
*/

const user = {
  firstName: 'Islomkhudja',
  lastName: 'Ismoilkhudja',
  role: {
    name: "Teacher"
  },
  [Symbol('id')]: 'id',
}

Object.keys(user) // ['firstName', 'lastName', ...etd]
Object.values(user) // ['Islomkhudja', 'Ismoilkhudja', ...etd]
Object.entries(user) // [['firstName', 'Islomkhudja'], [key, value], ...etd]
const clone = Object.assign({}, user, { address: 'Toshkent' })

let rank = 1

Object.defineProperty(user, 'rank', {
  enumerable: true,
  get() {
    return rank
  },
  set (value) {
    rank = value + 1
  }
})


// Object.defineProperties({
// job: {}
// })
console.log('Before set', user.rank, rank)

user.rank = 5

console.log('After set', user.rank, rank)