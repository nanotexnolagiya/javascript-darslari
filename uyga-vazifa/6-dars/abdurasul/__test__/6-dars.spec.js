let isEmpty = require("../1.js");
let totalValue = require("../2");
let hasTotalValue = require("../3");
let deepClone = require("../4");

let user = {
  name: "John",
  age: 24,
  friend: {
    name: "Ali",
    isMarried: false,
    status: "active",
    jobs: {
      programmer: true,
    },
  },
};
// isEmpty
test("isEmpty funksiyasi", () => {
  expect(isEmpty({})).toBe(true);
  expect(isEmpty(user)).toBe(false);
});
// totalValue
test("totalValue funksiyasi", () => {
  expect(totalValue({ a: "1", b: 100 })).toBe(101);
  expect(totalValue({ a: 5, b: 9 })).toBe(14);
  expect(totalValue({ a: "a", b: 4 })).toBe(4);
  expect(totalValue({ a: "a", b: "b" })).toBe(0);
});
// hasTotalValue
test("hasTotalValue funksiyasi", () => {
  expect(hasTotalValue({ name: "John", age: 25, totalValue: "25" })).toBe(true);
  expect(hasTotalValue({ name: "John", age: 25, totalValue: null })).toBe(
    false
  );
  expect(hasTotalValue({ name: "John", age: 25, totalValue: 43 })).toBe(true);
  expect(hasTotalValue({ name: "John", age: 25, totalValue: "ab" })).toBe(
    false
  );
  expect(hasTotalValue({})).toBe(false);
});

// deepClone

test("deepClone", () => {
  expect(deepClone(user)).toEqual({
    name: "John",
    age: 24,
    friend: {
      name: "Ali",
      isMarried: false,
      status: "active",
      jobs: {
        programmer: true,
      },
    },
  });
  let clone = deepClone(user);
  user = {};
  expect(clone).toEqual({
    name: "John",
    age: 24,
    friend: {
      name: "Ali",
      isMarried: false,
      status: "active",
      jobs: {
        programmer: true,
      },
    },
  });
});
