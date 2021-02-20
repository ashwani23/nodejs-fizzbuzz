const expect = require("chai").expect;
const { computeFizzBuzz } = require("../src/helpers/fizzbuzzHelper.js");

describe("Testing Fizzbuzz Helper", () => {
  it("Compute FizzBuzz for ZERO", () => {
    const fizzBuzzOutput = computeFizzBuzz(0);
    expect(fizzBuzzOutput).to.deep.equal({});
  });

  it("Compute FizzBuzz for 3", () => {
    const fizzBuzzOutput = computeFizzBuzz(3);
    expect(fizzBuzzOutput).to.deep.equal({ 1: 1, 2: 2, 3: "Fizz" });
  });
});
