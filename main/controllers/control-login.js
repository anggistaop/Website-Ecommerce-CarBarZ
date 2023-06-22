const db = require("../configs/database");
const session = require("express-session");

module.exports = {
  login(req, res) {
    res.render("login", {
      url: "http://localhost:5051/",
      colorFlash: req.flash("color"),
      statusFlash: req.flash("status"),
      pesanFlash: req.flash("message"),
    });
  },
  loginAuth(req, res) {
    let email = req.body.email;
    let password = req.body.pass;
    if (email && password) {
      db.query(
        `SELECT * FROM login WHERE email = '${email}' AND password = SHA2('${password}',512)`,
          function (error, results) {
            if (error) throw error;
            if (results.length > 0) {
              console.log(results[0].status);
              if (results[0].status == "admin") {
                req.session.loggedin = true;
                req.session.userid = results[0].user_id;
                req.session.username = results[0].user_name;
                res.redirect("/admin");
              } else {
                req.session.loggedin = true;
                req.session.userid = results[0].user_id;
                req.session.username = results[0].user_name;
                res.redirect("/");
              }
            } else {
              req.flash("color", "danger");
              req.flash("status", "Oops..");
              req.flash("message", "Akun tidak ditemukan");
              res.redirect("/login");
            }
          }
      );
    } else {
      res.redirect("/login");
      res.end();
    }
  },
  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        return console.log(err);
      }
      res.clearCookie("secretname");
      res.redirect("/login");
    });
  },
};
