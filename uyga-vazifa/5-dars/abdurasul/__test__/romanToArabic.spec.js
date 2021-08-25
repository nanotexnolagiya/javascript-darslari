const romanToArabic = require('../../../4-dars/abdurasul-vazifa-1')

test('Roman to Arabic test', ()=>{
    expect(romanToArabic('XIX')).toBe(19)
    expect(romanToArabic('XIV')).toBe(14)
    expect(romanToArabic('MCMXCIX')).toBe(1999)
})