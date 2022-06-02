const { sum, multiply, divide } = require('./02Math');

describe('Test for math', () => {
  describe('test for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
      // ? expect(rta).toBe(4) Esta es la condicional para saber si la funcion pasa la prueba
    });
  });

  describe('test for multiply', () => {
    test('should be 4', () => {
      const rta = multiply(1, 4);
      expect(rta).toBe(4);
    });
  });

  describe('test for divide', () => {
    test('should divide', () => {
      const rta = divide(6, 3);
      expect(rta).toBe(2);

      const rta2 = divide(5, 2);
      expect(rta2).toBe(2.5);
    });

    test('should divide for 0', () => {
      const rta = divide(6, 0);
      expect(rta).toBeNull();
      // ! devuelve un error colocamos un "toBeNull", Es necesario hacer un refactor en el codigo

      const rta2 = divide(4, 0);
      expect(rta2).toBeNull();
    });
  });
});
