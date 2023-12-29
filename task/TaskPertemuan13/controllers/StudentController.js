// TODO 3: Import data students dari folder data/students.js
const { request } = require("express");
const Student = require("../models/Students");

// Membuat Class StudentController
class StudentController {
  async index(req, res) {

    const students = await Student.all();
    if (students.length > 0) {
      const data = {
        message: "Menampilkan data student",
        data: students
      };
      res.status(200).json(data);
    }

    const data = {
      message: "Students is empty",
    };

    res.status(200).json(data);
  }

  async store(req, res) {
    const { name, nim, email, jurusan } = req.body;

    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Semua data harus dikirim",
      };

      return res.status(422).json(data);
    }

    const students = await Student.create(req.body);
    const data = {
      message: `Menambahkan data Student`,
      data: students
    };
    res.status(201).json(data);
  }

  async show(req, res) {
    const { id } = req.params;
    const student = await Student.show(id);

    if (student) {
      const data = {
        message: `Show ${student.name}'s data`,
        data: student
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`
      };
      res.status(404).json(data);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const student = await Student.show(id);
    if (student) {
      const student = await Student.update(id, req.body);
      const data = {
        message: `Mengedit data student dengan id ${studentId}`,
        data: student
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`,
      };
      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.show(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus data students dengan id ${id}`,
        data: student
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: "Student not found",
      };
      res.status(404).json(data);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;