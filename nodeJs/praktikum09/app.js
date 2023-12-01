// ToDo Import semua method dari Controllers/FruitController.js
const { index, store, update, destroy } = require("./Controllers/FruitController.js");

// ToDo Membuat main function sebagai fungsi utama yang akan ditampilkan
const main = () => {
  console.log("Hello World");
  console.log("Method index - Menampilkan data Buah");
  index();
  console.log("Method store - Menambahkan data Buah");
  store("Strawberry");
  console.log("Method update - Memperbarui data Buah");
  update(0, "Grape");
  console.log("Method destroy - Menghapus data Buah");
  destroy(0);
}

// ToDo Memanggil main function agar bisa menampilkan apa yang dipanggil di main function
main();