// Get the client
require('dotenv').config();
const mysql = require('mysql2/promise')



// Create the connection to database
// const connection =  mysql.createConnection({
//     host: process.env.DB_HOST,
//     port : process.env.DB_PORT,  //default 3306
//     password : process.env.DB_PASSWORD,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//   });

  // Create connection with pools
  const connection =  mysql.createPool({
    host: process.env.DB_HOST,
    port : process.env.DB_PORT,  //default 3306
    password : process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit : 0
  });

  module.exports = connection;