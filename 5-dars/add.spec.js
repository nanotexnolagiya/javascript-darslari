
function add(x, y) {
  return x + y
}

// null, undefined, 0, '', NaN, false => falsy
// qolgan hammasi => truthy
test('test demo', () => {
  expect({ a: 1, b: 2 }).not.toEqual({ a: 2, b: 2 });
  expect('Hello').toBeTruthy();
  expect('').toBeFalsy();
  expect('slow').toMatch(/^sl/);
});