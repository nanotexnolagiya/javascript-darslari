// string

const user = {
  firstName: 'Islom',
  age: 22,
  [Symbol.toPrimitive]: function (hint) { // string, number, default
    if (hint === 'string') {
      return `First Name: ${this.firstName}`
    } else if (hint === 'number') {
      return this.age
    } else {
      return this.age
    }
  }
}

const warehouse = {
  products: 3,
  toString () {
    return 'Products: ' + this.products
  },
  valueOf () {
    return this.products
  }
}

console.log(`${user}`)

// number

console.log(5 + user)

// default

console.log(user + `${warehouse}`)