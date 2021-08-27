const isNumber = require("../vazifa-3");

test("isNumber({a: '1', b: 100})", () => {
  expect(isNumber({totalValue: "1", a: "1", b: 100})).toBe(true);
  expect(isNumber({totalValue: NaN, a: 5, b: "9", c: "avs", d: "2r", e: "21"})).toBe(false);
  expect(isNumber({totalValue: "ab", a: "a", b: 4})).toBe(false);
  expect(isNumber({totalValue: "1", a: "a", b: NaN})).toBe(true);
  expect(isNumber({a: "a", b: {}, c: null, f: 23})).toBe(false);
});