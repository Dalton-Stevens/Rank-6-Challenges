const oppositesAttract = (num1, num2) => {
  return (num1 + num2) % 2 !== 0;
};

console.log(oppositesAttract(1, 4));
console.log(oppositesAttract(2, 2));
console.log(oppositesAttract(0, 1));
console.log(oppositesAttract(0, 0));
