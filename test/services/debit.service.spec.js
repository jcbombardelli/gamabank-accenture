const assert = require("chai").assert;
const faker = require("faker");

const depositService = require("../../src/api/services/deposit.service");
const accountRepository = require("../../src/api/repositories/conta.repository");

describe("Deposit service", async () => {

  it("Tentar depositar com um email invalido", async () => {

    
    const response = await depositService.updateBalance( "23425678904", "carolinavasconcelos90@gmail.com", "50.3" );


    await assert.equal(response , "Depósito realizado com sucesso" );
    expect(response.statusCode).to.equal(200);

  });
});