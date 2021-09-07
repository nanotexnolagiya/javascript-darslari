const takrorlash = require("../repeat");
test("kiritilgan so'z b marta takrorlanadi", () => {
  expect(takrorlash("Salom", 2, ".")).toBe("Salom.Salom");
});
