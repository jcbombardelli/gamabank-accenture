const assert = require("chai").assert;
const faker = require("faker");

const userService = require("../../src/api/services/user.service");
const faturaRepository = require("../../src/api/repositories/fatura.repository");

describe("User service", async () => {
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
});
