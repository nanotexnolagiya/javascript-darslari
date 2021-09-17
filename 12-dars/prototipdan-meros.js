// [[Prototype]]

const guess = {
  name: 'Guess',
  sayName() {
    console.log(this.name)
  },
}

console.log('Guess proto', guess.__proto__)

const user = {
  name: 'User',
  // override
  sayName () {
    console.log('What!!')
  },
  __proto__: guess
}


const admin = {
  name: 'Admin'
}

admin.__proto__ = user;
// __proto__ => Object, null
// Object.getPrototypeOf(admin) | Object.setPrototypeOf(admin, user)

guess.sayName()
user.sayName() // currentObject => proto => proto => Object.__proto__
admin.sayName()