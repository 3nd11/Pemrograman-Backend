// import database
const db = require("../config/database");

// membuat class Model Covid
class Covid {
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients";
      db.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO patients SET ? ";
      db.query(sql, data, (err, results) => {
        if (err) reject(err);
        resolve(results.insertId);
      });
    });
  }

// Mencari id, bisa digunakan untuk method show, update dan destroy
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        if (err) reject(err);
        const [patients] = results;
        resolve(patients);
      });
    });
  }

// Mencari Nama Patients
  static search(name) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE name like ?";
      db.query(sql, "%" + name + "%", (err, results) => {
        const [patients] = results;
        resolve(patients);
      });
    });
  }

  // Mengupdate data patients
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE patients SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });

  // Mencari data yang baru di update
    const patients = await this.find(id);
    return patients;
  }

  // menghapus data dari database
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

// Melihat Semua Status Dari Patient Recovered
  static recovered() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE status = 'recovered'";
      db.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
  // Melihat Semua Status Dari Patient Positive
  static positive() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE status = 'positive'";
      db.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  // Melihat Semua Status Dari Patient Dead
  static dead() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE status = 'dead'";
      db.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

}


// export class Covid
module.exports = Covid;
