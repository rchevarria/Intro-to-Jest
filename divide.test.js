const divide = require('./divide');

test('divides 6 / 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});
