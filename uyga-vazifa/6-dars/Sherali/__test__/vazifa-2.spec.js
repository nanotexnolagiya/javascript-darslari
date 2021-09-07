const totalValue = require("../vazifa-2");

test("totalValue({a: '1', b: 100})", () => {
  expect(totalValue({a: "1", b: 100})).toBe(101);
  expect(totalValue({a: 5, b: "9", c: "avs", d: "2r", e: "21"})).toBe(35);
  expect(totalValue({a: "a", b: 4})).toBe(4);
  expect(totalValue({a: "a", b: NaN})).toBe(undefined);
  expect(totalValue({a: "a", b: {}, c: null, f: 23})).toBe(23);
  expect(totalValue({a: "a", b: {}, c: false, k: 23})).toBe(23);
  expect(totalValue({a: "a", b: {}, c: {}, m: 43})).toBe(43);
  expect(totalValue({a: "a", b: {}, c: "", cv: 21})).toBe(21);
  expect(totalValue({a: "a", b: {}, c: "", cv: undefined, ka: 22})).toBe(22);
  expect(totalValue({a: "a", b: {}, c: "", cv: undefined})).toBe(undefined);
});
