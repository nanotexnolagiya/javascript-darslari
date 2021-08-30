const user = {
  firstName: 'First name',
  age: 3,
  parents: [
    {
      // otasi haqida
      age: 45
    },
  ], // or null
  address: {
    street: '',
  }, // null
  sendMail () {

  }
}

const user2 = {
  firstName: 'First name',
  age: 3,
  parents: [null], // or null
  address: null, // null
}

console.log(user.parents[0].age)
console.log(user2.parents?.[0]?.age)
console.log(user2.address?.street)

user2.sendMail?.()