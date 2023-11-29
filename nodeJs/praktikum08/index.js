// * Membuat Variabel
let nama = "LIand";

console.log(nama);

// * Membuat Array
const angka = [1, 2, 3, 4, 5];

console.log(angka[0]);
console.log(angka.length);

// * Looping Array
for (let i = 0; i < angka.length; i++) {
  console.log(angka[i]);
}

// * Membuat Object

const mhs = {
  // * Key : Value
  nama: "LIand",
  nim: "0110222132",
  jurusan: "Teknik Informatika"
};

console.log(mhs.jurusan);

// * Membuat perecabangan (If Else) 

let nilai = 90;
if (nilai > 80) {
  console.log("Lulus");
} else {
  console.log("Tidak lulus");
}

// * Membuat looping
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

// * Membuat function
function tambah(x, y) {
  return x + y;
}

console.log(tambah(1, 2));