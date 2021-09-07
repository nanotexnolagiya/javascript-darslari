const deepClone = require("../vazifa-4");
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
let user2 = deepClone(user); // new deep cloned user2
user2.book.city.region.name = "Mirobod";
user2.book.author = "Ian Fleming";
user2.book.title = "James Bond";
user.showAuthorRegion(); // => Yunusobod
test("deepClone", () => {
  expect(user2).toBe(user2);
  expect(user2.book.city.region.name).toBe("Mirobod");
  expect(user2.book.title).toBe("James Bond");
  expect(user.book.title).toBe("Shaytanat");
});