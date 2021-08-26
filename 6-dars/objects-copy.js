let user = {
  name: "John",
  age: 20,
  book: {
    author: "Tohir Malik",
    title: "Shaytanat"
  }
}

// let admin = {};
// // 1
// for(let key in user) {
//   admin[key] = user[key]
// };
// admin.name = "Admin"
// console.log(user)
// console.log(admin)


// 2 Object.assign
// let isView = true;
// let isPermission = true;
// Object.assign(user, {isView, isPermission});

// let admin = Object.assign({}, user);
// admin.name = "Admin"
// user.isPermission = false
// console.log(user)
// console.log(admin)

// let admin = { ...user };

// console.log(user)
// console.log(admin)

let admin = JSON.parse(JSON.stringify(user));

admin.name = "Admin"
admin.book.title = "Padarkush"

console.log(user)
console.log(admin)

let person = new Object({
  name: "John",
  age: 20
});

let newPerson = person;

person.name = "Ali";

console.log(newPerson === person);