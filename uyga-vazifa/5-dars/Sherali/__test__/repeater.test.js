const repeater = require("../repeater");
test("result would-be 'Assalomu alaykum!,Assalomu alaykum!,Assalomu alaykum!'", () => {
  expect(repeater("Assalomu alaykum!", 3, ",")).toBe(
    "Assalomu alaykum!,Assalomu alaykum!,Assalomu alaykum!"
  );
});
