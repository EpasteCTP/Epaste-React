var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.json([
  	{id: 1, username: "guy1"},
  	{id: 2, username: "guy2"}
  	]);
});

module.exports = router;
