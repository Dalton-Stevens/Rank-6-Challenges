const sortedNumbers = (numArr) => {
  if (numArr === null || numArr.length === 0) {
    return [];
  }
  return numArr.sort((a, b) => a - b);
};

console.log(sortedNumbers([1, 2, 10, 50, 5]));
console.log(sortedNumbers(null));
console.log(sortedNumbers([]));
