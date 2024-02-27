const smallEnough = (arr, limit) => {
  for (let value of arr) {
    if (value > limit) {
      return false;
    }
  }
  return true;
};

console.log(smallEnough([60, 101], 200));
