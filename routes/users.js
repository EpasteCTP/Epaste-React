var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.json({"user":1},{"user": 2},{"user": 3});
});

module.exports = router;
