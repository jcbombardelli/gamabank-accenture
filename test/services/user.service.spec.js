const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const Boom = require("@hapi/boom");
const faker = require("faker");

const database = require("../../src/configs/database");
const userService = require("../../src/api/services/user.service");
const faturaRepository = require("../../src/api/repositories/fatura.repository");

chai.use(chaiAsPromised);

const expect = chai.expect;
const assert = chai.assert;

describe("User service", async () => {
  afterEach(async () => {
    await database.rollback();
  });

  it("It's not possible to create a user with a invalid CPF", async () => {
    const invalidCpf = "001001001-01";

    const newUser = async () =>
      await userService.createUser(
        "Matheus Gonçalves",
        invalidCpf,
        "test@gmail.com",
        "cinco",
        "11990122568"
      );

    expect(async () => await newUser()).to.throws;
  });

  it("New users must have zero payment pending invoice", async () => {
    const newUser = await userService.createUser(
      "Matheus Gonçalves",
      "76286455000",
      "test@gmail.com",
      "Matheus2!",
      "11990122568"
    );

    const getOpenInvoice = await faturaRepository.findFaturaAbertaByIdConta(
      newUser.idConta
    );

    await assert.equal(getOpenInvoice.valorConsolidado, 0);
  });

  it("Not possible to have two users with the same CPF", async () => {
    await userService.createUser(
      "Matheus Gonçalves",
      "76286455000",
      "test@gmail.com",
      "Matheus2!",
      "11990122568"
    );

    const newUser2 = async () => {
      await userService.createUser(
        "Douglas Gonçalves",
        "76286455000",
        "test2@gmail.com",
        "Matheus3!",
        "11990153645"
      );
    };

    expect(async () => await newUser2()).to.throws;
  });

  it("It is not possible to create a user if the password does not contain 8 digits, at least one of them, a capital character, a lower case character, a special character and a number", async () => {
    const newUser = async () =>
      await userService.createUser(
        "Matheus Gonçalves",
        "76286455000",
        "test@gmail.com",
        "cinco",
        "11990122568"
      );

    expect(async () => await newUser()).to.throws;
  });

  it("");
});
