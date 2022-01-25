// import Model Student
const Covid = require("../models/Covid");

class CovidController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const patients = await Covid.all();

    const data = {
      message: "Menampilkkan semua students",
      data: patients,
    };

    res.json(data);
  }

  async store(req, res) {
    // Method create mengembalikan data yang baru diinsert.
    // Mengembalikan response dalam bentuk json.

    const patients = await Covid.create(req.body);

    const data = {
      message: "Menambahkan data Patients",
      data: patients,
    };

    res.status(200).json(data)
  }

  async show(req, res) {
    const { id } = req.params;

    // cari student berdasarkan id
    const patients = await Covid.find(id);

    if (patients ) {
      const data = {
        message: `Menampilkan detail patients berdasarkan id`,
        data: patients,
      };

      res.status(200).json(data);
    } else {
        const fail = {
            message: `Patient dengan id ${id} not found`,
        };
      
        res.status(404).json(fail);
    }
  }

  async update(req, res) {
    const { id } = req.params;

    // cari id patients yang ingin di update
    const patients = await Covid.find(id);

    if (patients) {
      // melakukan update data
      const patients = await Covid.update(id, req.body);
      const data = {
        message: `Mengedit patients id ${id}`,
        data: patients,
      };

      res.status(200).json(data);
    } else {
        const fail = {
            message: `Patients dengan id ${id} not found`,
        };
        res.status(404).json(fail);
    }

  }

  async destroy(req, res) {
    const { id } = req.params;
    const patients = await Covid.find(id);

    if (patients) {
      // melakukan delete data
      await Covid.delete(id);
      const data = {
        message: `Menghapus patients id ${id}`,
      };

      res.status(200).json(data);
    } else {
        const fail = {
            message: `Patitens dengan id ${id} not found`,
        };
        res.status(404).json(fail);
    }
    
  }

  async search(req, res) {
    const {name} = req.params;

    // cari student berdasarkan Nama
    const patients = await Covid.search(name);

    if (patients) {
      const data = {
        message: `Menampilkan detail patients berdasarkan id`,
        data: patients,
      };

      res.status(200).json(data);
    } else {
        const fail = {
            message: `Patients dengan nama ${name} not found`,
        };
        res.status(404).json(fail);
    }
  }
  
  async recovered(req, res) {
    // memanggil method static all dengan async await.
    const patients = await Covid.recovered();

    if (patients.length > 0) {
      const data = {
        message: "Menampilkkan semua patients status recovered",
        data: patients,
      };

      res.status(200).json(data)
    } else {
      const fail = {
        message: "Tidak ada patients berstatus status recovered"
      };

      res.status(404).json(fail)
    }
  }
  
  async positive(req, res) {
    // memanggil method static all dengan async await.
    const patients = await Covid.positive();

    if (patients.length > 0) {
      const data = {
        message: "Menampilkkan semua patients status positive",
        data: patients,
      };

      res.status(200).json(data)
    } else {
      const fail = {
        message: "Tidak ada patients berstatus status positive"
      };

      res.status(404).json(fail)
    }
  }

  async dead(req, res) {
    // memanggil method static all dengan async await.
    const patients = await Covid.dead();

    if ( patients.length > 0) {
      const data = {
        message: "Menampilkkan semua patients status dead",
        data: patients,
      };

      res.status(200).json(data)
    } else {
      const fail = {
        message: "Tidak ada patients berstatus status dead"
      };

      res.status(404).json(fail);
    }
  }

}


// Membuat object StudentController
const object = new CovidController();

// Export object StudentController
module.exports = object;
