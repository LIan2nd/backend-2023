// import mysql
const mysql = require("mysql2")

// import dotenv
require("dotenv").config();

// make connection
// Destructing object process.env
const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE
} = process.env;

// Update Config to Database
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

// * Simple Way
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// connect to database
db.connect(function (err) {
  if (err) {
    console.log(`Error Connecting to Database... ${err}`);
    return;
  } else {
    console.log("Database Connected...");
    return;
  }
});

// export db
module.exports = db;