// Definisi Library yang digunakan
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const flash = require("req-flash");
const app = express();

// Definisi lokasi file router
const loginRoutes = require("./main/routes/router-login");
const registerRoutes = require("./main/routes/router-register");
const appRoutes = require("./main/routes/router-app");
const adminRoutes = require("./main/routes/router-admin");

// Configurasi library session
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: "katoumegumi",
    name: "siapa y",
    cookie: {
      sameSite: true,
    },
  })
);

// Configurasi dan gunakan library
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());

app.use(function (req, res, next) {
  res.setHeader(
    "Cache-Control",
    "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );
  res.setHeader("Pragma", "no-cache");
  next();
});

// ststic file
app.use(express.static("assets"));
app.use("/img", express.static(__dirname + "assets/img"));
app.use("/css", express.static(__dirname + "assets/css"));
app.use("/js", express.static(__dirname + "assets/js"));
app.use("/vendor", express.static(__dirname + "assets/vendor"));

// Setting folder views
app.set("views", path.join(__dirname, "main/views"));
app.set("view engine", "ejs");

// Gunakan routes yang telah didefinisikan
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use("/admin", adminRoutes);
app.use("/", appRoutes);

// Gunakan port server
app.listen(5051, () => {
  console.log("Server Berjalan di Port : " + 5051);
});
