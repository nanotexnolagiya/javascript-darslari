// Map
const userObj = {
  firstName: 'test',
  123: '',
  [Symbol('id')]: '',
}

const user = new Map();

const address = {
  street: 'Sharof Rashid street'
}

const roles = ['ADMIN', 'MODERATOR']

user.set('firstName', 'Islomkhuja');
user.set(address, 'Ok')
user.set(roles, 'Access')

// console.log('keys: ', user.keys())
// console.log('values: ', user.values())
// console.log('entries: ', user.entries())

for (let key of user.keys()) {
  console.log(key)
}

console.log(user.size)

/**
 * set()
 * get()
 * delete()
 * clear()
 * size
 * has()
 * 
 * keys()
 * values()
 * entries()
 */


// Set

const numbers = new Set();
numbers.add(1)
numbers.add(2)
numbers.add(3)

console.log('Set size', numbers.size)

/**
 * add()
 * delete()
 * clear()
 * size
 */