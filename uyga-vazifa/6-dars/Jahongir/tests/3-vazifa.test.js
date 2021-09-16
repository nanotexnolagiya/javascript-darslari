const finderTotalAmount = require("../3-vazifa");
test("totalAmount nomli property borligini tekshirish", () => {
  expect(finderTotalAmount({ name: "Ali", totalAmount: "7" })).toEqual(true);
  expect(finderTotalAmount({ name: "Ali", totalAmount: "sdf" })).toEqual(false);
  expect(finderTotalAmount({})).toEqual(false);
  expect(finderTotalAmount({ name: "Ali", totalAmount: null })).toEqual(false);
  expect(finderTotalAmount({ name: "Ali", totalAmount: 5 })).toEqual(true);
});
