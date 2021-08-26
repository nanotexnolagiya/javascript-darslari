// let name = "John"


// let user = new Object();
// let key = "age";

// let user = {
//   "name": "John",
//   "for": "coffee",
//   "return": "",
//   "looks like": "Batman",
//   animal: {
//     dog: "Bo"
//   },
//   [key + "_"]: 20
// };

// delete user["looks like"]

// console.log(user.age_)


function makeUser(ISM, YOSH) {
  return {
    ISM,
    YOSH
  }
}

let user = {
  name: "Ali",
  for: 0,
  return: 0,
  lastName: undefined
}

// if (user.lastName === undefined) {
//   user.age = 18
// }

// in

// console.log("lastName" in user);


let codes = {
  "42": "--",
  "44": "--",
  "41": "--",
  "1": "---"
}

for(let key in codes) {
  console.log(key)
}

