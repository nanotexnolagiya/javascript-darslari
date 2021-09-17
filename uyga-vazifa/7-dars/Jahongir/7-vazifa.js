function User(a, b) {
  this.qoshish = a + b;
  this.ayirish = a - b;
  this.kopaytirish = a * b;
  this.bolish = a / b;
  this[Symbol.toPrimitive] = function (hint) {
    if (hint === "string") return `${a},${b}`;
    else if (hint === "number") return a > b ? a : b;
    else return this;
  };
}

module.exports = User;
