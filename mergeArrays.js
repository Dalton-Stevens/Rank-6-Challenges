const mergeArrays = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2].sort((a, b) => a - b);

  return [...new Set(newArr)];
};

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
