const fullName = Symbol.for('fullName')
const id = Symbol('id')

console.log(id.description)

// Symbol('id') === Symbol('id') => false

global.fullName = fullName

const user = {
  id: 12
}

user[fullName] = 'Islom'


for (let item in user) {
  console.log(item)
}

console.log(fullName.toString())
const userCopy = Object.assign({}, user) // {...user}
console.log(userCopy[fullName])
console.log(Object.keys(user))

// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive