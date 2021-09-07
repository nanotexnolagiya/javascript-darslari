totalValue = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += String(Number(obj[key])) === "NaN" ? 0 : Number(obj[key]);
  }
  if (sum == 0) {
    return undefined;
  }
  return sum;
};
// console.log(totalValue({a: "1", b: 100})); // => 101
// console.log(totalValue({a: 5, b: "9", c: "avs", d: "2r", e: "21"})); // 35
// console.log(totalValue({a: "a", b: 4})); // => 4
// console.log(totalValue({a: "a", b: NaN})); // => undefined
// console.log(totalValue({a: "a", b: {}, c: null, f: 23})); // => 23
// console.log(totalValue({a: "a", b: {}, c: false, k: 23})); // => 23
// console.log(totalValue({a: "a", b: {}, c: {}, m: 43})); // => 43
// console.log(totalValue({a: "a", b: {}, c: '', cv: 21})); // => 21
// console.log(totalValue({a: "a", b: {}, c: '', cv: undefined, ka: 22})); // => 22
// console.log(totalValue({a: "a", b: {}, c: '', cv: undefined})); // => 22

module.exports = totalValue;