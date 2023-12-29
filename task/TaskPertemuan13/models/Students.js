// Import Database
const db = require("../config/database")

// Make Model Students
class Student {
  // Method untuk menampilkan semua data students
  static all() {
    return new Promise((resolve, reject) => {
      // Lakukan query ke db untuk ambil data
      const sql = "SELECT * FROM students";
      db.query(sql, (sql, result) => {
        resolve(result);
      });
    });
  }

  // Method untuk membuat data Student baru
  static create(Student) {
    return new Promise((resolve, reject) => {
      Student.created_at = new Date();
      Student.updated_at = new Date();

      const sql = "INSERT INTO students SET ?";
      db.query(sql, Student, (err, result) => {
        resolve(this.show(result.insertId));
      });
    });
  }

  // Method untuk menampilkan salah satu data student
  static show(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM students WHERE id = ${id} `;
      db.query(sql, (err, results) => {
        const [student] = results;
        resolve(student);
      });
    });
  }

  static async update(id, student) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [student, id], (err, results) => {
        resolve(results);
      });
    });

    const studentData = await this.show(id);
    return studentData;
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

// Export Model
module.exports = Student;