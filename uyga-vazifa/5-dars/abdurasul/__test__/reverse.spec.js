let reverseNumber = require('../../../4-dars/abdurasul-vazifa-2')

test('reverse number test', ()=>{
    expect(reverseNumber(1234)).toBe(4321)
    expect(reverseNumber(-100)).toBe(-1)
    expect(reverseNumber()).toEqual(NaN)
})