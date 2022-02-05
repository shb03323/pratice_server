const calculator = require("./calculator");

const add_result = calculator.add(1, 3);
const subtract_result = calculator.subtract(3, 2);
const multiply_result = calculator.multiply(2, 2);
const divide_result = calculator.divide(5, 2);

console.log("add result :", add_result);
console.log("subtract result :", subtract_result);
console.log("multiply result :", multiply_result);
console.log("divide result :", divide_result);