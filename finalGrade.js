const finalGrade = (exam, projects) => {
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
    ? 90
    : exam > 50 && projects >= 2
    ? 75
    : 0;
};

console.log(finalGrade(100, 12));
console.log(finalGrade(85, 5));
