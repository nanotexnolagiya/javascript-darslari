const isEmpty = require("../vazifa-1");

test("isEmpty({name: 'John'})", () => {
  expect(isEmpty({name: "John"})).toBe(false);
  expect(isEmpty({a: "1", b: 100})).toBe(false);
  expect(isEmpty({a: "a", b: 4})).toBe(false);
  expect(isEmpty({})).toBe(true);
  expect(isEmpty({"": ""})).toBe(false);
});
