const easy = (x) => {
  if (typeof x === "string") {
    return "Error";
  }

  return x * 50 + 6;
};

console.log(easy("hello"));
console.log(easy(1));
console.log(easy(10));
