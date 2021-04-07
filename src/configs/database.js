const mysql = require("mysql");
require("dotenv/config");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 3306
});

const execute = (sqlStatement) => {
  return new Promise((resolve, reject) => {
    connection.query(sqlStatement, (err, result) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else return resolve(result);
    });
  });
};

module.exports = { execute };
