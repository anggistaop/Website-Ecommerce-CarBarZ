const db = require("../configs/database");

module.exports = {
  formAdmin(req, res) {
    res.render("admin", {
      url: "http://localhost:5051/",
    });
  },
  daftarMobil(req, res) {
    var list = "SELECT * FROM product ORDER BY id ASC";
    db.query(list, (error, data) => {
      const dataMobil = JSON.parse(JSON.stringify(data));
      res.render("listmobil", {
        title: "Daftar Mobil",
        action: "list",
        dataMobil: dataMobil,
        url: "http://localhost:5051/",
      });
    });
  },
  inputMobil(req, res) {
    let tipe = req.body.tipe;
    let harga = req.body.harga;
    let img = req.body.picture;
    if (tipe && harga && img) {
      db.query(
        `INSERT INTO stock (tipe_mobil, harga, picture) VALUES ('${tipe}','${harga}','${img}');`,
        function (error, results) {
          if (error) throw error;
          req.flash("color", "success");
          req.flash("status", "Mantap..");
          req.flash("message", "Data mobil berhasil diinputkan");
          res.redirect("/input");
        }
      );
    } else {
      res.redirect("/admin");
      res.end();
    }
  },
  addDataMobil(req, res) {
    var tipe = req.body.tipe_mobil;
    var harga = req.body.harga;
    var query = `INSERT INTO product (tipe_mobil, harga) VALUES ('${tipe}','${harga}');`;
    if (tipe && harga) {
      db.query(query, function (error, results) {
        if (error) throw error;
        req.flash("message", "Data Berhasil Dimasukkan");
        res.redirect("/listmobil");
      });
    } else {
      res.redirect("/listmobil");
      res.end();
    }
  },
  editDataMobil(req, res) {
    var id = req.body.id;
    var tipe = req.body.tipe_mobil;
    var harga = req.body.harga;
    var query = `
    UPDATE product 
    SET tipe_mobil = "${tipe}", 
    harga = "${harga}" 
    WHERE id = "${id}"
    `;
    if (tipe && harga) {
      db.query(query, function (error, results) {
        if (error) throw error;
        req.flash("message", "Data Berhasil Diubah");
        res.redirect("/listmobil");
      });
    } else {
      res.redirect("/listmobil");
      res.end();
    }
  },
  deleteDataMobil(req, res) {
    var id = req.body.id;
    var query = `DELETE FROM product WHERE id = "${id}"`;
    if (id) {
      db.query(query, function (error, results) {
        if (error) throw error;
        req.flash("message", "Data Berhasil Dihapus");
        res.redirect("/listmobil");
      });
    } else {
      res.redirect("/listmobil");
      res.end();
    }
  },
};
