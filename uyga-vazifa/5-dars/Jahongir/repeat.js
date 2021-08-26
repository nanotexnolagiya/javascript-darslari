const takrorlash = (a, b, c) => {
  let massiv = [];
  let add = "";
  for (let i = 0; i < b; i++) {
    massiv[i] = a;
    add += massiv[i] + (c || " ");
  }
  return add;
};

module.exports = takrorlash;
