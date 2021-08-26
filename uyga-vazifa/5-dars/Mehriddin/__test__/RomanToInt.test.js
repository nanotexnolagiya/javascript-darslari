const { romanToInt } = require("../../../4-dars/Mehriddin-vazifa")

test('romanToInt test', () => {  
    expect(romanToInt("III")).toBe(3)
    expect(romanToInt("MMMCMXCIX")).toEqual(3999)
    expect(romanToInt("MI")).toEqual(1001)
    expect(romanToInt("MIG")).toBeNaN()
    expect(romanToInt("MIV")).not.toBeNaN()
})