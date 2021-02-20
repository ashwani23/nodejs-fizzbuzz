/** During the test the env variable is set to test */
require("dotenv").config({ path: "./.env.test" });

/** Require the dev-dependencies */
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server.js");
let should = chai.should();
const { StatusCodes: RestStatusCodes } = require("http-status-codes");
const fizzbuzzMock = require("./__mocks__/fizzbuzz.mock.json");
const fizzbuzzMockParam = require("./__mocks__/fizzbuzzWithParam.mock.json");

chai.use(chaiHttp);
//Our parent block
describe("FizzBuzz HTTP Test", () => {
  beforeEach((done) => {
    done();
  });

  describe("/GET Wrong Route", () => {
    it("it should through NOT FOUND", (done) => {
      chai
        .request(server)
        .get("/wrongRoute")
        .end((err, res) => {
          res.should.have.status(RestStatusCodes.NOT_FOUND);
          done();
        });
    });
  });

  describe(`/GET /api/${process.env.API_VERSION}/fizzbuzz`, () => {
    it("it should through print result for count 100", (done) => {
      chai
        .request(server)
        .get(`/api/${process.env.API_VERSION}/fizzbuzz`)
        .end((err, res) => {
          res.should.have.status(RestStatusCodes.OK);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.message.should.have.eql(fizzbuzzMock.message);
          res.body.should.have.property("data");
          res.body.data.should.have.eql(fizzbuzzMock.data);
          done();
        });
    });
  });

  describe(`/GET /api/${process.env.API_VERSION}/fizzbuzz/15`, () => {
    it("it should through print result for count 15", (done) => {
      chai
        .request(server)
        .get(`/api/${process.env.API_VERSION}/fizzbuzz/15`)
        .end((err, res) => {
          res.should.have.status(RestStatusCodes.OK);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.message.should.have.eql(fizzbuzzMockParam.message);
          res.body.should.have.property("data");
          res.body.data.should.have.eql(fizzbuzzMockParam.data);
          done();
        });
    });
  });

  describe(`/GET /api/${process.env.API_VERSION}/fizzbuzz/test`, () => {
    it("it should fail for count given as test (string)", (done) => {
      const message = "FizzBuzz could only be computed for Number";
      chai
        .request(server)
        .get(`/api/${process.env.API_VERSION}/fizzbuzz/test`)
        .end((err, res) => {
          res.should.have.status(RestStatusCodes.UNPROCESSABLE_ENTITY);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.message.should.have.eql(message);
          done();
        });
    });
  });
});
