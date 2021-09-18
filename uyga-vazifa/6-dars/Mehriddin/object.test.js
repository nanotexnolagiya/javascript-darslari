const { isEmpty, hasTotalValue, deepClone, totalValue } = require("./vazifa-Mehriddin")

test("object is empty test", () => {
    expect(isEmpty({})).toBeTruthy()
    expect(isEmpty({
        name: "Mehriddin"
    })).toBeFalsy()
})

test("object has total value", () => {
    expect(hasTotalValue({
        bool: true,
        "name": "Mehriddin",
        totalValue: 55
    })).toBeTruthy()

    expect(hasTotalValue({
        totalValue: "false"
    })).not.toBeTruthy()

    expect(hasTotalValue({
        totalValues: 1
    })).toBeFalsy()
})

test("object total values test", () => {
    let obj = {
        a: "10",
        b: 23,
        c: undefined,
        d: true,
        e: NaN,
        f: null
    }
    expect(totalValue(obj)).toEqual(33)

    expect(totalValue(obj)).not.toEqual(34)

    expect(totalValue({})).toEqual(0)
})


test("object deep clone test", () => {
    obj = {
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
                date: new Date(1946, 12, 27)
            },
            comments: {
    
            }
        },
        showAuthorRegion() {
            console.log(this.book.city.region.name)
        }
    }

    clone = deepClone(obj)
    expect(clone.book.city.region.name).toEqual(obj.book.city.region.name)
    clone.book.city.region.name = "Oqtepa"
    clone.book.city.regions.pop()
    expect(clone.book.city.region.name).not.toEqual(obj.book.city.region.name)
    expect(clone.book.city.regions.length).not.toEqual(obj.book.city.regions.length)
})