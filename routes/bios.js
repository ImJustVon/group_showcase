var express = require('express');
var router = express.Router();
var groupMembers = [
  { name: 'Elisa', bio: 'I <3 cats!', picUrl: './assets/images/profile.jpg' },
  { name: 'Laura', bio: 'Goonies never say die!', picUrl: './assets/images/glamour!.jpeg' },
  { name: 'Vaughn', bio: 'Bikes!', picUrl: './assets/images/Vaughn Prosser 2.jpg' },
];

router.get('/', function (req, res) {
  res.send(groupMembers);
});

module.exports = router;
