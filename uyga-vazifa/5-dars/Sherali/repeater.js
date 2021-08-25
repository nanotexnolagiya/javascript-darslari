repeater = (str, count, separator = " ") => {
  let res = ""; // Result
  for (let index = 0; index < count; index++) {
    if (index == count - 1) separator = "";
    res += str + separator;
  }
  return res;
};

// console.log(repeater("Assalomu alaykum!", 3, ","));
// console.log(repeater("Salom!", 3));
// console.log(repeater("Qale bo'vottimi?", 10, "-"));
// console.log(repeater("Ha yaxshiku", 5, "->"));

module.exports = repeater;
