class RimNumberConvertor {
    constructor() {
        this.symbols = new Map([
            ["M", 1000],
            ["D", 500],
            ["C", 100],
            ["L", 50],
            ["X", 10],
            ["V", 5],
            ["I", 1]
        ]);
    }

    rimNumberToArr(number) {
        return number .toString().split('');
    }

    convert(number) {
        if (!this.validate(number)) {
            return this.validate();
        }

        let numbers = this.rimNumberToArr(number);
        let result = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (this.symbols.get(numbers[i]) < this.symbols.get(numbers[i + 1])) {
                result += Number(this.symbols.get(numbers[i + 1]) - this.symbols.get(numbers[i]))
                i++
            } else {
                result += this.symbols.get(numbers[i])
            }
        }

        return result

    }

    validate(number) {
        if (typeof number !== 'String') {
            return new Error("Parametr of the function must be type of String")
        }
    }

}


function NumberRevercer(number) {
    if (!Number(number)) new Error("Paramer must be type of number!")

    let result = Number(Math.abs(number).toString().split('').reverse().join(''));
    if (number < 0) {
        return result * (-1)
    }

    return result;
}

function reapeatSymbolWithLimit(symbol, limit, spreat = ' ') {
    let result = '';

    for (let i = 0; i < limit; i++) {
        result += (limit != i + 1) ? symbol + spreat : symbol
    }

    return result;
}

module.exports.RimNumberConvertor = RimNumberConvertor
module.exports.NumberRevercer = NumberRevercer;
module.exports.reapeatSymbolWithLimit = reapeatSymbolWithLimit;