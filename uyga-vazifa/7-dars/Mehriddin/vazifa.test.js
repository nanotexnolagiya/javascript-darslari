const Calc = require('./vazifa')

test('test calc',()=>{
    const calc = new Calc(14, 7)

    expect(calc.qoshish()).toBe(21)
    expect(calc.ayirish()).toBe(7)
    expect(calc.kopaytirish()).toBe(98)
    expect(calc.bolish()).toBe(2)
    expect(+calc).toBe(14)
    expect(+calc).not.toBe(7)
    expect(Number(calc)).toEqual(14)
    expect(`${calc}`).toBe(`14, 7`)
    expect(`${calc}`).not.toBe(`14, 07`)
})