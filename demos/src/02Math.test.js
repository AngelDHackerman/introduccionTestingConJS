const  { sum, multiply, divide } = require('./02Math');

test("adds 1 + 3 should be 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

