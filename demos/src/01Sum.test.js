// ? Esta es la primer prueba usando Jest.

const sum = require('./01Sum');

test('adds 1 + 2 equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
