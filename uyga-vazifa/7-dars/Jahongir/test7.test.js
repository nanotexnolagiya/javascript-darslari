const User = require("./7-vazifa");
test("calc test", () => {
  const calc = new User(7, 5);
  expect(calc.ayirish).toEqual(2);
  expect(calc.qoshish).toEqual(12);
  expect(calc.kopaytirish).toEqual(35);
  expect(calc.bolish).toEqual(1.4);
  expect(`${calc}`).toEqual("7,5");
  expect(+calc).toEqual(7);
  expect(calc).toEqual(calc);
});
