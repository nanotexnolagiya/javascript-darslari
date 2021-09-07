hasTotalValue = (obj) => {
  for (let key in obj) {
    if (key === "totalValue") return key;
  }
  return false;
};

isNumber = (obj) => {
  let key = hasTotalValue(obj);
  let val = obj[key];
  if (key) {
    if (
      String(Number(val)) !== "NaN" &&
      val !== "" &&
      val !== null &&
      val !== false
    ) {
      return true;
    }
  }
  return false;
};
// console.log(isNumber({a: "1", b: 100, totalValue: "1"})); // => true
// console.log(isNumber({totalValue: null, a: "a", b: NaN})); // => false
// console.log(isNumber({b: {}, c: 2, totalValue: "ab"})); // => false
// console.log(isNumber({a: "a", b: {}})); // => false
// console.log(isNumber({a: 5, b: "9", e: "21", totalValue: 2})); // => true

module.exports = isNumber;
