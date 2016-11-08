

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

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweetList = tweetBank.find( {name: name} );

  // console.log(tweetBank.list( ))
  res.render( 'index', { tweets: tweetList } );
});

router.get('/tweets/:id', function(req, res) {
	var id = Number(req.params.id);
	var tweet = tweetBank.find( {id: id});
	// console.log(tweetBank.list())
	// console.log(tweet)
	console.log(id)
	res.render( 'index', { tweets: tweet});
})


router.use(express.static('../public'))


module.exports = router;

