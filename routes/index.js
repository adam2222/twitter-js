

var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');


router.all('/stylesheets/', function(req, res) {
  res.sendFile('style.css');
});

router.get('/', function (req, res) {
  // res.send('hey');
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});



module.exports = router;
