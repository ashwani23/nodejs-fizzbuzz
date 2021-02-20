/**
 * Computes FizzBuzz for a given number
 * @param Number limit Limit upto which the computation is required
 * @returns Object
 */
const computeFizzBuzz = (limit) => {
  const results = {};

  for (let counter = 1; counter <= limit; counter++) {
    /** Compute divisibility by 3 */
    const isDivisibleBy3 = counter % 3 === 0;

    /** Compute divisibility by 5 */
    const isDivisibleBy5 = counter % 5 === 0;

    /** Make a check if the number is divisible by 3 and not 5 */
    if (isDivisibleBy3 === true && isDivisibleBy5 === false) {
      results[counter] = "Fizz";

      /** Make a check if the number is divisible by 5 and not 3 */
    } else if (isDivisibleBy3 === false && isDivisibleBy5 === true) {
      results[counter] = "Buzz";

      /** Make a check if the number is divisible by 5 and 3 */
    } else if (isDivisibleBy3 === true && isDivisibleBy5 === true) {
      results[counter] = "FizzBuzz";

      /** Handle no divisibility by 3 and 5 both */
    } else {
      results[counter] = counter;
    }
  }

  return results;
};

module.exports = {
  computeFizzBuzz,
};
