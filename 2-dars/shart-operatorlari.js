// ||, &&, ? :, ??
// ||

let a = null;
let b = 10;

// if (Boolean(0))  {
//   return Boolean(0)
// } else if (a) {
//   return a
// } else {
//   return b
// }

console.log(Boolean(0) || a || b)

// &&

let x = 12;
let y = undefined;
// if (!y)  {
//   return y
// } else {
//   return x
// }
console.log(Boolean(1) && y && x)

//

// if (a) {
//   console.log('true')
// } else {
//   console.log('false')
// }
console.log(a ? Boolean(0) || a : b === null ? 'null' : b)