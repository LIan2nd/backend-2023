// TODO 3: Import data students dari folder data/students.js
const { request } = require("express");
const students = require("../data/students");

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    const data = {
      message: "Menampilkan Semua Data Students",
      data: students
    };

    res.json(data);
  }

  store(req, res) {
    const { name } = req.body;

    // TODO 5: Tambahkan data students
    students.push(name);

    const data = {
      message: `Menambahkan data Students ${name}`,
      data: students
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    // TODO 6: Update data students
    students[id] = name;

    const data = {
      message: `Mengedit data students id ${id}, nama ${name}`,
      data: students
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    // TODO 7: Hapus data students
    students.splice(id, 1);

    const data = {
      message: `Menghapus data students ${id}`,
      data: students
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;