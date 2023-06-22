const db = require("../configs/database");

module.exports = {
  formRegister(req, res) {
    res.render("register", {
      url: "http://localhost:5051/",
    });
  },
  saveRegister(req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.pass;
    if (username && email && password) {
      db.query(
        `INSERT INTO login (name, email, password) VALUES ('${username}','${email}',SHA2('${password}',512));`,
        function (error, results) {
          if (error) throw error;
          req.flash("color", "success");
          req.flash("status", "Yes..");
          req.flash("message", "Registrasi berhasil");
          res.redirect("/login");
        }
      );
    } else {
      res.redirect("/login");
      res.end();
    }
  },
};
