const express =require('express');
const router = express.Router();

router.post("/signup", require('./userSignupPOST'));
router.post("/login", require('./userLoginPOST'));
router.get("/profile/:id", require("./userProfileGET"));
router.put("/:id", require('./userUpdatePUT'));
router.delete("/:id", require('./userDeleteDELETE'));
module.exports = router;