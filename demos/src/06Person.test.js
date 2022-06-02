const Person = require('./06Person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
  // beforeEach agrega la variable person a cada test de prueba para evita que se repita el codigo.
    person = new Person('Angel', 45, 1.75);
  });

  test('should return down', () => {
    // const person = new Person('Angel', 45, 1.75);
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should retunr normal', () => {
    // const person = new Person('Angel', 59, 1.75);
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
