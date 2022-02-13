const express =require('express');
const { checkUser } = require('../../../middlewares/auth');
const router = express.Router();

router.get("/", require('./postListGET'));
router.get("/:postId", checkUser, require('./postGET'));
router.put("/:postId", require('./postPUT'));
router.delete("/:postId", require('./postDELETE'));
router.post("/", require('./postPOST'));

module.exports = router;