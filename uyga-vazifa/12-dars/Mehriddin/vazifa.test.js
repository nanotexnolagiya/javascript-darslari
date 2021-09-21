const {changeArrInd, extendConstructor} = require("./vazifa")

const obj = {
    arr: ["a", "b", "c", "d", "e", "f"],
}


let user = {
    role: "user",
    getRole(){
        return this.role
    },
    sayHi(){
        return "hello"
    }

}
let admin = {
    role: "admin",
    isAdmin(){
        return true
    },
    sayHi(){
        return "Hi!"
    }
}

test("Change element index", () => {
    obj.arr = changeArrInd(obj.arr)
    expect(obj.arr[1]).toBe("a")
    expect(obj.arr[-1]).toBe("f")
    expect(obj.arr[3]).not.toBe("d")
    expect(obj.arr[-3]).toBe("d")
})

test("extend", () => {
    let userAdmin = extendConstructor(admin, user)
    expect(userAdmin.getRole()).toBe("admin")
    expect(userAdmin.isAdmin()).toBe(true)
    expect(userAdmin.sayHi()).toBe("Hi!")
})