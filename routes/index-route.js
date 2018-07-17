var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  cosole.log(req.body);
  res.end();
});

module.exports = router;
