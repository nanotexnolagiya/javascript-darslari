function repeat(string, number, seperator = " ") {
    if(number<0)  throw new Error('Invalid count')
  let result = "";
  for (let i = 0; i < number; i++) {
    if (i == number - 1) {
      result += string;
    } else {
      result += string + seperator;
    }
  }
  return result
}
console.log(repeat());
module.exports = repeat;
