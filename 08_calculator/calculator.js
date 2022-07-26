const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	for(let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function([...args]) {
  let result = 1;
  args.forEach(element => {
    result = result * parseInt(element);
  });
  return result;
};

const power = function(num1, num2) {
  let result = num1;
	for(let i = 1; i < num2; i++) {
    result = result * num1;
  }
  return result;
};

const factorial = function(num) {
  if(num === 0) {
    return 1;
  }
  let result = num;
	for(let i = num - 1; i > 0; i--) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
