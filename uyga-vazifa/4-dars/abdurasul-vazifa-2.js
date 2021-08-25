function reverseNumber(number) {
  if (number >= 0) return +String(number).split("").reverse().join("");
  else return -+String(-number).split("").reverse().join("");
}
// console.log(reverseNumber(12345));
// console.log(reverseNumber(-345));
// console.log(reverseNumber(7400));
// console.log(reverseNumber(-800));
// console.log(reverseNumber());
module.exports = reverseNumber
