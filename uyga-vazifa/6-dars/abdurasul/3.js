function hasTotalValue(obj) {
  if (!"totalValue" in obj) return false;
  let { totalValue } = obj;
  if (typeof totalValue == "number") return true;
  if (!isNaN(totalValue) && totalValue !== null) {
    obj.totalValue = +totalValue;
    return true;
  } else return false;
}
module.exports = hasTotalValue
