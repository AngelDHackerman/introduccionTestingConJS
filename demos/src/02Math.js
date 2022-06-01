const sum = (a, b) => { return a + b } ;

const multiply = (a, b) => {
  return a * b
}

const divide = (a, b) => {
  if (b === 0) {
    // todo: Este es el refactor porque no se pueden hacer diviciones por 0.

    return null;
  }

  return a / b;
};

module.exports = {
  sum,
  multiply,
  divide,
};
