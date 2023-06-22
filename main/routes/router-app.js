const router = require("express").Router();
const homeController = require("../controllers").home;
const adminController = require("../controllers").admin;
const verifyUser = require("../configs/verify");


router.get("/", verifyUser.isLogin, homeController.home);
router.get("/admin", verifyUser.isLogin, adminController.formAdmin);

router.get("/listmobil", adminController.daftarMobil);
router.post("/listmobil/save", adminController.addDataMobil);
router.post("/listmobil/edit", adminController.editDataMobil);
router.post("/listmobil/delete", adminController.deleteDataMobil);

// router.get("/input", (req, res) => {
//   res.render("input", { url: "http://localhost:5051/" });
// });
// router.post("/input/save", adminController.inputMobil);

module.exports = router;
