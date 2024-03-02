const factorial = (num) => {
  if (num < 0 || num > 12) {
    throw new RangeError("Number must be between 0 and 12.");
  }

  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
