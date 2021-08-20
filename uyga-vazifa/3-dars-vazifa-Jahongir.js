let num1 = 15;
let num2 = 5;
let mathOperator = "*";
let solishtirishOperatori = "<";
let result;
let resultMath;

// 1-vazifa
if (mathOperator == "-") {
  resultMath = num1 - num2;
} else if (mathOperator == "+") {
  resultMath = num1 + num2;
} else if (mathOperator == "/") {
  resultMath = num1 / num2;
} else if (mathOperator == "*") {
  resultMath = num1 * num2;
} else {
  resultMath = `${mathOperator} Bunday arifmetik amali yo'q`;
}
console.log(resultMath);

// 2-vazifa

if (solishtirishOperatori == "<") {
  result = num1 < num2;
} else if (solishtirishOperatori == ">") {
  result = num1 > num2;
} else if (solishtirishOperatori == "===") {
  result = num1 === num2;
} else if (solishtirishOperatori == "!=") {
  result = num1 != num2;
} else {
  result = `${solishtirishOperatori} Bunday solishtirish amali yo'q`;
}
console.log(result);
