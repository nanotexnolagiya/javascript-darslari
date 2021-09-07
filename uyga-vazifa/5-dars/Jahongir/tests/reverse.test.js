const teskariSon = require("../../../4-dars/4-dars-Jahongir");
test("sonni teskarisiga yozish", () => {
  expect(teskariSon(12345)).toEqual(54321);
});
