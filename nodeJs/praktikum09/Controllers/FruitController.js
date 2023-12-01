// ToDo Import Fruits dari data/Fruits.js
let fruits = require("../data/fruits.js");

// ToDo Membuat method index
const index = function () {
  for (const fruit of fruits) {
    console.log(fruit);
  }
  console.log("\n");
}

// ToDo Membuat method store
const store = function (name) {
  console.log(`Added ${name} to Fruits data`);
  fruits.push(name);
  index();
}

// ToDo Membuat method update
const update = function (position, name) {
  console.log(`Updated ${fruits[position]} to ${name}`);
  fruits[position] = name;
  index();
}

// ToDo membuat method destroy
const destroy = function (position) {
  fruits.splice(position, 1);
  console.log(`Deleted ${fruits[position]}`);
  index();
}

// ToDo Export semua method
module.exports = { index, store, update, destroy };