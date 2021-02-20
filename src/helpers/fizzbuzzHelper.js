const computeFizzBuzz = (limit) => {
  const results = {};

  for (let counter = 1; counter <= limit; counter++) {
    const isDivisibleBy3 = counter % 3 === 0;
    const isDivisibleBy5 = counter % 5 === 0;

    if (isDivisibleBy3 === true && isDivisibleBy5 === false) {
      results[counter] = "Fizz";
    } else if (isDivisibleBy3 === false && isDivisibleBy5 === true) {
      results[counter] = "Buzz";
    } else if (isDivisibleBy3 === true && isDivisibleBy5 === true) {
      results[counter] = "FizzBuzz";
    } else {
      results[counter] = counter;
    }
  }

  return results;
};

module.exports = {
  computeFizzBuzz,
};
