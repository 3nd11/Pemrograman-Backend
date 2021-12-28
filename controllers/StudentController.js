// TODO 3: Import data students dari folder data/students.js
const dataStudents = require("../data/students");

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    const data = {
      message: "Menampilkan semua students",
      data: dataStudents,
    };

    res.json(data);
  }

  store(req, res) {
    const { nama } = req.body;
    // TODO 5: Tambahkan data students
    dataStudents.push(nama);

    const data = {
      message: `Menambahkan data student: ${nama}`,
      data: dataStudents,
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    // TODO 6: Update data students
    dataStudents[id] = nama;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: dataStudents,
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    // TODO 7: Hapus data students
    dataStudents.splice(1, id);

    const data = {
      message: `Menghapus student id ${id}`,
      data: dataStudents,
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
