const totalValue = require("../2-vazifa");
test("Qiymatlar yig'indisini topuvchi dastur", () => {
  expect(totalValue({ name: "Alisher", age: 21, id: 4 })).toEqual(25);
  expect(totalValue({ name: "Alisher" })).toEqual(undefined);
});
