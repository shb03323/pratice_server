const express =require('express');
const router = express.Router();

router.get("/", require('./postAllGET'));
router.get("/:id", require('./postGET'));
router.post("/", require('./postPOST'));
router.put("/:id", require('./postPUT'));
router.delete("/:id", require('./postDELETE'));

module.exports = router;