function hasTotalValue(obj) {
  if (!"totalValue" in obj) return false;
  let { totalValue } = obj;
  if (typeof totalValue == "number") return true;
  if (!isNaN(totalValue)) {
    obj.totalValue = +totalValue;
    return true;
  } else return false;
}
console.log(hasTotalValue({ totalValue: false }));
