const mysql = require("mysql2");


let connection ="";
try{
   connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  console.log("Connected");
}
catch(err){
  console.log(err);
}

module.exports = connection;
