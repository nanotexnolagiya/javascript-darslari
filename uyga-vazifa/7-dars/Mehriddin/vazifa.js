function Calc(a, b){
    this.qoshish = () => {
        return a + b
    }
    this.ayirish = () => {
        return a - b
    }
    this.kopaytirish = () => {
        return a * b
    }
    this.bolish = () => {
        return a/b
    }
    this[Symbol.toPrimitive] = function (hint){
        if(hint == "string") return `${a}, ${b}`; else
        if(hint == "number") return a > b ? a : b
    }

}


// calc = new Calc(1, 2)
// console.log(calc.qoshish())
// console.log(+calc)
// console.log(`${calc}`)

module.exports = Calc