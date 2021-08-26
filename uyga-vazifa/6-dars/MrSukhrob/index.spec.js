const {
    CheckObjectProperty,
    CalcObjectPropertiesValue,
    CheckObjectPropertyTotalValue,
    ClonningObjects
} = require("./index.js");


describe("CHECK PROPERTY OBJECTS: ", () => {
    const checkObjectProperty = new CheckObjectProperty();
    test("USING FUNC hasOwnProperty: {} => true", () => {
        expect(checkObjectProperty.usingFuncHasOwnProperty({})).toBe(true)
    })
    test("USING FUNC Object.keys: {} => true", () => {
        expect(checkObjectProperty.usingObjectKeys({})).toBe(true)
    })
    test("USING FUNC Json.Stringify: {} => true", () => {
        expect(checkObjectProperty.usingJsonStringify({})).toBe(true)
    })
    test("USING FUNC hasOwnProperty: {'name': 'Jhone'} => false", () => {
        expect(checkObjectProperty.usingFuncHasOwnProperty({
            'name': 'Jhone'
        })).toBe(false)
    })
    test("USING FUNC Object.keys: {'name': 'Jhone'} => false", () => {
        expect(checkObjectProperty.usingObjectKeys({
            'name': 'Jhone'
        })).toBe(false)
    })
    test("USING FUNC Json.Stringify: {'name': 'Jhone'} => false", () => {
        expect(checkObjectProperty.usingJsonStringify({
            'name': 'Jhone'
        })).toBe(false)
    })
})