/** Including DOTENV to read from .env */
require("dotenv").config();

/** Importing Express for app construction */
const express = require("express");
const app = express();

/** Importing HTTP Status Code & Response Message Collection */
const {
  StatusCodes: RestStatusCodes,
  getReasonPhrase,
} = require("http-status-codes");

/** Import FizzBuzz Controller aka Router */
const { fizzBuzzRouter } = require("./src/controllers/v1/index.js");

app.use(`/api/${process.env.API_VERSION || "v1"}/fizzbuzz`, fizzBuzzRouter);

app.all("*", function (req, res) {
  res
    .status(RestStatusCodes.NOT_FOUND)
    .json({ message: getReasonPhrase(RestStatusCodes.NOT_FOUND) });
});

if (!module.main) {
  app.listen(process.env.PORT || process.env.APP_PORT);
  console.log(
    `FizzBuzz Application has started on port ${
      process.env.PORT || process.env.APP_PORT
    }`
  );
}

module.exports = app;
