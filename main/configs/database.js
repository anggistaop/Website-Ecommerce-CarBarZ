const mysql = require('mysql');

// Konfigurasi koneksi nodejs ke mysql
let dbCon = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    user: "root",
    password: "",
    database: "db-web-fp",
});

// Membuat koneksi nodejs ke mysql
dbCon.connect((err) => {
  if (err) {
    console.log('koneksi nodejs ke mysql gagal', err);
  } else {
    console.log('koneksi nodejs ke mysql berhasil');
  }
});

module.exports = dbCon;
