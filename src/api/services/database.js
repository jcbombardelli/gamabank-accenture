const mysql = require('mysql');


const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Blender3d326326*",
    database: 'projetoacceture',
    port: 3307
});

con.connect(err => {
  if (err) throw err;
  console.log("Connected!");

  // con.query('Select * from cidades', (error, result, fields)=>{
  //   if (error) throw error
  //   console.log(result)
    con.end()
  // })
});

module.exports = con