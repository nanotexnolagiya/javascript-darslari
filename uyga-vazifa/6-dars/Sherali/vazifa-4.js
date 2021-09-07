let user = {
  name: "Ali",
  age: 20,
  book: {
    author: "Tohir Malik",
    title: "Shaytanat",
    city: {
      name: "Tashkent",
      population: 2545159,
      region: {
        name: "Yunusobod",
      },
      regions: ["Olmazor", "Yunusobod", "Mirzo Ulugbek"],
    },
    dateOfBirth: {
      year: 1946,
      day: 27,
      month: "december",
      date: Date("12.27.1946"),
    },
  },
  showAuthorRegion() {
    console.log(this.book.city.region.name);
  },
};

deepClone = (obj) => {
  // debugger;
  let temp;
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) temp = new obj.constructor();
  else temp = obj.constructor();

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      temp[key] = deepClone(obj[key]);
    }
  }
  return temp;
};
let user2 = deepClone(user); // new deep cloned user2

// user2.book.city.region.name = "Mirobod";
// user2.book.author = "Ian Fleming";
// user2.book.title = "James Bond";
// user.showAuthorRegion(); // => Yunusobod
// console.log(user.book.author); // Tohir Malik
// console.log(user2.book.author); // Ian Fleming
// console.log(user.book.title); // Shaytanat
// console.log(user2.book.title); // James Bond
// console.log(user); // user object
// console.log(user2); // user2 object

module.exports = deepClone;
