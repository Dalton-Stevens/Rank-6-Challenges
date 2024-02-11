const whatYouDrink = (age) => {
  return age < 14
    ? "drink toddy"
    : age < 18
    ? "drink coke"
    : age < 21
    ? "drink beer"
    : "drink whiskey";
};

console.log(whatYouDrink(22));
