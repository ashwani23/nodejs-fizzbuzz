var express = require("express");
const { StatusCodes: RestStatusCodes } = require("http-status-codes");
const { computeFizzBuzz } = require("../../helpers/fizzbuzzHelper");
var fizzBuzzRouter = express.Router();

fizzBuzzRouter.get("/:count?", function (req, res) {
  try {
    const count = parseInt(req?.params?.count || 100);
    if (isNaN(count)) {
      res
        .status(RestStatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: "FizzBuzz could only be computed for Number" });
    } else {
      const data = computeFizzBuzz(count);
      res.json({ message: "Fizzbuzz was successful", data });
    }
  } catch (ex) {
    if (ex instanceof TypeError) {
      res
        .status(RestStatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: ex.message });
    }
  }
});

module.exports = fizzBuzzRouter;
