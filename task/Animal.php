<?php

# membuat class Animal
class Animal
{
    # property animals
    public $animals;

    # method constructor - mengisi data awal
    # parameter: data hewan (array)
    public function __construct($animals)
    { 
      $this->animals = $animals;
    }

    # method index - menampilkan data animals
    public function index()
    {
      $itteration = 1;
      foreach($this->animals as $animal) {
        echo $itteration, ". ", $animal, "<br>";
        $itteration++;
      } # Di kodingan saya dibuat seperti untuk case saat ini saja agar tampilannya rapi di web browser;
        # gunakan foreach untuk menampilkan data animals (array)
    }

    # method store - menambahkan hewan baru
    # parameter: hewan baru
    public function store($newAnimal)
    {
      array_push($this->animals, $newAnimal);
        # gunakan method array_push untuk menambahkan data baru
    }

    # method update - mengupdate hewan
    # parameter: index dan hewan baru
    public function update($index, $newAnimal)
    {
      if(!isset($this->animals[$index])) {
        throw new Exception("Index tidak valid");
        
      }
      $this->animals[$index] = $newAnimal;
    }

    # method delete - menghapus hewan
    # parameter: index
    public function destroy($index)
    {
      if(!isset($this->animals[$index])) {
        throw new Exception("Index tidak valid");
        
      }
      unset($this->animals[$index]);
        # gunakan method unset atau array_splice untuk menghapus data array
    }
}

# membuat object
# kirimkan data hewan (array) ke constructor
// $animal = new Animal(["Dog", "Kucing", "Anjing", "Cat"]);
$animal = new Animal(["Ayam", "Ikan"]);

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo "<br>";

echo "Store - Menambahkan hewan baru <br>";
$animal->store('Burung');
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'Kucing Anggora');
$animal->index();
echo "<br>";

echo "Destroy - Menghapus hewan <br>";
$animal->destroy(1);
$animal->index();
echo "<br>";