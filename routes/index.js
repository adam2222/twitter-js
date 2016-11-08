

var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var path = require('path')

router.get('/', function (req, res) {
  console.log(__dirname);
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// router.get('/style', function (req, res) {
//   res.sendFile(path.join(__dirname, '..', 'public', 'stylesheets', 'style.css'));
// })

router.use(express.static('../public'))


module.exports = router;
