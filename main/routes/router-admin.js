const router = require("express").Router();
const adminController = require("../controllers").admin;
const verifyUser = require("../configs/verify");

router.get("/admin", verifyUser.isLogin, adminController.formAdmin);
router.get("/listmobil", adminController.daftarMobil);
router.post("/listmobil/save", adminController.addDataMobil);
router.post("/listmobil/edit", adminController.editDataMobil);
router.get("/listmobil/delete", adminController.deleteDataMobil);

module.exports = router;
