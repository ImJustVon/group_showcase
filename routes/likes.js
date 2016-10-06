var express = require('express');
var router = express.Router();

var likes = { Elisa: 0, Laura: 0, Vaughn: 0 };

router.get('/', function (req, res) {
  // console.log('likes.js works!');
  res.send(likes);

});

router.post('/', function (req, res) {
  console.log(req);
  likes.req++;
  console.log(likes);
  res.sendStatus(200);
});

module.exports = router;
