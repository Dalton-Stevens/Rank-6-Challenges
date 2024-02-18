const squaredDigits = (num) => {
  return +num
    .toString()
    .split("")
    .map((val) => val * val)
    .join("");
};

console.log(squaredDigits(3212));
console.log(squaredDigits(2112));
console.log(squaredDigits(0));
