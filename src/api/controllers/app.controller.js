const conn = require("../../configs/database");

console.log("Banco de dados inicializado");

const status = (request, h) => {
  return {
    now: Date.now(),
    message: "This is Brazil!!",
  };
};
const login = (request, h) => {
  return {};
};
const register = (request, h) => {
  return {};
};

module.exports = {
  status,
};
