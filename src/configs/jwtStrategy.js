const { validate } = require("../api/services/auth.service");

const authName = "jwt";
const authSchema = "jwt";
const authOptions = { key: "keytest", validate };

module.exports = {
  authOptions,
  authSchema,
  authName,
};
