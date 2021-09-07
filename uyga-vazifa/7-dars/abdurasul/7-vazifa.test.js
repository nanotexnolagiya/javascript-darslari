const Calculator = require('./7-vazifa')

test('Test Calculator Konstuktor',()=>{
    const calc1 = new Calculator(2, 32)
    const calc2 = new Calculator(7, 11)

    expect(calc1.qoshish()).toBe(34)
    expect(calc2.qoshish()).toBe(18)
    expect(calc1.ayirish()).toBe(-30)
    expect(calc2.ayirish()).toBe(-4)
    expect(calc2.kopaytirish()).toBe(77)
    expect(calc1.bolish()).toBe(2 / 32)
    ////
    expect(+calc1).toBe(32)
    expect(`${calc2}`).toBe(`7, 11`)
})