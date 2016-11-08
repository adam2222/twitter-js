'use strict';
const volleyball = require('./volleyball');
const express = require ('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes/');

nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

// ******************//

app.use('/', routes);

app.use(express.static('public'));


app.use(volleyball);
//
// app.use('/special', (req, res, next) => {
//   console.log('You found it!')
// });

// app.use('/', (req, res, next) => {
//   let msg = req.method;
//   let path = req.path;
//   res.send(res.statusCode)
//   console.log(`Method: ${msg}, Path: ${path}`);
//   // res.send(`Method: ${msg}, Path: ${path}`);
//   next();
// });




// app.all('/', (req, res, next) => {
//   var people = [{name: 'Full'}, {name: 'Jimmy'}, {name: 'Adam'}];
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// });

//

//
//
// app.get('/', (req, res, next) => {
//   res.send("Here's our response.")
// });
//
// app.get('/news', (req, res, next) => {
//   res.send("Hot off the press")
// });



app.listen(3000, (req, res) => {
  console.log("Server listening...");
});


// ************************************


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});

nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});
