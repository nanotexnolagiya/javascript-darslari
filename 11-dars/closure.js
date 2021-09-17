function makeCounter() {
  let count = 0;

  return function() {
    return count++; 

  }
}

// let counter = makeCounter(); // Lexical Env.
// let counter2 = makeCounter(); // Lexical Env. 2

// console.log(counter()); // Lexical Env. // 0
// console.log(counter()); // Lexical Env. 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// console.log(counter()); // 4

// counter = null;

// const arr = [makeCounter(), makeCounter()]

// console.log(arr[0]())
// console.log(arr[0]())
// console.log(arr[0]())
// console.log(arr[0]())


// console.log(arr[1]())
// console.log(arr[1]())
// console.log(arr[1]())
// console.log(arr[1]())
// for (let index = 0; index < 5; index++) {

//   setTimeout(() => {
//     console.log(index)
//   }, 0);
  
// }

function sum(a) {
  //... 
  return function(b) {
    return a + b;
  }
}

const arr = [1, 2, 3, 4];

function showArray(arr) {
  console.log(arr);
}

showArray(arr)