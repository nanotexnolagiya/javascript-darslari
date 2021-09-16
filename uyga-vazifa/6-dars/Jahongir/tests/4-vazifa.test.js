const deepCloning = require("../4-vazifa");

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
};

let user2 = deepCloning(user);
user2.book.city.region.name = "Urganch";
test("deepCloning bo'lishini aniqlash", () => {
  expect(deepCloning(user2.book.city.region.name)).not.toBe(
    user.book.city.region.name
  );
});
