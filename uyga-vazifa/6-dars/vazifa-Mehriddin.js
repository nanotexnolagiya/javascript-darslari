// VAZIFA 1
let obj = {
    // name: "john"
}

function isEmpty(object) {
    return Object.keys(object).length < 1
}
// console.log(isEmpty(obj))

// VAZIFA 2
obj = {
    a: "10",
    b: 23,
    c: undefined,
    d: true,
    e: NaN,
    f: null
}

function totalValue(obj) {
    let total = 0
    for (var value of Object.values(obj)) {
        if (!isNaN(parseInt(value))) total += +value
    }
    return total
}
// console.log(totalValue(obj))

// VAZIFA 3
obj = {
    a: 1,
    b: undefined,
    c: null,
    d: "",
    totalValue: "2"
}

// Qiziq holat parseInt("2g") 2 qaytaradi, parseInt("g2") NaN qaytaradi

function hasTotalValue(obj) {
    return "totalValue" in obj && !isNaN(parseInt(obj["totalValue"]))
}
// console.log(hasTotalValue(obj))

// VAZIFA 4
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

function deepClone(obj) {
    let newObj = {}
    for(key in obj){
        typeof obj[key] == "object" ? newObj[key] = deepClone(obj[key]) : newObj[key] = obj[key]
    }
    return newObj
}

// clone = deepClone(obj)
// clone.book.city.region.name = "Beruniy"
// console.log(clone.book.city.region.name)
// console.log(obj.book.city.region.name)


module.exports = {
    deepClone,
    hasTotalValue,
    totalValue,
    isEmpty
}