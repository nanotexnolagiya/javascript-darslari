isEmpty = (obj) => {
  for (let key in obj) {
    if (key !== null) return false;
  }
  return true;
};

// console.log(isEmpty({name: "John"})); // false
// console.log(isEmpty({a: "1", b: 100})); // false
// console.log(isEmpty({a: "a", b: 4})); // false
// console.log(isEmpty({})); // true
// console.log(isEmpty({"": ""})); // false

module.exports = isEmpty;
