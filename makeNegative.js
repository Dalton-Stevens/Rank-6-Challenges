const makeNegative = (num) => {
  if (num <= 0) {
    return num;
  }

  return num * -1;
};

console.log(makeNegative(42));
console.log(makeNegative(0));
console.log(makeNegative(-5));
