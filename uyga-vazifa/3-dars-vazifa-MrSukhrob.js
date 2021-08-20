let number1 = 4,
    number2 = 3,
    operator = '*';

const calculateAction = function () {
    let result = 0,
        number1 = Number(this.number1),
        number2 = Number(this.number2);

    switch (this.operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '>':
            result = number1 > number2;
            break;
        case '<':
            result = number1 < number2;
            break;
        case '!=':
            result = number1 < number2;
            break;
        default:
            return null;
    }

    return result;
}

const printToConsole = function () {
    if (!Number(this.number1) || !Number(this.number2)) {
        return "Opps... something get wrong!";
    }
    return `${this.number1} ${this.operator} ${this.number2} = ${this.result()}`;
}

function Calculator(number1, number2, operator) {
    this.number1 = number1,
    this.number2 = number2,
    this.operator = operator
}

Calculator.prototype.result = calculateAction;
Calculator.prototype.print = printToConsole;


const calc = (number1, number2, op) => {
    const result = (() => eval(`${+number1} ${op} ${+number2}`))();

    if (!result) {
        return "Opps... something get wrong!";
    }

    return `${number1} ${op} ${number2} = ${result}`;
}

// вариант 1: console.log((new Calculator(number1, number2, operator)).print());
// вариант 2: console.log(calc(number1, number2, operator))
// вариант 3: console.log(`${number1} ${operator} ${number2} = ` + eval(number1 + operator + number2));