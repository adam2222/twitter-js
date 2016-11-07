const express = require ('express');
const app = express();



app.get('/', (req, res, next) => {
  res.send("Here's our response.")
});

app.get('/news', (req, res, next) => {
  res.send("Hot off the press")
});



app.listen(3000, (req, res) => {
  console.log("Server listening...");
});
