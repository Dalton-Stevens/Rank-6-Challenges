const twiceAsOld = (dadYearsOld, sonYearsOld) => {
  if (dadYearsOld < 0 || sonYearsOld < 0) {
    return 0;
  }

  let ageDifference = dadYearsOld - sonYearsOld * 2;

  return Math.abs(ageDifference);
};

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));
console.log(twiceAsOld(42, 21));
