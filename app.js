const express = require ('express');
const app = express();


app.listen(3000, (req, res) => {
  console.log("Server listening...");
});

app.get('/', (req, res, next) => {
  res.send("Here's our response.")
});
