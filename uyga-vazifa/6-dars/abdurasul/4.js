function deepClone(obj) {
  let result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value !== "object") {
      result[key] = value;
    } else {
      result[key] = deepClone(value);
    }
  }
  return result;
}
let friend = {
  name: "Ali",
  age: 21,
  jobs : {
    promrammer : true,
    teacher :false,
  }
};
module.exports = deepClone
