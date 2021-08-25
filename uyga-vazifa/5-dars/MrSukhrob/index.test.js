const {
    RimNumberConvertor,
    NumberRevercer,
    reapeatSymbolWithLimit
} = require("./index.js");

describe("LESSON-5 HOMEWORKS: ", () => {
    test("Repeat text with limit:", ()=>{
        expect(reapeatSymbolWithLimit("hi",3)).toBe("hi hi hi")
        expect(reapeatSymbolWithLimit("good", 2, '! ')).toBe("good! good")
    })
})

describe("LESSON-4 HOMEWORKS: ", () => {
    const convertor = new RimNumberConvertor();

    test("Convert Rim Number:", () => {
        expect(convertor.convert("XX")).toBe(20)
        expect(convertor.convert("IV")).toEqual(4)
        expect(convertor.convert("IX")).toEqual(9)
        expect(convertor.convert("IC")).toEqual(99)
        expect(convertor.convert(99)).toBeNaN()
    })

    test("Reverce number:", () => {
        expect(NumberRevercer(1996)).toBe(6991)
        expect(NumberRevercer(-1996)).toEqual(-6991)
        expect(NumberRevercer("lalala")).toBeNaN()
    })
})