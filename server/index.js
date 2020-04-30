const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const PORT = 4200;
let app = express();

app.use(express.static(__dirname + '/../public'))

app.get('/populate', (req, res) => {
  db.populateDatabase();
  res.send('Successfully added dummy data to database Shmetsy')
})





app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})