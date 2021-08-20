const number1 = 21;
const number2 = 2;
const operator = "**";
let result;

if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "*") {
  result = number1 * number2;
} else if (operator == "**") {
  result = number1 ** number2;
} else if (operator == "/") {
  result = number1 / number2;
} else if (operator == "%") {
  result = number1 % number2;
} else if (operator == "||") {
  result = number1 || number2;
} else if (operator == "&&") {
  result = number1 && number2;
} else if (operator == ">") {
  result = number1 > number2;
} else if (operator == ">=") {
  result = number1 >= number2;
} else if (operator == "<") {
  result = number1 < number2;
} else if (operator == "<=") {
  result = number1 <= number2;
} else if (operator == "==") {
  result = number1 == number2;
} else if (operator == "===") {
  result = number1 === number2;
} else if (operator == "!=") {
  result = number1 != number2;
} else if (operator == "!==") {
  result = number1 !== number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);
