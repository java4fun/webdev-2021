function Calculator(value = 0) {
  this.stack = [];
  this.value = value;
}

Calculator.prototype.push = function (value) {
  this.stack.push(value);
};

Calculator.prototype.add = function () {
  this.value += this.stack.reduce((total, current) => {
    return total + current;
  }, 0);

  // empties the stack!
  this.stack = [];

  return this.value;
};

Calculator.prototype.mul = function () {
  // "sums the stack" then multiplies by the sum...
  this.value *= this.stack.reduce((total, current) => {
    return total + current;
  }, 0);

  // "multiplies the stack"
  /*
  this.value *= this.stack.reduce((total, current) => {
    return total * current;
  }, 1);/**/

  // empties the stack!
  this.stack = [];

  return this.value;
};

Calculator.prototype.get = function () {
  return this.value;
};

export default Calculator;
