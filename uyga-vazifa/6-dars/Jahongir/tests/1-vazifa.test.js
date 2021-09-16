const isEmpty = require("../1-vazifa");
test("obyektni bo'shlikga tekshirish", () => {
  expect(isEmpty({})).toBe(true);
  expect(isEmpty({ name: "Alisher" })).toBe(false);
});
