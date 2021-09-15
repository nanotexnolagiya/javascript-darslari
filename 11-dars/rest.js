function sum(...args) {
  
  return arguments[0] + arguments[1]

}

let arr = [1, 3, -6]
let str = "Javascript";
// console.log([...str])
// console.log(...arr)
// console.log(sum(1,90,3,45,5))

const arr2 = [...arr]


function user() {
  user.age = 1

  return user.age
}

console.log(user())


// console.log(sayHi.length)