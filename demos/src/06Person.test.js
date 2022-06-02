// ! AAA, mantra del test.
// ? Arrange / Given
// ? Act / When
// ? Assert / Then

const Person = require('./06Person');

describe('Test for Person', () => {
  let person;
  // todo: Aqui esta el Arrange.
  beforeEach(() => {
  // beforeEach agrega la variable person a cada test de prueba para evita que se repita el codigo.
    person = new Person('Angel', 45, 1.75);
  });

  test('should return down', () => {
    // const person = new Person('Angel', 45, 1.75);
  // * Arrange.
    person.weight = 45;
    // todo: Aqui esta el Act
    const imc = person.calcIMC();
    // todo: Aqui esta el Assert
    expect(imc).toBe('down');
  });

  test('should retunr normal', () => {
    // const person = new Person('Angel', 59, 1.75);
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
