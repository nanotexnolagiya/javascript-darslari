function calc(number1, operator, number2) {
  let result = 0;
  if (operator === "+") {
    result = number1 + number2;
  } else if (operator === "-") {
    result = number1 - number2;
  } else if (operator === "/") {
    result = number1 / number2;
  } else if (operator === "*") {
    result = number1 * number2;
  } else if (operator === "**") {
    result = number1 ** number2;
  } else if (operator === ">") {
    result = number1 > number2;
  } else if (operator === "<") {
    result = number1 < number2;
  } else if (operator === "==") {
    result = number1 == number2;
  }
  console.log(`${number1} ${operator} ${number2} = ${result}`);
  return result;
}
calc(5, "==", 5);
