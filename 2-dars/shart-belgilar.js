let a = 0;
let b = 3;

// || -> yoki -> shartlardan bitta
// && -> va -> true && true
// ! -> inkor

if (a > b && b) {
  console.log(a + b)
} else if (!a) { // Boolean(a)
  console.log(a)
} else {
  console.log('a < b dan')
}