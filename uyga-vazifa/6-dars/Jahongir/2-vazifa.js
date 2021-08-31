function totalValue(obj) {
  let s = 0;
  for (let key in obj) {
    if (String(Number(obj[key])) === "NaN") {
      obj[key] = 0;
    }
    s += Number(obj[key]);
  }
  return s == 0 ? undefined : s;
}

module.exports = totalValue;
