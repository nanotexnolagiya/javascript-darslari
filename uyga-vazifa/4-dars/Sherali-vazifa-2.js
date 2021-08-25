// Sonni teskarisiga aylantiradigan funksiya yozish.
son = (val) => {
  let posVal = val < 0 ? val * -1 : val; // Positive Value
  let rev = 0; // Reversed Value
  while (posVal > 0) {
    rev = rev * 10 + (posVal % 10);
    posVal = (posVal - (posVal % 10)) / 10;
  }
  return val < 0 ? rev * -1 : rev;
};

// console.log("-12202 => " + son(-12202));
// console.log("-123321 => " + son(-123321));
// console.log("-4300 => " + son(-4300));
// console.log("10101 => " + son(10101));
// console.log("1234567890 => " + son(1234567890));

module.exports = son;
