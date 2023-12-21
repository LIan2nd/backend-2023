// Membuat Class StudentController
class StudentController {
  index(req, res) {
    const data = {
      message: "Menampilkan semua students",
      data: [],
    };

    res.json(data);
  }

  store(req, res) {
    const { name } = req.body;
    const data = {
      message: `Menambahkan data student: ${name}`,
      data: [],
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const data = {
      message: `Mengedit student id ${id}, nama ${name}`,
      data: [],
    };
    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;
    const data = {
      message: `Menghapus student id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

const object = new StudentController();
module.exports = object;