// import express dan routing
const express = require("express");
const router = require("./routes/api.js");

// Express Object
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Definition
app.use(router);

// Port Definition
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});