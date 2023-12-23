// TODO 3: Import data students dari folder data/students.js
const { request } = require("express");
const Student = require("../models/Students");

// Membuat Class StudentController
class StudentController {
  async index(req, res) {
    const students = await Student.all();

    const data = {
      message: "Menampilkan data student",
      data: students
    };

    res.status(200).json(data);
  }

  async store(req, res) {
    const students = await Student.create(req.body);

    const data = {
      message: `Menambahkan data Student`,
      data: students
    };

    res.status(201).json(data);
  }

  async show(req, res) {
    const studentId = req.params.id;
    const students = await Student.show(studentId);

    const data = {
      message: `Show ${students[0].name}`,
      data: students
    };

    res.status(200).json(data);
  }

  // update(req, res) {
  //   const { id } = req.params;
  //   const { name } = req.body;
  //   // TODO 6: Update data students
  //   students[id] = name;

  //   const data = {
  //     message: `Mengedit data students id ${id}, nama ${name}`,
  //     data: students
  //   };

  //   res.json(data);
  // }

  // destroy(req, res) {
  //   const { id } = req.params;

  //   // TODO 7: Hapus data students
  //   students.splice(id, 1);

  //   const data = {
  //     message: `Menghapus data students ${id}`,
  //     data: students
  //   };

  //   res.json(data);
  // }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;