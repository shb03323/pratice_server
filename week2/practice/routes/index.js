var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/api", require("./api"));
router.use("/blog", require("./blog"));

router.use("/api/blog", require("./api/blog"));
router.use("/api/users", require("./api/users"));

module.exports = router;
