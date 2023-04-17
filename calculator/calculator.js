const sum = (array) => array.reduce((a, b) => a + b);
const subtract = (array) => array.reduce((a, b) => a - b);
const multiply = (array) => array.reduce((a, b) => a * b);
const divide = (a, b) => {
  if (b === 0) {
    return 'You cannot divide by 0';
  }
  return a / b;
};

const calculator = new Map();

calculator.set('sum', sum);
calculator.set('subtract', subtract);
calculator.set('multiply', multiply);
calculator.set('divide', divide);

console.log(calculator.get('sum')([1, 2, 3, 4, 5]));
console.log(calculator.get('subtract')([ 50, 40, 30, 20, 10 ]));
console.log(calculator.get('multiply')([1, 2, 3, 4, 5]));
console.log(calculator.get('divide')(10, 2));
