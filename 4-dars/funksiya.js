// harflar, sonlar, $ va _

// Function declaration
function calc(a, b) {
  console.log(a + b)
}

calc(32, 1, 2, 3)

// Function expression

function helloFunction (message) {
  console.log('Salom ' + message);
}

let calc = calcOperator

sayHello('Anvar')

// Arrow function es6

let double = (num) => {
  console.log(num ** 2)
}

double(30)

// var, let, const
// const ni elon qilingandan keyn o'zgartirib bo'midi.
// var, let - ni o'zgartirsa bo'ladi.

// const user = {
//   name: 'Islom'
// }

// user.name = 'Anvar'

// console.log(user)

// let va var


function demo () {
  if (true) {
    console.log(firstName)
    let firstName = 'first name'
  }
  return 'Hello'
}

let message = demo()
console.log(message)

const hello = new Function('return localStorage.get("token")')

hello()


