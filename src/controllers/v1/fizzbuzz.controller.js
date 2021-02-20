/** Importing Express for app construction */
var express = require("express");

/** Importing HTTP Status Codes Collection */
const { StatusCodes: RestStatusCodes } = require("http-status-codes");

/** Import Helper method to facilitate fizzbuzz computation */
const { computeFizzBuzz } = require("../../helpers/fizzbuzzHelper");

/** Declare FizzBuzz Router */
var fizzBuzzRouter = express.Router();

/**
 * Handle /GET route for FizzBuzz Computation
 */
fizzBuzzRouter.get("/:count?", function (req, res) {
  try {
    /** Covert input variable (count) into Number/Integer */
    const count = parseInt(req?.params?.count || 100);

    /** IF the number converts into NaN then respond with 422 */
    if (isNaN(count)) {
      res
        .status(RestStatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: "FizzBuzz could only be computed for Number" });

      /** ELSE compute the FizzBuzz and respond with Success/OK */
    } else {
      const data = computeFizzBuzz(count);
      res.json({ message: "Fizzbuzz was successful", data });
    }
  } catch (ex) {
    /** Handle Exception and respond with internal server error */
    res
      .status(RestStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ex.message });
  }
});

module.exports = fizzBuzzRouter;
