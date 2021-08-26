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

describe("CALC OBJECT PROPERTIES VALUE: ", () => {
    const calc = new CalcObjectPropertiesValue();

    const person = {
        name: "Sukhrob",
        age: 24,
        height: 1.5,
        weight: 60,
        married: true
    }

    test("USING FOR IN: person Object", () => {
        expect(calc.usingForIn(person)).toBe(85.5);
    })

    test("USING REDUCE FUNCTION: person Object", () => {
        expect(calc.usingReduseFunction(person)).toBe(85.5);
    })

    test("USING OBEJSCT.KEYS: person Object", () => {
        expect(calc.usingReduseFunction(person)).toBe(85.5);
    })

    test("USING FOR IN {}", () => {
        expect(calc.usingForIn({})).toBe(0);
    })

    test("USING REDUCE FUNCTION {}", () => {
        expect(calc.usingReduseFunction({})).toBe(0);
    })

    test("USING OBEJSCT.KEYS {}", () => {
        expect(calc.usingReduseFunction({})).toBe(0);
    })
})

describe("CHECK OBJECT PROPERTY TOTALVALUE: ", () => {
    let checkerTotalValue = new CheckObjectPropertyTotalValue();

    test("TOTALVALUE IS: {totalValue: 5} => TRUE", () => {
        expect(checkerTotalValue.check({
            totalValue: 5
        })).toBe(true)
    })
    test("TOTALVALUE IS: {totalValue: TRUE} => FALSE", () => {
        expect(checkerTotalValue.check({
            totalValue: true
        })).toBe(false)
    })
    test("TOTALVALUE IS: {totalValue: '5'} => TRUE", () => {
        expect(checkerTotalValue.check({
            totalValue: '5'
        })).toBe(true)
    })
    test("TOTALVALUE IS: {totalValue: 'true'} => TRUE", () => {
        expect(checkerTotalValue.check({
            totalValue: 'true'
        })).toBe(false)
    })
})

describe("DEEP CLONNING OBJECTS: ", () => {
    const clonner = new ClonningObjects();

    let object = {
        name: "Ali",
        age: 20,
        book: {
            author: "Tohir Malik",
            title: "Shaytanat",
            city: {
                name: "Tashkent",
                population: 2545159,
                region: {
                    name: "Yunusobod"
                },
                regions: ["Olmazor", "Yunusobod", "Mirzo Ulugbek"]
            },
            dateOfBirth: {
                year: 1946,
                day: 27,
                month: "december",
                date: Date("12.27.1946")
            }
        },
        showAuthorRegion() {
            console.log(this.book.city.region.name)
        }
    }

    test("PERSON OBJECT DEEP CLONNED TO OBJECT SUKHROB", () => {
        expect(clonner.getClone(object)).beEqual();
    })
});