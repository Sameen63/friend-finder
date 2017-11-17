var express = require('express');
var router = express.Router();

var start = {root: __dirname + "/.."};

router.get('/', function (req, res) {
  res.sendFile("/public/home.html", start);
});

router.get('/survey', function (req, res) {
  res.sendFile("/public/survey.html", start);
});

module.exports = router;