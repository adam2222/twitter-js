'use strict';
const volleyball = require('./volleyball');

const express = require ('express');
const app = express();

app.use(volleyball);

app.use('/', (req, res, next) => {
	let msg = req.method;
	let path = req.path;
	res.send(res.statusCode)
	console.log(`Method: ${msg}, Path: ${path}`);
	// res.send(`Method: ${msg}, Path: ${path}`);
	next();
})

app.use('/special', (req, res, next) => {
	console.log('You found it!')
})


app.get('/', (req, res, next) => {
  res.send("Here's our response.")
});

app.get('/news', (req, res, next) => {
  res.send("Hot off the press")
});



app.listen(3000, (req, res) => {
  console.log("Server listening...");
});
