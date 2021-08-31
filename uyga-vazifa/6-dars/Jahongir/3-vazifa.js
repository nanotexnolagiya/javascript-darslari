function finderTotalAmount(obj) {
  for (let key in obj) {
    if (
      key == "totalAmount" &&
      obj[key] !== null &&
      obj[key] !== "" &&
      obj[key] !== false &&
      String(Number(obj[key])) != "NaN"
    ) {
      return true;
    }
  }
  return false;
}

module.exports = finderTotalAmount;
